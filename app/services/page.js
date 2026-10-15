import Link from "next/link";
import Icon from "../components/Icon";
import Car from "../components/Car";
import CtaBand from "../components/CtaBand";
import { services } from "../../lib/data";
export const metadata = { title: "Services | PRIME MOT & SERVICE LTD" };

export default function Services() {
  return (
    <main>
      <section className="page-hero" style={{ background: "linear-gradient(135deg,#00c2ff,#3a5bff 55%,#7c4dff)" }}>
        <div className="wrap"><h1>Our services</h1><p>MOT testing, servicing, repairs, and used car sales and purchases, all under one roof in Bournemouth.</p></div>
      </section>

      <section className="section wrap">
        <div className="svc-grid">
          {services.map((s) => (
            <article key={s.title} className="svc-card" style={{ "--c": s.color }}>
              <span className="tile-ico"><Icon name={s.icon} size={30} /></span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Collection & drop-off feature */}
      <section className="wrap" style={{ paddingBottom: "clamp(56px,8vw,100px)" }}>
        <Link href="/collection" className="feature" aria-label="Read more about car collection and drop-off">
          <div className="feature-copy">
            <span className="feature-tag">Convenience service</span>
            <h2>Car collection &amp; drop-off</h2>
            <p>
              Too busy to bring your car in? We can collect it, look after the MOT, service or repair,
              and arrange to bring it back to you.
            </p>
            <ul className="feature-points">
              <li><Icon name="tick" size={18} /> Save time, no waiting around</li>
              <li><Icon name="tick" size={18} /> Works with MOT, servicing and repairs</li>
              <li><Icon name="tick" size={18} /> Simple 4-step process</li>
            </ul>
            <span className="feature-btn">Read the details <Icon name="right" size={18} /></span>
          </div>
          <div className="feature-art">
            <Car body="#ffd23f" />
          </div>
        </Link>
      </section>

      <CtaBand />
    </main>
  );
}