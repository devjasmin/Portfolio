import profilePicture from "../assets/profile_picture.jpg";
import pictureTechs from "../assets/picture_techs.jpg";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function Hero() {
  return (
    <>
      <section>
        <img src={profilePicture} alt="Profilbild" className="h-40 w-40" />
        <p className="text-amber-300 m-3.5">Hi, ich bin Jasmin</p>
        <p className="bg-linear-to-r from-red-600 via-green-700 to-blue-500 text-5xl mb-5 rounded-xl py-3 scroll-px-1.5">
          Ihr Frontend Developer
        </p>
        <br />
        <span className="text-white py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          dolorem obcaecati pariatur cumque quidem in fugit libero
          necessitatibus velit beatae perferendis, rerum minus? Ea, tempore
          magni laborum a dolore quos dicta culpa? Nesciunt ipsum, tenetur hic
          aliquid minus nobis ea saepe quae obcaecati porro quo corrupti
          expedita! Nesciunt.
        </span>
        <img
          src={pictureTechs}
          alt="Profilbild"
          className="h-52 w-52 py-3.5 mx-auto mb-10"
        />
        <div className="flex gap-4 border p-2">
          <FaGithub className="bg-white h-10 w-10 rounded-xl" />
          <FaLinkedin className="bg-white h-10 w-10 rounded-xl" />
          <MdMail className="bg-white h-10 w-10 rounded-xl" />
        </div>
        <br />
        <button className="flex items center bg-blue-600 text-white py-4 px-8 rounded-3xl w-6l">
          Projekte ansehen
          <ArrowDownIcon className="h-5 w-5" />
        </button>
      </section>
    </>
  );
}

export default Hero;
