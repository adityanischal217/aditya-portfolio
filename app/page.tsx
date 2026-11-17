/*import Intro from "@/components/Intro";*/
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function Home() {
  return (
    <main>
     {/* <Intro />*/}
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ProjectShowcase />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}