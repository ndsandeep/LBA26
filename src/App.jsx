
import React, { useEffect, useState, useRef } from "react";
import {
  Menu, X, ArrowRight, CalendarDays, MapPin, Clock3,
  Users, Star, Globe2, Gem, Target,
  ChartNoAxesColumnIncreasing, Handshake, Mail, Phone,
  Building2, BriefcaseBusiness, Heart, Leaf,
  GraduationCap, Clapperboard, Camera, Video,
  Monitor, Medal, CheckCircle2, Award, Crown,
  Lightbulb, Stethoscope, Factory, ShoppingBag,
  Wallet, Newspaper, Palette, Sprout, Trophy,
  Send, ExternalLink, ShieldCheck, CreditCard,
  LockKeyhole, ChevronLeft
} from "lucide-react";

import GoldenTrophy3D from "./GoldenTrophy3D";
import PhoenixLogo from "./PhoenixLogo";

const tabs = [
  "Home",
  "About",
  "Recognition Fields",
  "Who Attends",
  "Sponsorship",
  "Media Partners",
  "Contact"
];

const fields = [
  ["Business Excellence", BriefcaseBusiness],
  ["Entrepreneurial Leadership", Crown],
  ["Innovation & Technology", Lightbulb],
  ["Women Leadership", Star],
  ["Social Impact", Heart],
  ["Sustainability & Environment", Leaf],
  ["Healthcare Excellence", Stethoscope],
  ["Education & Skill Development", GraduationCap],
  ["Real Estate & Infrastructure", Building2],
  ["Manufacturing Excellence", Factory],
  ["Retail & Consumer Business", ShoppingBag],
  ["Finance & Investment", Wallet],
  ["Media & Communications", Newspaper],
  ["Arts, Culture & Heritage", Palette],
  ["Community Leadership", Users]
];

const audiences = [
  ["Awardees", Award],
  ["Entrepreneurs", BriefcaseBusiness],
  ["Executives", Users],
  ["Business Owners", Building2],
  ["Professionals", BriefcaseBusiness],
  ["Community Leaders", Handshake],
  ["Next-Generation Founders", Sprout],
  ["Global Telugu Diaspora", Globe2]
];

const perks = [
  ["Stage & Venue Branding", Building2],
  ["Digital & LED Exposure", Monitor],
  ["Social Media Exposure", Globe2],
  ["Media & Publicity", Mail],
  ["VIP Access & Networking", Users],
  ["Live Streaming Visibility", Video],
  ["Award Category Association", Medal],
  ["Photography & Video", Camera],
  ["Post-Event Recall", Star],
  ["Premium Brand Association", Gem]
];

const experience = [
  ["Grand Awards Ceremony", Trophy],
  ["Recognition Celebrations", Star],
  ["Business Networking", Handshake],
  ["VIP Guest Experience", Crown],
  ["World-Class Venue & Stage", Clapperboard]
];

const REGISTRATION_FEE = 2500;

function Laurel({ flip = false }) {
  return (
    <svg
      className={`laurel-svg ${flip ? "flip" : ""}`}
      viewBox="0 0 80 200"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M70 187 Q10 120 61 17"
        stroke="#C99A32"
        strokeWidth="3"
      />
      {Array.from({ length: 8 }, (_, i) => {
        const y = 165 - i * 19;
        const x = 55 - Math.sin((i / 8) * Math.PI) * 24;

        return (
          <g key={i}>
            <ellipse
              cx={x - 12}
              cy={y - 5}
              rx="9"
              ry="21"
              transform={`rotate(-42 ${x - 12} ${y - 5})`}
              fill="#E8B94F"
            />
            <ellipse
              cx={x + 9}
              cy={y - 12}
              rx="8"
              ry="19"
              transform={`rotate(40 ${x + 9} ${y - 12})`}
              fill="#F5D77B"
            />
          </g>
        );
      })}
    </svg>
  );
}

function HomeStageArt() {
  return (
    <div className="event-art">
      <div className="stage-beams" />
      <div className="stage-arch" />
      <div className="stage-spot stage-spot-left" />
      <div className="stage-spot stage-spot-right" />
      <div className="stage-center">
        <PhoenixLogo size={78} />
        <span>LEGENDARY BUSINESS AWARDS</span>
        <strong>2026</strong>
      </div>
      <div className="stage-floor" />
    </div>
  );
}

function AboutCeremonyArt() {
  return (
    <div
      className="ceremony-art"
      role="img"
      aria-label="Grand awards ceremony with golden spotlights"
    >
      <div className="ceremony-top-glow" />
      <div className="ceremony-beam ceremony-beam-one" />
      <div className="ceremony-beam ceremony-beam-two" />
      <div className="ceremony-beam ceremony-beam-three" />
      <div className="ceremony-beam ceremony-beam-four" />

      <div className="ceremony-stage">
        <div className="ceremony-stage-arch">
          <div className="ceremony-stage-content">
            <Trophy size={43} strokeWidth={1.3} />
            <span>THE GRAND CELEBRATION</span>
            <strong>LEGENDARY</strong>
            <strong>BUSINESS AWARDS</strong>
            <b>2026</b>
          </div>
        </div>
      </div>

      <div className="ceremony-side-column ceremony-column-left" />
      <div className="ceremony-side-column ceremony-column-right" />
      <div className="ceremony-platform" />
      <div className="ceremony-red-carpet" />

      <div className="ceremony-audience">
        {Array.from({ length: 15 }, (_, index) => (
          <span
            key={index}
            className={`audience-person audience-person-${index % 4}`}
          />
        ))}
      </div>

      <span className="ceremony-spark ceremony-spark-one">✦</span>
      <span className="ceremony-spark ceremony-spark-two">✧</span>
      <span className="ceremony-spark ceremony-spark-three">✦</span>
    </div>
  );
}

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="section-heading">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      <div className="heading-ornament">
        <span />✦<span />
      </div>
    </div>
  );
}

function FeatureCard({ title, description, Icon, number }) {
  return (
    <article className="feature-card">
      {number && (
        <span className="field-number">
          {String(number).padStart(2, "0")}
        </span>
      )}

      <div className="card-icon">
        <Icon size={31} strokeWidth={1.7} />
      </div>

      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </article>
  );
}

/* ================= HOME ================= */

