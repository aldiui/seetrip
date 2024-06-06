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

const DestinationFacility = ({ destination }) => {
    return (
        <>
            <Flex justifyContent={"space-between"} alignItems={"center"} mb={4}>
                <Heading size="md" fontWeight="bold">
                    Data Fasilitas
                </Heading>
                <Button
                    as={Link}
                    href={
                        "/admin/destination-facility/create?kode=" +
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
                                Fasilitas
                            </Th>
                            <Th
                                fontWeight="extrabold"
                                fontSize="md"
                                color="white"
                            >
                                Tipe
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
                        {!destination.destination_facilities ||
                        destination.destination_facilities.length === 0 ? (
                            <Tr>
                                <Td colSpan={4} textAlign="center">
                                    No data found
                                </Td>
                            </Tr>
                        ) : (
                            destination.destination_facilities.map(
                                (facility, index) => (
                                    <Tr key={index}>
                                        <Td>{index + 1}</Td>
                                        <Td>{facility.nama}</Td>
                                        <Td>{facility.tipe}</Td>
                                        <Td>
                                            <Flex
                                                justifyContent={"space-between"}
                                                alignItems={"center"}
                                            >
                                                <Link
                                                    href={
                                                        "/admin/destination-facility/" +
                                                        facility.uuid +
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
                                                        "/admin/destination-facility/" +
                                                        facility.uuid
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

export default DestinationFacility;
