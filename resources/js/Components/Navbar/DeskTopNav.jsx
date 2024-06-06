import React from "react";
import {
    Box,
    Button,
    Stack,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
} from "@chakra-ui/react";
import DesktopSubNav from "./DesktopSubNav";
import { Link, usePage } from "@inertiajs/react";

const DesktopNav = ({ listNav }) => {
    const { url } = usePage();
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("gray.800", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");

    return (
        <Stack direction={"row"} spacing={4}>
            {listNav.map((navItem) => {
                const isActive = url === navItem.href;
                return (
                    <Box key={navItem.label}>
                        <Popover trigger={"hover"} placement={"bottom-start"}>
                            <PopoverTrigger>
                                <Button
                                    as={Link}
                                    p={2}
                                    href={navItem.href ?? "#"}
                                    size={"sm"}
                                    variant={"ghost"}
                                    fontWeight={isActive ? "extrabold" : 500}
                                    color={isActive ? "blue.500" : linkColor}
                                    _hover={{
                                        textDecoration: "none",
                                        color: linkHoverColor,
                                    }}
                                >
                                    {navItem.label}
                                </Button>
                            </PopoverTrigger>

                            {navItem.children && (
                                <PopoverContent
                                    border={0}
                                    boxShadow={"xl"}
                                    bg={popoverContentBgColor}
                                    p={4}
                                    rounded={"xl"}
                                    minW={"sm"}
                                >
                                    <Stack>
                                        {navItem.children.map((child) => (
                                            <DesktopSubNav
                                                key={child.label}
                                                {...child}
                                            />
                                        ))}
                                    </Stack>
                                </PopoverContent>
                            )}
                        </Popover>
                    </Box>
                );
            })}
        </Stack>
    );
};

export default DesktopNav;
