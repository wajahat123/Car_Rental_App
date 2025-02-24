import { Playfair_Display, Montserrat, Cormorant_Garamond } from 'next/font/google';

const playfair = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
});
const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
});
const garamond = Cormorant_Garamond({
  weight: ['400', '700'],
  subsets: ['latin'],
});

interface props {
  text: string;
  className?: string;
}

export const H_One = ({ text, className }: props) => {
  return (
    <h1
      className={`${className}  text-4xl md:text-5xl font-playfair lg:text-6xl font-bold l ${playfair.className}`}
    >
      {text}
    </h1>
  );
};

export const H_Two = ({ text, className }: props) => {
  return (
    <h2
      className={`${className}  text-3xl md:text-4xl  lg:text-5xl font-playfair font-medium ${playfair.className}`}
    >
      {text}
    </h2>
  );
};
export const H_Three = ({ text, className }: props) => {
  return (
    <h3
      className={`${className}  text-2xl md:text-3xl  lg:text-4xl font-normal   ${montserrat.className}`}
    >
      {text}
    </h3>
  );
};
export const H_Four = ({ text, className }: props) => {
  return (
    <h4
      className={`${className}  text-xl md:text-2xl  lg:text-3xl font-montserrat font-normal 	  ${montserrat.className}`}
    >
      {text}
    </h4>
  );
};
export const H_Five = ({ text, className }: props) => {
  return (
    <h5
      className={`${className}   font-garamond text-lg md:text-xl lg:text-2xl   ${garamond.className}`}
    >
      {text}
    </h5>
  );
};
export const H_Six = ({ text, className }: props) => {
  return (
    <h6
      className={`${className}  font-garamond text-base md:text-lg lg:text-xl font-normal     ${garamond.className}`}
    >
      {text}
    </h6>
  );
};


//https://sanity-nextjs-application.vercel.app/api/hackathon/template7