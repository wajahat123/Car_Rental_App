import {
  Montserrat,
  Cormorant_Garamond,
} from "next/font/google";
import { FaChevronRight  } from "react-icons/fa";


const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
});
const garamond = Cormorant_Garamond({
  weight: ["400", "700"],
  subsets: ["latin"],
});

interface props {
  text: string;
  className?: string;
}

export const H_One = ({ text, className }: props) => {
  return (
    <h1
      className={`${className}  text-4xl md:text-5xl font-montserrat 
        
         font-bold  ${montserrat.className}`}
    >
      {text}
    </h1>
  );
};

export const H_Two = ({ text, className }: props) => {
  return (
    <h2
      className={`${className}  text-2xl md:text-4xl  
        
         font-montserrat font-bold ${montserrat.className}`}
    >
      {text}
    </h2>
  );
};
export const H_Three = ({ text, className }: props) => {
  return (
    <h3
      className={`${className}  text-2xl md:text-3xl  
        
         font-normal   ${montserrat.className}`}
    >
      {text}
    </h3>
  );
};
export const H_Four = ({ text, className }: props) => {
  return (
    <h4
      className={`${className}  text-xl md:text-2xl  
        
         font-montserrat font-normal 	  ${montserrat.className}`}
    >
      {text}
    </h4>
  );
};
export const H_Five = ({ text, className }: props) => {
  return (
    <h5
      className={`${className}   font-garamond text-lg md:text-xl 
        
           ${garamond.className}`}
    >
      {text}
    </h5>
  );
};
export const H_Six = ({ text, className }: props) => {
  return (
    <h6
      className={`${className}  font-garamond text-base md:text-lg 
        
        font-normal     ${garamond.className}`}
    >
      {text}
    </h6>
  );
};

//https://sanity-nextjs-application.vercel.app/api/hackathon/template7
export const HeadingLink = ({title, route}: {title:string,route:string}) => {
  return (
    <div className="text-center"><H_One className="font-bold" text={title}/>
    <p className="font-bold flex items-center justify-center "> Home <FaChevronRight className="mx-1" /> <span className="text-warning"> {route} </span> </p></div>
  )
}