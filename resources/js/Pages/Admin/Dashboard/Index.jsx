import React from "react";
import { Head } from "@inertiajs/react";
import AdminLayout from "../../../Layouts/AdminLayout ";
import { Box, Flex, Icon, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import {
    BookOpenIcon,
    MapPinIcon,
    UserGroupIcon,
    WalletIcon,
} from "@heroicons/react/16/solid";
import MonthlyRevenueChart from "./Partials/MonthlyRevenueChart";
import TopOwnersChart from "./Partials/TopOwnersChart";
import TopOwnersTable from "./Partials/TopOwnersTable";
import TransactionsTable from "./Partials/TransactionsTable";
import TopDataTable from "./Partials/TopDataTable";

const Dashboard = ({
    auth,
    sessions,
    count,
    monthlyRevenue,
    topOwners,
    tanggalToday,
    transactions,
    topData,
}) => {
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
                            as={UserGroupIcon}
                            fontSize={"6xl"}
                            color={"blue.500"}
                        />
                        <VStack>
                            <Text size="sm">Data User</Text>
                            <Text fontSize="3xl" fontWeight="bold">
                                {count.user}
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
                            as={BookOpenIcon}
                            fontSize={"6xl"}
                            color={"yellow.500"}
                        />
                        <VStack>
                            <Text size="sm">Data Kategori</Text>
                            <Text fontSize="3xl" fontWeight="bold">
                                {count.category}
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
            <Box
                bg="white"
                p={8}
                borderRadius="md"
                shadow={"md"}
                w={"full"}
                mt={8}
                mb={8}
            >
                <Text size="md" fontWeight="bold" mb={5}>
                    Grafik Revenue
                </Text>
                <MonthlyRevenueChart data={monthlyRevenue} />
            </Box>
            <Box
                bg="white"
                p={8}
                borderRadius="md"
                shadow={"md"}
                w={"full"}
                mt={8}
                mb={8}
            >
                <Text size="md" fontWeight="bold" mb={5}>
                    Grafik Pemilik Wisata Dengan Pembelian Tiket Terbanyak
                </Text>
                <TopOwnersChart data={topOwners} />
            </Box>
            <Box
                bg="white"
                p={8}
                borderRadius="md"
                shadow={"md"}
                w={"full"}
                mt={8}
                mb={8}
            >
                <Text size="md" fontWeight="bold" mb={5}>
                    Tabel Pemilik Pembelian Tiket Terbanyak
                </Text>
                <TopOwnersTable data={topOwners} />
            </Box>
            <Box
                bg="white"
                p={8}
                borderRadius="md"
                shadow={"md"}
                w={"full"}
                mt={8}
                mb={8}
            >
                <Text size="md" fontWeight="bold" mb={5}>
                    Tabel Penjualan {tanggalToday}
                </Text>
                <TransactionsTable data={transactions} />
            </Box>
            <Box
                bg="white"
                p={8}
                borderRadius="md"
                shadow={"md"}
                w={"full"}
                mt={8}
                mb={8}
            >
                <Text size="md" fontWeight="bold" mb={5}>
                    Tabel Wisata Terbanyak Pembelian
                </Text>
                <TopDataTable data={topData} />
            </Box>
        </AdminLayout>
    );
};

export default Dashboard;
