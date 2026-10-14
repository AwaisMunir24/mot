import HeroSlider from "./components/HeroSlider";
import Marquee from "./components/Marquee";
import ServiceCarousel from "./components/ServiceCarousel";
import CtaBand from "./components/CtaBand";
import Icon from "./components/Icon";
import Link from "next/link";
import { why } from "../lib/data";

const tints = ["#ff3d81", "#00c2ff", "#ffb800", "#7c4dff", "#00d68f"];

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <Marquee />
      <section className="section wrap"><ServiceCarousel /></section>
      <section className="whyband">
        <div className="wrap">
          <h2>Why choose PRIME MOT &amp; SERVICE LTD?</h2>
          <ul className="why-grid">
            {why.map((w, n) => (
              <li key={w} style={{ "--c": tints[n] }}><span className="tick"><Icon name="tick" size={20} /></span>{w}</li>
            ))}
          </ul>
          <Link className="btn btn-white" href="/about">More about us</Link>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
