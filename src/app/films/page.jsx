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
      <section className="container mx-auto px-10 lg:px-20">
      <h1 className="text-center py-5 text-3xl font-medium">Films</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          { filmsData.results.map((film, id) => (
            <Link href={`films/${id + 1}`} key={ id }>
              <div className="card-film rounded-3xl drop-shadow-lg sm:columns-1 md:columns-2  inline-block align-middle">
                <div className="">
                  <Image 
                    src={ Portada }
                    alt="Films image generic"
                    className="w-100 rounded-t-3xl md:rounded-3xl"
                  />
                </div>
                <div className="p-5 text-center">
                  <h4 className="text-slate-50"><strong>Title:</strong> { film.title }</h4>
                  <p className="text-white"><strong>Episode number: </strong> { film.episode_id }</p>
                </div>
              </div>
          </Link>))}
        </div>
      </section>
    
    </main>
  );
}