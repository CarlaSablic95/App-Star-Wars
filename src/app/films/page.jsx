import Link from "next/link";
import Image from "next/image";
import Portada from "../../../public/img/portada.jpeg";

{/* Consumo de API STARWARS : FILMS*/}
const getFilms = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/films");
    return response.json();
  } catch(error) {
    console.log(error)
  }
}

export default async function Films() {
  const filmsData = await getFilms();
  console.log("FILMS: ", filmsData);
  
  return (
    <main className="pb-24">
      <section className="container mx-auto">
      <h1 className="text-center py-5">FILMS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          { filmsData.results.map((film, id) => (
            <Link href={`films/${id + 1}`} key={ id }>
              <div className="bg-slate-700">
                <div>
                  <Image 
                    src={ Portada }
                    alt="Imagen genérica para las películas"
                  />
                </div>
                  <h4 className="text-slate-50 text-center">Title: { film.title }</h4>
                  <p className="text-white text-center"><strong>N° episode: { film.episode_id } </strong></p>
              </div>
          </Link>))}
        </div>
      </section>
    
    </main>
  );
}