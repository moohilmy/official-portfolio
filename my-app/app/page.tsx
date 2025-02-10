import dynamic from "next/dynamic";


import Contact from "./components/Contact/Contact";
import Landing from "./components/Landing/Landing";
const About = dynamic(()=> import("./components/About/About"))
const Projects = dynamic(()=> import("./components/projects/Projects"))
export default function Home() {
  return (
    <div className="p-4">
      <Landing/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
);
}
