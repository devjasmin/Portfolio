import profilePicture from "../assets/Hero-Section/profile_picture.jpg";
import pictureTechs from "../assets/Hero-Section/picture_techs.jpg";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import Contact from "./Contact";

function Hero() {
  return (
    <>
      <section className="bg-slate-950 py-6">
        <div className="container mx-auto text-left px-5 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-20 gap-10 text-center ">
            <div className="text-left">
              <div className="">
                <img
                  src={profilePicture}
                  alt="Profilbild"
                  className="rounded-full ml-5 mb-5 h-40 w-40 lg:h-52 lg:w-52"
                />
                <p className="text-blue-500 mb-5 text-xl lg:text-3xl">
                  Hi, ich bin <span className="font-bold">Jasmin</span>
                </p>
              </div>
              <h1 className="text-white text-3xl mb-5 py-3 lg:text-5xl">
                Ihre neue{" "}
                <span className="text-3xl font-bold bg-linear-to-r from-green-700 via-green-300 to-blue-500 text-transparent bg-clip-text lg:text-5xl px-1">
                  Frontend Entwicklerin
                </span>
              </h1>
              <p className="text-slate-300 mt-7 py-4 mr-3 lg:mb-5 lg:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                dolorem obcaecati pariatur cumque quidem in fugit libero
                necessitatibus velit beatae perferendis, rerum minus? Ea,
                tempore magni laborum a dolore quos dicta culpa? Nesciunt ipsum,
                tenetur hic aliquid minus nobis ea saepe quae obcaecati porro
                quo corrupti expedita! Nesciunt.
              </p>
            </div>
            <div className="">
              <img
                src={pictureTechs}
                alt="Bild von Frontend-Technologien: HTML, CSS, JavaScript, TypeScript, React und Git"
                className="h-52 w-auto mx-auto lg:mt-30 lg:h-90"
              />
            </div>
          </div>
          <div>
            <Contact />
          </div>

          <a
            href="#"
            aria-label="GitHub-Profil von Jasmin öffnen"
            className="flex items-center w-52 gap-2 bg-blue-500 text-white font-bold mt-10 py-3 px-4 mb-2 rounded-2xl hover:cursor-pointer lg:text-xl lg:w-60"
          >
            Projekte ansehen
            <ArrowDownIcon className="h-5 w-5 " />
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
