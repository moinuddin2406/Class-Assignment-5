import Image from "next/image";
import Header from "@/components/Header";
export default function Home() {
  return (
  <div className="h-screen">
    <Header/>
    <div className="flex h-[80%] m-20 ">
        <div className="w-1/2 flex flex-col justify-center items-start ">
            <h1 className="w-[496px] h-[189px] font-bold text-[40px] leading-[65.8px] 
             text-[#000000] m-2 ml-0">IMPECCABLE CRAFTSMANSHIP AND FINESSE
            </h1>
           <p className="w-[902px] h-[147px] ml-0 font-medium text-[30px] leading-[49.35px] tracking-[2.5%] text-[#787054] m-9">An example of intricate workmanship and detail, elegant <br/>
             necklaces and long and short chains form a part of our <br/> desirable collection.</p>
           <div className="w-72 h-[58px] rounded-[10px] pl-14 p-[10px]  bg-[#A29875]">
             <button 
           className=" w-[177px] h-[38px] font-medium text-[30px] leading-[37.5px]
            text-[#FFFFFF] ">Explore Now
             </button>
        </div>
     </div>
      <div className="w-1/2 flex justify-center items-center m-10">
        <Image
        src= {"/images/pic-1.png"}
        alt="image"
        width={442}
        height={611}
        />
      </div>
    </div>
  </div>
  );
}
