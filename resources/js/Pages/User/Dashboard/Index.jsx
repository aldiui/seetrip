import React from "react";
import { Head } from "@inertiajs/react";
import AdminLayout from "../../../Layouts/AdminLayout ";
import { Box, Flex, Icon, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import {
    MapPinIcon,
    WalletIcon,
} from "@heroicons/react/16/solid";

const Dashboard = ({ auth, sessions, count }) => {
    return (
        <AdminLayout auth={auth} sessions={sessions}>
            <Head title="Dashboard" />
            <SimpleGrid columns={{ base: 1, xl: 4 }} spacing={8}>
                <Box
                    textAlign="center"
                    bg="white"
                    p={8}
                    borderRadius="md"
                    shadow={"md"}
                >
                    <Flex gap={5} alignItems={"center"}>
                        <Icon
                            as={WalletIcon}
                            fontSize={"6xl"}
                            color={"green.500"}
                        />
                        <VStack>
                            <Text size="sm">Data Wallet</Text>
                            <Text fontSize="3xl" fontWeight="bold">
                                {count.wallet}
                            </Text>
                        </VStack>
                    </Flex>
                </Box>
                <Box
                    textAlign="center"
                    bg="white"
                    p={8}
                    borderRadius="md"
                    shadow={"md"}
                >
                    <Flex gap={5} alignItems={"center"}>
                        <Icon
                            as={MapPinIcon}
                            fontSize={"6xl"}
                            color={"red.500"}
                        />
                        <VStack>
                            <Text size="sm">Data Destinasi</Text>
                            <Text fontSize="3xl" fontWeight="bold">
                                {count.destination}
                            </Text>
                        </VStack>
                    </Flex>
                </Box>
            </SimpleGrid>
        </AdminLayout>
    );
};

export default Dashboard;
