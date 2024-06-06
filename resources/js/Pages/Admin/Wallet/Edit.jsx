import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Icon,
    Input,
    Select,
    Text,
} from "@chakra-ui/react";
import { ArrowLeftIcon, BookmarkIcon } from "@heroicons/react/16/solid";
import AdminLayout from "../../../Layouts/AdminLayout ";

const EditWallet = ({ auth, sessions, wallet }) => {
    const { data, setData, put, processing, errors } = useForm({
        nama_bank: wallet.nama_bank,
        nama_akun: wallet.nama_akun,
        nomor_rekening: wallet.nomor_rekening,
    });

    const submit = (e) => {
        e.preventDefault();
        put(`/admin/wallet/${wallet.uuid}`);
    };

    const bankOptions = [
        { value: "BCA", label: "BCA" },
        { value: "BNI", label: "BNI" },
        { value: "BRI", label: "BRI" },
        { value: "Mandiri", label: "Mandiri" },
        { value: "CIMB", label: "CIMB" },
        { value: "Niaga", label: "Niaga" },
        { value: "Danamon", label: "Danamon" },
        { value: "Permata", label: "Permata" },
        { value: "BSI", label: "BSI" },
    ];

    const ewalletOptions = [
        { value: "Dana", label: "Dana" },
        { value: "OVO", label: "OVO" },
        { value: "Go-Pay", label: "Go-Pay" },
    ];

    const combinedOptions = [...bankOptions, ...ewalletOptions];
    return (
        <AdminLayout auth={auth} sessions={sessions}>
            <Head title="Edit Wallet" />
            <Card maxW={"xl"} w="full" p={2} h={"auto"}>
                <CardHeader pb={0}>
                    <Heading size="md" fontWeight="bold">
                        Edit Wallet
                    </Heading>
                </CardHeader>
                <form onSubmit={submit}>
                    <CardBody pb={0}>
                        <FormControl mb={3} isInvalid={errors.nama_bank}>
                            <FormLabel htmlFor="nama_bank" fontSize={"sm"}>
                                Nama Bank
                                <Text display={"inline"} color="red">
                                    *
                                </Text>
                            </FormLabel>
                            <Select
                                type="text"
                                id="nama_bank"
                                value={data.nama_bank}
                                onChange={(e) =>
                                    setData("nama_bank", e.target.value)
                                }
                            >
                                <option value="">Pilih Bank</option>
                                {combinedOptions.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </Select>
                            {errors.nama_bank && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.nama_bank}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl mb={3} isInvalid={errors.nama_akun}>
                            <FormLabel htmlFor="nama_akun" fontSize={"sm"}>
                                Nama Akun
                                <Text display={"inline"} color="red">
                                    *
                                </Text>
                            </FormLabel>
                            <Input
                                type="text"
                                id="nama_akun"
                                value={data.nama_akun}
                                onChange={(e) =>
                                    setData("nama_akun", e.target.value)
                                }
                            />
                            {errors.nama_akun && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.nama_akun}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl mb={3} isInvalid={errors.nomor_rekening}>
                            <FormLabel htmlFor="nomor_rekening" fontSize={"sm"}>
                                Nomor Rekening
                                <Text display={"inline"} color="red">
                                    *
                                </Text>
                            </FormLabel>
                            <Input
                                type="number"
                                id="nomor_rekening"
                                value={data.nomor_rekening}
                                onChange={(e) =>
                                    setData("nomor_rekening", e.target.value)
                                }
                            />
                            {errors.nomor_rekening && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.nomor_rekening}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                    </CardBody>
                    <CardFooter>
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
                            href={"/admin/wallet"}
                            colorScheme="gray"
                            ml={3}
                        >
                            <Icon as={ArrowLeftIcon} mr={2} />
                            Kembali
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </AdminLayout>
    );
};

export default EditWallet;