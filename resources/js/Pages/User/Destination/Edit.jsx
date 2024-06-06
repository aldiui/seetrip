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
    Textarea,
} from "@chakra-ui/react";
import { ArrowLeftIcon, BookmarkIcon } from "@heroicons/react/16/solid";
import AdminLayout from "../../../Layouts/AdminLayout ";

const EditDestination = ({ auth, sessions, destination, categories }) => {
    const { data, setData, put, processing, errors } = useForm({
        category_id: destination.category_uuid,
        nama: destination.nama,
        deskripsi: destination.deskripsi,
        link_youtube: destination.link_youtube,
        lokasi: destination.lokasi,
        rating: destination.rating,
    });

    const submit = (e) => {
        e.preventDefault();
        put(`/destination/${destination.uuid}`);
    };

    return (
        <AdminLayout auth={auth} sessions={sessions}>
            <Head title="Edit Destinasi" />
            <Card maxW={"xl"} w="full" p={2} h={"auto"}>
                <CardHeader pb={0}>
                    <Heading size="md" fontWeight="bold">
                        Edit Destinasi
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
                        <FormControl mb={3} isInvalid={errors.category_id}>
                            <FormLabel htmlFor="category_id" fontSize={"sm"}>
                                Kategori
                                <Text display={"inline"} color="red">
                                    *
                                </Text>
                            </FormLabel>
                            <Select
                                type="text"
                                id="category_id"
                                value={data.category_id}
                                onChange={(e) =>
                                    setData("category_id", e.target.value)
                                }
                            >
                                <option value="">Pilih Kategori</option>
                                {categories.map((option) => (
                                    <option
                                        key={option.uuid}
                                        value={option.uuid}
                                    >
                                        {option.nama}
                                    </option>
                                ))}
                            </Select>
                            {errors.category_id && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.category_id}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl mb={3} isInvalid={errors.lokasi}>
                            <FormLabel htmlFor="lokasi" fontSize={"sm"}>
                                Lokasi
                                <Text display={"inline"} color="red">
                                    *
                                </Text>
                            </FormLabel>
                            <Input
                                type="text"
                                id="lokasi"
                                value={data.lokasi}
                                onChange={(e) =>
                                    setData("lokasi", e.target.value)
                                }
                            />
                            {errors.lokasi && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.lokasi}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl mb={3} isInvalid={errors.link_youtube}>
                            <FormLabel htmlFor="link_youtube" fontSize={"sm"}>
                                Link Youtube
                                <Text display={"inline"} color="red">
                                    *
                                </Text>
                            </FormLabel>
                            <Input
                                type="text"
                                id="link_youtube"
                                value={data.link_youtube}
                                onChange={(e) =>
                                    setData("link_youtube", e.target.value)
                                }
                            />
                            {errors.link_youtube && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.link_youtube}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl mb={3} isInvalid={errors.rating}>
                            <FormLabel htmlFor="rating" fontSize={"sm"}>
                                Rating
                                <Text display={"inline"} color="red">
                                    *
                                </Text>
                            </FormLabel>
                            <Input
                                type="number"
                                id="rating"
                                value={data.rating}
                                onChange={(e) =>
                                    setData("rating", e.target.value)
                                }
                            />
                            {errors.rating && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.rating}
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
                            href={"/destination"}
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

export default EditDestination;
