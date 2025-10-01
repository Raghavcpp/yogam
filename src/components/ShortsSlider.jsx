import React from "react";
import TitleHeader from "./TitleHeader";
import { useLanguage } from "../context/LanguageContext";

const ShortsSlider = () => {
    const { lang } = useLanguage();
  
  return (
    <>
      <section id="youtube" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 ">
          <TitleHeader title={lang === 'en' ? "Youtube Videos & Shorts": "यूट्यूब वीडियो और शॉर्ट्स"} />
          <iframe
            className="relative mx-auto bg-indigo-50 mt-16 rounded-2xl w-full aspect-16/9 sm:w-[560px] sm:h-[315px]"
            src="https://www.youtube.com/embed/videoseries?si=GyJ8r8Vy6Hss8Zlb&amp;list=PLpgVmFi_vQKTkbQRz5pPocSCraDeMmxU0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className="flex ">
            <iframe
              className="relative  mx-auto bg-indigo-50 mt-16 rounded-2xl aspect-10/16 lg:block px-2 hidden  h-100"
              src="https://www.youtube.com/embed/PTCCpiyCdMM?si=Ez_emUaD0gDNerGq"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe> 

            <iframe
              className="relative  mx-auto bg-indigo-50 mt-16 rounded-2xl aspect-10/16 px-2 h-100"
              src="https://www.youtube.com/embed/videoseries?si=N_jLV-bPZDVx7qny&amp;list=PLpgVmFi_vQKTqSNRAgpKR2BfCakhp1Fit"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe> 

            <iframe
              className="relative  mx-auto bg-indigo-50 mt-16 rounded-2xl aspect-10/16 lg:block px-2 hidden h-100"
              src="https://www.youtube.com/embed/e2WpKvybuZo?si=5g7QOjaonC3cd96x"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>  
          </div>
        </div>
      </section>
    </>
  );
};

export default ShortsSlider;
