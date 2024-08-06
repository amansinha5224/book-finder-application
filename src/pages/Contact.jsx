import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export const Contact = () => {
    return (
      <section>
          <div>
              <h1 className="mb-5 mt-20 py-44 text-5xl text-center font-bold text-yellow-900">
                  CONTACTS
              </h1>
          </div>
          <div className="container mx-auto max-w-4xl px-6">
              <h2 className="text-2xl font-bold text-yellow-900 mb-8 mt-12">
                FOLLOW US
              </h2>
              <div className="flex flex-col gap-6 ml-4 mr-96">
                <div>
                    <a href="https://www.instagram.com/" target="_blank" className="flex gap-4 items-center mr-72">
                    <FaInstagram className="w-8 h-8"></FaInstagram>
                    <p className="decoration-2 hover:underline">Instagram</p>
                    </a>
                </div>
                <div>
                    <a href="https://www.facebook.com/" target="_blank" className="flex gap-4 items-center mr-72">
                    <FaFacebook className="w-8 h-8"></FaFacebook>
                    <p className="decoration-2 hover:underline">Facebook</p>
                    </a>
                </div>
                <div>
                    <a href="https://www.x.com/" target="_blank" className="flex gap-4 items-center mr-72">
                    <FaTwitter className="w-8 h-8"></FaTwitter>
                    <p className="decoration-2 hover:underline">Twitter</p>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/" target="_blank" className="flex gap-4 items-center mr-72">
                    <FaLinkedin className="w-8 h-8"></FaLinkedin>
                    <p className="decoration-2 hover:underline">LinkedIn</p>
                    </a>
                </div>
                <div>
                    <a href="https://www.github.com/" target="_blank" className="flex gap-4 items-center mr-72">
                    <FaGithub className="w-8 h-8"></FaGithub>
                    <p className="decoration-2 hover:underline">GitHub</p>
                    </a>
                </div>
              </div>
          </div>
      </section>
    )
  }
  
  export default Contact;