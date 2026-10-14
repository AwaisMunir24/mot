import Link from "next/link";
import { phone, phoneHref } from "../../lib/data";
export default function CtaBand() {
  return (
    <section className="cband">
      <div className="wrap cband-in">
        <h2>Need an MOT, a service or a new car?</h2>
        <div className="cta">
          <a className="btn btn-dark" href={phoneHref}>Call {phone}</a>
          <Link className="btn btn-white" href="/contact">Find us</Link>
        </div>
      </div>
    </section>
  );
}
