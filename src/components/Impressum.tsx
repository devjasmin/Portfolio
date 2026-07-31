import { Link } from "react-router-dom";

function impressum() {
  return (
    <>
      <div className=" bg-slate-950 py-6">
        <Link
          to="/"
          className="text-blue-500 text-xl px-6 text-center lg:text-3xl"
        >
          Zurück
        </Link>
        <h3 className="text-4xl text-white mb-4 font-bold text-center mt-5 lg:text-5xl">
          Impressum
        </h3>

        <p className="text-xl text-white mb-4 text-center">Jasmin Longa</p>
        <p className="text-xl text-white mb-4 text-center">
          Webermühle 15, <br /> 5432 Neuenhof
        </p>
        <p className="text-xl text-white mb-6 px-6 text-center ">
          j.longa@gmx.ch
        </p>
      </div>
    </>
  );
}

export default impressum;
