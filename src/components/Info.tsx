import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Contact from "./Contact";

function Info() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 pb-20 bg-slate-950 px-10">
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
        <section className="bg-slate-950 py-10 px-6 lg:order-1">
          <div className="text-white text-3xl text-left lg: py-4">
            {" "}
            Noch Fragen?
          </div>
          <p className="text-white py-5 lg:py-3 text-xl">
            Oder möchten Sie mehr über meine Arbeit erfahren? Schreiben Sie mir
            gerne oder besuchen Sie meine Profile.
          </p>
          <div>
            <Contact />
          </div>
        </section>
      </div>
    </>
  );
}

export default Info;
