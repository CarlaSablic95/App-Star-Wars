import "./globals.css";
import Image from "next/image";
import Logo from "../../public/img/logo.gif";
import Link from "next/link";

export const metadata = {
  title: "StarWars",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-teal-500">
          <nav>
            <Link href="/">
              <Image
                src={ Logo }
                alt="Logo de StarWars"
                className="w-48"
                />
            </Link>

          </nav>
        </header>
        {children}
        </body>
    </html>
  );
}
