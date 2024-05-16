import Link from "next/link";
import Image from "next/image";
import Personajes from "../../../public/img/personajes.jpeg";
import Gender from "../components/Gender";

export async function getCharacters() {
  try {
    const response = await fetch("https://swapi.dev/api/people");
    return response.json();
  } catch (error) {
      console.log(error);
  }
}

export default async function Characters() {
  const charactersData = await getCharacters();
  console.log("CHARACTERS: ", charactersData);

  return (
    <main className="min-h-screen p-4">
      <section className="container mx-auto px-10 lg:px-20">
        <h1 className="text-center py-5 text-3xl font-medium">Characters</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          { 
            charactersData.results.map((character, id) => (
              <div className="">
                <Link href={`/characters/${id + 1}`}>
                  <div className="card rounded-3xl drop-shadow-lg sm:columns-1 md:columns-2  inline-block align-middle">
                  <div className="">
                    <Image 
                      src={ Personajes }
                      alt="Imagen genérica para las películas"
                      className="w-100 rounded-t-3xl md:rounded-3xl"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h4 className="text-slate-50"><strong>Name:</strong> { character.name }</h4>
                    <p className="text-white"><strong>Eye color: </strong> { character.eye_color }</p>
                    <Gender key={ id } id={ character.gender } />
                  </div>
                </div>
                  </Link>
              </div>
            ))
            
          }
        </div>
      </section>
      
    </main>
  );
}