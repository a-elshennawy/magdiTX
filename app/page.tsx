"use client";
import { useEffect } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbBrandKickFilled } from "react-icons/tb";
import { motion } from "motion/react";

export default function Home() {
  useEffect(() => {
    // @ts-expect-error - no props needed here
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => console.log("bootstrap loaded"))
      .catch(console.error);
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at top center, rgba(240, 240, 255, 0.15), transparent 70%)",
          zIndex: 1,
        }}
      />
      <section className="hero container-fluid row justify-content-center align-items-center text-center m-0">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="img col-12"
        >
          <img src="/imgs/logo.webp" alt="logo" />
        </motion.div>
        <div className="text col-12">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            MAGDITX
          </motion.h1>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            your favourite streamer, gamer, whatever you need
          </motion.h2>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="links"
          >
            <span className="kick">
              <a href="https://kick.com/magdi53">
                <TbBrandKickFilled />
              </a>
            </span>
            <span className="tiktok">
              <a href="https://www.tiktok.com/@realmagdii53">
                <FaTiktok />
              </a>
            </span>
            <span className="whatsApp">
              <a href="https://whatsapp.com/channel/0029VarPMkc2ZjCuwttM4M3p">
                <IoLogoWhatsapp />
              </a>
            </span>
            <span className="instagram">
              <a href="https://www.instagram.com/hamadamagdy01/">
                <AiFillInstagram />
              </a>
            </span>
            <span className="facebook">
              <a href="https://www.facebook.com/magdyabogharbia">
                <FaFacebookF />
              </a>
            </span>
          </motion.div>
        </div>
      </section>
    </>
  );
}
