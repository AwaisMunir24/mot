const words = ["MOT Testing", "Car Servicing", "Vehicle Repairs", "Used Car Sales", "We Buy Used Cars", "Bournemouth"];
export default function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-in">{[0, 1].map((k) => <div key={k}>{row.map((w, n) => <span key={n}>{w}<i>✦</i></span>)}</div>)}</div>
    </div>
  );
}
