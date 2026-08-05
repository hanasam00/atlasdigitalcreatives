const projects = [
  {
    src: "/work/concept/confetti-wordmark.png",
    title: "Confetti wordmark",
    className: "collage-one",
  },
  {
    src: "/work/concept/smith-greenwell-symbol.png",
    title: "Smith-Greenwell symbol",
    className: "collage-two",
  },
  {
    src: "/work/concept/sab-combination.png",
    title: "Sab Photography combination mark",
    className: "collage-three",
  },
  {
    src: "/work/concept/confetti-abstract.png",
    title: "Confetti abstract mark",
    className: "collage-four",
  },
  {
    src: "/work/concept/smith-greenwell-wordmark.png",
    title: "Smith-Greenwell wordmark",
    className: "collage-five",
  },
  {
    src: "/work/concept/sab-symbol.png",
    title: "Sab Photography symbol",
    className: "collage-six",
  },
  {
    src: "/work/concept/confetti-combination.png",
    title: "Confetti combination mark",
    className: "collage-seven",
  },
  {
    src: "/work/concept/smith-greenwell-emblem.png",
    title: "Smith-Greenwell emblem",
    className: "collage-eight",
  },
  {
    src: "/work/concept/sab-wordmark.png",
    title: "Sab Photography wordmark",
    className: "collage-nine",
  },
  {
    src: "/work/featured/yorkshire-logo.png",
    title: "Yorkshire Prize Club logo",
    className: "collage-ten",
  },
  {
    src: "/work/featured/vpoc-student-council.jpg",
    title: "VPOC Student Council design",
    className: "collage-eleven",
  },
  {
    src: "/work/featured/goc-colors-day.png",
    title: "GOC Rep Your Colors Day flyer",
    className: "collage-twelve",
  },
  {
    src: "/work/featured/goc-student-council.png",
    title: "Gwinnett Online Campus Student Council logo",
    className: "collage-thirteen",
  },
  {
    src: "/work/featured/yorkshire-cheque.png",
    title: "Yorkshire Prize Club winner cheque",
    className: "collage-fourteen",
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a
          className="brand"
          href="#top"
          aria-label="Atlas Digital Creative home"
        >
          <span className="brand-mark">A</span>
          <span>Atlas Digital Creative</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
        </nav>

        <a className="pill small" href="#contact">
          Start a project ↗
        </a>
      </header>

      <section className="hero shell" id="top">
        <div className="eyebrow">
          <span />
          Independent creative studio · Est. 2023
        </div>

        <h1>
          Visuals that make
          <br />
          your brand <em>impossible</em>
          <br />
          to overlook.
        </h1>

        <div className="hero-bottom">
          <p>
            Brand identities, social content, and marketing materials designed
            with clarity, personality, and purpose.
          </p>

          <a className="pill" href="#work">
            Explore selected work ↓
          </a>
        </div>

        <div className="numbers">
          <div>
            <strong>4</strong>
            <span>Years of experience</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Core disciplines</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>Ideas worth making</span>
          </div>
        </div>
      </section>

      <section className="work shell" id="work">
        <div className="section-head">
          <p>(01) Selected work</p>

          <h2>
            Different brands.
            <br />
            <em>Distinct voices.</em>
          </h2>

          <p className="section-copy">
            Identity systems, client campaigns, and campus creative built
            across logos, social graphics, event materials, and print.
          </p>
        </div>

        <div className="project-collage">
          {projects.map((project) => (
            <article
              className={`project ${project.className}`}
              key={project.title}
            >
              <div className="project-image">
                <img
                  src={project.src}
                  alt={`${project.title} design project`}
                />
              </div>
            </article>
          ))}
        </div>

        <p className="project-note">
          Confetti, Smith-Greenwell Real Estate, and Sab Photography are
          fictional concept brands created for an academic design project.
          Additional work includes client and campus projects.
        </p>
      </section>

      <section className="services shell" id="services">
        <div className="section-head compact">
          <p>(02) Services</p>

          <h2>
            Built around what
            <br />
            your business <em>needs.</em>
          </h2>
        </div>

        <div className="service-list">
          <article>
            <span>01</span>
            <h3>Brand Identity</h3>
            <p>
              Logos, visual direction, color systems, typography, and the
              pieces that make a brand feel cohesive.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Social &amp; Digital</h3>
            <p>
              Campaign graphics, carousels, reels, winner announcements, and
              content made to stop the scroll.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Marketing Materials</h3>
            <p>
              Flyers, posters, menus, price lists, business cards, and custom
              print ready designs.
            </p>
          </article>
        </div>
      </section>

      <section className="about shell" id="about">
        <div className="about-label">(03) The studio</div>

        <div>
          <h2>
            Small studio energy.
            <br />
            <em>Big brand intention.</em>
          </h2>

          <p>
            Atlas Digital Creative is an independent design studio helping
            businesses turn ideas into clear, memorable visuals. Every project
            is custom built around the brand, the audience, and the actual
            goal. No recycled identities. No one size fits all creative.
          </p>

          <div className="about-tags">
            <span>Est. 2023</span>
            <span>4 years experience</span>
            <span>Based in Georgia</span>
            <span>Working worldwide</span>
          </div>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <p>(04) New projects</p>

        <h2>
          Have something in mind?
          <br />
          <em>Let&apos;s make it real.</em>
        </h2>

        <p className="contact-copy">
          Tell me what you need, your timeline, and the vision. I&apos;ll help
          shape the rest.
        </p>

        <a
          className="contact-link"
          href="mailto:atlasdigitalcreatives0@gmail.com"
        >
          atlasdigitalcreatives0@gmail.com
          <span>↗</span>
        </a>
      </section>

      <footer className="shell">
        <span>© 2026 Atlas Digital Creative</span>
        <span>Independent design studio · Est. 2023</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
