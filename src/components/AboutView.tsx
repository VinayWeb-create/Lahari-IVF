import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Users, 
  Microscope, 
  CheckCircle2, 
  Globe2, 
  Sparkles, 
  Building2, 
  HeartHandshake, 
  ArrowRight,
  Stethoscope,
  Activity,
  Lock,
  ChevronRight
} from 'lucide-react';

interface AboutViewProps {
  onOpenBooking: () => void;
  onNavigate: (view: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-300">
      {/* 1. Hero Banner */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-rose-50/90 via-pink-50/40 to-white text-slate-900 overflow-hidden border-b border-rose-100/80">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#F43F5E_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-rose-400/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 -left-20 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-600 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-rose-100/80 border border-rose-200 shadow-2xs">Our Heritage & Mission</span>
            <span>•</span>
            <span className="text-slate-600 font-semibold">Pioneering Reproductive Science</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-[1.15] max-w-4xl text-slate-900">
            Where Human Empathy Meets{' '}
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
              Nobel-Grade Reproductive Science
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl leading-relaxed font-normal">
            Founded with a singular vision: to eliminate the heartbreak of unexplained infertility. Today, Lahari stands as India’s benchmark fertility institution, uniting senior reproductive surgeons, AI embryology cleanrooms, and transparent ethical care.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-rose-200/80">
            <div className="p-4 rounded-2xl bg-white/80 border border-rose-100 shadow-xs">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">42,000+</div>
              <div className="text-xs text-rose-700 font-medium mt-1">Healthy Babies Born</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/80 border border-amber-100 shadow-xs">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-600">88.6%</div>
              <div className="text-xs text-amber-700 font-medium mt-1">Day-5 Blastocyst Success</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/80 border border-rose-100 shadow-xs">
              <div className="text-3xl sm:text-4xl font-extrabold text-rose-600">14</div>
              <div className="text-xs text-rose-700 font-medium mt-1">Flagship Cleanroom Centres</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/80 border border-emerald-100 shadow-xs">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">100%</div>
              <div className="text-xs text-emerald-700 font-medium mt-1">ICMR & ART Act Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Founding Philosophy & Leadership */}
      <section className="py-20 bg-white text-slate-900">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-200 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                FOUNDER'S ADDRESS
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold font-heading tracking-tight text-slate-900">
                "Infertility is a medical condition, <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">never a destiny.</span>"
              </h2>

              <p className="text-slate-600 leading-relaxed">
                When we established Lahari, we realized that thousands of hopeful couples were undergoing repetitive, cookie-cutter IVF cycles without addressing root causes like poor sperm DNA integrity, hidden endometrial receptivity windows, or embryonic aneuploidy.
              </p>

              <p className="text-slate-600 leading-relaxed">
                We dismantled the conventional clinic model and replaced it with a hospital designed from the ground up for precision: custom mild-stimulation protocols, Geri® AI-driven time-lapse incubation, laser-assisted hatching, and zero-hidden-cost transparency.
              </p>

              <div className="p-6 rounded-2xl bg-rose-50/40 border border-rose-100 flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80"
                  alt="Dr. Ananya Sen-Sharma"
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-rose-400"
                />
                <div>
                  <div className="font-bold text-slate-900 text-base">Dr. Ananya Sen-Sharma</div>
                  <div className="text-xs text-slate-500 font-medium">Founder & Chief Medical Director • MD, FRCOG (London)</div>
                  <div className="text-[11px] text-rose-600 font-semibold mt-0.5">22+ Years Pioneering Reproductive Endocrinology</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-rose-100">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
                  alt="Lahari Cleanroom Embryology Laboratory"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-8 text-white">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    Class 10,000 ISO Certified Cleanroom
                  </div>
                  <h3 className="text-xl font-bold font-heading">Continuous Air Handling with 99.99% VOC Elimination</h3>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-2">
                    Our embryology labs mimic the maternal fallopian tube environment with triple-stage HEPA filtration, zero VOC adhesives, and continuous atmospheric telemetry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 4 Pillars of Lahari Excellence */}
      <section className="py-20 bg-rose-50/20 border-y border-rose-100">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold text-rose-600 uppercase tracking-widest mb-2">Institutional Rigor</div>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-slate-900">
              The Four Pillars That Protect Your Embryo
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Every step of your journey is audited against international ESHRE (European Society of Human Reproduction and Embryology) and ASRM standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 bg-white rounded-3xl border border-rose-100 shadow-sm hover:shadow-xl hover:border-rose-300 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-5">
                <Microscope className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">AI Morphokinetic Time-Lapse</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Embryos develop undisturbed in Geri® multi-chamber incubators equipped with high-resolution continuous optical tracking, preventing atmospheric shock.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 bg-white rounded-3xl border border-rose-100 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">Laser-Assisted Zona Thinning</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Precision Octax laser thinning assists older or cryopreserved blastocysts to hatch effortlessly through the zona pellucida into the endometrium.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 bg-white rounded-3xl border border-rose-100 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">Dual RFID Sample Witnessing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Electronic radio-frequency tagging and biometric double-witnessing protocols ensure 100% fail-safe sample identification across all labs.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 bg-white rounded-3xl border border-rose-100 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">Transparent Cost & 0% EMI</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero surprise bills. All medication dosages, embryology consumables, and cryopreservation fees are itemized transparently from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Global Scientific Advisory Board */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-bold text-rose-600 uppercase tracking-widest mb-1">Academic Alliances</div>
              <h2 className="text-2xl sm:text-4xl font-bold font-heading text-slate-900">
                Global Clinical & Research Advisory Board
              </h2>
            </div>
            <button
              onClick={() => onNavigate('doctors')}
              className="inline-flex items-center gap-2 text-xs font-bold text-rose-600 hover:text-rose-700 hover:underline cursor-pointer"
            >
              <span>View All 14 Senior Specialists</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-rose-50/30 border border-rose-100 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-rose-600 mb-1">HAMBURG REPRODUCTIVE MEDICINE CONSORTIUM</div>
                <h3 className="text-base font-bold text-slate-900">Prof. Dr. Klaus Weidemann</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  International Advisory Chair in Cryobiology & Rapid Flash Vitrification. Collaborating on advanced low-ovarian-reserve stimulation protocols.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-rose-100 text-[11px] text-slate-500 font-medium">
                Affiliation: University Medical Center Hamburg-Eppendorf
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-amber-50/30 border border-amber-100 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-amber-600 mb-1">OXFORD MOLECULAR GENETICS ALLIANCE</div>
                <h3 className="text-base font-bold text-slate-900">Dr. Sarah Jenkins-Taylor</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Lead Contributor on Next-Generation Sequencing (NGS) and PGT-A embryo mosaicism validation algorithms.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-amber-100 text-[11px] text-slate-500 font-medium">
                Affiliation: Oxford Hospital of Genomic Medicine
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-purple-50/30 border border-purple-100 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-purple-600 mb-1">NATIONAL ANDROLOGY COUNCIL OF INDIA</div>
                <h3 className="text-base font-bold text-slate-900">Dr. Rajesh V. Kamineni</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Pioneer of 25x surgical Micro-TESE techniques for non-obstructive azoospermia, restoring biological fatherhood options.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-purple-100 text-[11px] text-slate-500 font-medium">
                Chief of Andrology, Lahari IVF Hospital
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold font-heading">
            Experience the Lahari Difference Firsthand
          </h2>
          <p className="text-sm sm:text-base text-rose-100 max-w-2xl mx-auto">
            Book a comprehensive 45-minute diagnostic consultation with our Senior Reproductive Endocrinologists today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded-2xl bg-white text-rose-600 font-black text-xs hover:bg-rose-50 transition-all shadow-xl cursor-pointer"
            >
              Book Free Consultation
            </button>
            <button
              onClick={() => onNavigate('facilities')}
              className="px-6 py-3.5 rounded-2xl bg-white/15 border border-white/30 text-white font-bold text-xs hover:bg-white/25 transition-all cursor-pointer backdrop-blur-md"
            >
              Explore Cleanroom Labs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
