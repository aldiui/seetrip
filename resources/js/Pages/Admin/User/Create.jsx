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
    Select,
    Text,
    useToast,
} from "@chakra-ui/react";
import { ArrowLeftIcon, BookmarkIcon } from "@heroicons/react/16/solid";
import AdminLayout from "../../../Layouts/AdminLayout ";
import { useDropzone } from "react-dropzone";

const CreateUser = ({ auth, sessions }) => {
    const toast = useToast();
    const [preview, setPreview] = useState(null);
    const { data, setData, post, processing, errors } = useForm({
        nama: "",
        avatar: "",
        email: "",
        password: "",
        konfirmasi_password: "",
        role: "user",
        phone: "",
        saldo: "0",
    });

    const submit = (e) => {
        e.preventDefault();
        post("/admin/user");
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
            <Head title="Tambah User" />
            <Card maxW={"xl"} w="full" p={2} h={"auto"}>
                <CardHeader pb={0}>
                    <Heading size="md" fontWeight="bold">
                        Tambah User
                    </Heading>
                </CardHeader>
                <form onSubmit={submit}>
                    <CardBody pb={0}>
                        <FormControl mb={3} isInvalid={errors.avatar}>
                            <FormLabel htmlFor="avatar" fontSize={"sm"}>
                                Avatar
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
                        <FormControl mb={3} isInvalid={errors.email}>
                            <FormLabel htmlFor="email" fontSize={"sm"}>
                                Email{" "}
                                <Text display={"inline"} color="red">
                                    *
                                </Text>
                            </FormLabel>
                            <Input
                                type="email"
                                id="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            {errors.email && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.email}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl mb={3} isInvalid={errors.password}>
                            <FormLabel htmlFor="password" fontSize={"sm"}>
                                Password{" "}
                                <Text display={"inline"} color="red">
                                    *
                                </Text>
                            </FormLabel>
                            <Input
                                type="password"
                                id="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            {errors.password && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.password}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl
                            mb={3}
                            isInvalid={errors.konfirmasi_password}
                        >
                            <FormLabel
                                htmlFor="konfirmasi_password"
                                fontSize={"sm"}
                            >
                                Konfirmasi Password{" "}
                                <Text display={"inline"} color="red">
                                    *
                                </Text>
                            </FormLabel>
                            <Input
                                type="password"
                                id="konfirmasi_password"
                                value={data.konfirmasi_password}
                                onChange={(e) =>
                                    setData(
                                        "konfirmasi_password",
                                        e.target.value
                                    )
                                }
                            />
                            {errors.konfirmasi_password && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.konfirmasi_password}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl mb={3} isInvalid={errors.phone}>
                            <FormLabel htmlFor="phone" fontSize={"sm"}>
                                No HP{" "}
                                <Text display={"inline"} color="red">
                                    *
                                </Text>
                            </FormLabel>
                            <Input
                                type="text"
                                id="phone"
                                value={data.phone}
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                            />
                            {errors.phone && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.phone}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl mb={3} isInvalid={errors.saldo}>
                            <FormLabel htmlFor="saldo" fontSize={"sm"}>
                                Saldo{" "}
                                <Text display={"inline"} color="red">
                                    *
                                </Text>
                            </FormLabel>
                            <Input
                                type="numeric"
                                id="saldo"
                                value={data.saldo}
                                onChange={(e) =>
                                    setData("saldo", e.target.value)
                                }
                            />
                            {errors.saldo && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.saldo}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl mb={3} isInvalid={errors.role}>
                            <FormLabel htmlFor="role" fontSize={"sm"}>
                                Role{" "}
                                <Text display={"inline"} color="red">
                                    *
                                </Text>
                            </FormLabel>
                            <Select
                                type="text"
                                id="role"
                                value={data.role}
                                onChange={(e) =>
                                    setData("role", e.target.value)
                                }
                            >
                                <option value="">Pilih Role</option>
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                            </Select>
                            {errors.role && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.role}
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
                            href={"/admin/user"}
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

export default CreateUser;
