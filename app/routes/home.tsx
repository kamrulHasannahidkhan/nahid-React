
import Services from "~/layout/Services";
import type { Route } from "./+types/home";
import Service from "~/layout/Service";
import About from "~/layout/about";
import Testimonials from "~/layout/Testimonials";
import Newsletter from "~/layout/Newsletter";
import Team from "~/layout/team";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Explab" },
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
