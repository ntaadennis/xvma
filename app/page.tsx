'use client';

import Image from "next/image";
import Link from "next/link";

const basePath =
  process.env.NODE_ENV === "production" ? "/ntaadennis/xvma.git" : "";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050510] text-cyan-50 font-mono selection:bg-yellow-500/30 selection:text-yellow-200 overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-yellow-900/20 to-transparent opacity-30" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/80 backdrop-blur-md border-b border-cyan-900/30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="#hero"
            className="text-lg font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-yellow-400 hover:to-cyan-400 transition-all duration-300"
          >
            xvma
          </Link>
          <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-cyan-700/80">
            <Link
              href="#work"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all"
            >
              PROJECTS
            </Link>
            <Link
              href="#philosophy"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(232,121,249,0.8)] transition-all"
            >
              ABOUT
            </Link>
            <Link
              href="#contact"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.8)] transition-all"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section id="hero" className="py-20 md:py-32 space-y-8 relative">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-bold tracking-widest uppercase animate-pulse">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]" />
              READY TO LAUNCH
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1] drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              DENNIS VOLLMER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-cyan-500 animate-gradient-x">
                BUILDING SYSTEMS
              </span>{" "}
              <br />
              FROM SOFTWARE TO HARDWARE
            </h1>
          </div>
          <p className="text-lg md:text-xl text-cyan-100/70 max-w-2xl leading-relaxed font-light border-l-2 border-yellow-500/50 pl-6">
            Software Engineer building reliable systems. <br/>From modern web
            applications to embedded devices.
          </p>
          <div className="pt-8 flex gap-6">
            <Link
              href="#work"
              className="group relative px-8 py-3 bg-cyan-950/30 border border-cyan-500/50 text-cyan-300 font-bold tracking-widest uppercase text-sm overflow-hidden hover:bg-cyan-900/50 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                GET STARTED{" "}
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </Link>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="py-20 space-y-12">
          <div className="flex items-end justify-between border-b border-cyan-900/30 pb-4">
            <h2 className="text-2xl font-bold tracking-widest text-yellow-400 drop-shadow-[0_0_8px_rgba(232,121,249,0.6)]">
              // MY_PROJECTS
            </h2>
            <span className="text-xs font-mono text-cyan-700">
              Web and Embedded Systems{" "}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <ProjectCard
              title="Web Applications, WordPress & Shopify"
              description="Developing custom web solutions for clients, ranging from responsive websites to tailored WordPress plugins and Shopify integrations. Focused on user experience, maintainable code, and practical solutions for real-world requirements."
              tags={["JAVASCRIPT", "PHP", "REACT"]}
              color="cyan"
              href="https://github.com/ntaadennis"
            />

            {/* Project 2 */}
            <ProjectCard
              title="Large Scale React Application"
              description="Developing a complex web application from the ground up using React, PHP, and MySQL. Focused on scalable architecture, reusable components, API design, database structures, and building maintainable systems for long-term growth."
              tags={["REACT", "PHP", "MYSQL"]}
              color="cyan"
              href="https://github.com/ntaadennis"
            />

            {/* Project 3 */}
            <ProjectCard
              title="Environmental Monitoring Station"
              description="A battery-powered embedded weather station built with an Arduino Nano and BME280 sensor. Features real-time environmental measurements, OLED visualization, custom soldered electronics, and a 3D-designed enclosure."
              tags={["C++", "ARDUINO", "I²C", "CAD"]}
              color="cyan"
              href="https://github.com/ntaadennis/weatherstation"
            />

            {/* Project 4 */}
            <ProjectCard
              title="CanSat Satellite Project (TBD)"
              description="Designing a small recoverable satellite prototype based on an ESP32 microcontroller. Exploring embedded software, sensor integration, telemetry, wireless communication, and autonomous data collection."
              tags={["ESP32", "C++", "IOT", "SENSORS"]}
              color="cyan"
              href="https://github.com/ntaadennis"
            />
          </div>
        </section>

        {/* Philosophy / Approach */}
        <section
          id="philosophy"
          className="py-20 grid md:grid-cols-12 gap-12 border-t border-cyan-900/30"
        >
          <div className="md:col-span-4 space-y-8">
            <h2 className="text-2xl font-bold tracking-widest text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
              {"// ABOUT_ME"}
            </h2>

            {/* Profile Image - Replace src with your image in /public */}
            <div className="relative w-full aspect-[4/5] border border-cyan-500/30 rounded-sm overflow-hidden bg-cyan-950/30 group">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(5,5,16,0.8)_100%)] z-10" />
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:100%_4px] z-20 pointer-events-none" />

              <Image
                src={`${basePath}/me.png`}
                alt="Profile"
                fill
                className="object-cover z-0 opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
              />
            </div>
          </div>
          <div className="md:col-span-8 space-y-8 text-cyan-100/80 leading-relaxed font-light">
            <div className="space-y-4">
              <p>
                I have spent most of my professional career working as a{" "}
                <strong className="text-yellow-400 font-bold">
                  Full Stack Software Engineer
                </strong>
                , building modern web applications from concept to deployment.
              </p>

              <p>
                During my apprenticeship, I learned the fundamentals of{" "}
                <strong className="text-yellow-400 font-bold">
                  project management, React, PHP, and MySQL
                </strong>
                , developing websites, client applications, and custom WordPress
                plugins.
              </p>

              <p>
                Later, I became part of the development of a{" "}
                <strong className="text-yellow-400 font-bold">
                  large-scale web application
                </strong>{" "}
                built with
                <strong className="text-yellow-400 font-bold">
                  {" "}
                  React, PHP, and MySQL
                </strong>
                . Working on a growing codebase strengthened my understanding of
                software architecture, scalable system design, API development,
                database modeling, debugging, and writing maintainable software.
              </p>

              <p>
                Today, my focus is expanding toward{" "}
                <strong className="text-yellow-400 font-bold">
                  embedded systems
                </strong>
                . I enjoy building software that interacts directly with
                hardware, sensors, and electronic devices, and I&apos;m excited
                to apply my software engineering background to research-driven
                and hardware-oriented projects.
              </p>

              <p>
                My long-term goal is to contribute to scientific and engineering
                projects that have a
                <strong className="text-yellow-400 font-bold">
                  {" "}
                  meaningful impact
                </strong>
                . Whether in aerospace, environmental monitoring, or research, I
                want to develop software that helps us better understand and
                explore the world around us.
              </p>
            </div>

            <div className="p-6 bg-cyan-950/20 border border-cyan-500/20 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-yellow-500 to-cyan-500" />
              <div className="grid grid-cols-2 gap-8 font-mono text-sm">
                <div>
                  <h3 className="text-cyan-400 mb-4 tracking-widest uppercase text-xs border-b border-cyan-800 pb-2">
                    STACK_TRACE
                  </h3>
                  <ul className="space-y-2 text-cyan-200/70">
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">›</span> C / C++ /
                      Python
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">›</span> JavaScript /
                      TypeScript
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">›</span> React / Next.js
                      / Node.js
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">›</span> PHP / MySQL
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">›</span> Arduino / ESP32
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">›</span> Git / Linux
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-cyan-400 mb-4 tracking-widest uppercase text-xs border-b border-cyan-800 pb-2">
                    PROTOCOLS
                  </h3>
                  <ul className="space-y-2 text-cyan-200/70">
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">›</span> Always learning
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">›</span> Clean
                      Architecture
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">›</span> Research Driven
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">›</span> Systems
                      Thinking
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 border-t border-cyan-900/30">
                  <div className="max-w-3xl mx-auto text-center space-y-8">

        <h2 className="text-2xl font-bold tracking-widest text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
              {"// CONTACT"}
            </h2>
             <p className="text-cyan-200/60 text-lg">
              Interested in my work or looking for someone with experience in
              software development, embedded systems, and technical innovation?
              Feel free to reach out. I&apos;m always open to new opportunities,
              collaborations, and interesting engineering challenges.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <a
                href="mailto:ntaadennis@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "mailto:ntaadennis@gmail.com",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="px-10 py-4 bg-yellow-500 text-white font-bold tracking-widest uppercase text-sm hover:bg-yellow-400 transition-all hover:shadow-[0_0_30px_rgba(232,121,249,0.6)] hover:scale-105 duration-300 clip-path-polygon"
              >
                EMAIL ME
              </a>
              <div className="flex items-center gap-8 pt-4">
                <SocialLink
                  href="https://github.com/ntaadennis"
                  label="GITHUB"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/dennis-vollmer-721a07239/"
                  label="LINKEDIN"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  color,
  href,
}: {
  title: string;
  description: string;
  tags: string[];
  color: "cyan" | "yellow" | "purple";
  href: string;
}) {
  // Valid color options for the card styling
  const validColors = ["cyan", "yellow", "purple"] as const;

  // Runtime validation: default to "cyan" if an invalid color is provided
  const safeColor = validColors.includes(color) ? color : "cyan";

  const colorClasses = {
    cyan: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]",
    yellow:
      "group-hover:border-yellow-500/50 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]",
    purple:
      "group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
  };

  const textColors = {
    cyan: "group-hover:text-cyan-400",
    yellow: "group-hover:text-yellow-400",
    purple: "group-hover:text-purple-400",
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block space-y-4 p-6 bg-[#0a0a1a] border border-cyan-900/30 transition-all duration-300 ${colorClasses[safeColor]}`}
    >
      <div className="flex justify-between items-start">
        <h3
          className={`text-xl font-bold text-white tracking-wider transition-colors ${textColors[safeColor]}`}
        >
          {title}
        </h3>
        <ArrowUpRightIcon
          className={`w-5 h-5 text-cyan-700 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ${textColors[safeColor]}`}
        />
      </div>
      <p className="text-sm text-cyan-100/60 leading-relaxed font-light border-l border-cyan-900/50 pl-4">
        {description}
      </p>
      <div className="flex gap-2 pt-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] uppercase tracking-widest font-bold text-cyan-700 bg-cyan-950/30 px-2 py-1 border border-cyan-900/30 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs font-bold tracking-widest text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all"
    >
      {label}
    </a>
  );
}

// Simple Icons
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}
