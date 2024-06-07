import React, { useRef, useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import { pickBy } from "lodash";
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Heading,
    Icon,
    Input,
    Select,
    Skeleton,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import Pagination from "../../../Components/Pagination";
import AdminLayout from "../../../Layouts/AdminLayout ";
import { CheckCircleIcon } from "@heroicons/react/16/solid";

const Transaction = ({ auth, sessions, transactions }) => {
    const perpage = useRef(transactions.per_page);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");

    const handleChangePerPage = (e) => {
        perpage.current = parseInt(e.target.value);
        getData();
    };

    const handleSearch = (e) => {
        e.preventDefault();
        getData();
    };

    const getData = () => {
        setIsLoading(true);
        router.get(
            "/transaction",
            pickBy({ perpage: perpage.current, search: search }),
            {
                onFinish: () => setIsLoading(false),
                preserveScroll: true,
                preserveState: true,
            }
        );
    };

    const calculateIndex = (index) => transactions.from + index;

    return (
        <AdminLayout auth={auth} sessions={sessions}>
            <Head title="Transaksi" />
            <Card p={2} w="full" h={["auto", "full"]}>
                <CardHeader
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <Heading size="md" fontWeight="bold">
                        Data Transaksi
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Flex
                        flexDir={{ base: "column", md: "row" }}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        gap={4}
                        mb={4}
                    >
                        <Select
                            id="perpage"
                            size={"sm"}
                            name="perpage"
                            width="auto"
                            value={perpage.current}
                            onChange={handleChangePerPage}
                        >
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="250">250</option>
                            <option value="500">500</option>
                        </Select>
                        <Flex as={"form"} gap={2} onSubmit={handleSearch}>
                            <Input
                                size={"sm"}
                                id="search"
                                name="search"
                                type="text"
                                width="auto"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <Button
                                type="submit"
                                colorScheme="blue"
                                variant="outline"
                                size={"sm"}
                                isLoading={isLoading}
                                loadingText="Cari"
                            >
                                Cari
                            </Button>
                        </Flex>
                    </Flex>
                    <TableContainer>
                        <Table
                            variant="striped"
                            colorScheme="gray"
                            width="full"
                        >
                            <Thead>
                                <Tr
                                    borderBottom={"2px"}
                                    borderColor={"blue.500"}
                                    bg={"blue.500"}
                                >
                                    <Th
                                        fontWeight="extrabold"
                                        fontSize="md"
                                        color="white"
                                        w="5"
                                    >
                                        #
                                    </Th>
                                    <Th
                                        fontWeight="extrabold"
                                        fontSize="md"
                                        color="white"
                                        w="5"
                                    >
                                        Nomor
                                    </Th>
                                    <Th
                                        fontWeight="extrabold"
                                        fontSize="md"
                                        color="white"
                                        w="5"
                                    >
                                        Tanggal
                                    </Th>
                                    <Th
                                        fontWeight="extrabold"
                                        fontSize="md"
                                        color="white"
                                        w="5"
                                    >
                                        User
                                    </Th>
                                    <Th
                                        fontWeight="extrabold"
                                        fontSize="md"
                                        color="white"
                                        w="5"
                                    >
                                        Destinasi
                                    </Th>
                                    <Th
                                        fontWeight="extrabold"
                                        fontSize="md"
                                        color="white"
                                        w="5"
                                    >
                                        Kuantitas
                                    </Th>
                                    <Th
                                        fontWeight="extrabold"
                                        fontSize="md"
                                        color="white"
                                        w="5"
                                    >
                                        Pembayaran
                                    </Th>
                                    <Th
                                        fontWeight="extrabold"
                                        fontSize="md"
                                        color="white"
                                        w="5"
                                    >
                                        Total
                                    </Th>
                                    <Th
                                        fontWeight="extrabold"
                                        fontSize="md"
                                        color="white"
                                        w="5"
                                    >
                                        Status
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody verticalAlign={"top"}>
                                {isLoading ? (
                                    <Tr>
                                        <Td colSpan={9} textAlign="center">
                                            <Skeleton
                                                bg={"blue.500"}
                                                height="20px"
                                                width="100%"
                                            />
                                        </Td>
                                    </Tr>
                                ) : transactions.data.length == 0 ? (
                                    <Tr>
                                        <Td colSpan={9} textAlign="center">
                                            No data found
                                        </Td>
                                    </Tr>
                                ) : (
                                    transactions.data.map(
                                        (transaction, index) => (
                                            <Tr
                                                key={transaction.uuid}
                                                borderBottomWidth="1px"
                                            >
                                                <Td>{calculateIndex(index)}</Td>
                                                <Td>
                                                    {
                                                        transaction.nomor_pemesanan
                                                    }
                                                </Td>
                                                <Td>{transaction.tanggal}</Td>
                                                <Td>{transaction.user.nama}</Td>
                                                <Td>
                                                    {
                                                        transaction
                                                            .destination_price
                                                            .destination.nama
                                                    }{" "}
                                                    -{" "}
                                                    {
                                                        transaction
                                                            .destination_price
                                                            .nama
                                                    }
                                                </Td>
                                                <Td>
                                                    {transaction.quantitas}{" "}
                                                    Orang
                                                </Td>
                                                <Td>
                                                    {transaction.wallet_id
                                                        ? transaction.wallet
                                                              .nama_bank
                                                        : "-"}
                                                </Td>
                                                <Td>
                                                    {transaction.total_custom}
                                                </Td>
                                                <Td
                                                    display={"flex"}
                                                    flexDirection={"column"}
                                                    gap={4}
                                                >
                                                    <div>
                                                        {!transaction.wallet_id &&
                                                            transaction.status ==
                                                                0 && (
                                                                <Badge
                                                                    colorScheme="red"
                                                                    variant="solid"
                                                                >
                                                                    Belum Bayar
                                                                </Badge>
                                                            )}
                                                        {transaction.wallet_id &&
                                                            transaction.status ==
                                                                0 && (
                                                                <Badge
                                                                    colorScheme="yellow"
                                                                    variant="solid"
                                                                >
                                                                    Pending
                                                                </Badge>
                                                            )}
                                                        {transaction.wallet_id &&
                                                            transaction.status ==
                                                                1 && (
                                                                <Badge
                                                                    colorScheme="green"
                                                                    variant="solid"
                                                                >
                                                                    Sukses
                                                                </Badge>
                                                            )}
                                                        {transaction.wallet_id &&
                                                            transaction.status ==
                                                                2 && (
                                                                <Badge
                                                                    colorScheme="red"
                                                                    variant="solid"
                                                                >
                                                                    Gagal
                                                                </Badge>
                                                            )}
                                                    </div>

                                                    <Button
                                                        colorScheme="green"
                                                        size="sm"
                                                        mr={2}
                                                        as={Link}
                                                        href={`/transaction/${transaction.nomor_pemesanan}`}
                                                    >
                                                        <Icon
                                                            as={CheckCircleIcon}
                                                            mr={2}
                                                        />
                                                        Cek Status
                                                    </Button>
                                                </Td>
                                            </Tr>
                                        )
                                    )
                                )}
                            </Tbody>
                        </Table>
                    </TableContainer>
                    <Flex
                        gap={4}
                        flexDir={{ base: "column", md: "row" }}
                        justifyContent={{ base: "center", md: "space-between" }}
                        alignItems="center"
                        mt={4}
                    >
                        <Text color="gray.500" fontSize="sm">
                            Showing {transactions.from ?? 0} to{" "}
                            {transactions.to ?? 0} of {transactions.total ?? 0}
                        </Text>
                        <Pagination links={transactions.links ?? []} />
                    </Flex>
                </CardBody>
            </Card>
        </AdminLayout>
    );
};

export default Transaction;
