import About from "~/layouts/about";
import type { Route } from "./+types/home";
import Navbar from "~/layouts/navbar";
import Service from "~/layouts/Service";
import Testimonials from "~/layouts/Testimonials";
import Team from "~/layouts/team";
import Newsletter from "~/layouts/Newsletter";
import Footer from "~/layouts/Footer";
import Services from "~/layouts/Services";




export function meta({}: Route.MetaArgs) {
  return [
    { title: "EXPELAB" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div>

  <About />
  <Services/>
  <Service />
  <Testimonials />
  <Team />
  <Newsletter />

  </div>
}
