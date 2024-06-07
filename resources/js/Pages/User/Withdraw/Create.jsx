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

const CreateWithdraw = ({ auth, sessions, wallets }) => {
    const { data, setData, post, processing, errors } = useForm({
        wallet_id: "",
        nominal: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post("/user/withdraw");
    };

    return (
        <AdminLayout auth={auth} sessions={sessions}>
            <Head title="Tambah Withdraw" />
            <Card maxW={"xl"} w="full" p={2} h={"auto"}>
                <CardHeader pb={0}>
                    <Heading size="md" fontWeight="bold">
                        Tambah Withdraw
                    </Heading>
                </CardHeader>
                <form onSubmit={submit}>
                    <CardBody pb={0}>
                        <FormControl mb={3} isInvalid={errors.wallet_id}>
                            <FormLabel htmlFor="wallet_id" fontSize={"sm"}>
                                Wallet
                                <Text display={"inline"} color="red">
                                    *
                                </Text>
                            </FormLabel>
                            <Select
                                id="wallet_id"
                                value={data.wallet_id}
                                onChange={(e) =>
                                    setData("wallet_id", e.target.value)
                                }
                            >
                                <option value="">Pilih Wallet</option>
                                {wallets.map((wallet) => (
                                    <option
                                        key={wallet.uuid}
                                        value={wallet.uuid}
                                    >
                                        {wallet.nama_bank} -{" "}
                                        {wallet.nomor_rekening}
                                    </option>
                                ))}
                            </Select>
                            {errors.wallet_id && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.wallet_id}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl mb={3} isInvalid={errors.nominal}>
                            <FormLabel htmlFor="nominal" fontSize={"sm"}>
                                Nominal
                                <Text display={"inline"} color="red">
                                    *
                                </Text>
                            </FormLabel>
                            <Input
                                type="number"
                                id="nominal"
                                value={data.nominal}
                                onChange={(e) =>
                                    setData("nominal", e.target.value)
                                }
                            />
                            {errors.nominal && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.nominal}
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
                            href={"/user/withdraw"}
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

export default CreateWithdraw;
