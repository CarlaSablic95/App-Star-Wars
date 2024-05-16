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

    return (
        <main className="pb-24">
            <section className="h-full pb-44">
                <h1 className="text-center py-5 text-3xl font-medium mb-4">Character details</h1>
                <div className="container-fluid">
                    <div className="grid grid-cols-1">
                        {
                            <div className="flex flex-col sm:justify-center md:flex-row md:justify-evenly">
                            <div className="flex justify-center px-10 md:px-0">
                                <Image 
                                    src={ Personaje }
                                    className="w-96 drop-shadow-lg rounded-3xl mb-5"
                                    alt="Character image generic"
                                />
                            </div>
                            <div>
                            <h4 className="text-lg font-semibold text-center md:text-start">Name:  <span className="font-normal">{ characterDetail.name }</span></h4>
                            <h4 className="text-lg font-semibold text-center md:text-start">Eye color: <span className="font-normal"> { characterDetail.eye_color }</span></h4>
                            <h4 className="text-lg font-semibold text-center md:text-start">Birthyear: <span className="font-normal"> { characterDetail.birth_year }</span></h4>
                            <h4 className="text-lg font-semibold text-center md:text-start">Hair color: <span className="font-normal"> { characterDetail.hair_color }</span></h4>
                            <h4 className="text-lg font-semibold text-center md:text-start">Height: <span className="font-normal"> { characterDetail.height }</span></h4>
                            <h4 className="text-lg font-semibold text-center md:text-start">Skin color: <span className="font-normal"> { characterDetail.skin_color }</span></h4>
                            <h4 className="text-lg font-semibold text-center md:text-start">Mass: <span className="font-normal"> { characterDetail.mass}</span></h4>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}