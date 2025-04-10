"use client";
import { FormEvent } from 'react';
import { Dispatch, SetStateAction } from "react";
import { Country } from "@/app/types";


interface Props {
    countryList: Country[];
    filterdCountryList: Dispatch<SetStateAction<Country[]>>;
}

const searchInput = ({ countryList, filterdCountryList }: Props) => {
    const handleSearchInput = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        const searchTerm = (target.elements.namedItem("search") as HTMLInputElement).value;
        const filterCountry = !searchTerm || searchTerm === "" ? countryList : 
            countryList.filter((c) => c.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
        filterdCountryList(filterCountry)
    }

    return (
        <form onSubmit={handleSearchInput} className="relative w-full md:max-w-md">
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                className="absolute left-3 top-1/2 -translate-y-1/2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="search">
                    <path
                        id="Shape"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
                        fill="#848484"
                    />
                </g>
            </svg>
            <input
                type="text"
                name="search"
                placeholder="Search..."
                className="bg-white p-4 pl-12 shadow w-full md:max-w-md h-12 md:h-14 dark:bg-gray-800 rounded-full"
            />
        </form>
    )
}
export default searchInput