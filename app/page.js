import Sects from "@/components/sects";
import Nav from "../components/catogories";
import Homecomp from "../components/homecomp";
import Image from "next/image";
import Projects from "@/components/projects";
import ContactForm from "@/components/contactForm";

export default function Home() {
  return (
    <main className="flex flex-col h-auto w-screen  ">
    <Homecomp />
    <Nav />
    <Sects />
    <Projects />
    <ContactForm />

    </main>
  );
}
