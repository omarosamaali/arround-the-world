"use client";
import { Country } from "./types";
import { useEffect, useState, useCallback } from "react";

const useFetchData = (slug: string) => {
    const [countryList, setCountryList] = useState<Country[]>([]);
    const [filterdCountryList, setFilterdCountryList] = useState<Country[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [country, setCountry] = useState<Country | null>(null);

    const getItemFromLocalStorage = useCallback(() => {
        const countryListFromLocalStorage = localStorage.getItem("countryList");
        if (countryListFromLocalStorage) {
            const parsedItems: Country[] = JSON.parse(countryListFromLocalStorage);
            setCountryList(parsedItems);
            setFilterdCountryList(parsedItems);
        } else {
            fetchCountryList();
        }
    }, []);

    useEffect(() => {
        getItemFromLocalStorage();
    }, [getItemFromLocalStorage]);

    const fetchCountry = async (slug: string) => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${slug}`);
            const data: Country[] = await response.json();
            setCountry(data[0]);
        } catch (e) {
            console.log(e);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (!slug) return;
        fetchCountry(slug);
    }, [slug]);

    const fetchCountryList = async () => {
        setIsLoading(true);
        try {
            const res = await fetch("https://restcountries.com/v3.1/all");
            const data: Country[] = await res.json();
            setCountryList(data);
            setFilterdCountryList(data);
            localStorage.setItem("countryList", JSON.stringify(data));
        } catch (err) {
            setIsError(true);
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    return { countryList, filterdCountryList, isLoading, isError, setFilterdCountryList, country };
};

export default useFetchData;