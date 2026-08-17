import React, { useState } from 'react';
import { ShieldCheck, Lock, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

export const LegalView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'art-act' | 'rights' | 'terms'>('art-act');

  return (
    <div className="animate-in fade-in duration-300">
      {/* 1. Header */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-rose-50 via-pink-50/50 to-white text-slate-900 relative overflow-hidden border-b border-rose-100">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-700 mb-3 px-3.5 py-1.5 rounded-full bg-rose-100/80 border border-rose-200">
            <ShieldCheck className="w-4 h-4 text-rose-600" />
            <span>Statutory Compliance & Legal Governance</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Patient Privacy, Rights &{' '}
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
              ICMR ART Act 2021 Disclosures
            </span>
          </h1>

          <p className="mt-4 text-slate-600 max-w-3xl text-sm sm:text-base leading-relaxed">
            Lahari IVF Hospital operates in strict, audited compliance with the Assisted Reproductive Technology (Regulation) Act 2021, Surrogacy (Regulation) Act 2021, and digital health data security norms.
          </p>

          {/* Navigation Tabs */}
          <div className="mt-10 flex flex-wrap gap-2 pt-6 border-t border-rose-200">
            {[
              { id: 'art-act', label: 'ICMR ART Act 2021 Compliance' },
              { id: 'privacy', label: 'Confidentiality & Privacy Policy' },
              { id: 'rights', label: 'Patient Bill of Rights' },
              { id: 'terms', label: 'Terms of Medical Care' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'aura-btn-primary text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-rose-50 border border-rose-200 shadow-2xs'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Document Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-800 text-xs sm:text-sm leading-relaxed space-y-6">
          
          {activeTab === 'art-act' && (
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-rose-50/70 border border-rose-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-rose-700 text-sm">
                  <ShieldCheck className="w-5 h-5 text-rose-600" />
                  <span>National ART Registry & Bio-Safety Adherence</span>
                </div>
                <p className="text-slate-700">
                  Every clinic within the Lahari network is registered with the National Assisted Reproductive Technology and Surrogacy Board, Ministry of Health and Family Welfare, Government of India.
                </p>
              </div>

              <h2 className="text-xl font-bold font-heading text-slate-900 pt-4">1. Prohibition of Sex Selection (PCPNDT Compliance)</h2>
              <p className="text-slate-600">
                Lahari strictly adheres to the Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act 1994. Any form of sex selection or sex determination is strictly prohibited and illegal in India. Genetic screening via PGT-A is conducted solely for chromosomal aneuploidy and inherited monogenic disorders.
              </p>

              <h2 className="text-xl font-bold font-heading text-slate-900 pt-4">2. Cryopreservation & Embryo Storage Protocols</h2>
              <p className="text-slate-600">
                In compliance with Section 27 of the ART Act 2021, oocytes, sperm, and embryos may be stored for a maximum statutory period as defined by law upon written consent of the commissioning couple. All samples are safeguarded under 24/7 monitored electronic liquid nitrogen vaults.
              </p>

              <h2 className="text-xl font-bold font-heading text-slate-900 pt-4">3. Single Blastocyst Transfer Best Practice</h2>
              <p className="text-slate-600">
                To prevent multiple high-risk pregnancies (twins/triplets) and maternal morbidity, our institutional guideline mandates Single Blastocyst Transfer (eSET) as the primary transfer protocol for eligible couples.
              </p>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold font-heading text-slate-900">Medical Data & Genetic Information Privacy</h2>
              <p className="text-slate-600">
                Your medical history, ultrasound scans, hormone assays, and genetic screening reports are encrypted under AES-256 standards. Lahari never shares, sells, or monetizes patient records with third parties.
              </p>
              <div className="p-4 rounded-2xl bg-rose-50/40 border border-rose-200 space-y-2">
                <div className="font-bold text-slate-900">Key Privacy Protections:</div>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>End-to-end encrypted video consultations</li>
                  <li>Role-based access controls for lab embryologists and nursing staff</li>
                  <li>Automatic anonymization of clinical research data for statistical benchmarking</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'rights' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold font-heading text-slate-900">Patient Bill of Rights at Lahari</h2>
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-rose-50/40 border border-rose-200">
                  <div className="font-bold text-slate-900">1. Right to Transparent Information & Costs</div>
                  <p className="text-slate-600 mt-1">You have the right to receive an itemized estimate of all consultation, medication, lab consumables, and freezing fees before initiating any cycle.</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/40 border border-rose-200">
                  <div className="font-bold text-slate-900">2. Right to In-Person Doctor Consultations</div>
                  <p className="text-slate-600 mt-1">Your treatment will always be managed directly by named, certified Senior Reproductive Endocrinologists—never by non-medical sales counselors.</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/40 border border-rose-200">
                  <div className="font-bold text-slate-900">3. Right to Informed Consent & Autonomy</div>
                  <p className="text-slate-600 mt-1">You retain full authority to pause, discontinue, or request a second opinion on your cycle at any juncture.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold font-heading text-slate-900">General Terms of Clinical Service</h2>
              <p className="text-slate-600">
                All clinical appointments, laboratory procedures, and teleconsultations provided by Lahari IVF Hospital are governed by the laws of India and subject to the medical jurisdiction of respective state medical councils.
              </p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};
