import React, { useState } from 'react';
import { 
  Briefcase, 
  CheckCircle2, 
  Award, 
  Send, 
  FileText, 
  Building2, 
  Sparkles, 
  GraduationCap,
  Users
} from 'lucide-react';

export const CareersView: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const jobOpenings = [
    {
      id: 'fellow-embryo',
      title: 'Clinical Embryology Fellowship (Post-MD/MSc)',
      department: 'Embryology & IVF Cleanrooms',
      location: 'South Delhi & Bengaluru',
      type: '2-Year Clinical Fellowship',
      experience: '0–2 Years',
      description: 'Intensive hands-on training under Senior ESHRE Embryologists covering ICSI, PICSI, laser-assisted blastocyst biopsy, and Cryotop vitrification.'
    },
    {
      id: 'sr-consultant-obg',
      title: 'Senior Consultant - Reproductive Medicine & IVF',
      department: 'Clinical Faculty',
      location: 'Hyderabad (Jubilee Hills)',
      type: 'Full-Time Faculty',
      experience: '5+ Years Post-Fellowship',
      description: 'Lead clinical outpatient management, customized ovarian stimulation protocols, transvaginal ovum pick-up, and single embryo transfers.'
    },
    {
      id: 'andrology-surgeon',
      title: 'Associate Consultant - Andrology & Micro-Surgery',
      department: 'Surgical Andrology',
      location: 'Mumbai (Bandra West)',
      type: 'Full-Time',
      experience: '3+ Years Post-MCh/DNB Urology',
      description: 'Expertise in microscopic varicocelectomy, Micro-TESE surgical sperm retrieval, and male infertility hormonal workups.'
    },
    {
      id: 'genetics-counselor',
      title: 'Certified Reproductive Genetic Counselor',
      department: 'Genomic Diagnostics (PGT-A)',
      location: 'Gurugram Flagship / Remote',
      type: 'Full-Time',
      experience: '2+ Years',
      description: 'Counsel couples regarding PGT-A chromosomal findings, monogenic disease screening (PGT-M), and karyotyping interpretations.'
    }
  ];

  return (
    <div className="animate-in fade-in duration-300">
      {/* 1. Header */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-rose-50 via-pink-50/50 to-white text-slate-900 relative overflow-hidden border-b border-rose-100">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-700 mb-3 px-3.5 py-1.5 rounded-full bg-rose-100/80 border border-rose-200">
            <GraduationCap className="w-4 h-4" />
            <span>Academic & Clinical Careers</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Join the Forefront of{' '}
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
              Reproductive Medicine & Science
            </span>
          </h1>

          <p className="mt-4 text-slate-600 max-w-3xl text-sm sm:text-base leading-relaxed">
            At Lahari, we cultivate world-class clinicians, embryologists, and researchers. Work alongside pioneering medical leaders in ISO Class 5 cleanrooms equipped with the world’s most sophisticated incubation systems.
          </p>
        </div>
      </section>

      {/* 2. Open Positions */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
              Current Faculty & Clinical Openings
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Apply to lead or train within our nationally recognized reproductive medicine network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="p-6 sm:p-8 rounded-3xl border border-rose-100 bg-white hover:border-rose-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-2xs"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] font-bold text-rose-700 px-2.5 py-1 rounded-full bg-rose-50 border border-rose-100">
                      {job.department}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{job.location}</span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-slate-900">{job.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{job.description}</p>
                  
                  <div className="pt-2 text-xs font-medium text-slate-500">
                    Experience Required: <span className="font-bold text-slate-800">{job.experience}</span> • {job.type}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-rose-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedJob(job.title)}
                    className="px-4 py-2 rounded-xl aura-btn-primary text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
                  >
                    Apply for Position
                  </button>
                  <span className="text-[11px] text-slate-400">Direct Medical HR Review</span>
                </div>
              </div>
            ))}
          </div>

          {/* Application Modal / Form */}
          {selectedJob && (
            <div 
              className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedJob(null)}
            >
              <div 
                className="bg-white max-w-lg w-full rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl border border-rose-100"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b border-rose-100 pb-3">
                  <h3 className="text-lg font-bold font-heading text-slate-900">Application: {selectedJob}</h3>
                  <button onClick={() => setSelectedJob(null)} className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer">✕</button>
                </div>

                {submitted ? (
                  <div className="text-center py-8 space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="font-bold text-slate-900 text-base">Application Submitted Successfully</h4>
                    <p className="text-xs text-slate-600">Our Academic Dean and HR directorate will review your credentials.</p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setSelectedJob(null);
                      }}
                      className="px-4 py-2 rounded-xl aura-btn-primary text-white text-xs font-bold"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                      <input required type="text" placeholder="Dr. / Mr. / Ms." className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-500 outline-none" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Email *</label>
                        <input required type="email" placeholder="doctor@example.com" className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-500 outline-none" />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Phone Number *</label>
                        <input required type="tel" placeholder="+91 98765 43210" className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-500 outline-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Medical Qualifications & Council Reg No.</label>
                      <input required type="text" placeholder="e.g. MBBS, MD (OBG), MCI-12345" className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-500 outline-none" />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Brief Cover Statement / Research Interests</label>
                      <textarea rows={3} placeholder="Summarize your clinical experience..." className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-500 outline-none resize-none"></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl aura-btn-primary text-white font-bold text-xs shadow-md cursor-pointer"
                    >
                      Submit Curriculum Vitae
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
