import Image from "next/image";
import Personaje from "../../../../public/img/personajes.jpeg";

const getCharacterDetails = async (id) => {
    try {
        const response = await fetch(`https://swapi.dev/api/people/${id}`);
        return response.json();
    } catch(error) {
        console.log(error);
    }
}

export default async function Character ({ params }) {
    const { characterId } = params;
    const characterDetail = await getCharacterDetails(characterId);

    console.log("CHARACTER: ", characterDetail)

    return (
        <section className="h-full">
            <h1 className="text-center">Character details</h1>
            <div className="container">
                <div className="grid grid-cols-1">
                    {
                        <div className="flex justify-evenly">
                        <div>
                            <Image 
                                src={ Personaje }
                                className="w-80"
                            />
                        </div>
                        <div>
                            <h2>Name: { characterDetail.name }</h2>
                            <h2>Eye color: { characterDetail.eye_color }</h2>
                            <h2>Birth year: { characterDetail.birth_year }</h2>
                            <h2>Hair color: { characterDetail.hair_color }</h2>
                            <h2>Height: { characterDetail.height }</h2>
                            <h2>Skin color: { characterDetail.skin_color }</h2>
                            <h2>Mass: { characterDetail.mass}</h2>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </section>
    )
}