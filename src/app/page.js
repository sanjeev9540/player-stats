import Image from "next/image";

import BackgroundImage from '@/../public/bgVs.jpg';

export default function Home() {
  return (
    <div>
      <Image className="blur-[1px] w-full h-screen absolute" src={BackgroundImage} alt="background image" width={1280} height={768} />
      <div className="absolute w-full h-screen z-1 bg-black opacity-25"></div>
      <div className="max-w-7xl relative z-1">
        <div className="flex flex-row justify-center">
          <div className="">IPL STATS</div>
        </div>
      </div>
    </div>
  );
}
