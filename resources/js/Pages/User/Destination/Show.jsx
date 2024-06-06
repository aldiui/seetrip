import React from "react";
import { Head } from "@inertiajs/react";
import DetailDestinationCard from "./Partials/DetailDestinationCard";
import {
    Card,
    CardBody,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
} from "@chakra-ui/react";
import AdminLayout from "../../../Layouts/AdminLayout ";
import DestinationFacility from "./Facility/Index";
import DestinationPrice from "./Price/Index";
import DestinationVoucher from "./Voucher/Index";
import DestinationImage from "./Image/Index";

const ShowDestination = ({ auth, sessions, destination }) => {
    return (
        <AdminLayout auth={auth} sessions={sessions}>
            <Head title="Detail Destinasi" />
            <DetailDestinationCard destination={destination} />
            <Card maxW={"full"} w="full" mt={4} p={2} h={"auto"}>
                <CardBody>
                    <Tabs
                        variant="enclosed"
                        overflowX="auto"
                        whiteSpace="nowrap"
                    >
                        <TabList>
                            <Tab
                                _selected={{
                                    fontWeight: "extrabold",
                                    color: "blue.500",
                                    borderBottomColor: "blue.500",
                                    borderBottomWidth: "3px",
                                }}
                                _focus={{ outline: "none" }}
                            >
                                Gambar
                            </Tab>
                            <Tab
                                _selected={{
                                    fontWeight: "extrabold",
                                    color: "blue.500",
                                    borderBottomColor: "blue.500",
                                    borderBottomWidth: "3px",
                                }}
                                _focus={{ outline: "none" }}
                            >
                                Fasilitas
                            </Tab>
                            <Tab
                                _selected={{
                                    fontWeight: "extrabold",
                                    color: "blue.500",
                                    borderBottomColor: "blue.500",
                                    borderBottomWidth: "3px",
                                }}
                                _focus={{ outline: "none" }}
                            >
                                Harga
                            </Tab>
                            <Tab
                                _selected={{
                                    fontWeight: "extrabold",
                                    color: "blue.500",
                                    borderBottomColor: "blue.500",
                                    borderBottomWidth: "3px",
                                }}
                                _focus={{ outline: "none" }}
                            >
                                Voucher
                            </Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <DestinationImage destination={destination} />
                            </TabPanel>
                            <TabPanel>
                                <DestinationFacility
                                    destination={destination}
                                />
                            </TabPanel>
                            <TabPanel>
                                <DestinationPrice destination={destination} />
                            </TabPanel>
                            <TabPanel>
                                <DestinationVoucher destination={destination} />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </CardBody>
            </Card>
        </AdminLayout>
    );
};

export default ShowDestination;
