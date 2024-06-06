import React from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
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
    Textarea,
} from "@chakra-ui/react";
import { ArrowLeftIcon, BookmarkIcon } from "@heroicons/react/16/solid";
import AdminLayout from "../../../../Layouts/AdminLayout ";

const CreateDestinationVoucher = ({ auth, sessions }) => {
    const { url } = usePage();
    const kode = new URLSearchParams(url.split("?")[1]).get("kode");

    const { data, setData, post, processing, errors } = useForm({
        kode: "",
        deskripsi: "",
        diskon: "",
        kuota: "",
        tanggal_kadaluarsa: "",
        status: "",
        destination_id: kode,
    });

    const submit = (e) => {
        e.preventDefault();
        post("/admin/destination-voucher");
    };

    return (
        <AdminLayout auth={auth} sessions={sessions}>
            <Head title="Tambah Voucher Destinasi" />
            <Card maxW={"xl"} w="full" p={2} h={"auto"}>
                <CardHeader pb={0}>
                    <Heading size="md" fontWeight="bold">
                        Tambah Voucher Destinasi
                    </Heading>
                </CardHeader>
                <form onSubmit={submit}>
                    <CardBody pb={0}>
                        <FormControl mb={3} isInvalid={errors.kode}>
                            <FormLabel htmlFor="kode" fontSize={"sm"}>
                                Kode
                                <Text display={"inline"} color="red">
                                    *
                                </Text>
                            </FormLabel>
                            <Input
                                type="text"
                                id="kode"
                                value={data.kode}
                                onChange={(e) =>
                                    setData("kode", e.target.value)
                                }
                            />
                            {errors.kode && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.kode}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl mb={3} isInvalid={errors.deskripsi}>
                            <FormLabel htmlFor="deskripsi" fontSize={"sm"}>
                                Deskripsi
                                <Text display={"inline"} color="red">
                                    *
                                </Text>
                            </FormLabel>
                            <Textarea
                                type="text"
                                id="deskripsi"
                                value={data.deskripsi}
                                onChange={(e) =>
                                    setData("deskripsi", e.target.value)
                                }
                            ></Textarea>
                            {errors.deskripsi && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.deskripsi}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl mb={3} isInvalid={errors.diskon}>
                            <FormLabel htmlFor="diskon" fontSize={"sm"}>
                                Diskon
                                <Text display={"inline"} color="red">
                                    *
                                </Text>
                            </FormLabel>
                            <Input
                                type="number"
                                id="diskon"
                                value={data.diskon}
                                onChange={(e) =>
                                    setData("diskon", e.target.value)
                                }
                            />
                            {errors.diskon && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.diskon}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl mb={3} isInvalid={errors.kuota}>
                            <FormLabel htmlFor="kuota" fontSize={"sm"}>
                                Kuota
                                <Text display={"inline"} color="red">
                                    *
                                </Text>
                            </FormLabel>
                            <Input
                                type="number"
                                id="kuota"
                                value={data.kuota}
                                onChange={(e) =>
                                    setData("kuota", e.target.value)
                                }
                            />
                            {errors.kuota && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.kuota}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl
                            mb={3}
                            isInvalid={errors.tanggal_kadaluarsa}
                        >
                            <FormLabel
                                htmlFor="tanggal_kadaluarsa"
                                fontSize={"sm"}
                            >
                                Tanggal Kadaluarsa
                                <Text display={"inline"} color="red">
                                    *
                                </Text>
                            </FormLabel>
                            <Input
                                type="date"
                                id="tanggal_kadaluarsa"
                                value={data.tanggal_kadaluarsa}
                                onChange={(e) =>
                                    setData(
                                        "tanggal_kadaluarsa",
                                        e.target.value
                                    )
                                }
                            />
                            {errors.tanggal_kadaluarsa && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.tanggal_kadaluarsa}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl mb={3} isInvalid={errors.status}>
                            <FormLabel htmlFor="status" fontSize={"sm"}>
                                Status
                                <Text display={"inline"} color="red">
                                    *
                                </Text>
                            </FormLabel>
                            <Select
                                id="status"
                                value={data.status}
                                onChange={(e) =>
                                    setData("status", e.target.value)
                                }
                            >
                                <option value="">Pilih Status</option>
                                <option value="1">Aktif</option>
                                <option value="0">Tidak Aktif</option>
                            </Select>
                            {errors.status && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.status}
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
                            href={"/admin/destination/" + kode}
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

export default CreateDestinationVoucher;
