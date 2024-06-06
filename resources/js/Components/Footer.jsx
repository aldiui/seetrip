import { Container, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <VStack background={"gray.100"} w={"full"} p={8} mt={16}>
            <Container maxW="container.xl">
                <Text textAlign={"center"}>
                    © {year} All rights reserved | This Platform is made with ❤️
                    <Text
                        as="span"
                        ml={1}
                        fontWeight={"bold"}
                        color={"blue.500"}
                    >
                        SeeTrip.id
                    </Text>
                </Text>
            </Container>
        </VStack>
    );
};

export default Footer;
