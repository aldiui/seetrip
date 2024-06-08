import React from "react";
import {
    Table,
    TableContainer,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from "@chakra-ui/react";

const TransactionsTable = ({ data }) => {
    return (
        <TableContainer>
            <Table variant="striped" colorScheme="gray" width="full">
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
                            w={5}
                        >
                            #
                        </Th>
                        <Th fontWeight="extrabold" fontSize="md" color="white">
                            Nama Pemilik
                        </Th>
                        <Th fontWeight="extrabold" fontSize="md" color="white">
                            Nama
                        </Th>
                        <Th fontWeight="extrabold" fontSize="md" color="white">
                            Destinasi
                        </Th>
                        <Th fontWeight="extrabold" fontSize="md" color="white">
                            Kategori
                        </Th>
                        <Th fontWeight="extrabold" fontSize="md" color="white">
                            Jumlah Tiket
                        </Th>
                        <Th fontWeight="extrabold" fontSize="md" color="white">
                            Total
                        </Th>
                    </Tr>
                </Thead>
                <Tbody verticalAlign={"top"}>
                    {data.length === 0 ? (
                        <Tr>
                            <Td colSpan={7} textAlign="center">
                                No data found
                            </Td>
                        </Tr>
                    ) : (
                        data.map((transaction, index) => (
                            <Tr key={index}>
                                <Td>{index + 1}</Td>
                                <Td>
                                    {
                                        transaction.destination_price
                                            .destination.user.nama
                                    }
                                </Td>
                                <Td>{transaction.user.nama}</Td>
                                <Td>
                                    {
                                        transaction.destination_price
                                            .destination.nama
                                    }{" "}
                                    - {transaction.destination_price.nama}
                                </Td>
                                <Td>
                                    {
                                        transaction.destination_price
                                            .destination.category.nama
                                    }
                                </Td>
                                <Td>{transaction.quantitas} Tiket</Td>
                                <Td>
                                    Rp.{" "}
                                    {(
                                        transaction.total_harga -
                                        transaction.diskon
                                    ).toLocaleString()}
                                </Td>
                            </Tr>
                        ))
                    )}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default TransactionsTable;
