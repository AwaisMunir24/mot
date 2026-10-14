import Link from "next/link";
import { phone, phoneHref, email, address } from "../../lib/data";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-in">
        <div><strong>PRIME MOT &amp; SERVICE LTD</strong><p>Keeping you moving with confidence.</p></div>
        <div className="foot-links">
          <Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link>
        </div>
        <div className="foot-contact">
          <a href={phoneHref}>{phone}</a>
          <a href={`mailto:${email}`}>{email}</a>
          <span>{address.join(" ")}</span>
        </div>
      </div>
    </footer>
  );
}
