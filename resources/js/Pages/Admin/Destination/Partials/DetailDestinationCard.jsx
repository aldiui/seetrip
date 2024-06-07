import React from "react";
import { Link } from "@inertiajs/react";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Grid,
    GridItem,
    Heading,
    Icon,
    Text,
} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";

const DetailDestinationCard = ({ destination }) => {
    return (
        <Card maxW={"full"} w="full" p={2} h={"auto"}>
            <CardHeader
                pb={0}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Heading size="md" fontWeight="bold">
                    Detail Destinasi
                </Heading>
                <Button
                    as={Link}
                    href={"/admin/destination"}
                    colorScheme="gray"
                    size={"sm"}
                    ml={3}
                >
                    <Icon as={ArrowLeftIcon} mr={2} />
                    Kembali
                </Button>
            </CardHeader>
            <CardBody>
                <Grid
                    templateColumns={["1fr", "1fr 1fr"]}
                    gap={4}
                    textAlign={"left"}
                >
                    <GridItem colSpan={1}>
                        <Text fontWeight="bold">Nama :</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text>{destination.nama}</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text fontWeight="bold">Deskripsi :</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text>{destination.deskripsi}</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text fontWeight="bold">Pemilik :</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text>{destination.user.nama}</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text fontWeight="bold">Kategori :</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text>{destination.category.nama}</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text fontWeight="bold">Lokasi :</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text>{destination.lokasi}</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text fontWeight="bold">Link Video Youtube :</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text>{destination.link_video_youtube}</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text fontWeight="bold">Link Youtube :</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text>{destination.link_youtube}</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text fontWeight="bold">Link Facebook :</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text>{destination.link_facebook}</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text fontWeight="bold">Link Instagram :</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text>{destination.link_instagram}</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text fontWeight="bold">Link Tiktok :</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text>{destination.link_tiktok}</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text fontWeight="bold">Rating :</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text>{destination.rating}</Text>
                    </GridItem>
                </Grid>
            </CardBody>
        </Card>
    );
};

export default DetailDestinationCard;
