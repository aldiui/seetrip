import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
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
    Input,
    Text,
    Box,
    Image,
    Icon,
} from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import { BookmarkIcon } from "@heroicons/react/16/solid";

const UpdateProfile = ({ auth }) => {
    const [preview, setPreview] = useState(null);
    const { data, setData, post, processing, errors, clearErrors } = useForm({
        avatar: "",
        email: auth.user.email,
        nama: auth.user.nama,
        phone: auth.user.phone,
    });

    const onDrop = (acceptedFiles, fileRejections) => {
        if (fileRejections.length > 0) {
            fileRejections.forEach((file) => {
                file.errors.forEach((err) => {
                    if (err.code === "file-too-large") {
                        console.error("File is too large");
                    } else if (err.code === "file-invalid-type") {
                        console.error("Invalid file type");
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
        maxSize: 2 * 1024 * 1024,
        multiple: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post("/profile", {
            preserveScroll: true,
            onSuccess: () => {
                setData("avatar", "");
                setPreview(null);
                clearErrors();
            },
        });
    };

    return (
        <Card w="full" p={2} h={"auto"}>
            <CardHeader pb={0}>
                <Heading size="md" fontWeight="bold">
                    Ubah Profile
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
                            borderColor={isDragActive ? "blue.300" : "gray.300"}
                            borderRadius="md"
                            p={10}
                            textAlign="center"
                        >
                            <Input {...getInputProps()} />
                            {isDragActive ? (
                                <Text>Drop the files here ...</Text>
                            ) : (
                                <Text>
                                    Drag 'n' drop some files here, or click to
                                    select files
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
                            Nama{" "}
                            <Text display={"inline"} color="red">
                                *
                            </Text>
                        </FormLabel>
                        <Input
                            type="text"
                            id="nama"
                            value={data.nama}
                            onChange={(e) => setData("nama", e.target.value)}
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
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        {errors.email && (
                            <FormErrorMessage fontSize={"xs"}>
                                {errors.email}
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
                            onChange={(e) => setData("phone", e.target.value)}
                        />
                        {errors.phone && (
                            <FormErrorMessage fontSize={"xs"}>
                                {errors.phone}
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
                </CardFooter>
            </form>
        </Card>
    );
};

export default UpdateProfile;
