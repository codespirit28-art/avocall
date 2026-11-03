import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header, Icon } from "./components";

export const metadata: Metadata = { title: "AI voice agents for every customer call", description: "AvoCall is a Telugu-first AI call assistant that answers, records, and automates approved customer needs for your business." };

const features = [
  ["Every call answered", "AvoCall can speak with customers when your team is busy, so a valuable enquiry does not go unheard.", "phone"],
  ["Telugu-first conversations", "Give customers a natural, comfortable experience in Telugu or English—without making them repeat themselves.", "wave"],
  ["Clear call records", "Receive useful call summaries, lead details, and next steps—so every conversation becomes organised work.", "record"],
  ["Automation you control", "AvoCall only completes actions you approve: appointments, follow-ups, FAQs, lead capture, and more.", "spark"],
] as const;

export default function Home() {
  return <><Header /><main>
    <section className="hero shell"><div className="hero-copy"><p className="eyebrow lime">TELUGU-FIRST AI CALL ASSISTANT</p><h1>Let your business <em>always</em> answer.</h1><p className="lede">AvoCall turns missed calls into meaningful conversations. We help Indian businesses speak with customers, capture every detail, and automate approved requests.</p><div className="hero-actions"><a className="button primary" href="mailto:workwithavocall@gmail.com">Build with AvoCall <Icon name="arrow" /></a><Link className="button text-button" href="/services">Explore services <Icon name="arrow" /></Link></div><div className="trust"><span className="pulse" /> Built for the way India does business</div></div><div className="hero-visual"><div className="glow" /><div className="call-card"><div className="call-top"><span className="avatar">A</span><div><b>AvoCall Assistant</b><small>Incoming customer call</small></div><span className="live">● LIVE</span></div><div className="waveform"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><p>“నమస్కారం! నేను AvoCall నుంచి మాట్లాడుతున్నాను. నేను మీకు ఎలా సహాయం చేయగలను?”</p><div className="call-bottom"><span>Telugu · English</span><span>00:42</span></div></div><div className="mini-card"><Icon name="check" /><div><b>Lead captured</b><span>Appointment request · 2 min ago</span></div></div></div></section>
    <section className="problem"><div className="shell problem-grid"><p className="eyebrow">THE COST OF A MISSED CALL</p><h2>When you are busy, your next customer should not be left waiting.</h2><p>Calls arrive while you are with a customer, in a meeting, or focused on your work. AvoCall becomes your reliable first response—so you decide what happens next.</p></div></section>
    <section className="features shell"><div className="section-head"><div><p className="eyebrow lime">WHAT AVOCALL CAN DO</p><h2>One thoughtful assistant.<br />Many fewer missed opportunities.</h2></div><Link href="/services" className="button outline">See all services <Icon name="arrow" /></Link></div><div className="feature-grid">{features.map(([title, text, icon], index) => <article className="feature-card" key={title}><span className="feature-num">0{index + 1}</span><span className="icon-box"><Icon name={icon} /></span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="how"><div className="shell"><p className="eyebrow lime">HOW IT WORKS</p><div className="steps"><article><span>01</span><h3>Tell us your workflow</h3><p>Choose which enquiries, answers, and business actions AvoCall can handle.</p></article><article><span>02</span><h3>We shape your agent</h3><p>We set up a voice experience that sounds helpful, clear, and on-brand.</p></article><article><span>03</span><h3>Stay in control</h3><p>Get call records and summaries. Expand automation only when you are ready.</p></article></div></div></section>
    <section className="cta shell"><div><p className="eyebrow lime">EARLY ACCESS</p><h2>Make every call feel like your business is open.</h2><p>Tell us what your customers ask for. We will explore the right AvoCall workflow together.</p></div><a className="button primary" href="mailto:workwithavocall@gmail.com?subject=AvoCall%20early%20access">Start a conversation <Icon name="arrow" /></a></section>
  </main><Footer /></>;
}
