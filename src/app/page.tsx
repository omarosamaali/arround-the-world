"use client";
import SearchInput from "../components/SearchInput";
import Region from "../components/Region";
import CountryList from "../components/CountryList";
import useFetchData from "./useFetchData";
// interface Props {
//   countriesList: any;
// }
export default function Home() {
  const { countryList, filterdCountryList, isLoading, isError, setFilterdCountryList } = useFetchData("");
  
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-black dark:text-white">
      <div className=" flex-col sm:flex-row gap-5 sm:gap-5 flex justify-between items-center">
        <SearchInput countryList={countryList} filterdCountryList={setFilterdCountryList} />
        <Region countryList={countryList} filterdCountryList={setFilterdCountryList} />
      </div>
      <div>
        {isLoading && <p className="text-center text-2xl">Loading Data...</p>}
        {isError && <p className="text-center text-2xl">Some thing went wrong...</p>}
        <CountryList data={filterdCountryList} />
      </div>
    </div>
  );
}
