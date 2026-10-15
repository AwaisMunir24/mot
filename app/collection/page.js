import Link from "next/link";
import Icon from "../components/Icon";
import Car from "../components/Car";
import CtaBand from "../components/CtaBand";
import { phone, phoneHref, email } from "../../lib/data";

export const metadata = {
  title: "Car Collection & Drop-Off | PRIME MOT & SERVICE LTD",
  description: "Convenient car collection and drop-off for MOT, servicing and repairs in Bournemouth. Contact PRIME MOT & SERVICE LTD to arrange.",
};

const steps = [
  { n: "01", icon: "phone", color: "#ff3d81", title: "Get in touch", text: "Call, email or message us with your car details and what you need: an MOT, a service or a repair." },
  { n: "02", icon: "pin", color: "#00c2ff", title: "We collect your car", text: "We agree a convenient time and place with you, then collect your vehicle so you do not have to make the trip." },
  { n: "03", icon: "service", color: "#ffb800", title: "We do the work", text: "Your car is taken to our Bournemouth centre for MOT testing, servicing or repairs." },
  { n: "04", icon: "car", color: "#00d68f", title: "We drop it back", text: "Once the work is done, we arrange to return your car to you, ready to get back to your day." },
];

const good = [
  "Save time: no waiting around or arranging lifts",
  "Fits around work, family and busy days",
  "Handy for MOT testing, servicing and repairs",
  "Friendly, professional and clear communication",
  "One local team for all your car needs",
];

const faqs = [
  ["Which services can I book with collection and drop-off?", "Collection and drop-off is designed to go with our MOT testing, car servicing and vehicle repairs. Contact us to confirm what is available for your car."],
  ["Which areas do you cover?", "We are based on Southwick Road in Bournemouth. Please contact us with your address and we will confirm whether we can collect from and return to your location."],
  ["How do I arrange a collection?", "Call us or send an email with your name, car registration, service needed and preferred date. We will confirm the arrangements with you."],
];

export default function Collection() {
  return (
    <main>
      <section className="page-hero" style={{ background: "linear-gradient(135deg,#00d68f,#00c2ff 55%,#7c4dff)" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "2rem", alignItems: "center" }}>
          <div>
            <h1>Car collection &amp; drop-off</h1>
            <p>Too busy to bring your car in? We can collect it, look after the MOT, service or repair, and bring it back to you.</p>
            <div className="cta" style={{ marginTop: "1.8rem", position: "relative" }}>
              <a className="btn btn-white" href={phoneHref}><Icon name="phone" size={18} /> Call {phone}</a>
              <a className="btn btn-line" href={`mailto:${email}?subject=Car%20collection%20and%20drop-off`}><Icon name="mail" size={18} /> Email us</a>
            </div>
          </div>
          <div style={{ position: "relative" }}><Car body="#ffd23f" /></div>
        </div>
      </section>

      <section className="section wrap">
        <h2 style={{ marginBottom: "2rem" }}>How it works</h2>
        <div className="svc-grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
          {steps.map((s) => (
            <article key={s.n} className="svc-card" style={{ "--c": s.color }}>
              <span className="tile-ico"><Icon name={s.icon} size={30} /></span>
              <h3>{s.n}. {s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="whyband">
        <div className="wrap">
          <h2>Why choose collection &amp; drop-off?</h2>
          <ul className="why-grid">
            {good.map((g, n) => (
              <li key={g} style={{ "--c": ["#ff3d81", "#00c2ff", "#ffb800", "#7c4dff", "#00d68f"][n] }}>
                <span className="tick"><Icon name="tick" size={20} /></span>{g}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section wrap">
        <h2 style={{ marginBottom: "1.6rem" }}>Good to know</h2>
        <div style={{ display: "grid", gap: "1rem" }}>
          {faqs.map(([q, a]) => (
            <details key={q} className="svc-card" style={{ "--c": "#1e0a45", cursor: "pointer" }}>
              <summary style={{ fontWeight: 700, fontSize: "1.1rem" }}>{q}</summary>
              <p style={{ marginTop: ".8rem" }}>{a}</p>
            </details>
          ))}
        </div>
        <p style={{ marginTop: "1.6rem", color: "#4a3b73" }}>
          Collection area and availability are confirmed when you contact us. <Link href="/contact" style={{ fontWeight: 700 }}>See our contact page</Link>.
        </p>
      </section>

      <CtaBand />
    </main>
  );
}