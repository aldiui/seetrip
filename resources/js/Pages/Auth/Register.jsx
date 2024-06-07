import React from "react";
import AuthLayout from "../../Layouts/AuthLayout";
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
    Img,
    Input,
    Spinner,
    Text,
} from "@chakra-ui/react";
import { Head, Link, useForm } from "@inertiajs/react";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

const Register = ({ sessions }) => {
    const { data, setData, post, processing, errors } = useForm({
        nama: "",
        email: "",
        password: "",
        konfirmasi_password: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post("/register");
    };

    return (
        <AuthLayout sessions={sessions}>
            <Head title="Register" />
            <Card maxW="md" w="full" p={2}>
                <CardHeader pb={0}>
                    <Img
                        src="/images/logo.png"
                        w={200}
                        mx={"auto"}
                        alt="Seetrip Logo"
                    ></Img>
                    <Heading size="md" fontWeight="bold" textAlign="center">
                        Register
                    </Heading>
                </CardHeader>
                <form onSubmit={submit}>
                    <CardBody pb={0}>
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
                        <FormControl isInvalid={errors.konfirmasi_password}>
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
                    </CardBody>
                    <CardFooter
                        display={"flex"}
                        flexDirection={"column"}
                        gap={3}
                        justifyContent={"center"}
                    >
                        <Button
                            type="submit"
                            colorScheme="blue"
                            w="100%"
                            isLoading={processing}
                            loadingText="Register"
                        >
                            <Icon as={ArrowLongRightIcon} mr={2} />
                            Register
                        </Button>

                        <Text fontSize={"sm"} textAlign="center">
                            Sudah punya akun?{" "}
                            <Link href={"/login"}>
                                <Text
                                    display={"inline"}
                                    fontWeight="semibold"
                                    color="blue.500"
                                >
                                    Login
                                </Text>
                            </Link>
                        </Text>
                    </CardFooter>
                </form>
            </Card>
        </AuthLayout>
    );
};

export default Register;
