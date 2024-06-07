import React from "react";
import { Head } from "@inertiajs/react";
import { Flex } from "@chakra-ui/react";
import DataProfile from "./Partials/DataProfile";
import UpdateProfile from "./Partials/UpdateProfile";
import UpdateProfilePassword from "./Partials/UpdateProfilePassword";
import AppLayout from "../../../Layouts/AppLayout";

const Profile = ({ auth, sessions, user }) => {
    return (
        <AppLayout auth={auth} sessions={sessions}>
            <Head title="Profile" />
            <Flex
                mt={"80px"}
                gap={4}
                maxW={"container.xl"}
                w={"full"}
                px={6}
                py={10}
                flexDirection={{ base: "column", md: "row" }}
            >
                <DataProfile user={user} />
                <Flex gap={4} w="full" flexDirection="column">
                    <UpdateProfile auth={auth} />
                    <UpdateProfilePassword />
                </Flex>
            </Flex>
        </AppLayout>
    );
};

export default Profile;
