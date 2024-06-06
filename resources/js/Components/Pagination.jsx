import React from "react";
import { HStack, Button } from "@chakra-ui/react";
import { Link } from "@inertiajs/react";

const Pagination = ({ links }) => {
    return (
        <HStack spacing={2} py={1} justify="center">
            {links.map((link, index) => (
                <Button
                    as={Link}
                    key={index}
                    href={link.url}
                    preserveScroll={true}
                    preserveState={true}
                    size="sm"
                    fontWeight="semibold"
                    fontSize="xs"
                    px={4}
                    py={2}
                    borderRadius="md"
                    bg={link.active ? "blue.500" : "white"}
                    color={link.active ? "white" : "blue.500"}
                    border="1px"
                    borderColor={link.active ? "transparent" : "blue.300"}
                    _hover={{
                        bg: link.active ? "blue.600" : "blue.50",
                    }}
                    _focus={{
                        outline: "none",
                        ring: "2px",
                        ringColor: ".500",
                        ringOffset: "2px",
                    }}
                    _active={{
                        bg: link.active ? "blue.700" : "blue.50",
                    }}
                    transition="ease-in-out duration-150"
                >
                    {link.label}
                </Button>
            ))}
        </HStack>
    );
};

export default Pagination;
