import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./MagicButton";
import { Spotlight } from "./Spotlight";
import { TextGenerateEffect } from "./TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen w-full" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2]  flex items-center justify-center absolute left-0 top-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase text-center text-xs tracking-widest max-w-80">Welcome to my portfolio</h2>

          <TextGenerateEffect
           className="text-center text-[40px] md:text-2xl lg:text-6xl"
           words="Driven by curiosity, shaped by creativity"
          />

          <p className="text-center md:tracking-wider mb-4 text-xs md:text-xs lg:text-sm">
            Hi,I&apos;m  Abdur Rehman, a passioante Next.js  developer
          
          </p>

              <a href = "#projects">
                <MagicButton
                 title="My Work"
                 icon = {<FaLocationArrow />}
                 position="right"
                 otherClasses=""
                 
                 />
              </a>

        </div>
      </div>
    </div>
  );
};

export default Hero;
