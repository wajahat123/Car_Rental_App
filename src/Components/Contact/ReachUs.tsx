import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";

const ReachUs = () => {
  return (
    <section className="w-full mt-20 bg-surface shadow-xl rounded-xl my-10 ring-1 ring-primary/30">
      <div className="w-full flex flex-col items-center  p-4">
        {/* Google Map */}
        <div className="rounded-lg overflow-hidden w-full shadow-lg">
          <iframe
            className="rounded-xl w-full h-72 md:h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.582285833673!2d55.3419659!3d25.2514938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5de835886f1b%3A0xb14014bb235fbbbe!2sAl%20Garhoud%20Medical%20Fitness%20Center!5e0!3m2!1sen!2s!4v1710412345678"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Information */}

        <div className="grid ml:grid-cols-4 ml:gap-4 gap-2 grid-cols-2 pb-2 pt-8 w-full text-gray-700 ">
          <div className="group bg-primary shadow-xl  hover:bg-background transition-colors duration-500 md:p-6 p-4 rounded-lg  hover:text-text ">
            <p className="font-extrabold flex items-center justify-normal text-background group-hover:text-primary">
              Call Us Now
            </p>
            <ul>
              <li className="hover:text-blue-500 cursor-pointer">1234567890</li>
              <li className="hover:text-blue-500 cursor-pointer">1234567890</li>
              <li className="hover:text-blue-500 cursor-pointer">1234567890</li>
            </ul>
          </div>
          <div className="group bg-primary shadow-xl  hover:bg-background transition-colors duration-500 md:p-6 p-4 rounded-lg  hover:text-text ">
            <p className="font-extrabold flex items-center justify-normal text-background group-hover:text-primary">
              Social Media
            </p>
            <ul className=" space-y-1">
              <li className="hover:text-blue-500 cursor-pointer">
                {" "}
                <Link
                  href="#"
                  className="flex items-center justify-start gap-2"
                >
                  <BsInstagram /> Instagram
                </Link>
              </li>

              <li className="hover:text-blue-500 cursor-pointer">
                {" "}
                <Link
                  href="#"
                  className="flex items-center justify-start gap-2"
                >
                  <BsWhatsapp />
                  Whatsapp
                </Link>
              </li>

              <li className="hover:text-blue-500 cursor-pointer">
                {" "}
                <Link
                  href="#"
                  className="flex items-center justify-start gap-2"
                >
                  <BsFacebook />
                  Facebook
                </Link>
              </li>

              <li className="hover:text-blue-500 cursor-pointer">
                {" "}
                <Link
                  href="#"
                  className="flex items-center justify-start gap-2"
                >
                  <BsTwitter /> Twitter
                </Link>
              </li>
            </ul>
          </div>
          <div className="group bg-primary shadow-xl  hover:bg-background transition-colors duration-500 md:p-6 p-4 rounded-lg  hover:text-text ">
            <p className="font-extrabold flex items-center justify-normal text-background group-hover:text-primary">
              Mail Us
            </p>
            <ul className="break-words ">
              <li>
                {" "}
                <Link
                  href="mailto:romankhan.26@outlook.com"
                  className="hover:text-blue-500"
                >
                  abc@example.com
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="mailto:romankhan.26@outlook.com"
                  className="hover:text-blue-500"
                >
                  abc@example.com
                </Link>
              </li>
            </ul>
          </div>{" "}
          <div className="group bg-primary shadow-xl  hover:bg-background transition-colors duration-500 md:p-6 p-4 rounded-lg  hover:text-text ">
            <p className="font-extrabold flex items-center justify-normal text-background group-hover:text-primary">
              Address
            </p>
            <p className="text-left">ABC 123 Street, XYZ State, 248800</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachUs;
