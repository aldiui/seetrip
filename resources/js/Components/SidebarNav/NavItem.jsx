import { Flex, Icon } from "@chakra-ui/react";
import { Link, usePage } from "@inertiajs/react";
import React from "react";

const NavItem = ({ icon, children, href, ...rest }) => {
    const { url } = usePage();
    const isActive = url === href;

    return (
        <Link
            href={href}
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
        >
            <Flex
                align="center"
                p="2"
                mx="4"
                mb={2}
                borderRadius="lg"
                role="group"
                cursor="pointer"
                bg={isActive ? "blue.500" : "transparent"}
                color={isActive ? "white" : "inherit"}
                _hover={{
                    bg: "blue.500",
                    color: "white",
                }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: "white",
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

export default NavItem;
