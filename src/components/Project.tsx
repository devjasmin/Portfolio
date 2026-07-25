function Project() {
  return (
    <>
      <section className="bg-slate-950 min-h-screen">
        <div className="container mx-auto text-left mr-5 mt-10 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-20 mt-20 gap-20 text-center ">
            <div className="">
              <div className="text-white font-bold text-3xl mt-10 mb-10">
                Meine Projekte
              </div>
              <p className="text-slate-300">
                Hier sind einige Auszüge aus meinen besten Arbeiten. Sodass Sie
                sich ein Bild meiner Fähigkeiten und Erfahrungen machen können.
              </p>

              <div className="text-white">Bild</div>
              <div className="text-white">Moderne Wetter App</div>
              <div className="text-white">devjasmin.github.io/wetter-app</div>
              <div className="text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem optio natus at aut. Rerum quis tenetur harum totam
                incidunt a.
              </div>
              <div className="technologien">
                <div className="button-container">
                  <button className="text-slate-300">HTML</button>
                  <button className="text-slate-300">JavaScript</button>
                  <button className="text-slate-300">Vite</button>
                  <button className="text-slate-300">SCSS</button>
                  <button className="text-slate-300">BEM</button>
                  <button className="text-slate-300">WeatherAPI</button>
                </div>
                <div className="button-code">
                  Code ansehen + IconPfeil rechts
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
