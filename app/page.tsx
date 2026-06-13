"use client";

import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const features = [
  {
    icon: "⚡",
    title: "Fast Automation",
    description:
      "Automate repetitive workflows in minutes with powerful triggers and actions. Save hours every week and focus on what matters most.",
  },
  {
    icon: "👥",
    title: "Team Collaboration",
    description:
      "Work together in real time across projects and departments. Keep everyone aligned with shared dashboards and instant notifications.",
  },
  {
    icon: "📊",
    title: "Smart Analytics",
    description:
      "Track performance with actionable, easy-to-read insights. Make confident, data-driven decisions with beautiful reports.",
  },
];

const stats = [
  { icon: "👤", value: 10000, suffix: "+", label: "Users", format: (n: number) => n.toLocaleString() },
  { icon: "⚡", value: 99.9, suffix: "%", label: "Uptime", format: (n: number) => n.toFixed(1) },
  { icon: "🏢", value: 500, suffix: "+", label: "Teams", format: (n: number) => n.toLocaleString() },
];

const pricingPlans = [
  {
    name: "Starter",
    price: 9,
    features: ["5 projects", "2 users", "Basic support"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: 29,
    features: ["Unlimited projects", "10 users", "Priority support"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: 99,
    features: ["Unlimited everything", "24/7 support"],
    highlighted: false,
  },
];

const headlineWords = [
  { text: "Build", gradient: false },
  { text: "faster", gradient: false },
  { text: "with", gradient: false },
  { text: "smarter", gradient: true },
  { text: "workflows", gradient: true },
];

const subheadlineText =
  "The all-in-one platform that helps teams ship products faster. Automate repetitive tasks, collaborate in real time, and scale without the complexity.";

const fadeInView = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const pricingSlideVariants = [
  { opacity: 0, x: -80, y: 0 },
  { opacity: 0, x: 0, y: 40 },
  { opacity: 0, x: 80, y: 0 },
];

function Typewriter({
  text,
  className,
  delay = 800,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) clearInterval(interval);
    }, 28);

    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <p className={className}>
      {displayed}
      {started && displayed.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="ml-0.5 inline-block text-purple-500"
        >
          |
        </motion.span>
      )}
    </p>
  );
}

function Counter({
  value,
  suffix,
  format,
}: {
  value: number;
  suffix: string;
  format: (n: number) => string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(value * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {format(count)}
      {suffix}
    </span>
  );
}

function SuccessCheckmark() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="flex flex-col items-center justify-center py-16"
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-blue-100">
        <svg
          className="h-10 w-10"
          viewBox="0 0 52 52"
          fill="none"
          aria-hidden
        >
          <motion.circle
            cx="26"
            cy="26"
            r="24"
            stroke="#9333ea"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          <motion.path
            d="M14 27l8 8 16-16"
            stroke="#9333ea"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          />
        </svg>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-xl font-semibold text-gray-900"
      >
        Message sent successfully!
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
        className="mt-2 text-base text-gray-600"
      >
        We&apos;ll get back to you shortly.
      </motion.p>
    </motion.div>
  );
}

