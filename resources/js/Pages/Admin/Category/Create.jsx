import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import {
    Box,
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
    Image,
    Input,
    Text,
    useToast,
} from "@chakra-ui/react";
import { ArrowLeftIcon, BookmarkIcon } from "@heroicons/react/16/solid";
import AdminLayout from "../../../Layouts/AdminLayout ";
import { useDropzone } from "react-dropzone";

const CreateCategory = ({ auth, sessions }) => {
    const toast = useToast();
    const [preview, setPreview] = useState(null);
    const { data, setData, post, processing, errors } = useForm({
        nama: "",
        avatar: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post("/admin/category");
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
            setData("avatar", file);

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
        <AdminLayout auth={auth} sessions={sessions}>
            <Head title="Tambah Kategori" />
            <Card maxW={"xl"} w="full" p={2} h={"auto"}>
                <CardHeader pb={0}>
                    <Heading size="md" fontWeight="bold">
                        Tambah Kategori
                    </Heading>
                </CardHeader>
                <form onSubmit={submit}>
                    <CardBody pb={0}>
                        <FormControl mb={3} isInvalid={errors.avatar}>
                            <FormLabel htmlFor="avatar" fontSize={"sm"}>
                                Avatar{" "}
                                <Text display={"inline"} color="red">
                                    *
                                </Text>
                            </FormLabel>
                            <Box
                                {...getRootProps()}
                                border="2px dashed"
                                borderColor={
                                    isDragActive ? "blue.300" : "gray.300"
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
                                        Drag 'n' drop some files here, or click
                                        to select files
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
                            {errors.avatar && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.avatar}
                                </FormErrorMessage>
                            )}
                        </FormControl>
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
                            href={"/admin/category"}
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

export default CreateCategory;
