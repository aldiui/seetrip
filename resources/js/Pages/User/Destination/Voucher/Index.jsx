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
    Badge,
} from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import { PencilSquareIcon, PlusIcon } from "@heroicons/react/16/solid";
import DeleteButton from "../../../../Components/DeleteButton";

const DestinationVoucher = ({ destination }) => {
    return (
        <>
            <Flex justifyContent={"space-between"} alignItems={"center"} mb={4}>
                <Heading size="md" fontWeight="bold">
                    Data Voucher
                </Heading>
                <Button
                    as={Link}
                    href={
                        "/destination-voucher/create?kode=" + destination.uuid
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
                                w={5}
                            >
                                Kode
                            </Th>
                            <Th
                                fontWeight="extrabold"
                                fontSize="md"
                                color="white"
                            >
                                Diskon
                            </Th>
                            <Th
                                fontWeight="extrabold"
                                fontSize="md"
                                color="white"
                            >
                                Kuota
                            </Th>
                            <Th
                                fontWeight="extrabold"
                                fontSize="md"
                                color="white"
                            >
                                Tanggal Kadaluarsa
                            </Th>
                            <Th
                                fontWeight="extrabold"
                                fontSize="md"
                                color="white"
                            >
                                Status
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
                        {!destination.destination_vouchers ||
                        destination.destination_vouchers.length === 0 ? (
                            <Tr>
                                <Td colSpan={7} textAlign="center">
                                    No data found
                                </Td>
                            </Tr>
                        ) : (
                            destination.destination_vouchers.map(
                                (vocuher, index) => (
                                    <Tr key={index}>
                                        <Td>{index + 1}</Td>
                                        <Td>{vocuher.kode}</Td>
                                        <Td>{vocuher.diskon_custom}</Td>
                                        <Td>{vocuher.kuota}</Td>
                                        <Td>
                                            {vocuher.tanggal_kadaluarsa_custom}
                                        </Td>
                                        <Td>
                                            {vocuher.status == 1 ? (
                                                <Badge colorScheme="green">
                                                    Aktif
                                                </Badge>
                                            ) : (
                                                <Badge colorScheme="red">
                                                    Tidak Aktif
                                                </Badge>
                                            )}
                                        </Td>
                                        <Td>
                                            <Flex
                                                justifyContent={"space-between"}
                                                alignItems={"center"}
                                            >
                                                <Link
                                                    href={
                                                        "/destination-voucher/" +
                                                        vocuher.uuid +
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
                                                        "/destination-voucher/" +
                                                        vocuher.uuid
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

export default DestinationVoucher;
