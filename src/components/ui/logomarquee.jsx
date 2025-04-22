import React from "react";
import MetnLogo from "../../assets/icons/metn.svg";
import DigitalFingers from "../../assets/icons/metn.svg";
import MetinLogo from "../../assets/icons/metin.svg"
import FarkoLogo from "../../assets/icons/farko.svg"
import ItbilimLogo from "../../assets/icons/itbilim.svg"

const logos = [MetinLogo, FarkoLogo, ItbilimLogo, FarkoLogo,MetinLogo, ItbilimLogo, MetinLogo, FarkoLogo,MetinLogo, FarkoLogo, MetinLogo, DigitalFingers,MetnLogo, DigitalFingers, MetnLogo, DigitalFingers]; // Logotiplar massivi

const Logomarqee = () => {
  return (
    <section className=" py-4 relative overflow-hidden ">
      <div className="relative w-full flex items-center">
        <div className="marquee flex whitespace-nowrap gap-20">
          {/* Logotiplar ketma-ket 2 marta yoziladi, cheksiz effekt uchun */}
          {logos.concat(logos).map((logo, index) => (
            <img key={index} src={logo} alt="logo" className="h-12" />
          ))}
        </div>
      </div>

      {/* CSS Animatsiya */}
      <style jsx>{`
        .marquee {
          display: flex;
          animation: marquee-scroll 45s linear infinite;
        }
        @keyframes marquee-scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Logomarqee;
