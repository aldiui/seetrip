import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import AppLayout from "../../Layouts/AppLayout";
import {
    Badge,
    Box,
    Flex,
    Icon,
    Image,
    SimpleGrid,
    Text,
    VStack,
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Select,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    useToast,
} from "@chakra-ui/react";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    MapPinIcon,
} from "@heroicons/react/16/solid";

const ShowWisata = ({ auth, sessions, destination }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedPackage, setSelectedPackage] = useState("");
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const toast = useToast();

    const nextImage = () => {
        const newIndex =
            (currentImageIndex + 1) % destination.destination_images.length;
        setCurrentImageIndex(newIndex);
    };

    const prevImage = () => {
        const newIndex =
            (currentImageIndex - 1 + destination.destination_images.length) %
            destination.destination_images.length;
        setCurrentImageIndex(newIndex);
    };

    const fasilitasData = destination.destination_facilities.filter(
        (facility) => facility.tipe === "Fasilitas"
    );
    const akomodasiData = destination.destination_facilities.filter(
        (facility) => facility.tipe === "Akomodasi"
    );

    const selectedPackageDetails = destination.destination_prices.find(
        (price) => price.uuid === selectedPackage
    );

    const totalHarga = selectedPackageDetails
        ? selectedPackageDetails.harga * numberOfPeople
        : 0;

    const formatRupiah = (nilai) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(nilai);
    };

    const incrementPeople = () => setNumberOfPeople(numberOfPeople + 1);
    const decrementPeople = () => setNumberOfPeople(numberOfPeople - 1);

    const handleCheckout = () => {
        if (!auth.user) {
            toast({
                title: "Error",
                status: "error",
                description: "Anda harus login terlebih dahulu.",
                duration: 3000,
                isClosable: true,
                position: "top-right",
                variant: "left-accent",
            });
        } else {
            console.log("Checkout process...");
        }
    };

    return (
        <AppLayout auth={auth} sessions={sessions}>
            <Head title="Detail Wisata" />
            <Box maxW="container.xl" w={"full"} px={6} py={10} minH={"100vh"}>
                <SimpleGrid mt={50} columns={{ base: 1, xl: 2 }} spacing={8}>
                    <Box mb={6} position="relative">
                        <Image
                            src={
                                destination.destination_images[
                                    currentImageIndex
                                ]?.image
                            }
                            alt={destination.nama}
                            objectFit="cover"
                            w="100%"
                            h="500px"
                        />
                        <Button
                            onClick={prevImage}
                            position="absolute"
                            top="50%"
                            left="2%"
                            transform="translateY(-50%)"
                            colorScheme="blue"
                            zIndex="1"
                        >
                            <Icon as={ChevronLeftIcon} />
                        </Button>
                        <Button
                            onClick={nextImage}
                            position="absolute"
                            top="50%"
                            right="2%"
                            transform="translateY(-50%)"
                            colorScheme="blue"
                            zIndex="1"
                        >
                            <Icon as={ChevronRightIcon} />
                        </Button>
                    </Box>
                    <VStack spacing={2} align={"start"}>
                        <Text fontSize="xl" fontWeight="bold">
                            {destination.nama}
                        </Text>
                        <Text fontSize="md">{destination.category.nama}</Text>
                        <Flex gap={2}>
                            <Icon as={MapPinIcon} color="blue.500" />
                            <Text>{destination.lokasi}</Text>
                        </Flex>
                        <Box mb={5}>
                            <Badge colorScheme="green" mr={2}>
                                Fasilitas: {fasilitasData.length}
                            </Badge>
                            <Badge colorScheme="blue">
                                Akomodasi: {akomodasiData.length}
                            </Badge>
                        </Box>
                        <Flex
                            direction={"column"}
                            mb={5}
                            gap={2}
                            textAlign={"left"}
                        >
                            <Text fontSize={"lg"} fontWeight={"bold"}>
                                Deskripsi
                            </Text>
                            <Text>{destination.deskripsi}</Text>
                        </Flex>
                        {fasilitasData.length > 0 && (
                            <Flex
                                direction={"column"}
                                mb={5}
                                gap={2}
                                textAlign={"left"}
                            >
                                <Text fontSize={"lg"} fontWeight={"bold"}>
                                    Fasilitas
                                </Text>
                                <SimpleGrid gap={2} columns={2}>
                                    {fasilitasData.map((facility) => (
                                        <Text
                                            key={facility.uuid}
                                            border="1px"
                                            borderColor="black"
                                            px={8}
                                            py={2}
                                            rounded={"lg"}
                                        >
                                            {facility.nama}
                                        </Text>
                                    ))}
                                </SimpleGrid>
                            </Flex>
                        )}

                        {akomodasiData.length > 0 && (
                            <Flex
                                direction={"column"}
                                mb={5}
                                gap={2}
                                textAlign={"left"}
                            >
                                <Text fontSize={"lg"} fontWeight={"bold"}>
                                    Akomodasi
                                </Text>
                                <SimpleGrid gap={2} columns={2}>
                                    {akomodasiData.map((akomodasi) => (
                                        <Text
                                            key={akomodasi.uuid}
                                            border="1px"
                                            borderColor="black"
                                            px={8}
                                            py={2}
                                            rounded={"lg"}
                                        >
                                            {akomodasi.nama}
                                        </Text>
                                    ))}
                                </SimpleGrid>
                            </Flex>
                        )}

                        {destination.destination_prices.length > 0 && (
                            <Flex
                                direction={"column"}
                                gap={2}
                                textAlign={"left"}
                                w={"full"}
                            >
                                <Text fontSize={"lg"} fontWeight={"bold"}>
                                    Harga Paket
                                </Text>
                                <Table
                                    variant="striped"
                                    colorScheme="gray"
                                    w="full"
                                    maxW={"full"}
                                >
                                    <Thead>
                                        <Tr
                                            borderBottom={"2px"}
                                            borderColor={"blue.500"}
                                            bg={"blue.500"}
                                        >
                                            <Th color={"white"}>Nama</Th>
                                            <Th color={"white"}>Deskripsi</Th>
                                            <Th color={"white"}>Harga</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {destination.destination_prices.map(
                                            (price) => (
                                                <Tr key={price.uuid}>
                                                    <Td>{price.nama}</Td>
                                                    <Td>{price.deskripsi}</Td>
                                                    <Td>
                                                        {price.harga_custom}
                                                    </Td>
                                                </Tr>
                                            )
                                        )}
                                    </Tbody>
                                </Table>
                            </Flex>
                        )}

                        {fasilitasData.length === 0 &&
                            akomodasiData.length === 0 &&
                            destination.destination_prices.length === 0 && (
                                <Text
                                    textAlign={"center"}
                                    fontSize={"lg"}
                                    fontWeight={"bold"}
                                >
                                    Data tidak tersedia.
                                </Text>
                            )}

                        <Flex
                            direction={"column"}
                            gap={2}
                            textAlign={"left"}
                            mt={5}
                        >
                            <Text fontSize={"lg"} fontWeight={"bold"}>
                                Pilih Paket dan Jumlah Orang
                            </Text>
                            <Select
                                placeholder="Pilih Paket"
                                onChange={(e) =>
                                    setSelectedPackage(e.target.value)
                                }
                                value={selectedPackage}
                            >
                                {destination.destination_prices.map((price) => (
                                    <option key={price.uuid} value={price.uuid}>
                                        {price.nama}
                                    </option>
                                ))}
                            </Select>
                            <InputGroup size="md" mt={3}>
                                <InputLeftElement width="4.5rem">
                                    <Button
                                        h="1.75rem"
                                        size="sm"
                                        onClick={decrementPeople}
                                        isDisabled={numberOfPeople <= 1}
                                    >
                                        -
                                    </Button>
                                </InputLeftElement>
                                <Input
                                    type="number"
                                    value={numberOfPeople}
                                    onChange={(e) =>
                                        setNumberOfPeople(
                                            Math.max(
                                                1,
                                                parseInt(e.target.value)
                                            )
                                        )
                                    }
                                    textAlign="center"
                                />
                                <InputRightElement width="4.5rem">
                                    <Button
                                        h="1.75rem"
                                        size="sm"
                                        onClick={incrementPeople}
                                    >
                                        +
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <Text fontSize={"lg"} fontWeight={"bold"} mt={3}>
                                Total Harga: {formatRupiah(totalHarga)}
                            </Text>
                            <Button
                                colorScheme="blue"
                                mt={3}
                                onClick={handleCheckout}
                            >
                                Checkout
                            </Button>
                        </Flex>
                    </VStack>
                </SimpleGrid>
            </Box>
        </AppLayout>
    );
};

export default ShowWisata;