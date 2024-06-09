import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AdminLayout from "../../../Layouts/AdminLayout ";
import {
    Badge,
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
    Select,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import { ArrowLeftIcon, BookmarkIcon } from "@heroicons/react/16/solid";

const ShowDestination = ({ auth, sessions, transaction }) => {
    const { data, setData, put, processing, errors } = useForm({
        status: "",
    });

    const submit = (e) => {
        e.preventDefault();
        put(`/user/transaction/${transaction.nomor_pemesanan}`);
    };
    return (
        <AdminLayout auth={auth} sessions={sessions}>
            <Head title="Detail Transaksi" />
            <Card maxW={"xl"} w="full" p={2} h={"auto"}>
                <CardHeader pb={0}>
                    <Heading size="md" fontWeight="bold">
                        Detail Transaksi
                    </Heading>
                </CardHeader>
                <CardBody>
                    <SimpleGrid mb={2} gap={2} columns={2}>
                        <Text>Nomor Pemesanan</Text>
                        <Text>{transaction.nomor_pemesanan}</Text>
                        <Text>Tanggal</Text>
                        <Text>{transaction.tanggal}</Text>
                        <Text>Destinasi Wisata</Text>
                        <Text>
                            {transaction.destination_price.destination.nama}
                        </Text>
                        <Text>Paket Wisata</Text>
                        <Text>{transaction.destination_price.nama}</Text>
                        <Text>Pemilik Wisata</Text>
                        <Text>
                            {
                                transaction.destination_price.destination.user
                                    .nama
                            }
                        </Text>

                        <Text>Kuantitas</Text>
                        <Text>{transaction.quantitas} Orang</Text>
                        <Text>Total</Text>
                        <Text>{transaction.total_custom} </Text>
                    </SimpleGrid>
                    {transaction.wallet_id && (
                        <>
                            <SimpleGrid mb={2} gap={2} columns={2}>
                                <Text>Nama Akun</Text>
                                <Text>{transaction.wallet.nama_akun}</Text>
                                <Text>Nomor Rekening</Text>
                                <Text>{transaction.wallet.nomor_rekening}</Text>
                                <Text>Nama Bank</Text>
                                <Text>{transaction.wallet.nama_bank}</Text>
                                <Text>Nama Pengirim</Text>
                                <Text>{transaction.nama_pengirim}</Text>
                                <Text>Bukti Bayar</Text>
                            </SimpleGrid>
                            <Image
                                my={4}
                                w={"full"}
                                src={transaction.bukti_bayar}
                            />
                        </>
                    )}
                    <SimpleGrid mb={2} gap={2} columns={2}>
                        <Text>Status</Text>
                        <Text>
                            {" "}
                            <div>
                                {!transaction.wallet_id &&
                                    transaction.status == 0 && (
                                        <Badge
                                            colorScheme="red"
                                            variant="solid"
                                        >
                                            Belum Bayar
                                        </Badge>
                                    )}
                                {transaction.wallet_id &&
                                    transaction.status == 0 && (
                                        <Badge
                                            colorScheme="yellow"
                                            variant="solid"
                                        >
                                            Pending
                                        </Badge>
                                    )}
                                {transaction.wallet_id &&
                                    transaction.status == 1 && (
                                        <Badge
                                            colorScheme="green"
                                            variant="solid"
                                        >
                                            Sukses
                                        </Badge>
                                    )}
                                {transaction.wallet_id &&
                                    transaction.status == 2 && (
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
                    {transaction.wallet_id && transaction.status != 1 && (
                        <form onSubmit={submit} my={4}>
                            <FormControl mb={3} isInvalid={errors.status}>
                                <FormLabel htmlFor="status" fontSize={"sm"}>
                                    Status{" "}
                                    <Text display={"inline"} color="red">
                                        *
                                    </Text>
                                </FormLabel>
                                <Select
                                    type="text"
                                    id="status"
                                    value={data.status}
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                >
                                    <option value="">Pilih status</option>
                                    <option value="1">Sukses</option>
                                    <option value="2">Gagal</option>
                                </Select>
                                {errors.status && (
                                    <FormErrorMessage fontSize={"xs"}>
                                        {errors.status}
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
                            <Button
                                as={Link}
                                href={"/user/transaction"}
                                colorScheme="gray"
                                ml={3}
                            >
                                <Icon as={ArrowLeftIcon} mr={2} />
                                Kembali
                            </Button>
                        </form>
                    )}
                </CardBody>
            </Card>
        </AdminLayout>
    );
};

export default ShowDestination;
