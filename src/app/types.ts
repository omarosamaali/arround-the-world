// types.ts
export interface Country {
    name: {
        official: string;
        common: string;
    };
    population: number;
    region: string;
    capital: string;
    subregion: string;
    tld: string[];
    currencies: { [key: string]: { name: string } & { symbol: string } };
    languages: { [key: string]: string };
    flags: {
        svg: string;
    };
}
