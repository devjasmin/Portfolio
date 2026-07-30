import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function Info() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 pb-20 bg-slate-950 px-20">
        <section className="w-full bg-slate-800 rounded-xl shadow-xl text-center px-5 py-5 lg:order-2">
          <h2 className="text-3xl text-slate-200 font-bold py-4 text-center ">
            Weitere Erfahrungen
          </h2>
          <p className="text-slate-200 lg:text-center ">
            Auf meinem GitHub-Profil finden Sie weitere Projekte, die ich im
            Laufe der Zeit erstellt habe. Dort können Sie sich auch von meinem
            Code überzeugen.
          </p>
          <a
            href="#"
            className="flex w-52 gap-2 bg-blue-500 text-black mt-6 py-4 px-7 mx-auto rounded-3xl hover:cursor-pointer lg:text-xl lg:mt-10 lg:py-4 lg:px-4 "
          >
            GitHub ansehen
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </section>
        <section className="bg-slate-950 py-6 px-6 lg:order-1">
          <div className="text-white text-3xl text-left lg:py-4">
            {" "}
            Noch Fragen?
          </div>
          <p className="text-white py-5 lg:py-3 text-xl">
            Oder möchten Sie mehr über meine Arbeit erfahren? Schreiben Sie mir
            gerne oder besuchen Sie meine Profile.
          </p>
          <div className="mt-5 mb-4 flex gap-5">
            <a
              href="https://github.com/devjasmin"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub-Profil von Jasmin öffnen"
              className="rounded-xl lg:h-10 lg:w-10 fill-slate-950 transition hover:scale-110 cursor-pointer"
            >
              <FaGithub className="bg-white h-8 w-8" />
            </a>

            <a
              href="DEIN LINKEDIN-LINK"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn-Profil von Jasmin öffnen"
              className="rounded-xl lg:h-10 lg:w-10 fill-slate-850 transition hover:scale-110 cursor-pointer"
            >
              <FaLinkedin className="bg-white h-8 w-8" />
            </a>

            <a
              href="mailto: j.longa@gmx.ch"
              aria-label="E-Mail an Jasmin schreiben"
              className="rounded-xl lg:h-10 lg:w-10 fill-slate-850 transition hover:scale-110 cursor-pointer"
            >
              <MdMail className="bg-white h-8 w-8" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Info;
