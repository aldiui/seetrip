import React from "react";
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Menu,
    MenuButton,
    Avatar,
    MenuList,
    MenuItem,
    MenuDivider,
    VStack,
    Container,
} from "@chakra-ui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { Link } from "@inertiajs/react";
import DesktopNav from "./DeskTopNav";
import MobileNav from "./MobileNav";

const Navbar = ({ auth, sessions }) => {
    const { isOpen, onToggle } = useDisclosure();

    const listNav = [
        {
            label: "Beranda",
            href: "/",
        },
        {
            label: "Wisata",
            href: "/wisata",
        },
    ];

    return (
        <Box
            w={"full"}
            position="fixed"
            top={0}
            zIndex={100}
            borderBottom={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.900")}
            bg={useColorModeValue("white", "gray.800")}
            color={useColorModeValue("gray.600", "white")}
        >
            <Container maxW={"container.xl"}>
                <Flex
                    minH={"60px"}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    align={"center"}
                >
                    <Flex
                        flex={{ base: 1, md: "auto" }}
                        ml={{ base: -2 }}
                        display={{ base: "flex", md: "none" }}
                    >
                        <IconButton
                            onClick={onToggle}
                            icon={
                                isOpen ? (
                                    <Icon as={XMarkIcon} w={5} h={5} />
                                ) : (
                                    <Icon as={Bars3Icon} w={5} h={5} />
                                )
                            }
                            variant={"ghost"}
                            aria-label={"Toggle Navigation"}
                        />
                    </Flex>
                    <Flex
                        flex={{ base: 1 }}
                        justify={{ base: "center", md: "start" }}
                        w={"full"}
                    >
                        <Text
                            textAlign={useBreakpointValue({
                                base: "center",
                                md: "left",
                            })}
                            fontWeight={"extrabold"}
                            fontSize={"xl"}
                            color="blue.500"
                            mr={{ base: 20, md: 0 }}
                        >
                            SeeTrip.id
                        </Text>

                        <Flex display={{ base: "none", md: "flex" }} ml={10}>
                            <DesktopNav listNav={listNav} />
                        </Flex>
                    </Flex>
                    <Stack>
                        {!auth.user ? (
                            <Flex
                                flex={{ base: 1, md: 0 }}
                                justify={"flex-end"}
                                direction={"row"}
                                gap={3}
                            >
                                <Button
                                    as={Link}
                                    size="sm"
                                    fontWeight={400}
                                    variant="ghost"
                                    href="/login"
                                >
                                    Login
                                </Button>

                                <Button
                                    as={Link}
                                    display={{
                                        base: "none",
                                        md: "inline-flex",
                                    }}
                                    size="sm"
                                    fontWeight={600}
                                    color="white"
                                    bg="blue.500"
                                    href="/register"
                                    _hover={{ bg: "blue.400" }}
                                >
                                    Register
                                </Button>
                            </Flex>
                        ) : (
                            <Flex
                                alignItems={"center"}
                                justify={"flex-end"}
                                direction={"row"}
                                gap={"3"}
                            >
                                <Text
                                    display={{ base: "none", md: "flex" }}
                                    fontWeight={"bold"}
                                >
                                    {auth.user.nama}
                                </Text>
                                <Menu>
                                    <MenuButton
                                        as={Button}
                                        rounded={"full"}
                                        variant={"link"}
                                        cursor={"pointer"}
                                        minW={0}
                                    >
                                        <Avatar
                                            size={"sm"}
                                            name={auth.user?.nama}
                                            src={
                                                auth.user.avatar
                                                    ? `${auth.user.avatar}`
                                                    : null
                                            }
                                            alt="avatar"
                                        />
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem
                                            as={Link}
                                            href={
                                                auth.user.role == "user"
                                                    ? "/profile"
                                                    : "/admin/profile"
                                            }
                                        >
                                            Profile
                                        </MenuItem>
                                        <MenuDivider />
                                        <MenuItem
                                            as={Link}
                                            fontWeight={"semibold"}
                                            href="/logout"
                                            color={"red.500"}
                                        >
                                            Logout
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </Flex>
                        )}
                    </Stack>
                </Flex>

                <Collapse in={isOpen} animateOpacity>
                    <MobileNav listNav={listNav} />
                </Collapse>
            </Container>
        </Box>
    );
};

export default Navbar;
