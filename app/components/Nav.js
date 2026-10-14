"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { phone, phoneHref } from "../../lib/data";

const links = [["Home", "/"], ["Services", "/services"], ["About", "/about"], ["Contact", "/contact"]];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">P</span><span>PRIME <small>MOT &amp; Service</small></span>
        </Link>
        <nav className={open ? "links open" : "links"} aria-label="Main">
          {links.map(([t, h]) => (
            <Link key={h} href={h} className={path === h ? "active" : ""} onClick={() => setOpen(false)}>{t}</Link>
          ))}
          <a className="btn btn-pop nav-call" href={phoneHref}>{phone}</a>
        </nav>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
