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
    Text,
    Textarea,
} from "@chakra-ui/react";
import { ArrowLeftIcon, BookmarkIcon } from "@heroicons/react/16/solid";
import AdminLayout from "../../../../Layouts/AdminLayout ";

const EditDestinationPrice = ({ auth, sessions, destinationPrice }) => {
    const { data, setData, put, processing, errors } = useForm({
        nama: destinationPrice.nama,
        deskripsi: destinationPrice.deskripsi,
        harga: destinationPrice.harga,
    });

    const submit = (e) => {
        e.preventDefault();
        put(`/destination-price/${destinationPrice.uuid}`);
    };

    return (
        <AdminLayout auth={auth} sessions={sessions}>
            <Head title="Edit Harga Destinasi" />
            <Card maxW={"xl"} w="full" p={2} h={"auto"}>
                <CardHeader pb={0}>
                    <Heading size="md" fontWeight="bold">
                        Edit Harga Destinasi
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
                        <FormControl mb={3} isInvalid={errors.harga}>
                            <FormLabel htmlFor="harga" fontSize={"sm"}>
                                Harga
                                <Text display={"inline"} color="red">
                                    *
                                </Text>
                            </FormLabel>
                            <Input
                                type="number"
                                id="harga"
                                value={data.harga}
                                onChange={(e) =>
                                    setData("harga", e.target.value)
                                }
                            />
                            {errors.harga && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.harga}
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
                            href={
                                "/destination/" +
                                destinationPrice.destination_uuid
                            }
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

export default EditDestinationPrice;
