"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import Car from "./Car";
import { phone, phoneHref } from "../../lib/data";

const slides = [
  { badge: "MOT testing", title: "Pass with colour. MOT tests done right.", text: "Keep your vehicle roadworthy and compliant with UK requirements, with honest advice and friendly service.", bg: "linear-gradient(135deg,#ff3d81,#7c4dff 60%,#2b0a6b)", car: "#ffd23f", href: "/services", cta: "MOT & servicing" },
  { badge: "Servicing & repairs", title: "Smooth, reliable and back on the road.", text: "Routine servicing, maintenance and practical repairs to keep your car running efficiently.", bg: "linear-gradient(135deg,#00c2ff,#3a5bff 60%,#120a5e)", car: "#ff3d81", href: "/services", cta: "See repairs" },
  { badge: "Buy & sell used cars", title: "Find your next car, or sell the one you have.", text: "Explore our used cars, or contact us about selling. Cars of different makes and models welcome.", bg: "linear-gradient(135deg,#ffb800,#ff4d4d 60%,#7a0a4a)", car: "#12042b", href: "/contact", cta: "Enquire now" },
];

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [paused]);
  const go = (n) => setI((n + slides.length) % slides.length);

  return (
    <section className="slider" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} aria-roledescription="carousel" aria-label="Featured services">
      {slides.map((s, n) => (
        <div key={s.badge} className={n === i ? "slide on" : "slide"} style={{ background: s.bg }} aria-hidden={n !== i}>
          <div className="blob b1" /><div className="blob b2" />
          <div className="wrap slide-in">
            <div className="slide-copy">
              <span className="badge">{s.badge}</span>
              <h1>{s.title}</h1>
              <p>{s.text}</p>
              <div className="cta">
                <Link className="btn btn-white" href={s.href} tabIndex={n === i ? 0 : -1}>{s.cta}</Link>
                <a className="btn btn-line" href={phoneHref} tabIndex={n === i ? 0 : -1}><Icon name="phone" size={18} /> {phone}</a>
              </div>
            </div>
            <div className="slide-art"><Car body={s.car} /></div>
          </div>
        </div>
      ))}
      <button className="arrow l" onClick={() => go(i - 1)} aria-label="Previous slide"><Icon name="left" /></button>
      <button className="arrow r" onClick={() => go(i + 1)} aria-label="Next slide"><Icon name="right" /></button>
      <div className="dots">
        {slides.map((s, n) => (
          <button key={s.badge} className={n === i ? "dot on" : "dot"} onClick={() => setI(n)} aria-label={`Slide ${n + 1}`} />
        ))}
      </div>
    </section>
  );
}
