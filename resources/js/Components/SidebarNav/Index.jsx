import React from "react";
import {
    Box,
    useColorModeValue,
    Drawer,
    DrawerContent,
    useDisclosure,
} from "@chakra-ui/react";
import {
    ArrowDownCircleIcon,
    BookOpenIcon,
    CurrencyDollarIcon,
    HomeIcon,
    MapPinIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    UserGroupIcon,
    WalletIcon,
} from "@heroicons/react/16/solid";
import SidebarContent from "./SidebarContent";
import MobileNav from "./MobileNav";

const SidebarNav = ({ children, auth }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const userNav = [
        { name: "Dashboard", icon: HomeIcon, href: "/user" },
        { name: "Destinasi", icon: MapPinIcon, href: "/user/destination" },
        { name: "Wallet", icon: WalletIcon, href: "/user/wallet" },
        {
            name: "Transaksi",
            icon: CurrencyDollarIcon,
            href: "/user/transaction",
        },

        { name: "Profile", icon: UserCircleIcon, href: "/user/profile" },
    ];

    const adminNav = [
        { name: "Dashboard", icon: HomeIcon, href: "/admin" },
        { name: "User", icon: UserGroupIcon, href: "/admin/user" },
        { name: "Kategori", icon: BookOpenIcon, href: "/admin/category" },
        { name: "Wallet", icon: WalletIcon, href: "/admin/wallet" },
        {
            name: "Transaksi",
            icon: CurrencyDollarIcon,
            href: "/admin/transaction",
        },

        { name: "Destinasi", icon: MapPinIcon, href: "/admin/destination" },
        { name: "Profile", icon: UserCircleIcon, href: "/admin/profile" },
    ];

    const listNav = auth.user.role === "admin" ? adminNav : userNav;
    return (
        <Box
            w={"full"}
            minH="100vh"
            bg={useColorModeValue("gray.100", "gray.900")}
        >
            <SidebarContent
                listNav={listNav}
                onClose={() => onClose}
                display={{ base: "none", md: "block" }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent
                        listNav={listNav}
                        auth={auth}
                        onClose={onClose}
                    />
                </DrawerContent>
            </Drawer>
            <MobileNav auth={auth} onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p="4">
                {children}
            </Box>
        </Box>
    );
};

export default SidebarNav;
