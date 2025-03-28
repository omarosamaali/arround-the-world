"use client"

import Select, { SingleValue } from "react-select";
import { Dispatch, SetStateAction } from "react";
import { Country } from "@/app/types";
const option = [
    {
        value: "All Region", label: "All Region"
    },
    {
        value: "europe", label: "Europe"
    },
    {
        value: "asia", label: "Asia"
    },
    {
        value: "africa", label: "Africa"
    },
    {
        value: "oceania", label: "Oceania"
    },
    {
        value: "antarctic", label: "Antarctic"
    },
]


interface Props {
    countryList: Country[];
    filterdCountryList: Dispatch<SetStateAction<Country[]>>;
}

const Region = ({ countryList, filterdCountryList } : Props ) => {
    const handleRegionChange = (e: SingleValue<{ value: string; label: string; }>) => {
        if (!e) return; // Handle case when e is null

        if (e.value === "All Region") {
            filterdCountryList(countryList);
        } else {
            filterdCountryList(countryList.filter((c) => c.region === e.label));
        }
    };

    return (
        <div className="relative w-full md:max-w-md">
            <Select
                defaultValue={option[0]}
                onChange={handleRegionChange}
                options={option}
                classNames={{
                    input: () => "w-full dark:!text-gray-100",
                    singleValue: () => "dark:!text-gray-100",
                    option: ({ isSelected, isFocused }) =>
                        `px-4 py-2 cursor-pointer transition-all
                ${isSelected ? "bg-gray-300 dark:bg-gray-600 !text-white" : ""}
                ${isFocused ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white" : ""}`,
                    control: () => " h-12 md:h-14 !rounded-full flex h-12 items-center justify-between !border-0 pl-4 pr-2 shadow bg-white dark:bg-gray-800",
                    indicatorSeparator: () => "hidden",
                    menu: () => "bg-gray-100 dark:bg-gray-800 dark:text-gray-100 text-gray-800 !border-0 border-gray-300 dark:border-gray-700 rounded-md shadow-lg",
                    menuList: () => "bg-gray-100 dark:bg-gray-800 dark:text-gray-100 text-gray-800",
                    dropdownIndicator: () => "text-gray-700 dark:text-gray-300",
                    placeholder: () => "text-gray-400 dark:text-gray-500",
                }}
            />
        </div>
    )
}

export default Region