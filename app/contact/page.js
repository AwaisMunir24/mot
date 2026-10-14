import Icon from "../components/Icon";
import { phone, phoneHref, email, address } from "../../lib/data";
export const metadata = { title: "Contact | PRIME MOT & SERVICE LTD" };

export default function Contact() {
  const items = [
    ["phone", "Phone", <a key="p" href={phoneHref}>{phone}</a>, "#ff3d81"],
    ["mail", "Email", <a key="e" href={`mailto:${email}`}>{email}</a>, "#00c2ff"],
    ["pin", "Address", <address key="a">{address[0]}<br />{address[1]}</address>, "#ffb800"],
  ];
  return (
    <main>
      <section className="page-hero" style={{ background: "linear-gradient(135deg,#7c4dff,#ff3d81 70%,#ff6a3d)" }}>
        <div className="wrap"><h1>Get in touch today</h1><p>Enquire about MOT testing, car servicing, vehicle repairs, or buying and selling used cars. We look forward to assisting you.</p></div>
      </section>
      <section className="section wrap contact-grid">
        <div className="c-cards">
          {items.map(([ic, label, val, c]) => (
            <div key={label} className="c-card" style={{ "--c": c }}>
              <span className="tile-ico"><Icon name={ic} size={26} /></span>
              <div><small>{label}</small>{val}</div>
            </div>
          ))}
        </div>
        <div className="map">
          <iframe title="Map to PRIME MOT & SERVICE LTD" loading="lazy" src="https://maps.google.com/maps?q=107%20Southwick%20Road%20Bournemouth%20BH6%205PS&output=embed" />
        </div>
      </section>
    </main>
  );
}
