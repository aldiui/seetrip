import React from "react";
import {
    Table,
    TableContainer,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Skeleton,
    Button,
    Flex,
    Icon,
    Image,
    Avatar,
} from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import { EyeIcon, PencilSquareIcon } from "@heroicons/react/16/solid";
import DeleteButton from "./DeleteButton";

const DataTable = ({ columns, data, isLoading, calculateIndex }) => {
    return (
        <TableContainer>
            <Table variant="striped" colorScheme="gray" width="full">
                <Thead>
                    <Tr
                        borderBottom={"2px"}
                        borderColor={"blue.500"}
                        bg={"blue.500"}
                    >
                        {columns.map((column, index) => (
                            <Th
                                key={index}
                                fontWeight="extrabold"
                                fontSize="md"
                                color="white"
                                w={column.width || "auto"}
                            >
                                {column.header}
                            </Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody verticalAlign={"top"}>
                    {isLoading ? (
                        <Tr>
                            <Td colSpan={columns.length} textAlign="center">
                                <Skeleton
                                    bg={"blue.500"}
                                    height="20px"
                                    width="100%"
                                />
                            </Td>
                        </Tr>
                    ) : data.length === 0 ? (
                        <Tr>
                            <Td colSpan={columns.length} textAlign="center">
                                No data found
                            </Td>
                        </Tr>
                    ) : (
                        data.map((row, index) => (
                            <Tr key={row.uuid} borderBottomWidth="1px">
                                {columns.map((column, colIndex) => (
                                    <Td key={colIndex}>
                                        {column.accessor === "Aksi" ? (
                                            <Flex>
                                                {column.show ? (
                                                    <Button
                                                        colorScheme="blue"
                                                        size="sm"
                                                        mr={2}
                                                        as={Link}
                                                        href={`${column.uri}/${row.uuid}`}
                                                    >
                                                        <Icon
                                                            as={EyeIcon}
                                                            mr={2}
                                                        />
                                                        Detail
                                                    </Button>
                                                ) : null}
                                                <Button
                                                    colorScheme="yellow"
                                                    size="sm"
                                                    mr={2}
                                                    as={Link}
                                                    href={`${column.uri}/${row.uuid}/edit`}
                                                >
                                                    <Icon
                                                        as={PencilSquareIcon}
                                                        mr={2}
                                                    />
                                                    Edit
                                                </Button>
                                                <DeleteButton
                                                    uri={`${column.uri}/${row.uuid}`}
                                                />
                                            </Flex>
                                        ) : column.accessor ===
                                          "AvatarCategory" ? (
                                            <>
                                                <Image
                                                    size="md"
                                                    src={`${row.avatar}`}
                                                    alt="Avatar"
                                                    w="60"
                                                />
                                            </>
                                        ) : column.accessor === "AvatarUser" ? (
                                            <>
                                                <Avatar
                                                    size={"lg"}
                                                    name={row.nama}
                                                    src={
                                                        row.avatar
                                                            ? `${row.avatar}`
                                                            : null
                                                    }
                                                    alt="avatar"
                                                />
                                            </>
                                        ) : column.accessor === "user.nama" ? (
                                            row.user.nama
                                        ) : column.accessor ===
                                          "category.nama" ? (
                                            row.category.nama
                                        ) : column.accessor ? (
                                            row[column.accessor]
                                        ) : (
                                            calculateIndex(index)
                                        )}
                                    </Td>
                                ))}
                            </Tr>
                        ))
                    )}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default DataTable;
