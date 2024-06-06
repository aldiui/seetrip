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
} from "@chakra-ui/react";
import { ArrowLeftIcon, BookmarkIcon } from "@heroicons/react/16/solid";
import AdminLayout from "../../../../Layouts/AdminLayout ";

const CreateDestinationFacility = ({ auth, sessions }) => {
    const { url } = usePage();
    const kode = new URLSearchParams(url.split("?")[1]).get("kode");

    const { data, setData, post, processing, errors } = useForm({
        tipe: "",
        nama: "",
        destination_id: kode,
    });

    const submit = (e) => {
        e.preventDefault();
        post("/admin/destination-facility");
    };

    return (
        <AdminLayout auth={auth} sessions={sessions}>
            <Head title="Tambah Fasilitas Destinasi" />
            <Card maxW={"xl"} w="full" p={2} h={"auto"}>
                <CardHeader pb={0}>
                    <Heading size="md" fontWeight="bold">
                        Tambah Fasilitas Destinasi
                    </Heading>
                </CardHeader>
                <form onSubmit={submit}>
                    <CardBody pb={0}>
                        <FormControl mb={3} isInvalid={errors.nama}>
                            <FormLabel htmlFor="nama" fontSize={"sm"}>
                                Nama
                                <Text display={"inline"} color="red">
                                    *
                                </Text>
                            </FormLabel>
                            <Input
                                type="text"
                                id="nama"
                                value={data.nama}
                                onChange={(e) =>
                                    setData("nama", e.target.value)
                                }
                            />
                            {errors.nama && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.nama}
                                </FormErrorMessage>
                            )}
                        </FormControl>

                        <FormControl mb={3} isInvalid={errors.tipe}>
                            <FormLabel htmlFor="tipe" fontSize={"sm"}>
                                Tipe
                                <Text display={"inline"} color="red">
                                    *
                                </Text>
                            </FormLabel>
                            <Select
                                type="text"
                                id="tipe"
                                value={data.tipe}
                                onChange={(e) =>
                                    setData("tipe", e.target.value)
                                }
                            >
                                <option value="">Pilih Tipe</option>
                                <option value="Fasilitas">Fasilitas</option>
                                <option value="Akomodasi">Akomodasi</option>
                            </Select>
                            {errors.tipe && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.tipe}
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

export default CreateDestinationFacility;