export default function Home() {
  const { scrollY } = useScroll();
  const [submitted, setSubmitted] = useState(false);

  const navBackground = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.85)"],
  );
  const navBlur = useTransform(scrollY, [0, 80], [0, 12]);
  const navBorder = useTransform(
    scrollY,
    [0, 80],
    ["rgba(147, 51, 234, 0)", "rgba(147, 51, 234, 0.15)"],
  );
  const navBackdropFilter = useTransform(navBlur, (v) => `blur(${v}px)`);
  const navBorderStyle = useTransform(navBorder, (v) => `1px solid ${v}`);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-full overflow-hidden bg-white font-sans">
      {/* Gradient accent blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-purple-400/30 to-blue-400/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-gradient-to-tr from-blue-400/25 to-purple-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-gradient-to-tl from-purple-300/20 to-blue-300/10 blur-3xl"
      />

      {/* Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          backgroundColor: navBackground,
          backdropFilter: navBackdropFilter,
          borderBottom: navBorderStyle,
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between py-5 sm:py-6">
            <a href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 shadow-md shadow-purple-500/25">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </span>
              <span className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
                FlowStack
              </span>
            </a>

            <ul className="flex items-center gap-1 sm:gap-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-purple-50 hover:text-purple-700 sm:px-4 sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.header>

      <main className="relative z-10">
        {/* Hero */}
        <section className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-36 lg:px-8 lg:pt-44">
          {/* Animated gradient background */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            animate={{
              background: [
                "radial-gradient(ellipse at 20% 50%, #9333ea 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #3b82f6 0%, transparent 50%)",
                "radial-gradient(ellipse at 80% 50%, #9333ea 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, #3b82f6 0%, transparent 50%)",
                "radial-gradient(ellipse at 50% 20%, #8b5cf6 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, #6366f1 0%, transparent 50%)",
                "radial-gradient(ellipse at 20% 50%, #9333ea 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #3b82f6 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          {/* Floating animated shapes */}
          <motion.div
            aria-hidden
            animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-gradient-to-br from-purple-400/25 to-blue-400/15 blur-3xl sm:h-96 sm:w-96"
          />
          <motion.div
            aria-hidden
            animate={{ x: [0, -30, 25, 0], y: [0, 40, -25, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute top-1/4 -left-20 h-64 w-64 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-500/15 blur-3xl sm:h-80 sm:w-80"
          />
          <motion.div
            aria-hidden
            animate={{ x: [0, 25, -35, 0], y: [0, -20, 35, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute bottom-10 right-1/4 h-48 w-48 rounded-full bg-gradient-to-tl from-violet-400/20 to-indigo-400/10 blur-3xl sm:h-64 sm:w-64"
          />
          <motion.div
            aria-hidden
            animate={{ x: [0, -20, 30, 0], y: [0, 30, -15, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute top-1/2 left-1/3 h-40 w-40 rounded-full bg-gradient-to-br from-purple-300/15 to-blue-300/10 blur-3xl sm:h-56 sm:w-56"
          />

          <div className="relative mx-auto max-w-3xl text-center lg:max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 12, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50/80 px-4 py-1.5 text-sm font-medium text-purple-700 backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
              Now in public beta
            </motion.div>

            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              {headlineWords.map((word, index) => (
                <motion.span
                  key={`${word.text}-${index}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.3 + index * 0.08,
                  }}
                  className={
                    word.gradient
                      ? "bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 bg-clip-text text-transparent"
                      : undefined
                  }
                >
                  {word.text}
                  {index < headlineWords.length - 1 ? "\u00A0" : ""}
                </motion.span>
              ))}
            </h1>

            <Typewriter
              text={subheadlineText}
              delay={900}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:mt-8 sm:text-lg sm:leading-8"
            />

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: 1.2,
              }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"
            >
              <a
                href="#pricing"
                className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 text-base font-semibold text-white shadow-lg shadow-purple-500/30 transition-all hover:from-purple-700 hover:to-blue-700 hover:shadow-purple-500/40 sm:w-auto"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-8 text-base font-semibold text-gray-700 transition-all hover:border-purple-200 hover:bg-purple-50 hover:text-purple-700 sm:w-auto"
              >
                Learn More
              </a>
            </motion.div>

            <div className="mx-auto mt-16 h-px w-full max-w-xs bg-gradient-to-r from-transparent via-purple-300 to-transparent sm:mt-20 sm:max-w-md" />
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        >
          <motion.div
            {...fadeInView}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                move faster
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              Powerful features designed to help your team automate, collaborate,
              and grow.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, rotateX: 45, y: 60 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                whileHover={{
                  boxShadow: "0 20px 40px rgba(147, 51, 234, 0.18)",
                  borderColor: "rgba(147, 51, 234, 0.25)",
                }}
                style={{ perspective: 1000, transformStyle: "preserve-3d" }}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:border-purple-100 hover:shadow-lg hover:shadow-purple-500/5"
              >
                <motion.div
                  initial={{ scale: 0, y: 20 }}
                  whileInView={{ scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    delay: index * 0.1 + 0.3,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 text-2xl transition-colors group-hover:from-purple-100 group-hover:to-blue-100"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
              >
                <motion.span
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 text-2xl"
                >
                  {stat.icon}
                </motion.span>
                <p className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    format={stat.format}
                  />
                </p>
                <p className="mt-2 text-base font-medium text-gray-500">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        >
          <motion.div
            {...fadeInView}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Simple, transparent{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                pricing
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              Choose the plan that fits your team. Upgrade or downgrade anytime.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-6">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={pricingSlideVariants[index]}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.25 },
                }}
                className={`relative flex flex-col rounded-2xl p-8 ${
                  plan.highlighted
                    ? "border-2 border-transparent bg-gradient-to-b from-purple-600 to-blue-600 p-[2px] shadow-xl shadow-purple-500/20 lg:scale-105"
                    : "border border-gray-100 bg-white shadow-sm"
                }`}
              >
                {plan.highlighted && (
                  <motion.div
                    aria-hidden
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="pointer-events-none absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0%,#9333ea_25%,#3b82f6_50%,#9333ea_75%,transparent_100%)]"
                  />
                )}

                <div
                  className={`relative flex flex-1 flex-col rounded-[14px] ${
                    plan.highlighted ? "bg-white p-8" : ""
                  }`}
                >
                  {plan.highlighted && (
                    <span className="mb-4 inline-flex self-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                      Most Popular
                    </span>
                  )}

                  <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tracking-tight text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="text-base font-medium text-gray-500">
                      /month
                    </span>
                  </div>

                  <ul className="mt-8 flex flex-1 flex-col gap-4">
                    {plan.features.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-base text-gray-600"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-blue-100 text-xs text-purple-700">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`mt-8 inline-flex h-12 items-center justify-center rounded-xl px-6 text-base font-semibold transition-all ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30 hover:from-purple-700 hover:to-blue-700"
                        : "border border-gray-200 bg-white text-gray-700 hover:border-purple-200 hover:bg-purple-50 hover:text-purple-700"
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6 sm:pb-32 sm:py-28 lg:px-8"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Get in{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                touch
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              Have a question or want to learn more? Send us a message and
              we&apos;ll get back to you shortly.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <SuccessCheckmark key="success" />
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onSubmit={handleSubmit}
                className="mx-auto mt-12 max-w-lg sm:mt-16"
              >
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      whileFocus={{
                        boxShadow:
                          "0 0 0 3px rgba(147, 51, 234, 0.25), 0 0 20px rgba(147, 51, 234, 0.15)",
                      }}
                      className="mt-2 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 transition-colors focus:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      whileFocus={{
                        boxShadow:
                          "0 0 0 3px rgba(147, 51, 234, 0.25), 0 0 20px rgba(147, 51, 234, 0.15)",
                      }}
                      className="mt-2 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 transition-colors focus:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us how we can help..."
                      whileFocus={{
                        boxShadow:
                          "0 0 0 3px rgba(147, 51, 234, 0.25), 0 0 20px rgba(147, 51, 234, 0.15)",
                      }}
                      className="mt-2 block w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 transition-colors focus:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover="hover"
                  className="relative mt-8 inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 text-base font-semibold text-white shadow-lg shadow-purple-500/30 transition-all hover:from-purple-700 hover:to-blue-700 hover:shadow-purple-500/40"
                >
                  <motion.span
                    variants={{
                      hover: { x: ["-100%", "200%"] },
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                  <span className="relative">Submit</span>
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-purple-100 bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:justify-between lg:gap-8 lg:px-8 lg:py-10">
          <div className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left">
            <a href="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 shadow-md shadow-purple-500/25">
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </span>
              <span className="text-lg font-bold tracking-tight text-gray-900">
                FlowStack
              </span>
            </a>
            <p className="max-w-xs text-sm text-gray-500">
              Build faster with smarter workflows
            </p>
          </div>

          <ul className="flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-purple-50 hover:text-purple-700 sm:px-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="text-center text-sm text-gray-500 lg:text-right">
            © 2025 FlowStack. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
