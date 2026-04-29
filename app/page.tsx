import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

const brands = [
  {
    name: "Sambel Colek",
    desc: "Tradition, precision, and premium operational standards for mass appeal.",
    icon: "/icon/sambelcolek.png",
    meta: "Flagship Culinary"
  },
  {
    name: "Sambel'e Nyah Ti",
    desc: "A bold, culturally-rooted concept engineered for scalable excellence.",
    icon: "/icon/sambelenyahti.png",
    meta: "Heritage Heat"
  },
  {
    name: "Jempolan",
    desc: "A legacy-built brand with a modern governance framework.",
    icon: "/icon/jempolan.png",
    meta: "Signature"
  },
  {
    name: "Green Beans",
    desc: "Coffee culture, community space, and consistent craft experience.",
    icon: "/icon/greenbeans.png",
    meta: "Coffee & Community"
  }
];

export default function Page() {
  return (
    <>
      <nav className="bg-white/80 dark:bg-[#272626]/80 backdrop-blur-lg fixed top-0 w-full z-50 shadow-sm dark:shadow-none bg-surface-container-low">
        <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
          <div className="flex items-center gap-4">
            <Image
              src="/icon/Gaspoll.png"
              alt="GASPOLL Logo"
              width={140}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </div>
          <div className="hidden lg:flex items-center gap-12 text-sm font-headline uppercase tracking-tight">
            <a className="text-secondary font-bold border-b-2 border-secondary pb-1" href="#brands">
              Brands
            </a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#about">
              About
            </a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#vision">
              Vision
            </a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#connect">
              Connect
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-secondary-container text-on-secondary-container px-5 py-2 rounded-full font-headline font-black text-xs uppercase tracking-wider hover:bg-secondary-fixed transition-colors">
              Partner With Us
            </button>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main className="pt-28">
        <section className="px-8 lg:px-24 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/40">
                <span className="material-symbols-outlined text-secondary text-base">workspace_premium</span>
                <span className="text-xs tracking-widest uppercase text-on-surface-variant font-headline">
                  Strategic Brand Management
                </span>
              </div>
              <h1 className="font-display text-6xl md:text-7xl font-black tracking-tighter mt-8 leading-[0.95]">
                Global Authority in <span className="text-secondary">F&B</span> Portfolios.
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed mt-8 max-w-xl">
                GASPOLL Management Center orchestrates operational excellence and strategic growth across
                premium culinary & lifestyle brands.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button className="bg-primary-container text-on-primary px-10 py-5 rounded-full font-headline font-black text-sm uppercase tracking-wider hover:opacity-95 transition-opacity">
                  Explore Brands
                </button>
                <button className="border border-outline-variant/60 text-on-surface px-10 py-5 rounded-full font-headline font-black text-sm uppercase tracking-wider hover:bg-surface-container-low transition-colors">
                  Contact Office
                </button>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden bg-surface-container">
              <div className="absolute inset-0 opacity-60">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP1J1i9-X-Eg_UNw10GECXr2XFQRiHNByqTIFyoS8i1W2fFQr8w2-T-FygSmM3-9h_D2d8AflIVnLla300RP8a1CHSw0XkWOmLGm4EhA_6EA3oF-WIpBvMEV1cauoBYx8tsBksje8HW5OCcRFSgu8ra7SG5ua1ozX7X0Y-A3JiD20zzZAp_7UKXTXzEqPQjaWCAJGVqKTGWMzmGntMEyDyg7cdeLBvxEz3M0lJgDXAaBGkSqAgFgoZ9vjH6s4PRvecVDs3RUuyaC0"
                  alt="Global Network Map"
                  fill
                  className="object-cover grayscale"
                  priority
                />
              </div>
              <div className="relative p-10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-2xl border border-secondary/20">
                    <div className="text-secondary font-bold text-xl">Singapore</div>
                    <div className="text-xs font-display tracking-widest text-on-surface-variant uppercase">
                      Strategic Hub
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-2xl border border-primary/20 justify-self-end">
                    <div className="text-primary font-bold text-xl">Zurich</div>
                    <div className="text-xs font-display tracking-widest text-on-surface-variant uppercase">
                      Financial Core
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface"></div>
            </div>
          </div>
        </section>

        <section id="brands" className="px-8 lg:px-24 py-24">
          <div className="flex items-end justify-between gap-8 mb-12">
            <div>
              <div className="text-xs font-display tracking-widest text-on-surface-variant uppercase">
                Portfolio
              </div>
              <h2 className="font-display text-5xl font-black tracking-tighter mt-3">
                Brands Under Management
              </h2>
            </div>
            <div className="hidden md:block text-on-surface-variant max-w-md">
              A curated selection of high-performing concepts governed by a single standard: excellence.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {brands.map((b) => (
              <div
                key={b.name}
                className="bg-surface-container-low border border-outline-variant/30 rounded-3xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <Image src={b.icon} alt={`${b.name} icon`} width={44} height={44} className="h-11 w-11" />
                  <span className="text-[10px] tracking-[0.25em] uppercase text-on-surface-variant font-headline">
                    {b.meta}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-black tracking-tight mt-6">{b.name}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mt-3">{b.desc}</p>
                <button className="mt-8 w-full bg-white text-on-surface px-6 py-4 rounded-full font-headline font-black text-xs uppercase tracking-widest hover:bg-surface transition-colors border border-outline-variant/30">
                  View Brand
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="px-8 lg:px-24 py-24">
          <div className="bg-surface-container-low rounded-3xl p-12 lg:p-16 border border-outline-variant/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="text-xs font-display tracking-widest text-on-surface-variant uppercase">
                  About GMC
                </div>
                <h2 className="font-display text-5xl font-black tracking-tighter mt-4">
                  Structured. Adaptive. Accountable.
                </h2>
                <p className="text-on-surface-variant text-base leading-relaxed mt-6">
                  PT Gaspoll Management Center is a management organization focused on building sustainable
                  F&B operations, strengthening teams, and accelerating brand growth with clear governance.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { k: "Founded", v: "30 Jan 2023" },
                  { k: "Core Focus", v: "F&B Business Management" },
                  { k: "HQ", v: "Sleman, DIY" },
                  { k: "Team", v: "14 core management" }
                ].map((x) => (
                  <div key={x.k} className="bg-white rounded-2xl p-6 border border-outline-variant/25">
                    <div className="text-xs uppercase tracking-widest text-on-surface-variant font-headline">
                      {x.k}
                    </div>
                    <div className="text-xl font-display font-black tracking-tight mt-2">{x.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="vision" className="px-8 lg:px-24 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="text-xs font-display tracking-widest text-on-surface-variant uppercase">
                Vision & Mission
              </div>
              <h2 className="font-display text-5xl font-black tracking-tighter mt-4">
                ASIK as a standard.
              </h2>
              <p className="text-on-surface-variant mt-6 leading-relaxed">
                Amanah, Sistematis & adaptif, Integritas, Kolaboratif — the core of our governance for product,
                people, and partnerships.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { t: "Amanah", d: "Trusted products and services with consistent quality." },
                { t: "Sistematis & Adaptif", d: "Clear operating systems, built for continuous change." },
                { t: "Integritas", d: "Responsible teams with strong character and accountability." },
                { t: "Kolaboratif", d: "Synergic cooperation across divisions and partners." }
              ].map((x) => (
                <div
                  key={x.t}
                  className="bg-surface-container-low border border-outline-variant/30 rounded-3xl p-8"
                >
                  <div className="font-display text-2xl font-black tracking-tight">{x.t}</div>
                  <div className="text-on-surface-variant text-sm leading-relaxed mt-3">{x.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 px-8 lg:px-24" id="connect">
          <div className="bg-tertiary text-on-tertiary rounded-3xl p-16 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-20 blur-[100px] -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary opacity-20 blur-[100px] -ml-48 -mb-48"></div>
            <div className="relative z-10 max-w-xl">
              <h2 className="font-display text-5xl font-black mb-6 tracking-tighter">
                Ready to redefine <br />
                your standard?
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Join the exclusive network of brands managed by GASPOLL. Let's discuss your organization's
                trajectory toward excellence.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button className="bg-secondary-container text-on-secondary-container px-12 py-6 rounded-full font-headline font-black text-lg uppercase tracking-wider hover:bg-secondary-fixed transition-colors">
                Partner With Us
              </button>
              <button className="border border-outline-variant/30 text-white px-12 py-6 rounded-full font-headline font-black text-lg uppercase tracking-wider hover:bg-white/10 transition-colors">
                Contact Office
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#272626] dark:bg-black w-full relative bottom-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12 py-16 w-full">
          <div className="flex flex-col gap-6">
            <div className="text-lg font-bold text-white uppercase tracking-tighter">GASPOLL</div>
            <p className="text-xs tracking-wide text-gray-400 max-w-xs">
              Global Authority in Strategic Portfolios and Operational Leadership Legacies. Leading the future of
              brand management.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white font-bold text-sm uppercase tracking-widest mb-2">Corporate</span>
            <a className="text-gray-500 hover:text-[#fdc34d] transition-colors text-xs hover:translate-x-1 transition-transform" href="#">
              About Us
            </a>
            <a className="text-gray-500 hover:text-[#fdc34d] transition-colors text-xs hover:translate-x-1 transition-transform" href="#">
              Investor Relations
            </a>
            <a className="text-gray-500 hover:text-[#fdc34d] transition-colors text-xs hover:translate-x-1 transition-transform" href="#">
              Press Center
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white font-bold text-sm uppercase tracking-widest mb-2">Legal</span>
            <a className="text-gray-500 hover:text-[#fdc34d] transition-colors text-xs hover:translate-x-1 transition-transform underline" href="#">
              Privacy Policy
            </a>
            <a className="text-gray-500 hover:text-[#fdc34d] transition-colors text-xs hover:translate-x-1 transition-transform" href="#">
              Terms of Service
            </a>
            <a className="text-gray-500 hover:text-[#fdc34d] transition-colors text-xs hover:translate-x-1 transition-transform" href="#">
              Compliance
            </a>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-white font-bold text-sm uppercase tracking-widest mb-2">Connect</span>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-white hover:text-[#fdc34d] cursor-pointer">language</span>
              <span className="material-symbols-outlined text-white hover:text-[#fdc34d] cursor-pointer">mail</span>
              <span className="material-symbols-outlined text-white hover:text-[#fdc34d] cursor-pointer">map</span>
            </div>
            <div className="mt-4">
              <p className="text-xs tracking-wide text-gray-400">© 2024 GASPOLL MANAGEMENT CENTER. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
