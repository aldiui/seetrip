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

const DataProfile = ({ auth }) => {
    return (
        <Card p={2} maxW={["full", "sm"]} w="full" h={["auto", "full"]}>
            <CardHeader>
                <Heading size="md" fontWeight="bold" textAlign={"center"}>
                    Profile
                </Heading>
            </CardHeader>
            <CardBody textAlign={"center"}>
                <Avatar
                    flex={1}
                    name={auth.user?.nama}
                    src={auth.user.avatar ? `${auth.user.avatar}` : null}
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
                        <Text>{auth.user.nama}</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text fontWeight="bold">Email:</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text>{auth.user.email}</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text fontWeight="bold">No HP:</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text>{auth.user.phone ? auth.user.phone : "-"}</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text fontWeight="bold">Saldo:</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text>{auth.user.saldo ?? 0}</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text fontWeight="bold">Wallet:</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text>{auth.user.wallet ?? 0}</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text fontWeight="bold">Destinasi :</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text>{auth.user.destinasi ?? 0}</Text>
                    </GridItem>
                </Grid>
            </CardBody>
        </Card>
    );
};

export default DataProfile;
