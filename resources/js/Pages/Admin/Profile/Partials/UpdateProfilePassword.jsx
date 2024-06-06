import React from "react";
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
    Icon,
    Input,
    Text,
} from "@chakra-ui/react";
import { BookmarkIcon } from "@heroicons/react/16/solid";

const UpdateProfilePassword = () => {
    const { data, setData, put, processing, errors, reset } = useForm({
        password_lama: "",
        password: "",
        konfirmasi_password: "",
    });

    const submitPassword = (e) => {
        e.preventDefault();
        put("/admin/profile/password", {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };
    return (
        <Card w="full" p={2} h={"auto"}>
            <CardHeader pb={0}>
                <Heading size="md" fontWeight="bold">
                    Ubah Password Profile
                </Heading>
            </CardHeader>
            <form onSubmit={submitPassword}>
                <CardBody pb={0}>
                    <FormControl mb={3} isInvalid={errors.password_lama}>
                        <FormLabel htmlFor="password_lama" fontSize={"sm"}>
                            Password Lama{" "}
                            <Text display={"inline"} color="red">
                                *
                            </Text>
                        </FormLabel>
                        <Input
                            type="password"
                            id="password_lama"
                            value={data.password_lama}
                            onChange={(e) =>
                                setData("password_lama", e.target.value)
                            }
                        />
                        {errors.password_lama && (
                            <FormErrorMessage fontSize={"xs"}>
                                {errors.password_lama}
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
                    <FormControl mb={3} isInvalid={errors.konfirmasi_password}>
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
                                setData("konfirmasi_password", e.target.value)
                            }
                        />
                        {errors.konfirmasi_password && (
                            <FormErrorMessage fontSize={"xs"}>
                                {errors.konfirmasi_password}
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

export default UpdateProfilePassword;
