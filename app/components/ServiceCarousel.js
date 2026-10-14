"use client";
import { useRef } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { services } from "../../lib/data";

export default function ServiceCarousel() {
  const ref = useRef(null);
  const scroll = (d) => ref.current?.scrollBy({ left: d * 340, behavior: "smooth" });
  return (
    <div className="carousel">
      <div className="car-head">
        <h2>What we do</h2>
        <div className="car-btns">
          <button onClick={() => scroll(-1)} aria-label="Scroll left"><Icon name="left" /></button>
          <button onClick={() => scroll(1)} aria-label="Scroll right"><Icon name="right" /></button>
        </div>
      </div>
      <div className="track" ref={ref}>
        {services.map((s) => (
          <Link href="/services" key={s.title} className="tile" style={{ "--c": s.color }}>
            <span className="tile-ico"><Icon name={s.icon} size={30} /></span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
