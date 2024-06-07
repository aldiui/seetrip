import React from "react";
import {
    Avatar,
    Card,
    CardBody,
    CardHeader,
    Grid,
    GridItem,
    Heading,
    Text,
} from "@chakra-ui/react";

const DataProfile = ({ user }) => {
    console.log(user);
    return (
        <Card p={2} maxW={"md"} w="full" h={["auto", "full"]}>
            <CardHeader>
                <Heading size="md" fontWeight="bold" textAlign={"center"}>
                    Profile
                </Heading>
            </CardHeader>
            <CardBody textAlign={"center"}>
                <Avatar
                    flex={1}
                    name={user?.nama}
                    src={user.avatar ? `${user.avatar}` : null}
                    size="2xl"
                    alt="Avatar"
                    mb={4}
                    mx={"auto"}
                />
                <Grid gap={4} p={4} textAlign={"left"}>
                    <GridItem colSpan={1}>
                        <Text fontWeight="bold">Nama:</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text>{user.nama}</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text fontWeight="bold">Email:</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text>{user.email}</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text fontWeight="bold">No HP:</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text>{user.phone ? user.phone : "-"}</Text>
                    </GridItem>
                </Grid>
            </CardBody>
        </Card>
    );
};

export default DataProfile;
