import React from "react";
import { Head } from "@inertiajs/react";
import { Flex } from "@chakra-ui/react";
import DataProfile from "./Partials/DataProfile";
import UpdateProfile from "./Partials/UpdateProfile";
import UpdateProfilePassword from "./Partials/UpdateProfilePassword";
import AdminLayout from "../../../Layouts/AdminLayout ";

const Profile = ({ auth, sessions, user }) => {
    return (
        <AdminLayout auth={auth} sessions={sessions}>
            <Head title="Profile" />
            <Flex gap={4} flexDirection={{ base: "column", md: "row" }}>
                <DataProfile user={user} />
                <Flex gap={4} w="full" flexDirection="column">
                    <UpdateProfile auth={auth} />
                    <UpdateProfilePassword />
                </Flex>
            </Flex>
        </AdminLayout>
    );
};

export default Profile;
