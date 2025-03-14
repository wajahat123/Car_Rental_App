import { RiTwitterFill,RiFacebookFill,RiWhatsappLine,RiPhoneFill, RiTiktokFill, RiYoutubeFill,RiInstagramLine } from "react-icons/ri";
import { PiPinterestLogoBold } from "react-icons/pi";
import Link from "next/link";
import { motion } from "framer-motion";

export const ContactLinks = () => {
  const socialLinks = [
    { icon: RiTwitterFill, href: "#" },
    { icon: RiWhatsappLine, href: "#" },
    { icon: RiPhoneFill, href: "#" },
    { icon: RiFacebookFill, href: "#" },
    { icon: PiPinterestLogoBold, href: "#" },
    { icon: RiTiktokFill, href: "#" },
    { icon: RiYoutubeFill, href: "#" },
    { icon: RiInstagramLine, href: "#" }
  ];

  return (
    <div className="flex items-center justify-center gap-3 md:gap-4 py-2 md:py-4">
      {socialLinks.map(({ icon: Icon, href }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link href={href}>
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-accent/10 rounded-full blur-sm group-hover:bg-accent/20 transition-all duration-300" />
              <Icon className="w-6 md:w-8 h-6 md:h-8 p-[2px] md:p-[4px] rounded-full relative z-10 text-accent ring-1 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300" />
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

// export default ContactLinks;
