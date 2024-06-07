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
    Input,
    Select,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import { ArrowLeftIcon, BookmarkIcon } from "@heroicons/react/16/solid";

const ShowWithdraw = ({ auth, sessions, withdraw }) => {
    const { data, setData, put, processing, errors } = useForm({
        status: "",
        biaya_admin: "",
    });

    const submit = (e) => {
        e.preventDefault();
        put(`/admin/withdraw/${withdraw.nomor_pembayaran}`);
    };
    return (
        <AdminLayout auth={auth} sessions={sessions}>
            <Head title="Detail Transaksi" />
            <Card maxW={"xl"} w="full" p={2} h={"auto"}>
                <CardHeader pb={0}>
                    <Heading size="md" fontWeight="bold">
                        Detail Transaki
                    </Heading>
                </CardHeader>
                <CardBody>
                    <SimpleGrid mb={2} gap={2} columns={2}>
                        <Text>Nomor Pemesanan</Text>
                        <Text>{withdraw.nomor_pembayaran}</Text>
                        <Text>Tanggal</Text>
                        <Text>{withdraw.tanggal}</Text>
                        <Text>User</Text>
                        <Text>{withdraw.user.nama}</Text>
                    </SimpleGrid>
                    <SimpleGrid mb={2} gap={2} columns={2}>
                        <Text>Nama Akun</Text>
                        <Text>{withdraw.wallet.nama_akun}</Text>
                        <Text>Nomor Rekening</Text>
                        <Text>{withdraw.wallet.nomor_rekening}</Text>
                        <Text>Nama Bank</Text>
                        <Text>{withdraw.wallet.nama_bank}</Text>
                    </SimpleGrid>
                    <SimpleGrid mb={2} gap={2} columns={2}>
                        <Text>Status</Text>
                        <Text>
                            {" "}
                            <div>
                                {withdraw.status == 0 && (
                                    <Badge colorScheme="yellow" variant="solid">
                                        Pending
                                    </Badge>
                                )}
                                {withdraw.status == 1 && (
                                    <Badge colorScheme="green" variant="solid">
                                        Sukses
                                    </Badge>
                                )}
                            </div>
                        </Text>
                        <Text>Nominal</Text>
                        <Text>{withdraw.nominal_custom}</Text>
                        <Text>Biaya Admin</Text>
                        <Text>{withdraw.admin_custom}</Text>
                    </SimpleGrid>
                    {withdraw.status != 1 && (
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
                                    <option value="0">Pending</option>
                                </Select>
                                {errors.status && (
                                    <FormErrorMessage fontSize={"xs"}>
                                        {errors.status}
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                            <FormControl mb={3} isInvalid={errors.biaya_admin}>
                                <FormLabel
                                    htmlFor="biaya_admin"
                                    fontSize={"sm"}
                                >
                                    Biaya Admin
                                    <Text display={"inline"} color="red">
                                        *
                                    </Text>
                                </FormLabel>
                                <Input
                                    type="number"
                                    id="biaya_admin"
                                    value={data.biaya_admin}
                                    onChange={(e) =>
                                        setData("biaya_admin", e.target.value)
                                    }
                                />
                                {errors.biaya_admin && (
                                    <FormErrorMessage fontSize={"xs"}>
                                        {errors.biaya_admin}
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
                                href={"/admin/withdraw"}
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

export default ShowWithdraw;
