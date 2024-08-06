import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
      <footer className="place-items-center grid grid-cols-1 bottom-0 right-0 left-0 bg-yellow-900 text-yellow-100 mt-14">
        <div className="container max-w-full gap-4 place-items-center mb-2 flex flex-col md:grid grid-cols-3">
          <div className="mx-10">
            <NavLink to="/" className="flex items-center gap-4">
              <h1 className="font-['Arial']-light text-xl tracking-widest text-yellow-100">
                book<span className="font-bold">finder</span>
              </h1>
            </NavLink>
            <p className="flex md:w-64 text-xs">
              Bookfinder is a comprehensive search engine for books, helping users find new, used, rare, and out-of-print books globally.
            </p>
          </div>
          <div className="flex gap-8">
            <Link to="about">
              <p className="decoration-1 hover:underline">About</p>
            </Link>
            <Link to="contact">
              <p className="decoration-1 hover:underline">Contact</p>
            </Link>
            <Link to="help">
              <p className="decoration-1 hover:underline">Help</p>
            </Link>
            <Link to="terms">
              <p className="decoration-1 hover:underline">Terms</p>
            </Link>
            <Link to="policy">
              <p className="decoration-1 hover:underline">Policy</p>
            </Link>
          </div>
          <div className="-mr-4">
            <p className="ml-12 py-4 md:py-4">CONNECT</p>
            <div className="flex mr-28 md:flex gap-4 size-12">
              <div>
                <a href="https://www.instagram.com/" target="_blank">
                  <FaInstagram className="w-5 h-5"></FaInstagram>
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/" target="_blank">
                  <FaFacebook className="w-5 h-5"></FaFacebook>
                </a>
              </div>
              <div>
                <a href="https://www.x.com/" target="_blank">
                  <FaTwitter className="w-5 h-5"></FaTwitter>
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/" target="_blank">
                  <FaLinkedin className="w-5 h-5"></FaLinkedin>
                </a>
              </div>
              <div>
                <a href="https://www.github.com/" target="_blank">
                  <FaGithub className="w-5 h-5"></FaGithub>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container max-w-full py-2 border-2 border-yellow-900 border-t-yellow-100">
          <p className="text-center">Copyright ©2024; Designed by AMAN KUMAR SINHA</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;