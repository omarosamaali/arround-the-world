"use client"

import Image from "next/image"
import Link from "next/link"
interface Props {
    name: { official: string; common: string };
    population: number;
    region: string;
    capital: string;
    flags: { svg: string };
}
const CountryCard = ({ name, population, region, capital, flags } : Props) => {
    return (
        <>
            <Link href={`/country/${name.common}`}>
                <div className="rounded-lg p-3 bg-white dark:bg-gray-800 h-full  lg:w-[264px]">
                    <Image
                        alt={`Flag of ${name.official}`}
                        src={flags.svg}
                        width={264}
                        height={160}
                        className="rounded-lg mb-4 object-contain w-full h-[160px]"
                    />
                    <div className="pl-2">
                        <h2 className="font-bold text-lg mb-2">{name.common}</h2>
                        <div>
                            <span className="font-semibold text-md">Population: </span>
                            <span className="font-light">{population.toLocaleString()}</span>
                        </div>
                        <div className="my-2">
                            <span className="font-semibold text-md">Region: </span>
                            <span className="font-light">{region}</span>
                        </div>
                        <div>
                            <span className="font-semibold text-md">Capital: </span>
                            <span className="font-light">{capital}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default CountryCard