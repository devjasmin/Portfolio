import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className=" bg-slate-800 px-5 pt-4 pb-4">
        <h3 className="text-10px text-white text-center">
          <Link to="/Impressum" className="hover:text-white transition-colors">
            Impressum
          </Link>

          <span className="text-10px text-white text-center ">
            @ devjasmin 2026
          </span>
        </h3>
      </div>
    </>
  );
}

export default Footer;
