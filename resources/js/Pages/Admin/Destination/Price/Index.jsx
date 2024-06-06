import React from "react";
import {
    Table,
    TableContainer,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    Flex,
    Icon,
    Heading,
} from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import { PencilSquareIcon, PlusIcon } from "@heroicons/react/16/solid";
import DeleteButton from "../../../../Components/DeleteButton";

const DestinationPrice = ({ destination }) => {
    return (
        <>
            <Flex justifyContent={"space-between"} alignItems={"center"} mb={4}>
                <Heading size="md" fontWeight="bold">
                    Data Harga
                </Heading>
                <Button
                    as={Link}
                    href={
                        "/admin/destination-price/create?kode=" +
                        destination.uuid
                    }
                    colorScheme="green"
                    size={"sm"}
                >
                    <Icon as={PlusIcon} name="plus" mr={2} /> Tambah
                </Button>
            </Flex>
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
                            <Th
                                fontWeight="extrabold"
                                fontSize="md"
                                color="white"
                            >
                                Nama
                            </Th>
                            <Th
                                fontWeight="extrabold"
                                fontSize="md"
                                color="white"
                            >
                                Deskripsi
                            </Th>
                            <Th
                                fontWeight="extrabold"
                                fontSize="md"
                                color="white"
                            >
                                Harga
                            </Th>
                            <Th
                                fontWeight="extrabold"
                                fontSize="md"
                                color="white"
                                w={10}
                            >
                                Aksi
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody verticalAlign={"top"}>
                        {!destination.destination_prices ||
                        destination.destination_prices.length === 0 ? (
                            <Tr>
                                <Td colSpan={5} textAlign="center">
                                    No data found
                                </Td>
                            </Tr>
                        ) : (
                            destination.destination_prices.map(
                                (price, index) => (
                                    <Tr key={index}>
                                        <Td>{index + 1}</Td>
                                        <Td>{price.nama}</Td>
                                        <Td>{price.deskripsi}</Td>
                                        <Td>{price.harga_custom}</Td>
                                        <Td>
                                            <Flex
                                                justifyContent={"space-between"}
                                                alignItems={"center"}
                                            >
                                                <Link
                                                    href={
                                                        "/admin/destination-price/" +
                                                        price.uuid +
                                                        "/edit"
                                                    }
                                                >
                                                    <Button
                                                        colorScheme="yellow"
                                                        size={"sm"}
                                                        mr={3}
                                                    >
                                                        <Icon
                                                            as={
                                                                PencilSquareIcon
                                                            }
                                                            mr={2}
                                                        />
                                                        Edit
                                                    </Button>
                                                </Link>
                                                <DeleteButton
                                                    uri={
                                                        "/admin/destination-price/" +
                                                        price.uuid
                                                    }
                                                />
                                            </Flex>
                                        </Td>
                                    </Tr>
                                )
                            )
                        )}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    );
};

export default DestinationPrice;
