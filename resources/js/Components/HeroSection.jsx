import React from "react";
import { Box, Heading, Container, Text, Button, Icon } from "@chakra-ui/react";
import { PlayIcon } from "@heroicons/react/16/solid";

const HeroSection = () => {
    return (
        <Box
            position="relative"
            minH="100vh"
            w="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: "url('/images/hero.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                filter: "blur(5px)",
                zIndex: -1,
            }}
        >
            <Container
                maxW={"3xl"}
                textAlign={"center"}
                display={"flex"}
                flexDirection={"column"}
                gap={5}
            >
                <Heading
                    fontWeight="extrabold"
                    fontSize={{ base: "4xl", md: "6xl" }}
                    textShadow="2px 2px 4px rgba(0, 0, 0, 0.8)"
                    color={"white"}
                >
                    SeeTrip.id <br />
                    <Text as="span">Nikmati Perjalananmu</Text>
                </Heading>
                <Text
                    color={"white"}
                    fontWeight={"bold"}
                    textShadow="2px 2px 4px rgba(0, 0, 0, 0.8)"
                >
                    Temukan destinasi terbaik, dapatkan rekomendasi perjalanan,
                    dan nikmati pengalaman tak terlupakan bersama SeeTrip.
                    Rencanakan liburanmu dengan mudah dan mulai petualanganmu
                    sekarang.
                </Text>
                <div>
                    <Button
                        colorScheme={"blue"}
                        bg={"blue.400"}
                        rounded={"full"}
                        boxShadow="2px 2px 4px rgba(0, 0, 0, 0.8)"
                        px={6}
                        _hover={{
                            bg: "blue.500",
                        }}
                    >
                        <Icon as={PlayIcon} mr={2} />
                        Mulai Sekarang
                    </Button>
                </div>
            </Container>
        </Box>
    );
};

export default HeroSection;
