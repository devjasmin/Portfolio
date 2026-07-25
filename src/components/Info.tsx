import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function info() {
  return (
    <>
      <div className=" bg-black">
        <h2 className="text-3xl text-white mb-4 font-bold  ">
          Weitere Erfahrungen
        </h2>
        <p className="text-xl text-white font-bold">
          Auf meinem GitHub-Profil finden Sie weitere Projekte, die ich im Laufe
          der Zeit erstellt habe. Dort können Sie sich auch von meinem Code
          überzeugen.
        </p>
        <div className="flex items-center w-52 gap-2 bg-blue-500 text-black mt-10 py-4 px-8 rounded-3xl hover:cursor-pointer lg:text-xl">
          GitHub ansehen
          <ArrowRightIcon className="h-5 w-5" />
        </div>
      </div>

      <div className="bg-black">
        <div className="text-white text-4xl mt-10">Noch Fragen? </div>
        <p className="text-white text-xl">
          Zögern Sie nicht mich zu kontaktieren. Nutzen Sie dafür gerne die
          unten aufgeführte E-Mailadresse oder schauen Sie auf meinem
          Social-Media-Profilen vorbei!
        </p>
        <div className="email, text-white mb-5">Icon-email j.longa@gmx.ch</div>
        <div className="flex gap-4 p-3">
          <FaGithub className="bg-white h-8 w-8 rounded-xl lg:h-10 lg:w-10 hover:cursor-pointer" />
          <FaLinkedin className="bg-white h-8 w-8 rounded-xl hover:cursor-pointer" />
          <MdMail className="bg-white h-8 w-8 rounded-xl hover:cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default info;
