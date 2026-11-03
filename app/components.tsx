import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return <Link href="/" className="brand" aria-label="AvoCall home"><Image src="/avocall-logo.png" alt="AvoCall" width={46} height={46} priority /><span>avocall</span></Link>;
}

export function Header() {
  return <header><nav className="nav shell"><Logo /><div className="nav-links"><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/about">About</Link></div><a className="nav-cta" href="mailto:workwithavocall@gmail.com">Talk to us <span>↗</span></a></nav></header>;
}

export function Footer() {
  return <footer><div className="shell footer-grid"><div><Logo /><p className="footer-intro">The thoughtful voice layer for Indian businesses.</p></div><div><p className="eyebrow">Explore</p><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/about">About AvoCall</Link></div><div><p className="eyebrow">Contact</p><a href="mailto:avocall283@gmail.com">avocall283@gmail.com</a><a href="mailto:workwithavocall@gmail.com">workwithavocall@gmail.com</a></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} AvoCall. Built for better conversations.</span><span>India · Telugu-first</span></div></footer>;
}

export function Icon({ name }: { name: "phone" | "spark" | "record" | "arrow" | "check" | "wave" }) {
  const paths = {
    phone: <path d="M6.7 3.6 9.2 6c.5.5.6 1.2.2 1.8l-1.2 1.8a14 14 0 0 0 6.2 6.2l1.8-1.2c.6-.4 1.3-.3 1.8.2l2.4 2.5c.6.6.6 1.5 0 2.1l-1.1 1.1c-1 1-2.5 1.4-3.9.9C8.4 19 4.9 15.5 2.4 8.6 2 7.2 2.3 5.7 3.3 4.7l1.2-1.1c.6-.6 1.6-.6 2.2 0Z" />,
    spark: <path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Zm7 14 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />,
    record: <><circle cx="12" cy="12" r="8" /><path d="M12 8v4l2.8 1.8" /></>,
    arrow: <path d="M5 12h13m-5-5 5 5-5 5" />,
    check: <path d="m5 12 4.2 4.2L19 6.5" />,
    wave: <path d="M3 12h2m2-5v10m4-14v18m4-14v10m4-5h2" />
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
