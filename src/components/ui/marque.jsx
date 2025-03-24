import IproIcon from "../../assets/images/IproLogoBig.png"
const Marquee = () => {
    return (
      <div className="fixed bottom-0 w-full bg-[#0D1117] text-white py-3 overflow-hidden">
        <div className="marquee flex whitespace-nowrap">
          {Array(50).fill(0).map((_, index) => (
            <div key={index} className="flex items-center gap-2 mx-20">
              <img src={IproIcon} alt="iPro" className="h-5" />
              <span className="text-sm">Professional Team</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Marquee;
  