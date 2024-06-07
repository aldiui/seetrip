import React, { useState } from "react";
import { Head, Link, router, useForm } from "@inertiajs/react";
import AppLayout from "../../Layouts/AppLayout";
import ReactPlayer from "react-player";
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
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    ModalContent,
} from "@chakra-ui/react";
import {
    CheckIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    MapPinIcon,
    XMarkIcon,
} from "@heroicons/react/16/solid";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const ShowWisata = ({ auth, sessions, destination }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedPackage, setSelectedPackage] = useState("");
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const { isOpen, onOpen, onClose } = useDisclosure();
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
            if (!selectedPackage) {
                toast({
                    title: "Error",
                    status: "error",
                    description: "Anda harus memilih paket terlebih dahulu.",
                    duration: 3000,
                    isClosable: true,
                    position: "top-right",
                    variant: "left-accent",
                });
            } else {
                onOpen();
            }
        }
    };

    const checkOut = () => {
        router.post("/order", {
            destination: destination.uuid,
            destination_price: selectedPackage,
            quantitas: numberOfPeople,
        });
    };

    return (
        <AppLayout auth={auth} sessions={sessions}>
            <Head title="Detail Wisata" />
            <Box maxW="container.xl" w={"full"} px={6} py={10} minH={"100vh"}>
                <SimpleGrid mt={50} columns={{ base: 1, xl: 2 }} spacing={8}>
                    <VStack>
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
                                colorScheme="grey"
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

                        {destination.link_video_youtube && (
                            <Box w="100%" mb={5}>
                                <ReactPlayer
                                    url={destination.link_video_youtube}
                                    width="100%"
                                />
                            </Box>
                        )}
                    </VStack>
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
                        <Flex gap={2} mb={1}>
                            {destination.link_facebook && (
                                <Button
                                    p={2}
                                    as="a"
                                    href={destination.link_facebook}
                                    variant={"outline"}
                                    shadow={"sm"}
                                    borderRadius={"full"}
                                    _hover={{ bg: "blue.600", color: "white" }}
                                >
                                    <Icon as={FaFacebook} />
                                </Button>
                            )}
                            {destination.link_instagram && (
                                <Button
                                    p={2}
                                    as="a"
                                    href={destination.link_instagram}
                                    variant={"outline"}
                                    shadow={"sm"}
                                    borderRadius={"full"}
                                    _hover={{ bg: "blue.600", color: "white" }}
                                >
                                    <Icon as={FaInstagram} />
                                </Button>
                            )}
                            {destination.link_youtube && (
                                <Button
                                    p={2}
                                    as="a"
                                    href={destination.link_youtube}
                                    variant={"outline"}
                                    shadow={"sm"}
                                    borderRadius={"full"}
                                    _hover={{ bg: "blue.600", color: "white" }}
                                >
                                    <Icon as={FaYoutube} />
                                </Button>
                            )}
                            {destination.link_tiktok && (
                                <Button
                                    p={2}
                                    as="a"
                                    href={destination.link_tiktok}
                                    variant={"outline"}
                                    shadow={"sm"}
                                    borderRadius={"full"}
                                    _hover={{ bg: "blue.600", color: "white" }}
                                >
                                    <Icon as={FaTiktok} />
                                </Button>
                            )}
                        </Flex>

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
                                            px={4}
                                            py={1}
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
                                            px={4}
                                            py={1}
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
                            w={"full"}
                            maxW={"sm"}
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
                            <InputGroup w={"full"} mt={3}>
                                <InputLeftElement>
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
                                <InputRightElement>
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
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent m={6}>
                    <ModalHeader>Konfirmasi Checkout</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Apakah Anda yakin ingin melanjutkan untuk checkout?
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            size={"sm"}
                            colorScheme="gray"
                            onClick={onClose}
                        >
                            <Icon as={XMarkIcon} mr={2} />
                            Batal
                        </Button>
                        <Button
                            size={"sm"}
                            colorScheme="green"
                            ml={3}
                            onClick={() => {
                                checkOut();
                            }}
                        >
                            <Icon as={CheckIcon} mr={2} />
                            Checkout
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </AppLayout>
    );
};

export default ShowWisata;