function HomePage({ go }) {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow">— THE ANNUAL —</div>

          <div className="hero-heading">
            <Laurel />
            <h1>
              LEGENDARY
              <br />
              BUSINESS
              <br />
              AWARDS <em>2026</em>
            </h1>
            <Laurel flip />
          </div>

          <p className="strap">
            CELEBRATING EXTRAORDINARY CONTRIBUTIONS
          </p>

          <p className="motto">
            One Night. One Stage. Lasting Legacy.
          </p>

          <div className="event-meta">
            <span>
              <CalendarDays />
              <span>19th December<br />2026</span>
            </span>

            <span>
              <MapPin />
              <span>Hotel Daspalla<br />Hyderabad</span>
            </span>

            <span>
              <Clock3 />
              <span>6:00 PM<br />Onwards</span>
            </span>
          </div>

          <div className="cta">
            <button
              className="gold-btn"
              onClick={() => go("About")}
            >
              Know More <ArrowRight size={18} />
            </button>

            <button
              className="outline-btn"
              onClick={() => go("Sponsorship")}
            >
              <Crown size={18} /> Become a Sponsor
            </button>
          </div>
        </div>

        <div className="trophy-scene">
          <GoldenTrophy3D />
        </div>
      </section>

      <section className="stats wrap">
        {[
          ["300+", "Invited Guests", Users],
          ["15", "Recognition Fields", Star],
          ["Annual", "Brand Platform", Globe2],
          ["Premium", "Recognition", Gem]
        ].map(([value, label, Icon]) => (
          <div className="stat" key={label}>
            <Icon />
            <div>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="about-preview wrap">
        <HomeStageArt />

        <div className="about-copy">
          <div className="eyebrow">THE LEGACY BEGINS</div>
          <h2>ABOUT THE AWARDS</h2>

          <p>
            Legendary Business Awards (LBA) is an annual
            recognition platform celebrating outstanding
            entrepreneurs, business leaders and professionals
            who create meaningful impact in business and society.
          </p>

          <button
            className="outline-btn"
            onClick={() => go("About")}
          >
            Discover the Awards <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <section className="home-cta wrap">
        <div className="eyebrow">BE PART OF THE LEGACY</div>
        <h2>CELEBRATE EXCELLENCE WITH US</h2>

        <p>
          Connect with inspiring leaders and be part of
          Legendary Business Awards 2026.
        </p>

        <button
          className="gold-btn"
          onClick={() => go("Contact")}
        >
          Get in Touch <ArrowRight size={18} />
        </button>
      </section>
    </>
  );
}

/* ================= ABOUT ================= */

function AboutPage() {
  return (
    <section className="inner-page">
      <div className="wrap">
        <SectionHeading
          eyebrow="THE LEGENDARY PLATFORM"
          title="ABOUT THE AWARDS"
          subtitle="A high-value event. A credible annual platform."
        />

        <div className="about-feature">
          <AboutCeremonyArt />

          <div className="about-feature-copy">
            <div className="eyebrow">
              A CELEBRATION OF EXCELLENCE
            </div>

            <h2>
              WHERE EXTRAORDINARY
              <br />
              ACHIEVEMENTS SHINE
            </h2>

            <p>
              Legendary Business Awards (LBA) is an annual
              recognition platform celebrating outstanding
              entrepreneurs, business leaders and professionals
              creating meaningful impact in business and society.
            </p>

            <p>
              The event brings together accomplished individuals,
              emerging leaders and influential voices in a premium
              environment of recognition and networking.
            </p>
          </div>
        </div>

        <div className="world-banner">
          HYDERABAD <span>✦</span> INDIA
          <span>✦</span> THE WORLD
        </div>

        <div className="feature-grid">
          <FeatureCard
            title="Recognize Excellence"
            description="Honoring remarkable achievements and meaningful contributions."
            Icon={Target}
          />

          <FeatureCard
            title="Inspire Leadership"
            description="Celebrating visionary leaders and inspiring changemakers."
            Icon={Users}
          />

          <FeatureCard
            title="Build Impact"
            description="Highlighting lasting contributions to business and society."
            Icon={ChartNoAxesColumnIncreasing}
          />
        </div>

        <SectionHeading
          eyebrow="AN UNFORGETTABLE EVENING"
          title="THE EVENT EXPERIENCE"
          subtitle="A grand celebration of leadership, innovation and impact."
        />

        <div className="feature-grid five">
          {experience.map(([title, Icon]) => (
            <FeatureCard
              key={title}
              title={title}
              Icon={Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============= FLOATING INPUT ============= */

function FloatingInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  autoComplete,
  maxLength,
  inputMode
}) {
  return (
    <div className="lba-floating-field">
      <input
        id={id}
        type={type}
        required
        placeholder=" "
        value={value}
        autoComplete={autoComplete}
        maxLength={maxLength}
        inputMode={inputMode}
        onChange={onChange}
      />

      <label htmlFor={id}>
        {label} <span>*</span>
      </label>
    </div>
  );
}

/* ============= REGISTRATION COMPONENT ============= */

function RegistrationForm({ onClose }) {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: ""
  });

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onEscape = event => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onEscape);
    };
  }, [onClose]);

  const update = (key, value) => {
    setForm(previous => ({
      ...previous,
      [key]: value
    }));
  };

  const proceed = event => {
    event.preventDefault();

    if (!form.name.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      alert("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (!form.category) {
      alert("Please select a recognition field.");
      return;
    }

    setStep(2);
  };

  return (
    <div
      className="lba-registration-overlay"
      onClick={onClose}
    >
      <div
        className="lba-registration-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Awards registration"
        onClick={event => event.stopPropagation()}
      >
        <button
          type="button"
          className="lba-modal-close"
          onClick={onClose}
          aria-label="Close registration"
        >
          <X size={22} />
        </button>

        <div className="lba-registration-header">
          <div className="eyebrow">
            LEGENDARY BUSINESS AWARDS 2026
          </div>

          <h2>
            {step === 1
              ? "AWARDS REGISTRATION"
              : "PAYMENT DETAILS"}
          </h2>

          <p>
            {step === 1
              ? "Enter your details to continue with registration."
              : "Review your registration details and fee."}
          </p>
        </div>

        <div className="lba-step-indicator">
          <div className={step >= 1 ? "active" : ""}>
            <span>1</span> Registration
          </div>

          <div className="lba-step-line" />

          <div className={step >= 2 ? "active" : ""}>
            <span>2</span> Payment
          </div>
        </div>

        {step === 1 ? (
          <form
            className="lba-registration-form"
            onSubmit={proceed}
          >
            <FloatingInput
              id="reg-name"
              label="Full Name"
              value={form.name}
              autoComplete="name"
              onChange={event =>
                update("name", event.target.value)
              }
            />

            <FloatingInput
              id="reg-email"
              label="Email Address"
              type="email"
              value={form.email}
              autoComplete="email"
              onChange={event =>
                update("email", event.target.value)
              }
            />

            <FloatingInput
              id="reg-phone"
              label="Phone Number"
              type="tel"
              value={form.phone}
              inputMode="numeric"
              autoComplete="tel-national"
              maxLength={10}
              onChange={event =>
                update(
                  "phone",
                  event.target.value.replace(/\D/g, "")
                )
              }
            />

            <div className="lba-floating-field">
              <select
                id="reg-category"
                required
                value={form.category}
                onChange={event =>
                  update("category", event.target.value)
                }
              >
                <option value="" disabled hidden />
                {fields.map(([title]) => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
              </select>

              <label
                htmlFor="reg-category"
                className={
                  form.category ? "has-value" : ""
                }
              >
                Recognition Field <span>*</span>
              </label>
            </div>

            <button
              className="gold-btn lba-full-btn"
              type="submit"
            >
              Proceed to Payment
              <ArrowRight size={19} />
            </button>

            <p className="lba-form-disclaimer">
              Your details are used only in this registration
              preview. No information is submitted or stored.
            </p>
          </form>
        ) : (
          <div className="lba-payment-step">
            <div className="lba-payment-summary">
              <div className="lba-summary-title">
                <CheckCircle2 size={25} />
                Registration Details
              </div>

              {[
                ["Full Name", form.name],
                ["Email", form.email],
                ["Phone", form.phone],
                ["Recognition Field", form.category]
              ].map(([label, value]) => (
                <div
                  className="lba-summary-row"
                  key={label}
                >
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>

            <div className="lba-payment-amount">
              <div>
                <span>Registration Fee</span>
                <strong>
                  ₹{REGISTRATION_FEE.toLocaleString("en-IN")}
                </strong>
              </div>

              <div className="lba-payment-total">
                <span>Total Amount</span>
                <strong>
                  ₹{REGISTRATION_FEE.toLocaleString("en-IN")}
                </strong>
              </div>
            </div>

            <button
              type="button"
              className="gold-btn lba-full-btn"
              onClick={() => {
                alert(
                  "Payment gateway is not connected yet. No payment has been charged."
                );
              }}
            >
              <LockKeyhole size={19} />
              Pay ₹2,500
            </button>

            <button
              type="button"
              className="lba-back-btn"
              onClick={() => setStep(1)}
            >
              <ChevronLeft size={18} />
              Back to Registration
            </button>

            <p className="lba-form-disclaimer">
              Payment integration is pending. Clicking Pay
              will not charge your account or confirm registration.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ============= RECOGNITION FIELDS ============= */

function MedallionLaurelLeft() {
  return (
    <svg className="medallion-laurel laurel-left" viewBox="0 0 28 56" fill="none" aria-hidden="true">
      <path d="M26 52 C 14 42, 6 24, 15 4" stroke="url(#goldGrad)" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M22 46 C 14 45, 11 38, 15 34 C 18 37, 21 41, 22 46 Z" fill="url(#goldGrad)" />
      <path d="M17 36 C 8 34, 5 27, 10 23 C 13 26, 17 31, 17 36 Z" fill="url(#goldGrad)" />
      <path d="M14 26 C 5 23, 3 16, 8 12 C 11 16, 14 21, 14 26 Z" fill="url(#goldGrad)" />
      <path d="M13 15 C 6 11, 6 4, 12 2 C 14 6, 14 11, 13 15 Z" fill="url(#goldGrad)" />
      <path d="M23 32 C 27 27, 28 20, 25 17 C 22 20, 22 26, 23 32 Z" fill="url(#goldGrad)" />
      <path d="M19 21 C 24 16, 24 9, 21 6 C 18 9, 18 15, 19 21 Z" fill="url(#goldGrad)" />
    </svg>
  );
}

function MedallionLaurelRight() {
  return (
    <svg className="medallion-laurel laurel-right" viewBox="0 0 28 56" fill="none" aria-hidden="true">
      <path d="M2 52 C 14 42, 22 24, 13 4" stroke="url(#goldGrad)" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 46 C 14 45, 17 38, 13 34 C 10 37, 7 41, 6 46 Z" fill="url(#goldGrad)" />
      <path d="M11 36 C 20 34, 23 27, 18 23 C 15 26, 11 31, 11 36 Z" fill="url(#goldGrad)" />
      <path d="M14 26 C 23 23, 25 16, 20 12 C 17 16, 14 21, 14 26 Z" fill="url(#goldGrad)" />
      <path d="M15 15 C 22 11, 22 4, 16 2 C 14 6, 14 11, 15 15 Z" fill="url(#goldGrad)" />
      <path d="M5 32 C 1 27, 0 20, 3 17 C 6 20, 6 26, 5 32 Z" fill="url(#goldGrad)" />
      <path d="M9 21 C 4 16, 4 9, 7 6 C 10 9, 10 15, 9 21 Z" fill="url(#goldGrad)" />
    </svg>
  );
}

function BottomRibbon() {
  return (
    <svg className="recognition-bottom-ribbon" viewBox="0 0 240 45" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <path d="M75 45 Q 165 30, 240 8 L 240 45 Z" fill="url(#ribbonGlowGrad)" />
      <path d="M55 45 Q 150 28, 240 12" stroke="url(#ribbonGoldGrad)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M115 45 Q 185 36, 240 22" stroke="url(#goldGrad)" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function RecognitionCard({ title, Icon, number }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("");
  const [sheen, setSheen] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = event => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D perspective tilt
    const rotateX = ((centerY - y) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTransform(
      `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-5px)`
    );
    setSheen({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      active: true
    });
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)"
    );
    setSheen(previous => ({ ...previous, active: false }));
  };

  return (
    <article
      ref={cardRef}
      className="recognition-card"
      style={{ transform: transform || undefined }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="recognition-card-inner">
        {/* Number Badge */}
        <span className="recognition-card-badge">
          {String(number).padStart(2, "0")}
        </span>

        {/* Gloss Overlay */}
        <div className="recognition-card-gloss" aria-hidden="true" />

        {/* Dynamic Sheen following cursor */}
        <div
          className="recognition-card-sheen"
          style={{
            opacity: sheen.active ? 0.75 : 0,
            background: `radial-gradient(circle at ${sheen.x}% ${sheen.y}%, rgba(255, 215, 106, 0.25) 0%, transparent 60%)`
          }}
          aria-hidden="true"
        />

        {/* Medallion with Laurel Leaves */}
        <div className="recognition-medallion-wrap">
          <MedallionLaurelLeft />

          <div className="recognition-medallion">
            <div className="recognition-medallion-inner">
              <Icon size={26} strokeWidth={2.2} />
            </div>
          </div>

          <MedallionLaurelRight />
        </div>

        {/* Category Title */}
        <h3 className="recognition-card-title">{title}</h3>

        {/* Bottom Gold Ribbon Wave */}
        <BottomRibbon />
      </div>
    </article>
  );
}

function RecognitionPage() {
  const [showRegistration, setShowRegistration] = useState(false);

  return (
    <section className="inner-page">
      {/* Shared Gradient Defs for Recognition Cards */}
      <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A86C13" />
            <stop offset="40%" stopColor="#D99B26" />
            <stop offset="80%" stopColor="#FFD76A" />
            <stop offset="100%" stopColor="#FFF2B8" />
          </linearGradient>
          <linearGradient id="ribbonGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A86C13" stopOpacity="0" />
            <stop offset="40%" stopColor="#D99B26" stopOpacity="0.5" />
            <stop offset="85%" stopColor="#FFD76A" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FFF2B8" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="ribbonGlowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFD76A" stopOpacity="0" />
            <stop offset="65%" stopColor="#FFD76A" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#D99B26" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      <div className="wrap">
        <SectionHeading
          eyebrow="HONOURING EXCELLENCE"
          title="15 RECOGNITION FIELDS"
          subtitle="Celebrating contributions across diverse sectors."
        />

        <div className="recognition-grid">
          {fields.map(([title, Icon], index) => (
            <RecognitionCard
              key={title}
              title={title}
              Icon={Icon}
              number={index + 1}
            />
          ))}
        </div>

        <div className="section-bottom-note">
          <Award size={22} />
          Honouring leadership, innovation and impact
        </div>

        <div className="lba-register-banner">
          <div className="lba-register-decoration">✦</div>

          <div className="eyebrow">
            BE PART OF THE LEGACY
          </div>

          <h2>REGISTER FOR THE AWARDS</h2>

          <p>
            Take the next step towards recognition at
            Legendary Business Awards 2026.
          </p>

          <button
            className="gold-btn lba-register-button"
            type="button"
            onClick={() => setShowRegistration(true)}
          >
            Register Now <ArrowRight size={20} />
          </button>

          <p className="lba-register-caption">
            19 December 2026 · Hotel Daspalla, Hyderabad
          </p>
        </div>
      </div>

      {showRegistration && (
        <RegistrationForm
          onClose={() => setShowRegistration(false)}
        />
      )}
    </section>
  );
}

/* ================= WHO ATTENDS ================= */

const audienceCategories = [
  {
    number: "01",
    title: "Awardees",
    Icon: Award,
    description: "Distinguished entrepreneurs, visionaries, and exceptional contributors recognized for meaningful impact in business and society."
  },
  {
    number: "02",
    title: "Entrepreneurs",
    Icon: BriefcaseBusiness,
    description: "Innovators and enterprise builders driving commercial growth, new ventures, and dynamic market transformation."
  },
  {
    number: "03",
    title: "Executives",
    Icon: Users,
    description: "Senior corporate leaders, managing directors, and decision-makers steering enterprise strategy and industry benchmarks."
  },
  {
    number: "04",
    title: "Business Owners",
    Icon: Building2,
    description: "Established business proprietors, family enterprise leaders, and industry stalwarts with enduring commercial legacies."
  },
  {
    number: "05",
    title: "Professionals",
    Icon: BriefcaseBusiness,
    description: "Accomplished specialists, corporate advisors, and high-impact domain practitioners across diverse sectors."
  },
  {
    number: "06",
    title: "Community Leaders",
    Icon: Handshake,
    description: "Influential changemakers, social innovators, and respected advocates shaping regional and civic development."
  },
  {
    number: "07",
    title: "Next-Generation Founders",
    Icon: Sprout,
    description: "Emerging innovators, startup pioneers, and forward-thinking founders creating the future of commerce and technology."
  },
  {
    number: "08",
    title: "Global Telugu Diaspora",
    Icon: Globe2,
    description: "Distinguished global Telugu leaders, NRI entrepreneurs, and international delegates uniting for a night of celebration."
  }
];

function WhoBottomRibbon() {
  return (
    <svg className="who-bottom-ribbon" viewBox="0 0 240 45" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <path d="M75 45 Q 165 30, 240 8 L 240 45 Z" fill="url(#whoRibbonGlow)" />
      <path d="M55 45 Q 150 28, 240 12" stroke="url(#whoRibbonGold)" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M115 45 Q 185 36, 240 22" stroke="url(#whoGoldGrad)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function WhoAttendsAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseEnter = index => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    // Return to default Awardees card (0) when mouse leaves accordion section
    setActiveIndex(0);
  };

  return (
    <div className="who-accordion-wrapper" onMouseLeave={handleMouseLeave}>
      {/* SVG Gradient Defs for Who Attends Accordion */}
      <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <linearGradient id="whoGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#986719" />
            <stop offset="35%" stopColor="#C99A32" />
            <stop offset="75%" stopColor="#F5D77B" />
            <stop offset="100%" stopColor="#FFF0B3" />
          </linearGradient>
          <linearGradient id="whoRibbonGold" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#986719" stopOpacity="0" />
            <stop offset="40%" stopColor="#C99A32" stopOpacity="0.5" />
            <stop offset="85%" stopColor="#F5D77B" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FFF2B8" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="whoRibbonGlow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F5D77B" stopOpacity="0" />
            <stop offset="65%" stopColor="#F5D77B" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#C99A32" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      <div
        className="who-accordion"
        role="region"
        aria-label="Who Attends Categories"
      >
        {audienceCategories.map((item, index) => {
          const isActive = activeIndex === index;
          const Icon = item.Icon;

          return (
            <div
              key={item.title}
              className={`who-card ${isActive ? "active" : ""}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onClick={() => setActiveIndex(index)}
              tabIndex={0}
              onFocus={() => handleMouseEnter(index)}
              role="button"
              aria-expanded={isActive}
              aria-label={`${item.number} ${item.title}`}
            >
              {/* Glossy Reflection Overlay */}
              <div className="who-card-gloss" aria-hidden="true" />

              {/* EXPANDED CONTENT (Horizontal layout) */}
              <div className="who-expanded-content" aria-hidden={!isActive}>
                <div className="who-expanded-left">
                  <div className="who-expanded-icon-disc">
                    <div className="who-expanded-icon-inner">
                      <Icon size={48} strokeWidth={1.9} />
                    </div>
                  </div>
                </div>

                <div className="who-expanded-right">
                  <div className="who-expanded-badge-row">
                    <span className="who-badge-pill">{item.number}</span>
                    <span className="who-badge-text">CATEGORY RECOGNITION</span>
                  </div>
                  <h3 className="who-expanded-title">{item.title}</h3>
                  <div className="who-expanded-divider" aria-hidden="true">
                    <span />✦<span />
                  </div>
                  <p className="who-expanded-desc">{item.description}</p>
                </div>

                <WhoBottomRibbon />
              </div>

              {/* COMPACT CONTENT (Narrow vertical panel with horizontal text) */}
              <div className="who-compact-content" aria-hidden={isActive}>
                <span className="who-compact-badge">{item.number}</span>

                <div className="who-compact-icon-disc">
                  <div className="who-compact-icon-inner">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                </div>

                <h4 className="who-compact-title">{item.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AudiencePage({ go }) {
  return (
    <section className="inner-page">
      <div className="wrap">
        <SectionHeading
          eyebrow="THE LBA COMMUNITY"
          title="WHO WILL ATTEND?"
          subtitle="An influential gathering of business and community leaders."
        />

        <div className="audience-intro">
          <Users size={35} />
          <p>
            Bringing together accomplished professionals,
            entrepreneurs, founders and influential leaders
            from India and the global Telugu community.
          </p>
        </div>

        <WhoAttendsAccordion />

        <div className="network-banner">
          <div>
            <h2>CONNECT. CELEBRATE. INSPIRE.</h2>
            <p>
              An evening designed for meaningful connections
              and lasting professional relationships.
            </p>

            <button
              className="gold-btn"
              onClick={() => go("Contact")}
            >
              Contact Us <ArrowRight size={18} />
            </button>
          </div>

          <Handshake size={90} strokeWidth={1.2} />
        </div>
      </div>
    </section>
  );
}

/* ================= SPONSORSHIP ================= */

const sponsorshipCategories = [
  {
    number: "01",
    title: "Stage & Venue Branding",
    Icon: Building2,
    description: "Prime branding across the main ceremony stage, backdrop displays, entrance archways, and reception areas."
  },
  {
    number: "02",
    title: "Digital & LED Exposure",
    Icon: Monitor,
    description: "Continuous high-resolution logo rotations on massive LED displays and digital event screens throughout the evening."
  },
  {
    number: "03",
    title: "Social Media Exposure",
    Icon: Globe2,
    description: "Dedicated promotional features, partner announcements, and high-engagement spotlight across social channels."
  },
  {
    number: "04",
    title: "Media & Publicity",
    Icon: Mail,
    description: "Comprehensive coverage across print, television, digital publications, and official event press releases."
  },
  {
    number: "05",
    title: "VIP Access & Networking",
    Icon: Users,
    description: "Exclusive gala access passes, reserved executive seating, and high-level networking with corporate leaders."
  },
  {
    number: "06",
    title: "Live Streaming Visibility",
    Icon: Video,
    description: "Prominent digital stream logo placement and broadcast mentions reaching diaspora audiences worldwide."
  },
  {
    number: "07",
    title: "Award Category Association",
    Icon: Medal,
    description: "Exclusive co-branding and presentation rights for an official Legendary Business Awards category."
  },
  {
    number: "08",
    title: "Photography & Video",
    Icon: Camera,
    description: "Branded step-and-repeat backdrops, high-definition ceremony photo coverage, and official highlights inclusion."
  }
];

function SponsorshipCornerWaves() {
  return (
    <div className="sponsorship-corner-ribbons" aria-hidden="true">
      <svg className="sponsorship-ribbon-svg left" viewBox="0 0 360 220" fill="none">
        <path d="M0 220 Q 90 150, 180 180 T 360 110" stroke="url(#sponsRibbonGold)" strokeWidth="2.2" opacity="0.8" />
        <path d="M0 180 Q 80 120, 200 150 T 340 70" stroke="url(#sponsGoldGrad)" strokeWidth="1.6" opacity="0.6" />
        <path d="M0 140 Q 120 70, 250 120 L 250 220 L 0 220 Z" fill="url(#sponsRibbonGlow)" opacity="0.25" />
      </svg>
      <svg className="sponsorship-ribbon-svg right" viewBox="0 0 360 220" fill="none">
        <path d="M360 220 Q 270 150, 180 180 T 0 110" stroke="url(#sponsRibbonGold)" strokeWidth="2.2" opacity="0.8" />
        <path d="M360 180 Q 280 120, 160 150 T 20 70" stroke="url(#sponsGoldGrad)" strokeWidth="1.6" opacity="0.6" />
        <path d="M360 140 Q 240 70, 110 120 L 110 220 L 360 220 Z" fill="url(#sponsRibbonGlow)" opacity="0.25" />
      </svg>
    </div>
  );
}

function SponsorshipParticles() {
  return (
    <div className="sponsorship-particles" aria-hidden="true">
      <span className="spons-sparkle sp1" />
      <span className="spons-sparkle sp2" />
      <span className="spons-sparkle sp3" />
      <span className="spons-sparkle sp4" />
      <span className="spons-sparkle sp5" />
      <span className="spons-sparkle sp6" />
    </div>
  );
}

function SponsorshipCard({ item }) {
  const { number, title, Icon, description } = item;
  return (
    <article className="sponsorship-card">
      <div className="sponsorship-card-top-light" aria-hidden="true" />
      <div className="sponsorship-card-gloss" aria-hidden="true" />
      <div className="sponsorship-card-ambient" aria-hidden="true" />

      <span className="sponsorship-card-number">{number}</span>

      <div className="sponsorship-icon-disc">
        <div className="sponsorship-icon-inner">
          <Icon size={32} strokeWidth={1.9} />
        </div>
      </div>

      <h3 className="sponsorship-card-title">{title}</h3>

      <div className="sponsorship-card-divider" aria-hidden="true">
        <span />✦<span />
      </div>

      <p className="sponsorship-card-desc">{description}</p>
    </article>
  );
}

function SponsorshipPage({ go }) {
  const journey = [
    {
      number: "01",
      title: "Before the Event",
      Icon: CalendarDays,
      text: "Event announcements, digital promotions, social media campaigns and pre-event brand visibility."
    },
    {
      number: "02",
      title: "During the Event",
      Icon: Building2,
      text: "Stage branding, LED exposure, audience engagement, VIP access and business networking."
    },
    {
      number: "03",
      title: "After the Event",
      Icon: Video,
      text: "Event photography, video highlights, media coverage, digital recall and continued brand association."
    }
  ];

  return (
    <section className="inner-page sponsorship-page">
      {/* SVG Gradient Defs for Sponsorship Section */}
      <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <linearGradient id="sponsGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#986719" />
            <stop offset="35%" stopColor="#C99A32" />
            <stop offset="75%" stopColor="#F5D77B" />
            <stop offset="100%" stopColor="#FFF0B3" />
          </linearGradient>
          <linearGradient id="sponsRibbonGold" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#986719" stopOpacity="0" />
            <stop offset="40%" stopColor="#C99A32" stopOpacity="0.55" />
            <stop offset="85%" stopColor="#F5D77B" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FFF2B8" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="sponsRibbonGlow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F5D77B" stopOpacity="0" />
            <stop offset="65%" stopColor="#F5D77B" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#C99A32" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Decorative flowing gold waves and particles */}
      <SponsorshipCornerWaves />
      <SponsorshipParticles />

      <div className="wrap">
        <div className="sponsorship-header">
          <SectionHeading
            eyebrow="PREMIUM BRAND ASSOCIATION"
            title="SPONSORSHIP OPPORTUNITIES"
            subtitle="Position your brand alongside a prestigious annual recognition platform."
          />
        </div>

        {/* Exactly 8 Existing Sponsorship Cards in 4 columns x 2 rows on Desktop */}
        <div className="sponsorship-grid">
          {sponsorshipCategories.map(item => (
            <SponsorshipCard
              key={item.title}
              item={item}
            />
          ))}
        </div>

        <div className="partner-panel">
          <div className="partner-panel-icon">
            <Crown size={44} />
          </div>

          <div className="eyebrow">BECOME A PARTNER</div>
          <h2>FOUNDING YEAR PARTNERSHIP</h2>

          <p>
            Join the inaugural edition of Legendary Business
            Awards 2026 and build a meaningful long-term
            association with this annual platform.
          </p>

          <div className="benefit-list">
            {[
              "Early and prominent brand visibility",
              "Strategic access to business leaders",
              "Media and digital promotion",
              "Long-term annual brand association"
            ].map(benefit => (
              <div key={benefit}>
                <CheckCircle2 size={19} />
                {benefit}
              </div>
            ))}
          </div>

          <button
            className="gold-btn sponsorship-btn"
            onClick={() => go("Contact")}
          >
            Sponsorship Enquiry
            <ArrowRight size={18} />
          </button>
        </div>

        <SectionHeading
          eyebrow="MAXIMUM BRAND VISIBILITY"
          title="SPONSOR VISIBILITY JOURNEY"
          subtitle="Your brand's presence before, during and after the event."
        />

        <div className="journey-grid">
          {journey.map(({ number, title, Icon, text }) => (
            <article
              className="journey-card"
              key={number}
            >
              <span className="journey-number">
                {number}
              </span>

              <Icon size={36} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= MEDIA PARTNERS ================= */

const mediaPartners = [
  {
    name: "BIG TV",
    label: "— Satellite News Television —",
    badge: "📺 TV Broadcast Partner",
    logo: "/assets/media-partners/big-tv.png",
    description: "Leading Telugu 24/7 news channel with millions of household viewers across Telangana & Andhra Pradesh."
  },
  {
    name: "iDREAM MEDIA",
    label: "— Digital Entertainment Network —",
    badge: "▶ Digital Video Partner",
    logo: "/assets/media-partners/idream.png",
    description: "India's premier digital media power brand with multi-million YouTube subscribers and global Telugu diaspora viewership."
  },
  {
    name: "AADAB HYDERABAD",
    label: "ఆదాబ్ హైదరాబాద్ · Daily Newspaper",
    badge: "📰 Print Media Partner",
    logo: "/assets/media-partners/aadab.png",
    description: "Esteemed Telugu daily newspaper offering high-credibility print coverage and prominent business editorial columns."
  },
  {
    name: "92.7 BIG FM",
    label: "— India's Premier FM Network —",
    badge: "📻 Radio Partner",
    logo: "/assets/media-partners/big-fm.png",
    description: "Reaching millions of listeners daily with prime-time on-air contests, RJ promotions, and commercial airtime buzz."
  }
];

function MediaBottomRibbon() {
  return (
    <svg className="media-bottom-ribbon" viewBox="0 0 260 50" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 50 Q 80 20, 160 38 T 260 12 L 260 50 Z" fill="url(#mediaRibbonGlow)" />
      <path d="M0 45 Q 85 18, 170 34 T 260 14" stroke="url(#mediaRibbonGold)" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M40 50 Q 120 32, 210 38 T 260 25" stroke="url(#mediaGoldGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />
    </svg>
  );
}

function MediaTopCurves() {
  return (
    <div className="media-top-curves" aria-hidden="true">
      <svg className="media-curve-svg left" viewBox="0 0 400 240" fill="none">
        <path d="M0 0 Q 120 80, 220 50 T 400 140" stroke="url(#mediaRibbonGold)" strokeWidth="2.2" opacity="0.75" />
        <path d="M0 40 Q 100 120, 240 80 T 360 200" stroke="url(#mediaGoldGrad)" strokeWidth="1.6" opacity="0.55" />
        <path d="M0 0 Q 140 100, 260 60 L 260 0 Z" fill="url(#mediaRibbonGlow)" opacity="0.25" />
      </svg>
      <svg className="media-curve-svg right" viewBox="0 0 400 240" fill="none">
        <path d="M400 0 Q 280 80, 180 50 T 0 140" stroke="url(#mediaRibbonGold)" strokeWidth="2.2" opacity="0.75" />
        <path d="M400 40 Q 300 120, 160 80 T 40 200" stroke="url(#mediaGoldGrad)" strokeWidth="1.6" opacity="0.55" />
        <path d="M400 0 Q 260 100, 140 60 L 140 0 Z" fill="url(#mediaRibbonGlow)" opacity="0.25" />
      </svg>
    </div>
  );
}

function MediaParticles() {
  return (
    <div className="media-particles" aria-hidden="true">
      <span className="media-dot mp1" />
      <span className="media-dot mp2" />
      <span className="media-dot mp3" />
      <span className="media-dot mp4" />
      <span className="media-dot mp5" />
      <span className="media-dot mp6" />
    </div>
  );
}

function MediaCard({ partner }) {
  const { name, label, badge, logo, description } = partner;
  return (
    <article className="media-card">
      {/* Specular hairline top reflection */}
      <div className="media-card-top-light" aria-hidden="true" />
      
      {/* Specular hairline bottom reflection */}
      <div className="media-card-bottom-light" aria-hidden="true" />

      {/* Glossy diagonal sheen overlay */}
      <div className="media-card-gloss" aria-hidden="true" />

      {/* 1. Original Logo inside rectangular dark display area */}
      <div className="media-logo-display">
        <img
          src={logo}
          alt={name}
          className="media-logo-img"
          loading="lazy"
        />
      </div>

      {/* 2. Partner Name in large elegant white serif typography */}
      <h3 className="media-card-name">{name}</h3>

      {/* 3. Subtitle / Category Label in bright gold */}
      <div className="media-card-category">{label}</div>

      {/* 4. Partner description in soft silver-white */}
      <p className="media-card-desc">{description}</p>

      {/* 5. Partner-type badge at bottom */}
      <div className="media-badge-wrap">
        <span className="media-partner-badge">{badge}</span>
      </div>

      {/* Elegant golden curved bottom wave decoration */}
      <MediaBottomRibbon />
    </article>
  );
}

function MediaPage() {
  return (
    <section className="inner-page media-page">
      {/* SVG Gradient Defs for Media Page */}
      <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <linearGradient id="mediaGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#986719" />
            <stop offset="35%" stopColor="#C99A32" />
            <stop offset="75%" stopColor="#F5D77B" />
            <stop offset="100%" stopColor="#FFD45C" />
          </linearGradient>
          <linearGradient id="mediaRibbonGold" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#986719" stopOpacity="0" />
            <stop offset="40%" stopColor="#C99A32" stopOpacity="0.55" />
            <stop offset="85%" stopColor="#F5D77B" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FFD45C" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="mediaRibbonGlow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F5D77B" stopOpacity="0" />
            <stop offset="65%" stopColor="#F5D77B" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#C99A32" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Decorative top corner curves & ambient particles */}
      <MediaTopCurves />
      <MediaParticles />

      <div className="wrap">
        <div className="media-heading-wrap">
          <Laurel />
          <div className="media-heading-center">
            <div className="eyebrow">AMPLIFYING THE CELEBRATION</div>
            <h2 className="media-main-title">OUR MEDIA PARTNERS</h2>
            <div className="media-title-divider" aria-hidden="true">
              <span />✦<span />
            </div>
            <p className="media-subtitle">
              Media associations supporting wider visibility and reach.
            </p>
          </div>
          <Laurel flip />
        </div>

        {/* FOUR PREMIUM MEDIA PARTNER CARDS IN 1 ROW ON DESKTOP */}
        <div className="media-cards-grid">
          {mediaPartners.map(partner => (
            <MediaCard
              key={partner.name}
              partner={partner}
            />
          ))}
        </div>

        <div className="media-footer">
          <Globe2 size={45} />
          <h2>WIDER REACH. GREATER IMPACT.</h2>
          <p>
            Building visibility for exceptional achievements
            through trusted media associations.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================= CONTACT ================= */

function ContactCardWave() {
  return (
    <svg className="contact-card-wave" viewBox="0 0 320 50" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 50 Q 95 18, 190 38 T 320 12 L 320 50 Z" fill="url(#contactRibbonGlow)" />
      <path d="M0 45 Q 100 16, 205 34 T 320 14" stroke="url(#contactRibbonGold)" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M50 50 Q 145 30, 250 36 T 320 24" stroke="url(#contactGoldGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />
    </svg>
  );
}

function ContactTopCurves() {
  return (
    <div className="contact-top-curves" aria-hidden="true">
      <svg className="contact-curve-svg left" viewBox="0 0 420 250" fill="none">
        <path d="M0 0 Q 130 85, 230 55 T 420 145" stroke="url(#contactRibbonGold)" strokeWidth="2.4" opacity="0.8" />
        <path d="M0 45 Q 110 125, 255 85 T 380 210" stroke="url(#contactGoldGrad)" strokeWidth="1.6" opacity="0.6" />
        <path d="M0 0 Q 150 105, 280 65 L 280 0 Z" fill="url(#contactRibbonGlow)" opacity="0.25" />
      </svg>
      <svg className="contact-curve-svg right" viewBox="0 0 420 250" fill="none">
        <path d="M420 0 Q 290 85, 190 55 T 0 145" stroke="url(#contactRibbonGold)" strokeWidth="2.4" opacity="0.8" />
        <path d="M420 45 Q 310 125, 165 85 T 40 210" stroke="url(#contactGoldGrad)" strokeWidth="1.6" opacity="0.6" />
        <path d="M420 0 Q 270 105, 140 65 L 140 0 Z" fill="url(#contactRibbonGlow)" opacity="0.25" />
      </svg>
    </div>
  );
}

function ContactParticles() {
  return (
    <div className="contact-particles" aria-hidden="true">
      <span className="contact-dot cp1" />
      <span className="contact-dot cp2" />
      <span className="contact-dot cp3" />
      <span className="contact-dot cp4" />
      <span className="contact-dot cp5" />
      <span className="contact-dot cp6" />
      <span className="contact-dot cp7" />
      <span className="contact-dot cp8" />
    </div>
  );
}

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Sponsorship",
    message: ""
  });

  const update = (key, value) => {
    setForm(previous => ({
      ...previous,
      [key]: value
    }));
  };

  const submit = event => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `LBA 2026 - ${form.interest} Enquiry`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Interest: ${form.interest}\n\n` +
      `Message:\n${form.message}`
    );

    window.location.href =
      `mailto:sinduadvertisers@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="inner-page contact-page">
      {/* SVG Gradient Defs for Contact Page */}
      <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <linearGradient id="contactGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9C6D19" />
            <stop offset="25%" stopColor="#C28C1D" />
            <stop offset="50%" stopColor="#E7AD21" />
            <stop offset="75%" stopColor="#F7C928" />
            <stop offset="100%" stopColor="#FFD84A" />
          </linearGradient>
          <linearGradient id="contactRibbonGold" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9C6D19" stopOpacity="0" />
            <stop offset="35%" stopColor="#C28C1D" stopOpacity="0.55" />
            <stop offset="75%" stopColor="#F7C928" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FFD84A" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="contactRibbonGlow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F9E475" stopOpacity="0" />
            <stop offset="65%" stopColor="#F7C928" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#C28C1D" stopOpacity="0.38" />
          </linearGradient>
        </defs>
      </svg>

      {/* Atmospheric corner decorative waves & sparkling particles */}
      <ContactTopCurves />
      <ContactParticles />

      <div className="wrap">
        <div className="contact-heading-wrap">
          <Laurel />
          <div className="contact-heading-center">
            <div className="eyebrow">JOIN THE CELEBRATION</div>
            <h2 className="contact-main-title">EVENT DETAILS & CONTACT</h2>
            <div className="contact-title-divider" aria-hidden="true">
              <span />✦<span />
            </div>
            <p className="contact-subtitle">
              We look forward to connecting with you.
            </p>
          </div>
          <Laurel flip />
        </div>

        {/* 3 Event Details Quick-Info Cards */}
        <div className="event-details-strip">
          <div className="event-detail-card">
            <div className="contact-card-top-light" aria-hidden="true" />
            <div className="contact-card-gloss" aria-hidden="true" />
            <div className="detail-icon-disc">
              <CalendarDays size={28} />
            </div>
            <div className="detail-card-content">
              <strong>19 December 2026</strong>
              <span>Saturday</span>
            </div>
            <ContactCardWave />
          </div>

          <div className="event-detail-card">
            <div className="contact-card-top-light" aria-hidden="true" />
            <div className="contact-card-gloss" aria-hidden="true" />
            <div className="detail-icon-disc">
              <MapPin size={28} />
            </div>
            <div className="detail-card-content">
              <strong>Hotel Daspalla</strong>
              <span>Hyderabad, India</span>
            </div>
            <ContactCardWave />
          </div>

          <div className="event-detail-card">
            <div className="contact-card-top-light" aria-hidden="true" />
            <div className="contact-card-gloss" aria-hidden="true" />
            <div className="detail-icon-disc">
              <Clock3 size={28} />
            </div>
            <div className="detail-card-content">
              <strong>6:00 PM Onwards</strong>
              <span>Grand Awards Evening</span>
            </div>
            <ContactCardWave />
          </div>
        </div>

        {/* Contact Layout: Left Details Card & Right Enquiry Form */}
        <div className="contact-layout">
          {/* Left: Contact Details Card */}
          <div className="contact-details">
            <div className="contact-card-top-light" aria-hidden="true" />
            <div className="contact-card-bottom-light" aria-hidden="true" />
            <div className="contact-card-gloss" aria-hidden="true" />

            <div className="eyebrow">LET'S CONNECT</div>
            <h2>CONTACT US</h2>

            <p className="contact-desc">
              For sponsorships, partnerships and general enquiries, get in touch with our team.
            </p>

            <div className="contact-links-list">
              <a
                className="contact-link"
                href="tel:+917675813732"
              >
                <div className="contact-link-icon">
                  <Phone size={22} />
                </div>
                <div className="contact-link-text">
                  <small>CALL US</small>
                  <strong>+91 76758 13732</strong>
                </div>
              </a>

              <a
                className="contact-link"
                href="mailto:sinduadvertisers@gmail.com"
              >
                <div className="contact-link-icon">
                  <Mail size={22} />
                </div>
                <div className="contact-link-text">
                  <small>EMAIL US</small>
                  <strong>sinduadvertisers@gmail.com</strong>
                </div>
              </a>

              <a
                className="contact-link"
                href="https://www.sinduadvertisers.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-link-icon">
                  <Globe2 size={22} />
                </div>
                <div className="contact-link-text">
                  <small>WEBSITE</small>
                  <strong>www.sinduadvertisers.com</strong>
                </div>
              </a>
            </div>

            <div className="contact-divider" />

            <div className="contact-event-summary">
              <h3>Legendary Business Awards 2026</h3>
              <p>One Night. One Stage. Lasting Legacy.</p>
            </div>

            <a
              className="outline-btn venue-btn"
              href="https://www.google.com/maps/search/?api=1&query=Hotel+Daspalla+Hyderabad"
              target="_blank"
              rel="noreferrer"
            >
              <span>View Venue on Maps</span>
              <ExternalLink size={17} />
            </a>

            <ContactCardWave />
          </div>

          {/* Right: Enquiry Form Card */}
          <form
            className="enquiry-form"
            onSubmit={submit}
          >
            <div className="contact-card-top-light" aria-hidden="true" />
            <div className="contact-card-bottom-light" aria-hidden="true" />
            <div className="contact-card-gloss" aria-hidden="true" />

            <div className="eyebrow">GET IN TOUCH</div>
            <h3>SEND AN ENQUIRY</h3>
            <p className="form-subtitle">
              Fill in your details to prepare an email enquiry.
            </p>

            <div className="form-row">
              <label>
                Full Name
                <input
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={event =>
                    update("name", event.target.value)
                  }
                />
              </label>

              <label>
                Email Address
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={event =>
                    update("email", event.target.value)
                  }
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Phone Number
                <input
                  required
                  type="tel"
                  placeholder="+91..."
                  value={form.phone}
                  onChange={event =>
                    update("phone", event.target.value)
                  }
                />
              </label>

              <label>
                Enquiry Type
                <select
                  value={form.interest}
                  onChange={event =>
                    update("interest", event.target.value)
                  }
                >
                  <option>Sponsorship</option>
                  <option>Media Partnership</option>
                  <option>General Enquiry</option>
                </select>
              </label>
            </div>

            <label>
              Your Message
              <textarea
                required
                rows={5}
                placeholder="Tell us about your enquiry..."
                value={form.message}
                onChange={event =>
                  update("message", event.target.value)
                }
              />
            </label>

            <button
              className="gold-btn contact-submit-btn"
              type="submit"
            >
              <span>Prepare Email</span> <Send size={18} />
            </button>

            <small className="form-footnote">
              ✦ This opens your email application. No information is stored on the website.
            </small>

            <ContactCardWave />
          </form>
        </div>

        {/* Venue Showcase Card */}
        <div className="venue-showcase">
          <div className="contact-card-top-light" aria-hidden="true" />
          <div className="contact-card-bottom-light" aria-hidden="true" />
          <div className="contact-card-gloss" aria-hidden="true" />

          <div className="venue-illustration">
            <Building2
              size={85}
              strokeWidth={1.3}
            />
          </div>

          <div className="venue-info">
            <div className="eyebrow">THE PREMIER VENUE</div>
            <h2>HOTEL DASPALLA</h2>
            <div className="venue-location">Hyderabad, India</div>

            <p>
              Join us for an evening of recognition, celebration and meaningful connections at Hyderabad's premier destination.
            </p>
          </div>

          <ContactCardWave />
        </div>
      </div>
    </section>
  );
}

/* ================= MAIN APP ================= */

function pageFromHash() {
  const hash = decodeURIComponent(
    window.location.hash.replace("#", "")
  );

  return (
    tabs.find(
      tab =>
        tab.toLowerCase().replace(/\s+/g, "-") === hash
    ) || "Home"
  );
}

export default function App() {
  const [page, setPage] = useState(pageFromHash);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setPage(pageFromHash());
      setMobile(false);
    };

    window.addEventListener(
      "hashchange",
      handleHashChange
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        handleHashChange
      );
    };
  }, []);

  const go = nextPage => {
    setPage(nextPage);
    setMobile(false);

    window.location.hash =
      nextPage.toLowerCase().replace(/\s+/g, "-");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="app">
      <header className="header">
        <button
          className="brand"
          onClick={() => go("Home")}
          aria-label="Go to Home"
        >
          <PhoenixLogo size={54} />

          <span>
            LEGENDARY
            <br />
            BUSINESS
            <br />
            <b>AWARDS 2026</b>
          </span>
        </button>

        <button
          className="mobile-menu"
          onClick={() => setMobile(!mobile)}
          aria-label="Toggle navigation"
          aria-expanded={mobile}
        >
          {mobile ? <X /> : <Menu />}
        </button>

        <nav className={`nav ${mobile ? "open" : ""}`}>
          {tabs.map(tab => (
            <button
              key={tab}
              className={
                page === tab ? "selected" : ""
              }
              onClick={() => go(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        <button
          className="gold-btn header-btn"
          onClick={() => go("Contact")}
        >
          <ShieldCheck size={17} />
          Sponsorship Enquiry
        </button>
      </header>

      <main>
        <div className="gold-swoosh swoosh-left" />
        <div className="gold-swoosh swoosh-right" />

        {page === "Home" && (
          <HomePage go={go} />
        )}

        {page === "About" && (
          <AboutPage />
        )}

        {page === "Recognition Fields" && (
          <RecognitionPage />
        )}

        {page === "Who Attends" && (
          <AudiencePage go={go} />
        )}

        {page === "Sponsorship" && (
          <SponsorshipPage go={go} />
        )}

        {page === "Media Partners" && (
          <MediaPage />
        )}

        {page === "Contact" && (
          <ContactPage />
        )}
      </main>

      <footer>
        <PhoenixLogo size={52} />

        <strong>
          LEGENDARY BUSINESS AWARDS 2026
        </strong>

        <p>
          One Night. One Stage. Lasting Legacy.
        </p>

        <div className="footer-nav">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => go(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <small>
          19 December 2026 · Hotel Daspalla, Hyderabad
        </small>
      </footer>
    </div>
  );
}
