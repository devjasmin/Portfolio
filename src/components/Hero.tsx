import profilePicture from "../assets/Hero-Section/profile_picture.jpg";
import pictureTechs from "../assets/Hero-Section/picture_techs.jpg";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function Hero() {
  return (
    <>
      <section className="bg-slate-950 py-6">
        <div className="container mx-auto text-left mr-5 mt-10 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-20 mt-20 gap-10 text-center ">
            <div className="text-left">
              <div className="">
                <img
                  src={profilePicture}
                  alt="Profilbild"
                  className="rounded-full ml-5 h-40 w-40 lg:h-52 lg:w-52"
                />
                <p className="text-blue-500 m-5 mb-5 text-xl lg:text-3xl">
                  Hi, ich bin <span className="font-bold">Jasmin</span>
                </p>
              </div>
              <h1 className="text-white text-4xl mb-5 py-3 lg:text-6xl">
                Ihre neue
                <span className="font-bold bg-linear-to-r from-red-600 via-green-700 to-blue-500 text-4xl mb-5 py-3 text-transparent bg-clip-text lg:text-6xl px-1">
                  Frontend Developerin
                </span>
              </h1>
              <div className="text-slate-300 mt-7 py-4 mr-3 lg: mb-5 lg:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                dolorem obcaecati pariatur cumque quidem in fugit libero
                necessitatibus velit beatae perferendis, rerum minus? Ea,
                tempore magni laborum a dolore quos dicta culpa? Nesciunt ipsum,
                tenetur hic aliquid minus nobis ea saepe quae obcaecati porro
                quo corrupti expedita! Nesciunt.
              </div>
            </div>
            <div className="text-rechts">
              <img
                src={pictureTechs}
                alt="Profilbild"
                className="h-52 w-auto mx-auto mb-10 lg:mt-30 lg:h-90"
              />
            </div>
          </div>
          <div className="flex gap-10 p-4">
            <FaGithub className="bg-white h-8 w-8 rounded-xl lg:h-10 lg:w-10 fill-slate-950 transition hover:cursor-pointer" />
            <FaLinkedin className="bg-white h-8 w-8 rounded-xl fill-slate-850 transition hover:cursor-pointer" />
            <MdMail className="bg-white h-8 w-8 rounded-xl fill-slate-950 transition hover:cursor-pointer" />
          </div>
          <a
            href="#"
            className="flex items-center w-52 gap-2 bg-blue-500 text-black mt-10 py-3 px-4 mb-2 rounded-3xl hover:cursor-pointer lg:text-xl lg:w-60"
          >
            Projekte ansehen
            <ArrowDownIcon className="h-5 w-5" />
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
