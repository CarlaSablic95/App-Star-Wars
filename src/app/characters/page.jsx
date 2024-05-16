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
      <h1>CHARACTERS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        { 
          charactersData.results.map((character, id) => (
            <div className="">
              <Link href={`/characters/${id + 1}`}>
                <div className="bg-green-300 text-center">
                  <div className="flex justify-evenly">
                    <Image
                      src={ Personajes }
                      alt="Imagen genérica para personajes"
                      className="w-80"
                      />
                  </div>
                  <h2 key={ id }>Nombre: { character.name }</h2>
                  <h2 key={ id }>Color de ojos: { character.eye_color }</h2>
                  <Gender key={ id } id={ character.gender } />
                </div>
                </Link>
            </div>
          ))
          
        }
      </div>
      
    </main>
  );
}