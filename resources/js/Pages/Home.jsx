import React from "react";
import { Head } from "@inertiajs/react";
import AppLayout from "../Layouts/AppLayout";
import CategorySection from "../Components/CategorySection";
import DestinationSection from "../Components/DestinationSection";

const Example = ({ auth, sessions, categories, destinations }) => {
    return (
        <AppLayout auth={auth} sessions={sessions}>
            <Head title="Beranda" />
            <CategorySection categories={categories} />
            <DestinationSection destinations={destinations} />
        </AppLayout>
    );
};

export default Example;
