import Link from "next/link";
import Image from "next/image";
import Portada from "../../../../public/img/portada.jpeg";
import Personajes from "../../../../public/img/personajes.jpeg";

// Consumo de API STARWARS: FILM POR ID
const getFilmDetails = async (id) => {
    try {
        const response = await fetch(`https://swapi.dev/api/films/${id}`);
        return response.json();
    } catch(error) {
        console.log(error);
    }
}

const getCharactersDetails = async (id) => {
    try {
        const response = await fetch(`https://swapi.dev/api/people/`);
        const character = await response.json();
        return character.name;
    } catch(error) {
        console.log(error);
    }
}

export default async function Film ({ params }) {
    const { filmId } = params;
    const  filmDetail  = await getFilmDetails(filmId);
    console.log("ID DE EPISODIO:", filmId);
    console.log("DETALLE DE PELÍCULA:", filmDetail);

    return (
        <section className=" h-full">
            <h1 className="text-center">Film details</h1>
                <div className="container">
                    <div className="grid grid-cols-1 ">

                                <div className="flex">
                                       { <>
                                       <div>
                                    
                                            <Image 
                                                src={ Portada }
                                            />
                                            </div>
                                              
                                            <div>
                                                <h2>Title: { filmDetail.title }</h2>
                                                <h2>N° episode: { filmDetail.episode_id }</h2>
                                                <h2>Director: { filmDetail.director }</h2>
                                                <div>Characters: { 
                                                filmDetail.characters.map((character, index) => (
                                                    <div className="flex">
                                                        <div key={ index } className="ps-6">
                                                            <Image
                                                                src={ Personajes }
                                                                className="w-24"
                                                            />
                                                            <p>Name: { character.name }</p>
                                                        </div>
                                                        <div>
                                                            <Link href="" className="text-red-500">URL</Link>
                                                        </div>
                                                    </div>
                                                )) }</div>
                                        </div>
                                </> 
                                }
                               
                                </div>
                    </div>
                </div>
        </section>
    )
}