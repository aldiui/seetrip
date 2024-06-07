import React from "react";
import {
    Container,
    Text,
    SimpleGrid,
    Box,
    Image,
    VStack,
    Flex,
    Input,
    Button,
    Img,
} from "@chakra-ui/react";
import { Link } from "@inertiajs/react";

const CategorySection = ({ categories }) => {
    return (
        <Container mt={"80px"} maxW={"container.xl"} px={6} py={10}>
            <Img
                mb={10}
                src="/images/logo.png"
                w={200}
                mx={"auto"}
                alt="Seetrip Logo"
            ></Img>
            <Flex as="form" gap={2} align="center" w={"full"}>
                <Input
                    id="search"
                    name="search"
                    type="text"
                    flex="1"
                    placeholder="Mau pergi ke mana?"
                />
                <Button type="submit" colorScheme="blue" loadingText="Cari">
                    Cari
                </Button>
            </Flex>
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
