"use client"
import { Country } from "@/app/types";

import CountryCard from './CountryCard'
import NoDataFound from './NoDataFound';

const CoutnryList = ({ data }: { data: Country[]}) => {
    return (
        <div className='justify-between gap-x-[70px] gap-y-12 md:mt-12 mt-8 grid grid-cols-1
                md:grid-cols-[repeat(2,minmax(0,_auto))] lg:grid-cols-[repeat(3,minmax(0,_auto))] xl:grid-cols-[repeat(4,minmax(0,_auto))]  lg:gap-y-[70px]'>
            {data && data.length ? data.map((country: Country) => (
                <CountryCard
                    key={country.name.official}
                    name={country.name}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                    flags={country.flags}
                />
            )) : <NoDataFound />}
        </div>
    )
}
export default CoutnryList