import { ArrowRightIcon, AtSymbolIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function info() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <section className=" bg-slate-800 py-6 rounded-xl">
          <h2 className="text-3xl text-white font-bold py-5 text-center ">
            Weitere Erfahrungen
          </h2>
          <p className="text-xl text-white lg: text-center">
            Auf meinem GitHub-Profil finden Sie weitere Projekte, die ich im
            Laufe der Zeit erstellt habe. Dort können Sie sich auch von meinem
            Code überzeugen.
          </p>
          <div className="flex items-center w-52 gap-2 bg-blue-500 text-black mt-10 py-4 px-6 rounded-3xl hover:cursor-pointer lg:text-xl">
            GitHub ansehen
            <ArrowRightIcon className="h-5 w-5" />
          </div>
        </section>
        <section className="bg-slate-950 py-6">
          <div className="text-white text-4xl text-left m-5"> Noch Fragen?</div>
          <p className="text-white text-xl">
            Zögern Sie nicht mich zu kontaktieren. Nutzen Sie dafür gerne die
            unten aufgeführte E-Mailadresse oder schauen Sie auf meinem
            Social-Media-Profilen vorbei!
          </p>
          <div className="">
            <div className="email text-white m-8 text-left text-xl ">
              <a
                href="mailto:j.longa@gmx.ch"
                className="flex items-center gap-1"
              >
                <AtSymbolIcon className="h-5 w-5" />
                j.longa@gmx.ch
              </a>
            </div>
          </div>
          <div className="flex gap-4 p-4">
            <FaGithub className="bg-white h-8 w-8 rounded-xl lg:h-10 lg:w-10 hover:cursor-pointer" />
            <FaLinkedin className="bg-white h-8 w-8 rounded-xl hover:cursor-pointer" />
            <MdMail className="bg-white h-8 w-8 rounded-xl hover:cursor-pointer" />
          </div>
        </section>
      </div>
    </>
  );
}

export default info;
