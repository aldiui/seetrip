import React from "react";
import {
    Container,
    Heading,
    Text,
    SimpleGrid,
    Box,
    Image,
    VStack,
} from "@chakra-ui/react";
import { Link } from "@inertiajs/react";

const CategorySection = ({ categories }) => {
    return (
        <Container mt={"80px"} maxW={"container.xl"} px={6} py={10}>
            <Heading textAlign={"center"} fontSize={"3xl"}>
                Kategori
            </Heading>
            <Text mt={4} mx={10} fontSize={"lg"} textAlign={"center"}>
                Jelajahi berbagai kategori destinasi menarik yang kami tawarkan.
                Dari pantai yang menakjubkan hingga pegunungan yang menyejukkan,
                temukan tempat liburan yang sempurna untuk Anda dan keluarga.
            </Text>
            <SimpleGrid columns={{ base: 3, md: 3, xl: 4 }} spacing={8} mt={10}>
                {categories.map((category, index) => (
                    <Link
                        href={`/wisata?category=${category.slug}`}
                        key={index}
                    >
                        <Box
                            textAlign="center"
                            bg="blue.500"
                            p={5}
                            borderRadius="md"
                        >
                            <VStack>
                                <Image
                                    src={category.avatar}
                                    alt={category.nama}
                                    borderRadius="full"
                                    boxSize="full"
                                    objectFit="cover"
                                />
                            </VStack>
                        </Box>
                        <Text
                            mt={4}
                            textAlign={"center"}
                            fontSize={{ base: "xs", md: "lg" }}
                            fontWeight="bold"
                        >
                            {category.nama}
                        </Text>
                    </Link>
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default CategorySection;
