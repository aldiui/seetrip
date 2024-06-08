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

const TopOwnersTable = ({ data }) => {
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
                            Jumlah Pembeli
                        </Th>
                        <Th fontWeight="extrabold" fontSize="md" color="white">
                            Total Rupiah
                        </Th>
                    </Tr>
                </Thead>
                <Tbody verticalAlign={"top"}>
                    {data.length === 0 ? (
                        <Tr>
                            <Td colSpan={4} textAlign="center">
                                No data found
                            </Td>
                        </Tr>
                    ) : (
                        data.map((owner, index) => (
                            <Tr key={index}>
                                <Td>{index + 1}</Td>
                                <Td>{owner.owner_name}</Td>
                                <Td>{owner.total_tickets} Tiket</Td>
                                <Td>
                                    Rp. {owner.total_revenue.toLocaleString()}
                                </Td>
                            </Tr>
                        ))
                    )}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default TopOwnersTable;
