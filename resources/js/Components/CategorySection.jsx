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
        <Container maxW={"container.xl"} px={6} py={10}>
            <Heading textAlign={"center"} fontSize={"3xl"}>
                Kategori
            </Heading>
            <Text mt={4} mx={10} fontSize={"lg"} textAlign={"center"}>
                Jelajahi berbagai kategori destinasi menarik yang kami tawarkan.
                Dari pantai yang menakjubkan hingga pegunungan yang menyejukkan,
                temukan tempat liburan yang sempurna untuk Anda dan keluarga.
            </Text>
            <SimpleGrid
                columns={{ base: 1, md: 2, xl: 4 }}
                spacing={10}
                mt={10}
            >
                {categories.map((category, index) => (
                    <Box
                        key={index}
                        textAlign="center"
                        bg="blue.500"
                        p={5}
                        borderRadius="md"
                        as={Link}
                        href={`/wisata?category=${category.slug}`}
                    >
                        <VStack>
                            <Image
                                src={category.avatar}
                                alt={category.nama}
                                borderRadius="full"
                                boxSize="200px"
                                objectFit="cover"
                            />
                            <Text
                                mt={4}
                                color="white"
                                fontSize="xl"
                                fontWeight="bold"
                            >
                                {category.nama}
                            </Text>
                        </VStack>
                    </Box>
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default CategorySection;
