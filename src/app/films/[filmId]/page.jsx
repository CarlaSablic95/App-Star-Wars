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

return (
    <section className="h-full">
        <h1 className="text-center py-5 text-3xl font-medium mb-4">Film details</h1>
        <div className="container-fluid">
            <div className="grid grid-cols-1">
                <div className="flex justify-evenly">
                    <div>
                    <Image src={ Portada } className="w-96 drop-shadow-lg rounded-t-3xl md:rounded-3xl"/>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Title: <span className="font-normal">{ filmDetail.title }</span></h4>
                        <h4 className="text-lg font-semibold">Episode number: <span className="font-normal">{ filmDetail.episode_id }</span></h4>                         
                        <h4 className="text-lg font-semibold">Director: <span className="font-normal">{ filmDetail.director }</span></h4>
                        <h4 className="text-lg font-semibold mb-4">Characters: </h4>

                                                        <div className="columns-4 ps-3">
                                                            <div>
                                                   { 
                                                    filmDetail.characters.map((character, index) => (
                                                                <div key={ index } className="pe-4">
                                                                    <Image
                                                                        src={ Personajes }
                                                                        className="w-24 drop-shadow-lg rounded-3xl"
                                                                        alt="Characters image generic"
                                                                    />
                                                                    <h4 className="text-lg font-semibold"><span className="font-normal">Name: </span> { character.name }</h4>
                                                                    <Link href="" className="text-red-500">URL</Link>
                                                                </div>

))}
</div>
                                                            </div>
                                                        </div>
                                      
             </div>
          </div>
        </div>
    </section>
)
}