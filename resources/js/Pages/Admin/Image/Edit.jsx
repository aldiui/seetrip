import React, { useEffect, useState } from "react";
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
import { useDropzone } from "react-dropzone";
import AdminLayout from "../../../Layouts/AdminLayout ";

const EditDestinationImage = ({ auth, sessions, destinationImage }) => {
    const toast = useToast();
    const [preview, setPreview] = useState(null);
    const { data, setData, post, processing, errors } = useForm({
        _method: "put",
        image: "",
    });

    useEffect(() => {
        if (destinationImage.image) {
            setPreview(destinationImage.image);
        }
    }, [destinationImage.image]);

    const submit = (e) => {
        e.preventDefault();
        post(`/destination-image/${destinationImage.uuid}`);
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
            setData("image", file);

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

    return (
        <AdminLayout auth={auth} sessions={sessions}>
            <Head title="Edit Gambar Destinasi" />
            <Card maxW={"xl"} w="full" p={2} h={"auto"}>
                <CardHeader pb={0}>
                    <Heading size="md" fontWeight="bold">
                        Edit Gambar Destinasi
                    </Heading>
                </CardHeader>
                <form onSubmit={submit}>
                    <CardBody pb={0}>
                        <FormControl mb={3} isInvalid={errors.image}>
                            <FormLabel htmlFor="image" fontSize={"sm"}>
                                Gambar{" "}
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
                            {errors.image && (
                                <FormErrorMessage fontSize={"xs"}>
                                    {errors.image}
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
                                destinationImage.destination_uuid
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

export default EditDestinationImage;
