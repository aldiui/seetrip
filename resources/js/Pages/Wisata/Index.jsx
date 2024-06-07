import React, { useState, useEffect } from "react";
import { Head, Link, router } from "@inertiajs/react";
import AppLayout from "../../Layouts/AppLayout";
import {
    Badge,
    Box,
    Button,
    Card,
    CardBody,
    Flex,
    Heading,
    Icon,
    Image,
    Input,
    Select,
    SimpleGrid,
    Skeleton,
    Text,
    VStack,
} from "@chakra-ui/react";
import { MapPinIcon, PaperClipIcon } from "@heroicons/react/16/solid";
import Pagination from "../../Components/Pagination";
import { pickBy } from "lodash";

const Wisata = ({ auth, sessions, categories, destinations }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        const kode = new URLSearchParams(window.location.search).get(
            "category"
        );
        if (kode) {
            setCategory(kode);
        }
    }, []);

    const handleChangeCategory = (e) => {
        setCategory(e.target.value);
        getData();
    };

    const handleSearch = (e) => {
        e.preventDefault();
        getData();
    };

    const getData = () => {
        setIsLoading(true);
        router.get("/wisata", pickBy({ search, category }), {
            onFinish: () => setIsLoading(false),
            preserveScroll: true,
            preserveState: true,
        });
    };

    return (
        <AppLayout auth={auth} sessions={sessions}>
            <Head title="Wisata" />
            <Box
                maxW="container.xl"
                w={"full"}
                textAlign="center"
                px={6}
                py={10}
                minH={"100vh"}
            >
                <Heading fontSize="3xl" mt={50}>
                    Wisata Lebih dari Sekedar Destinasi
                </Heading>
                <Text mb={10} mt={4} mx="auto" maxW="3xl" fontSize="lg">
                    Jelajahi berbagai destinasi yang kami tawarkan. Dari pantai
                    yang menakjubkan hingga pegunungan yang menyejukkan, temukan
                    tempat liburan yang sempurna untuk Anda dan keluarga.
                </Text>

                <Flex
                    direction={{ base: "column", md: "row" }}
                    align="center"
                    gap={4}
                    w={"full"}
                    mb={10}
                >
                    <Select
                        width={{ base: "100%", md: "auto" }}
                        mb={{ base: 2, md: 0 }}
                        onChange={handleChangeCategory}
                    >
                        <option value="">Semua Kategori</option>
                        {categories.map((option) => (
                            <option key={option.slug} value={option.slug}>
                                {option.nama}
                            </option>
                        ))}
                    </Select>
                    <Flex
                        as="form"
                        gap={2}
                        align="center"
                        w={"full"}
                        onSubmit={handleSearch}
                    >
                        <Input
                            id="search"
                            name="search"
                            type="text"
                            flex="1"
                            placeholder="Mau pergi ke mana?"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button
                            type="submit"
                            colorScheme="blue"
                            variant="outline"
                            loadingText="Cari"
                            isLoading={isLoading}
                        >
                            Cari
                        </Button>
                    </Flex>
                </Flex>

                {isLoading ? (
                    <SimpleGrid
                        columns={{ base: 1, md: 2, xl: 3 }}
                        spacing={10}
                    >
                        {[...Array(6)].map((_, index) => (
                            <Card
                                key={index}
                                borderRadius="md"
                                overflow="hidden"
                                boxShadow="md"
                            >
                                <Skeleton height="400px" />
                                <CardBody>
                                    <VStack spacing={2} align={"start"}>
                                        <Skeleton height="20px" width="80%" />
                                        <Skeleton height="20px" width="50%" />
                                        <Flex gap={2}>
                                            <Skeleton
                                                height="20px"
                                                width="20px"
                                            />
                                            <Skeleton
                                                height="20px"
                                                width="60%"
                                            />
                                        </Flex>
                                        <Flex gap={2}>
                                            <Skeleton
                                                height="20px"
                                                width="50px"
                                            />
                                            <Skeleton
                                                height="20px"
                                                width="50px"
                                            />
                                        </Flex>
                                    </VStack>
                                </CardBody>
                            </Card>
                        ))}
                    </SimpleGrid>
                ) : destinations.data.length === 0 ? (
                    <Text py={50} fontSize="lg" mt={4} color={"gray.500"}>
                        <Icon as={PaperClipIcon} mr={2} />
                        Tidak ada destinasi yang ditemukan.
                    </Text>
                ) : (
                    <SimpleGrid
                        columns={{ base: 1, md: 2, xl: 3 }}
                        spacing={10}
                    >
                        {destinations.data.map((destination) => {
                            const fasilitasCount =
                                destination.destination_facilities.filter(
                                    (facility) => facility.tipe === "Fasilitas"
                                ).length;
                            const akomodasiCount =
                                destination.destination_facilities.filter(
                                    (facility) => facility.tipe === "Akomodasi"
                                ).length;

                            return (
                                <Card
                                    key={destination.uuid}
                                    as={Link}
                                    borderRadius="md"
                                    overflow="hidden"
                                    boxShadow="md"
                                    href={`/wisata/${destination.slug}`}
                                >
                                    <Image
                                        src={
                                            destination.destination_images[0]
                                                ?.image
                                        }
                                        alt={destination.nama}
                                        objectFit="cover"
                                        w="100%"
                                        h="400px"
                                    />
                                    <CardBody>
                                        <VStack spacing={2} align={"start"}>
                                            <Text
                                                fontSize="xl"
                                                fontWeight="bold"
                                            >
                                                {destination.nama}
                                            </Text>
                                            <Text fontSize="md">
                                                {destination.category.nama}
                                            </Text>
                                            <Flex gap={2}>
                                                <Icon
                                                    as={MapPinIcon}
                                                    color="blue.500"
                                                />
                                                <Text>
                                                    {destination.lokasi}
                                                </Text>
                                            </Flex>
                                            <Box>
                                                <Badge
                                                    colorScheme="green"
                                                    mr={2}
                                                >
                                                    Fasilitas: {fasilitasCount}
                                                </Badge>
                                                <Badge colorScheme="blue">
                                                    Akomodasi: {akomodasiCount}
                                                </Badge>
                                            </Box>
                                        </VStack>
                                    </CardBody>
                                </Card>
                            );
                        })}
                    </SimpleGrid>
                )}

                <Flex
                    gap={4}
                    flexDir={{ base: "column", md: "row" }}
                    justifyContent={{ base: "center", md: "space-between" }}
                    alignItems="center"
                    mt={4}
                >
                    <Text color="gray.500" fontSize="sm">
                        Showing {destinations.from ?? 0} to{" "}
                        {destinations.to ?? 0} of {destinations.total ?? 0}
                    </Text>
                    <Pagination links={destinations.links ?? []} />
                </Flex>
            </Box>
        </AppLayout>
    );
};

export default Wisata;
