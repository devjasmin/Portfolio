import wetterApp from "../assets/Project-Section-Bilder/wetterApp.jpg";
import pizzeria from "../assets/Project-Section-Bilder/pizzeria.jpg";
import witzeApp from "../assets/Project-Section-Bilder/witzeApp.jpg";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function Project() {
  return (
    <>
      <section className="bg-slate-950 py-6">
        <div className="container mx-auto text-left mr-5 mt-10 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-20 mt-20 gap-20 text-center ">
            <div className="">
              <div className="text-white font-bold text-4xl mt-10 mb-10 lg:text-5xl">
                Meine Projekte
              </div>
              <p className="text-slate-300 text-xl lg:tex">
                Hier sind einige Auszüge aus meinen besten Arbeiten. Sodass Sie
                sich ein Bild meiner Fähigkeiten und Erfahrungen machen können.
              </p>
              <div className="card-container">
                <div className="">
                  <img
                    src={wetterApp}
                    alt="Bildauschnit von Wetter App"
                    className="bg-black mt-10 mb-5"
                  />
                </div>
                <div className="text-white text-3xl py-4">
                  Moderne Wetter App
                </div>
                <div className="text-blue-500 text-xl py-4 text-left">
                  devjasmin.github.io/wetter-app
                </div>
                <div className="text-white mb-6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolorem optio natus at aut. Rerum quis tenetur harum totam
                  incidunt a.
                </div>
                <div className="technologien">
                  <div className="button-container text-left">
                    <button className="text-white bg-slate-500 rounded-xl px-3 m-2">
                      HTML
                    </button>
                    <button className="text-white bg-slate-500 rounded-xl px-3 m-2">
                      JavaScript
                    </button>
                    <button className="text-white bg-slate-500 rounded-xl px-3 m-2">
                      Vite
                    </button>
                    <button className="text-white bg-slate-500 rounded-xl px-3 m-2">
                      SCSS
                    </button>
                    <button className="text-white bg-slate-500 rounded-xl px-3 m-2">
                      BEM
                    </button>
                    <button className="text-white bg-slate-500 rounded-xl px-3 m-2">
                      WeatherAPI
                    </button>
                  </div>
                  <div className="flex items-center w-52 gap-2 bg-blue-500 text-black mt-10 py-5 px-8 rounded-3xl hover:cursor-pointer lg:text-xl">
                    Code ansehen
                    <ArrowRightIcon className="h-5 w-5" />
                  </div>
                  <div className="">
                    <img
                      src={pizzeria}
                      alt="Bildauschnit von Pizzeria App MammaMia"
                      className="bg-black mt-10 mb-5"
                    />
                  </div>
                  <div className="text-white text-3xl py-4">
                    Pizzeria Mamma Mia
                  </div>
                  <div className="text-blue-500 text-xl py-4 text-left">
                    devjasmin.github.io/wetter-app
                  </div>
                  <div className="text-white mb-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolorem optio natus at aut. Rerum quis tenetur harum totam
                    incidunt a.
                  </div>
                  <div className="technologien">
                    <div className="button-container text-left">
                      <button className="text-white bg-slate-500 rounded-xl px-3 m-2">
                        HTML
                      </button>
                      <button className="text-white bg-slate-500 rounded-xl px-3 m-2">
                        CSS
                      </button>
                      <button className="text-white bg-slate-500 rounded-xl px-3 m-2">
                        responsives Design
                      </button>
                    </div>
                    <div className="flex items-center w-52 gap-2 bg-blue-500 text-black mt-10 py-5 px-8 rounded-3xl hover:cursor-pointer lg:text-xl">
                      Code ansehen
                      <ArrowRightIcon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="">
                    <img
                      src={witzeApp}
                      alt="Bildauschnit von lustiger Witze App"
                      className="bg-black mt-10 mb-5"
                    />
                  </div>
                  <div className="text-white text-3xl py-4">
                    Lustige Witze App
                  </div>
                  <div className="text-blue-500 text-xl py-4 text-left">
                    devjasmin.github.io/wetter-app
                  </div>
                  <div className="text-white mb-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolorem optio natus at aut. Rerum quis tenetur harum totam
                    incidunt a.
                  </div>
                  <div className="technologien">
                    <div className="button-container text-left">
                      <button className="text-white bg-slate-500 rounded-xl px-3 m-2">
                        HTML
                      </button>
                      <button className="text-white bg-slate-500 rounded-xl px-3 m-2">
                        JavaScript
                      </button>
                      <button className="text-white bg-slate-500 rounded-xl px-3 m-2">
                        Vite
                      </button>
                      <button className="text-white bg-slate-500 rounded-xl px-3 m-2">
                        SCSS
                      </button>
                      <button className="text-white bg-slate-500 rounded-xl px-3 m-2">
                        BEM
                      </button>
                      <button className="text-white bg-slate-500 rounded-xl px-3 m-2">
                        AJAX
                      </button>
                    </div>
                    <div className="flex items-center w-52 gap-1 bg-blue-500 text-black mt-10 py-4 px-8 rounded-3xl hover:cursor-pointer lg:text-xl">
                      Code ansehen
                      <ArrowRightIcon className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
