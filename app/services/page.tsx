import type { Metadata } from "next";
import { Footer, Header, Icon } from "../components";

export const metadata: Metadata = { title: "Services", description: "Explore AvoCall's AI call handling, Telugu voice support, lead records, and customer-request automation services." };

const services = [
  ["AI customer calls", "AvoCall can answer calls, greet customers, understand a request, and give helpful information based on the business knowledge you approve."],
  ["Lead capture & follow-up", "Capture the caller's name, number, need, and preferred time. Get clear summaries so your team can follow up with confidence."],
  ["Appointments & enquiries", "For businesses that accept it, AvoCall can take booking requests, share availability, and guide callers through common next steps."],
  ["Customer support automation", "Automate repeat questions such as service availability, opening hours, pricing ranges, order status, and basic troubleshooting."],
  ["Call records that matter", "Move beyond a long list of recordings. Receive organised notes, action items, and customer context after each conversation."],
  ["Telugu & English voice", "Serve callers in the language that feels natural to them. AvoCall is designed around Telugu-first conversations, with English support too."],
];

export default function ServicesPage() { return <><Header /><main>
  <section className="page-hero shell"><p className="eyebrow lime">AVOCALL SERVICES</p><h1>More than an answer.<br /><em>A useful next step.</em></h1><p className="lede">Choose the calls AvoCall handles. Choose the information it uses. Choose the actions it is allowed to take.</p></section>
  <section className="service-list shell">{services.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><div><h2>{title}</h2><p>{text}</p></div><Icon name="arrow" /></article>)}</section>
  <section className="control shell"><div className="control-mark"><Icon name="check" /></div><div><p className="eyebrow lime">YOUR BUSINESS, YOUR RULES</p><h2>Automation only where you say yes.</h2><p>AvoCall is built to support your team—not make decisions beyond its role. You define its knowledge, its tone, and the actions it can perform. Start simple, then expand carefully.</p></div></section>
  <section className="cta shell"><div><p className="eyebrow lime">DESIGNED AROUND YOU</p><h2>What would a better first call change for your business?</h2></div><a className="button primary" href="mailto:workwithavocall@gmail.com?subject=AvoCall%20service%20enquiry">Tell us your workflow <Icon name="arrow" /></a></section>
</main><Footer /></> }
