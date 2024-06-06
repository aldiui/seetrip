import { Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import MobileNavItem from "./MobileNavItem";

const MobileNav = ({ listNav }) => {
    return (
        <Stack
            bg={useColorModeValue("white", "gray.800")}
            p={4}
            display={{ md: "none" }}
        >
            {listNav.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

export default MobileNav;
