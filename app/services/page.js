import Icon from "../components/Icon";
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
      <CtaBand />
    </main>
  );
}
