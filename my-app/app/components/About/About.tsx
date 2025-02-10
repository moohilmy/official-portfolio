import HeaderSection from "@/app/elemants/HeaderSection";
import VSCodeBox from "../VsCode/VsCode";

const About = () => {
  return (
    <div className="my-8">
      <HeaderSection title="about-me" />
      <div className="flex mt-5 justify-between flex-col-reverse sm:flex-row py-3 ">
        <p className="w-full sm:w-[45%] max-sm:mt-5 p-2 tracking-tight text-base/6 ">
          I build high-performance, intuitive web experiences with ReactJS,
          Next.js, and TypeScript, while also having experience in Python and
          backend development. Passionate about clean code, optimization, and
          problem-solving, I blend technology with creativity, drawing
          inspiration from literature, AI, and history. For me, development is
          more than code—it&apos;s about crafting seamless
        </p>
        <div className="sm:w-[50%] w-full">
        <VSCodeBox />
        </div>
      </div>
    </div>
  );
};

export default About;
