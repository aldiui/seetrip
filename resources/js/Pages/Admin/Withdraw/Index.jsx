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
import AdminLayout from "../../../Layouts/AdminLayout ";
import Pagination from "../../../Components/Pagination";
import { CheckCircleIcon, PlusIcon } from "@heroicons/react/16/solid";

const Withdraw = ({ auth, sessions, withdraws }) => {
    const perpage = useRef(withdraws.per_page);
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
            "/admin/withdraw",
            pickBy({ perpage: perpage.current, search: search }),
            {
                onFinish: () => setIsLoading(false),
                preserveScroll: true,
                preserveState: true,
            }
        );
    };

    const calculateIndex = (index) => withdraws.from + index;

    return (
        <AdminLayout auth={auth} sessions={sessions}>
            <Head title="Withdraw" />
            <Card p={2} w="full" h={["auto", "full"]}>
                <CardHeader
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <Heading size="md" fontWeight="bold">
                        Data Withdraw
                    </Heading>
                    <Button
                        as={Link}
                        href="/withdraw/create"
                        colorScheme="green"
                        size={"sm"}
                    >
                        <Icon as={PlusIcon} name="plus" mr={2} /> Tambah
                    </Button>
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
                                        Nominal
                                    </Th>
                                    <Th
                                        fontWeight="extrabold"
                                        fontSize="md"
                                        color="white"
                                        w="5"
                                    >
                                        Biaya Admin
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
                                        Status
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody verticalAlign={"top"}>
                                {isLoading ? (
                                    <Tr>
                                        <Td colSpan={7} textAlign="center">
                                            <Skeleton
                                                bg={"blue.500"}
                                                height="20px"
                                                width="100%"
                                            />
                                        </Td>
                                    </Tr>
                                ) : withdraws.data.length === 0 ? (
                                    <Tr>
                                        <Td colSpan={7} textAlign="center">
                                            No data found
                                        </Td>
                                    </Tr>
                                ) : (
                                    withdraws.data.map((withdraw, index) => (
                                        <Tr
                                            key={withdraw.uuid}
                                            borderBottomWidth="1px"
                                        >
                                            <Td>{calculateIndex(index)}</Td>
                                            <Td>{withdraw.nomor_pembayaran}</Td>
                                            <Td>{withdraw.tanggal}</Td>
                                            <Td>{withdraw.nominal_custom}</Td>
                                            <Td>{withdraw.admin_custom}</Td>
                                            <Td>{withdraw.wallet.nama_bank}</Td>
                                            <Td
                                                display={"flex"}
                                                flexDirection={"column"}
                                                gap={4}
                                            >
                                                <div>
                                                    {withdraw.status == 0 && (
                                                        <Badge
                                                            colorScheme="yellow"
                                                            variant="solid"
                                                        >
                                                            Pending
                                                        </Badge>
                                                    )}
                                                    {withdraw.status == 1 && (
                                                        <Badge
                                                            colorScheme="green"
                                                            variant="solid"
                                                        >
                                                            Sukses
                                                        </Badge>
                                                    )}
                                                </div>
                                                <Button
                                                    colorScheme="green"
                                                    size="sm"
                                                    mr={2}
                                                    as={Link}
                                                    href={`/admin/withdraw/${withdraw.nomor_pembayaran}`}
                                                >
                                                    <Icon
                                                        as={CheckCircleIcon}
                                                        mr={2}
                                                    />
                                                    Cek Status
                                                </Button>
                                            </Td>
                                        </Tr>
                                    ))
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
                            Showing {withdraws.from ?? 0} to {withdraws.to ?? 0}{" "}
                            of {withdraws.total ?? 0}
                        </Text>
                        <Pagination links={withdraws.links ?? []} />
                    </Flex>
                </CardBody>
            </Card>
        </AdminLayout>
    );
};

export default Withdraw;
