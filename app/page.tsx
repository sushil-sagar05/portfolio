
import About from "@/components/About";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/Projects";
import Skills from "@/components/skill";
export default function Home() {
  return (
    <section className="">
     <Hero/>
     <Projects/>
     <Skills/>
     <About/>
     <Contact/>
    </section>
  );
}
