const paths = {
  mot: <><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z" /><path d="M8.5 12l2.5 2.5L15.5 9.5" /></>,
  service: <path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.5 2.5-2.2-.5-.5-2.2 2.2-2.8z" />,
  repair: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" /></>,
  car: <><path d="M3 15v-3l2-5h14l2 5v3" /><path d="M3 15h18v3H3z" /><circle cx="7.5" cy="18" r="1.6" /><circle cx="16.5" cy="18" r="1.6" /></>,
  buy: <><circle cx="12" cy="12" r="9" /><path d="M14.5 8.5c-.7-.8-1.7-1-2.7-1-1.5 0-2.8.8-2.8 2.2 0 3 5.6 1.5 5.6 4.3 0 1.4-1.3 2.3-2.9 2.3-1.1 0-2.2-.4-2.9-1.2M12 6v1.5M12 16.5V18" /></>,
  swap: <path d="M4 8h14l-3-3M20 16H6l3 3" />,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  pin: <><path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  tick: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  left: <path d="M15 5l-7 7 7 7" />,
  right: <path d="M9 5l7 7-7 7" />,
};
export default function Icon({ name, size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
  );
}
