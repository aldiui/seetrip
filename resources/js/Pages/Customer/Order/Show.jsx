import React, { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import AppLayout from "../../../Layouts/AppLayout";
import {
    Badge,
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Icon,
    Image,
    Input,
    Select,
    SimpleGrid,
    Text,
    VStack,
    useToast,
} from "@chakra-ui/react";
import { BookmarkIcon } from "@heroicons/react/16/solid";
import { useDropzone } from "react-dropzone";

const ShowOrder = ({ auth, sessions, order, pembayaran }) => {
    const toast = useToast();
    const [preview, setPreview] = useState(null);
    const { data, setData, post, processing, errors } = useForm({
        _method: "put",
        pembayaran: "",
        bukti_bayar: "",
        nama_pengirim: "",
    });
    const [selectedPembayaran, setSelectedPembayaran] = useState(null);

    const formatRupiah = (nilai) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(nilai);
    };

    const handlePembayaranChange = (e) => {
        const selectedUuid = e.target.value;
        setData("pembayaran", selectedUuid);

        const selectedOption = pembayaran.find(
            (option) => option.uuid === selectedUuid
        );
        setSelectedPembayaran(selectedOption);
    };

    const submit = (e) => {
        e.preventDefault();
        post(`/order/${order.nomor_pemesanan}`);
    };

    const onDrop = (acceptedFiles, fileRejections) => {
        if (fileRejections.length > 0) {
            fileRejections.forEach((file) => {
                file.errors.forEach((err) => {
                    if (err.code === "file-too-large") {
                        toast({
                            title: "Error",
                            status: "error",
                            description: "File is too large",
                            duration: 3000,
                            isClosable: true,
                            position: "top-right",
                        });
                    } else if (err.code === "file-invalid-type") {
                        toast({
                            title: "Error",
                            status: "error",
                            description: "File is invalid type",
                            duration: 3000,
                            isClosable: true,
                            position: "top-right",
                        });
                    }
                });
            });
            setPreview(null);
            return;
        }

        const file = acceptedFiles[0];
        if (file) {
            setData("bukti_bayar", file);

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: "image/jpg,image/jpeg,image/png",
        maxSize: 10 * 1024 * 1024,
        multiple: false,
    });

    return (
        <AppLayout auth={auth} sessions={sessions}>
            <Head title="Detail Order" />
            <VStack
                maxW={"container.xl"}
                mt={"80px"}
                px={6}
                py={10}
                w="full"
                h={["auto", "full"]}
            >
                <Card p={2} maxW={"xl"} w="full" shadow={"md"}>
                    <CardHeader>
                        <Heading
                            size="md"
                            fontWeight="bold"
                            textAlign={"center"}
                        >
                            Detail Order
                        </Heading>
                    </CardHeader>
                    <CardBody>
                        <SimpleGrid mb={2} gap={2} columns={2}>
                            <Text>Nomor Pemesanan</Text>
                            <Text>{order.nomor_pemesanan}</Text>
                            <Text>Destinasi Wisata</Text>
                            <Text>
                                {order.destination_price.destination.nama}
                            </Text>
                            <Text>Paket Wisata</Text>
                            <Text>{order.destination_price.nama}</Text>
                            <Text>Kuantitas</Text>
                            <Text>{order.quantitas} Orang</Text>
                            <Text>Total</Text>
                            <Text>{order.total_custom} </Text>
                        </SimpleGrid>
                        {order.wallet_id && (
                            <SimpleGrid mb={5} gap={2} columns={2}>
                                <Text>Nama Akun</Text>
                                <Text>{order.wallet.nama_akun}</Text>
                                <Text>Nomor Rekening</Text>
                                <Text>{order.wallet.nomor_rekening}</Text>
                                <Text>Nama Bank</Text>
                                <Text>{order.wallet.nama_bank}</Text>
                                <Text>Status</Text>
                                <Text>
                                    {" "}
                                    <div>
                                        {!order.wallet_id &&
                                            order.status == 0 && (
                                                <Badge
                                                    colorScheme="red"
                                                    variant="solid"
                                                >
                                                    Belum Bayar
                                                </Badge>
                                            )}
                                        {order.wallet_id &&
                                            order.status == 0 && (
                                                <Badge
                                                    colorScheme="yellow"
                                                    variant="solid"
                                                >
                                                    Pending
                                                </Badge>
                                            )}
                                        {order.wallet_id &&
                                            order.status == 1 && (
                                                <Badge
                                                    colorScheme="green"
                                                    variant="solid"
                                                >
                                                    Sukses
                                                </Badge>
                                            )}
                                        {order.wallet_id &&
                                            order.status == 2 && (
                                                <Badge
                                                    colorScheme="red"
                                                    variant="solid"
                                                >
                                                    Gagal
                                                </Badge>
                                            )}
                                    </div>
                                </Text>
                            </SimpleGrid>
                        )}
                        {!order.wallet_id && (
                            <form onSubmit={submit}>
                                <FormControl
                                    mb={5}
                                    isInvalid={errors.pembayaran}
                                >
                                    <FormLabel
                                        htmlFor="pembayaran"
                                        fontSize={"sm"}
                                    >
                                        Pembayaran
                                        <Text display={"inline"} color="red">
                                            *
                                        </Text>
                                    </FormLabel>
                                    <Select
                                        id="pembayaran"
                                        value={data.pembayaran}
                                        onChange={handlePembayaranChange}
                                    >
                                        <option value="">
                                            Pilih pembayaran
                                        </option>
                                        {pembayaran.map((option) => (
                                            <option
                                                key={option.uuid}
                                                value={option.uuid}
                                            >
                                                {option.nama_bank} -{" "}
                                                {option.nama_akun}
                                            </option>
                                        ))}
                                    </Select>
                                    {errors.pembayaran && (
                                        <FormErrorMessage fontSize={"xs"}>
                                            {errors.pembayaran}
                                        </FormErrorMessage>
                                    )}
                                </FormControl>
                                {selectedPembayaran && (
                                    <SimpleGrid mb={5} gap={2} columns={2}>
                                        <Text>Nama Akun</Text>
                                        <Text>
                                            {selectedPembayaran.nama_akun}
                                        </Text>
                                        <Text>Nomor Rekening</Text>
                                        <Text>
                                            {selectedPembayaran.nomor_rekening}
                                        </Text>
                                        <Text>Nama Bank</Text>
                                        <Text>
                                            {selectedPembayaran.nama_bank}
                                        </Text>
                                    </SimpleGrid>
                                )}

                                <FormControl
                                    mb={3}
                                    isInvalid={errors.bukti_bayar}
                                >
                                    <FormLabel
                                        htmlFor="bukti_bayar"
                                        fontSize={"sm"}
                                    >
                                        Bukti Bayar
                                        <Text display={"inline"} color="red">
                                            *
                                        </Text>
                                    </FormLabel>
                                    <Box
                                        {...getRootProps()}
                                        border="2px dashed"
                                        borderColor={
                                            isDragActive
                                                ? "blue.300"
                                                : "gray.300"
                                        }
                                        borderRadius="md"
                                        p={10}
                                        textAlign="center"
                                    >
                                        <Input {...getInputProps()} />
                                        {isDragActive ? (
                                            <Text>Drop the files here ...</Text>
                                        ) : (
                                            <Text>
                                                Drag 'n' drop some files here,
                                                or click to select files
                                            </Text>
                                        )}
                                        {preview && (
                                            <Image
                                                src={preview}
                                                alt="Preview"
                                                mt={4}
                                                borderRadius="md"
                                                boxSize="200px"
                                                objectFit="cover"
                                            />
                                        )}
                                    </Box>
                                    {errors.bukti_bayar && (
                                        <FormErrorMessage fontSize={"xs"}>
                                            {errors.bukti_bayar}
                                        </FormErrorMessage>
                                    )}
                                </FormControl>
                                <FormControl
                                    mb={3}
                                    isInvalid={errors.nama_pengirim}
                                >
                                    <FormLabel
                                        htmlFor="nama_pengirim"
                                        fontSize={"sm"}
                                    >
                                        Nama Pengirim
                                        <Text display={"inline"} color="red">
                                            *
                                        </Text>
                                    </FormLabel>
                                    <Input
                                        type="text"
                                        id="nama_pengirim"
                                        value={data.nama_pengirim}
                                        onChange={(e) =>
                                            setData(
                                                "nama_pengirim",
                                                e.target.value
                                            )
                                        }
                                    />
                                    {errors.nama_pengirim && (
                                        <FormErrorMessage fontSize={"xs"}>
                                            {errors.nama_pengirim}
                                        </FormErrorMessage>
                                    )}
                                </FormControl>
                                <Button
                                    type="submit"
                                    colorScheme="blue"
                                    isLoading={processing}
                                    loadingText="Simpan"
                                >
                                    <Icon as={BookmarkIcon} mr={2} />
                                    Simpan
                                </Button>
                            </form>
                        )}
                    </CardBody>
                </Card>
            </VStack>
        </AppLayout>
    );
};

export default ShowOrder;
