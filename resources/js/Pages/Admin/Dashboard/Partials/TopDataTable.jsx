import React from "react";
import {
    Box,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";

const TopDataTable = ({ data }) => {
    return (
        <TableContainer>
            <Table variant="striped" colorScheme="gray" width="full">
                <Thead>
                    <Tr borderBottom="2px" borderColor="blue.500" bg="blue.500">
                        <Th fontWeight="extrabold" fontSize="md" color="white">
                            #
                        </Th>
                        <Th fontWeight="extrabold" fontSize="md" color="white">
                            Nama Pemilik
                        </Th>
                        <Th fontWeight="extrabold" fontSize="md" color="white">
                            Kategori Wisata
                        </Th>
                        <Th fontWeight="extrabold" fontSize="md" color="white">
                            Nama Wisata
                        </Th>
                        <Th fontWeight="extrabold" fontSize="md" color="white">
                            Banyak Tiket Terjual
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.length === 0 ? (
                        <Tr>
                            <Td colSpan={7} textAlign="center">
                                No data found
                            </Td>
                        </Tr>
                    ) : (
                        data.map((owner, index) => (
                            <Tr key={index}>
                                <Td>{index + 1}</Td>
                                <Td>{owner.owner_name}</Td>
                                <Td>{owner.category_name}</Td>
                                <Td>{owner.destination_name}</Td>
                                <Td>{owner.total_tickets}</Td>
                            </Tr>
                        ))
                    )}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default TopDataTable;
