import {API} from "@/assets/api";
import {CharacterType, ResponseType} from "@/assets/rick-and-morty-api";


export async function getData() {
    const res = await fetch('https://rickandmortyapi.com/api/character', {})

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const Characters = async () => {
    try {
        const data = await getData();

        const characters = data.results.map((ch: any) => (
            <div key={ch.id}>{ch.name}</div>
        ))

        return (
            <div>
                Characters
                {characters}
            </div>
        );
    } catch (error) {
        return <div>Error: {(error as Error).message}</div>;
    }
};

export default Characters;