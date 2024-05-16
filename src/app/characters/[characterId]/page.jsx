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
        <section className="h-full pb-44">
            <h1 className="text-center py-5 text-3xl font-medium mb-4">Character details</h1>
            <div className="container-fluid">
                <div className="grid grid-cols-1">
                    {
                        <div className="flex justify-evenly">
                        <div>
                            <Image 
                                src={ Personaje }
                                className="w-96 drop-shadow-lg rounded-t-3xl md:rounded-3xl"
                                alt="Character image generic"
                            />
                        </div>
                        <div>
                        <h4 className="text-lg font-semibold">Name:  <span className="font-normal">{ characterDetail.name }</span></h4>
                        <h4 className="text-lg font-semibold">Eye color: <span className="font-normal"> { characterDetail.eye_color }</span></h4>
                        <h4 className="text-lg font-semibold">Birthyear: <span className="font-normal"> { characterDetail.birth_year }</span></h4>
                        <h4 className="text-lg font-semibold">Hair color: <span className="font-normal"> { characterDetail.hair_color }</span></h4>
                        <h4 className="text-lg font-semibold">Height: <span className="font-normal"> { characterDetail.height }</span></h4>
                        <h4 className="text-lg font-semibold">Skin color: <span className="font-normal"> { characterDetail.skin_color }</span></h4>
                        <h4 className="text-lg font-semibold">Mass: <span className="font-normal"> { characterDetail.mass}</span></h4>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </section>
    )
}