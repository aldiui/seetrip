import React from "react";
import { Box, Button, Flex, Icon, Stack } from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Button
            as={Link}
            href={href}
            role={"group"}
            display={"block"}
            p={2}
            rounded={"md"}
            variant={"ghost"}
            _hover={{ bg: useColorModeValue("blue.50", "gray.900") }}
        >
            <Stack direction={"row"} align={"center"}>
                <Box>
                    <Text
                        transition={"all .3s ease"}
                        _groupHover={{ color: "blue.500" }}
                        fontWeight={500}
                    >
                        {label}
                    </Text>
                    <Text size={"sm"}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={"all .3s ease"}
                    transform={"translateX(-10px)"}
                    opacity={0}
                    _groupHover={{
                        opacity: "100%",
                        transform: "translateX(0)",
                    }}
                    justify={"flex-end"}
                    align={"center"}
                    flex={1}
                >
                    <Icon
                        color={"blue.500"}
                        w={5}
                        h={5}
                        as={ChevronRightIcon}
                    />
                </Flex>
            </Stack>
        </Button>
    );
};

export default DesktopSubNav;
