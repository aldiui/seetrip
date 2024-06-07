import React from "react";
import {
    Container,
    Heading,
    Text,
    SimpleGrid,
    Box,
    Image,
    VStack,
    Card,
    CardBody,
    Badge,
    Flex,
    Icon,
} from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import { MapPinIcon } from "@heroicons/react/16/solid";

const DestinationSection = ({ destinations }) => {
    return (
        <Container maxW="container.xl" px={6} py={10}>
            <Heading textAlign="center" fontSize="3xl">
                Populer
            </Heading>
            <Text mt={4} mx="auto" maxW="3xl" fontSize="lg" textAlign="center">
                Jelajahi berbagai destinasi populer yang kami tawarkan. Dari
                pantai yang menakjubkan hingga pegunungan yang menyejukkan,
                temukan tempat liburan yang sempurna untuk Anda dan keluarga.
            </Text>

            <SimpleGrid
                columns={{ base: 1, md: 2, xl: 3 }}
                spacing={10}
                mt={10}
            >
                {destinations.length === 0 ? (
                    <></>
                ) : (
                    destinations.map((destination) => {
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
                                mb={4}
                            >
                                <Image
                                    src={
                                        destination.destination_images[0]?.image
                                    }
                                    alt={destination.nama}
                                    objectFit="cover"
                                    w="100%"
                                    h="400px"
                                />
                                <CardBody>
                                    <VStack spacing={2} align="start">
                                        <Text fontSize="xl" fontWeight="bold">
                                            {destination.nama}
                                        </Text>
                                        <Text fontSize="md">
                                            {destination.category.nama}
                                        </Text>
                                        <Flex align="center" gap={2}>
                                            <Icon
                                                as={MapPinIcon}
                                                color="blue.500"
                                            />
                                            <Text>{destination.lokasi}</Text>
                                        </Flex>
                                        <Box>
                                            <Badge colorScheme="green" mr={2}>
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
                    })
                )}
            </SimpleGrid>
        </Container>
    );
};

export default DestinationSection;
