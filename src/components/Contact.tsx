import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function Contact() {
  return (
    <div className="mt-5 flex gap-5">
      <a
        href="https://github.com/devjasmin"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub-Profil von Jasmin öffnen"
        className="rounded-xl lg:h-10 lg:w-10 fill-slate-950 transition hover:scale-110 cursor-pointer"
      >
        <FaGithub className="text-white h-8 w-8" />
      </a>

      <a
        href="linkedin-jasmin"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn-Profil von Jasmin öffnen"
        className="rounded-xl lg:h-10 lg:w-10 fill-slate-850 transition hover:scale-110 cursor-pointer"
      >
        <FaLinkedin className="text-white h-8 w-8" />
      </a>

      <a
        href="mailto: j.longa@gmx.ch"
        aria-label="E-Mail an Jasmin schreiben"
        className="rounded-xl lg:h-10 lg:w-10 fill-slate-850 transition hover:scale-110 cursor-pointer"
      >
        <MdMail className="text-white h-8 w-8" />
      </a>
    </div>
  );
}

export default Contact;
