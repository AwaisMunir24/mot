import Icon from "../components/Icon";
import CtaBand from "../components/CtaBand";
import { why } from "../../lib/data";
export const metadata = { title: "About | PRIME MOT & SERVICE LTD" };
const tints = ["#ff3d81", "#00c2ff", "#ffb800", "#7c4dff", "#00d68f"];

export default function About() {
  return (
    <main>
      <section className="page-hero" style={{ background: "linear-gradient(135deg,#ff3d81,#ff6a3d 60%,#ffb800)" }}>
        <div className="wrap"><h1>About us</h1><p>PRIME MOT &amp; SERVICE LTD: keeping you moving with confidence.</p></div>
      </section>
      <section className="section wrap about">
        <div className="about-text">
          <p>At PRIME MOT &amp; SERVICE LTD, we understand how important your vehicle is to your everyday life. Our aim is to make vehicle maintenance and buying or selling a car as straightforward as possible.</p>
          <p>We strive to build lasting customer relationships through dependable service, clear communication and a customer-first approach.</p>
          <p>Visit us in Bournemouth for your vehicle servicing, MOT testing, repairs or used car enquiries.</p>
        </div>
        <ul className="why-grid solo">
          {why.map((w, n) => (
            <li key={w} style={{ "--c": tints[n] }}><span className="tick"><Icon name="tick" size={20} /></span>{w}</li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </main>
  );
}
