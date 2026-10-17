import { profile, research, writeups, projects, certs, socials } from "./data";

const cvHref = `${import.meta.env.BASE_URL}${profile.cv}`;

function Ext({ href, children, ...rest }) {
  const external = href.startsWith("http");
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
      {children}
    </a>
  );
}

function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-h`}>
      <header className="section-head">
        <h2 id={`${id}-h`}>{title}</h2>
        {intro && <p>{intro}</p>}
      </header>
      {children}
    </section>
  );
}

function Trace() {
  // A flat line (zero signal) that draws across and spikes once.
  return (
    <svg className="trace" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
      <path
        pathLength="1"
        d="M0 60 H430 l10 -6 l10 12 l12 -50 l14 100 l12 -62 l10 6 H1200"
      />
    </svg>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <nav className="nav" aria-label="Main">
        <span className="nav-name">{profile.name}</span>
        <div className="nav-links">
          <a href="#research">Research</a>
          <a href="#writeups">Write-ups</a>
          <a href="#projects">Projects</a>
          <a href="#certs">Certificates</a>
          <a href="#contact">Contact</a>
          <a className="btn btn-small" href={cvHref} download>Download CV</a>
        </div>
      </nav>

      <main id="main">
        <header className="hero">
          <Trace />
          <h1>{profile.headline}</h1>
          <p className="lede">{profile.summary}</p>
          <div className="hero-actions">
            <a className="btn" href="#research">See my research</a>
            <a className="btn btn-ghost" href={cvHref} download>Download CV (PDF)</a>
          </div>
          <p className="meta">{profile.location}. {profile.availability}.</p>
        </header>

        <Section id="research" title="Vulnerability research" intro="Findings I reported, with their outcome.">
          <ul className="ledger">
            {research.map((r) => (
              <li key={r.title}>
                <span className={`sev sev-${r.severity.toLowerCase()}`}>{r.severity}</span>
                <div className="ledger-main">
                  <Ext href={r.link}>{r.title}</Ext>
                  <span className="meta">{r.id} · {r.date}</span>
                </div>
                <span className="status">{r.status}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="writeups" title="Write-ups" intro="How things work, and how they break.">
          <ul className="rows">
            {writeups.map((w) => (
              <li key={w.title}>
                <time dateTime={w.date}>{w.date}</time>
                <div>
                  <Ext href={w.link}>{w.title}</Ext>
                  <p>{w.summary}</p>
                  <ul className="tags">{w.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="projects" title="Projects" intro="Tools and labs I built.">
          <div className="projects">
            {projects.map((p) => (
              <article key={p.name} className="project">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <ul className="tags">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
                <div className="project-links">
                  <Ext href={p.repo}>Source</Ext>
                  {p.demo && <Ext href={p.demo}>Demo</Ext>}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="certs" title="Certificates" intro="Each one links to its verification page.">
          <ul className="rows certs">
            {certs.map((c) => (
              <li key={c.name}>
                <time>{c.year}</time>
                <div>
                  <Ext href={c.link}>{c.name}</Ext>
                  <p>{c.issuer}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Get in touch" intro="Hiring, collaborating, or reporting something? Reach me here.">
          <ul className="socials">
            {socials.map((s) => (
              <li key={s.label}><Ext href={s.href}>{s.label}</Ext></li>
            ))}
          </ul>
          <a className="btn" href={cvHref} download>Download CV (PDF)</a>
        </Section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
      </footer>
    </>
  );
}
