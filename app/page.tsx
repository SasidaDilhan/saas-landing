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

export default function Home() {
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
      <header className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
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
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section className="mx-auto w-full max-w-7xl px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8 lg:pt-28">
          <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50/80 px-4 py-1.5 text-sm font-medium text-purple-700 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
              Now in public beta
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              Build faster with{" "}
              <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
                smarter workflows
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
              The all-in-one platform that helps teams ship products faster.
              Automate repetitive tasks, collaborate in real time, and scale
              without the complexity.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
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
            </div>

            <div className="mx-auto mt-16 h-px w-full max-w-xs bg-gradient-to-r from-transparent via-purple-300 to-transparent sm:mt-20 sm:max-w-md" />
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        >
          <div className="mx-auto max-w-2xl text-center">
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
          </div>

          <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:border-purple-100 hover:shadow-lg hover:shadow-purple-500/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 text-2xl transition-colors group-hover:from-purple-100 group-hover:to-blue-100">
                  {feature.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Simple, transparent{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                pricing
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              Choose the plan that fits your team. Upgrade or downgrade anytime.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl p-8 ${
                  plan.highlighted
                    ? "border-2 border-transparent bg-gradient-to-b from-purple-600 to-blue-600 p-[2px] shadow-xl shadow-purple-500/20 lg:scale-105"
                    : "border border-gray-100 bg-white shadow-sm"
                }`}
              >
                <div
                  className={`flex flex-1 flex-col rounded-[14px] ${
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
              </div>
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

          <form className="mx-auto mt-12 max-w-lg sm:mt-16">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
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
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@company.com"
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
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="mt-2 block w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 transition-colors focus:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 text-base font-semibold text-white shadow-lg shadow-purple-500/30 transition-all hover:from-purple-700 hover:to-blue-700 hover:shadow-purple-500/40"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
