import Link from "next/link";
import Image from "next/image";
import Portada from "../../public/img/portada.jpeg";
import FilmsDetails from "./films-details/page";

const showFilms = async () => {
  const response = await fetch("https://swapi.dev/api/films");
  return response.json();
}

const Home = async () => {
  {/* Consumo de API STARWARS */}

  const filmsData = await showFilms();
  console.log("FILMS: ", filmsData);
  // try {
  //   const response = await fetch("https://swapi.dev/api/films");
  //   const filmsArray = await response.json();

  //   const filmsData = filmsArray.results.map((film) => {
  //     if(film) {
  //       return film;
  //     } else {
  //       console.warn("The requested data is not available.");
  //     }
  //   })
    
  //   console.log("FILMS: ", films);

  // } catch(error) {
  //   console.error("Error: ", error);
  // }


  return (
    <main className="">
      <h1>FILMS</h1>
      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          { filmsData.results.map((film, episode_id) => (
            <Link href={ FilmsDetails }>
              <div className="bg-slate-700">
                <div>
                  <Image 
                    src={ Portada }
                  
                  />
                </div>
                  <h4 key={ episode_id } className="border-rose-500 text-slate-50 text-center">Title: { film.title }</h4>
                  <p className="text-white text-center"><strong>N° episode: { film.episode_id } </strong></p>
              </div>
          </Link>
          ))}
        </div>
      </section>
    
    </main>
  );
}

export default Home;