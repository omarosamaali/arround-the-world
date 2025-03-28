"use client";
import Image from "next/image";
import useFetchData from "../../useFetchData";
// import { Metadata } from 'next';

// Define the page type compatible with Next.js dynamic routing
type CountryPageProps = {
    params: {
        slug: string
    };
};

export default function CountryPage({ params }: CountryPageProps) {
    const { country, isLoading, isError } = useFetchData(params.slug ?? "");

    const handleBack = () => {
        window.history.back();
    };

    return (
        <>
            {isLoading && <p className="text-center text-2xl">Loading Data...</p>}
            {isError && <p className="text-center text-2xl">Something went wrong...</p>}

            <div className="bg-white rounded-lg p-3 w-fit cursor-pointer" onClick={handleBack}>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="call-made">
                        <path
                            id="Shape"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.8922 3.53553L7.07071 4.71405L3.18162 8.60313L18.0309 8.60313L18.0309 10.253L3.18162 10.253L7.07071 14.1421L5.8922 15.3206L-0.000355655 9.42809L5.8922 3.53553Z"
                            fill="#111827"
                        />
                    </g>
                </svg>
            </div>

            <div className="flex flex-col md:flex-row gap-[70px] mt-10">
                <div className="w-full md:w-[50%]">
                    <Image
                        src={country?.flags?.svg ?? "/default-flag.svg"}
                        className="w-full md:min-w-[500px]"
                        alt={`Flag of ${country?.name?.common}`}
                        width={500}
                        height={300}
                    />
                </div>
                <div className="w-full md:w-[50%]">
                    <h2 className="font-bold text-4xl text-gray-800">{country?.name?.common}</h2>
                    <div className="grid grid-cols-2 gap-4 justify-between mt-7">
                        <div className="mt-5">
                            <div>
                                <span className="font-semibold">Native Name: </span>
                                <span>{country?.name?.common}</span>
                            </div>
                            <div className="mt-5">
                                <span className="font-semibold">Population: </span>
                                <span>{(country?.population ?? 0).toLocaleString()}</span>
                            </div>
                            <div className="mt-5">
                                <span className="font-semibold">Sub Region: </span>
                                <span>{country?.subregion ?? "Unknown"}</span>
                            </div>
                            <div className="mt-5">
                                <span className="font-semibold">Capital: </span>
                                <span>{country?.capital?.[0] ?? "N/A"}</span>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div>
                                <span className="font-semibold">Top Level Domain: </span>
                                <span>{country?.tld?.join(", ") ?? "N/A"}</span>
                            </div>
                            <div className="mt-5">
                                <span className="font-semibold">Currencies: </span>
                                <span>
                                    {country?.currencies
                                        ? Object.values(country.currencies)
                                            .map(({ name, symbol }) => `${name} (${symbol})`)
                                            .join(", ")
                                        : "N/A"}
                                </span>
                            </div>
                            <div className="mt-5">
                                <span className="font-semibold">Languages: </span>
                                <span>
                                    {country?.languages
                                        ? Object.values(country.languages).join(", ")
                                        : "N/A"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// Optional: Metadata generation
export async function generateMetadata({ params }: CountryPageProps) {
    return {
        title: `${params.slug} - Country Details`
    };
}