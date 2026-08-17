import React, { useState } from 'react';
import { 
  X, 
  UserCheck, 
  Activity, 
  FileText, 
  Calendar, 
  Download, 
  MessageSquare, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  CheckCircle2,
  Pill,
  Send,
  Sparkles
} from 'lucide-react';

interface PatientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PatientPortalModal: React.FC<PatientPortalModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'follicles' | 'reports' | 'prescriptions' | 'coordinator'>('timeline');
  const [nurseMessage, setNurseMessage] = useState('');
  const [nurseChat, setNurseChat] = useState([
    {
      id: '1',
      sender: 'coordinator',
      text: 'Good afternoon Radhika! Your Day-8 Estradiol report came back at 1,420 pg/mL, which is right on target for your trigger shot tomorrow night.',
      time: '02:15 PM'
    },
    {
      id: '2',
      sender: 'patient',
      text: 'Thank you Sister Deepa! Should I take the Cetrotide injection at the exact same 9:00 PM time?',
      time: '02:18 PM'
    },
    {
      id: '3',
      sender: 'coordinator',
      text: 'Yes! Please take the 0.25mg Cetrotide at 9:00 PM sharp, and then prepare the Decapeptyl trigger for 10:30 PM tomorrow as Dr. Ananya instructed.',
      time: '02:22 PM'
    }
  ]);

  if (!isOpen) return null;

  const handleSendNurseChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nurseMessage.trim()) return;
    setNurseChat((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        sender: 'patient',
        text: nurseMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setNurseMessage('');
  };

  const reports = [
    {
      title: 'Serum Anti-Müllerian Hormone (AMH) Report',
      date: 'Aug 04, 2026',
      result: '2.42 ng/mL (Optimal Ovarian Reserve)',
      reviewedBy: 'Dr. Ananya Sen-Sharma',
      status: 'Reviewed'
    },
    {
      title: 'Partner ZyMōt Semen Analysis & DFI Report',
      date: 'Aug 06, 2026',
      result: 'Motility 68% • DFI 12.4% (Normal Chromatin)',
      reviewedBy: 'Dr. Rajesh V. Kamineni',
      status: 'Reviewed'
    },
    {
      title: 'Day 8 Serial Folliculometry Doppler Scan',
      date: 'Aug 12, 2026',
      result: 'Right: 5 Follicles (16-19mm) • Left: 6 Follicles (15-18mm) • ET: 9.2mm Trilaminar',
      reviewedBy: 'Dr. Ananya Sen-Sharma',
      status: 'Verified'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl border border-slate-100 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-rose-50 via-pink-50 to-amber-50 text-slate-900 border-b border-rose-100 px-6 py-4 flex items-center justify-between z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl aura-btn-primary flex items-center justify-center text-white font-bold shadow-md">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-base font-heading text-slate-900">Patient Care Portal</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Active Cycle: Day 9
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Patient: <strong className="text-slate-900">Radhika Sharma (UHID: Lahari-88219)</strong> • Lead: Dr. Ananya Sen-Sharma
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white hover:bg-rose-50 text-slate-500 hover:text-slate-900 transition-colors border border-rose-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-rose-50/40 px-6 border-b border-rose-100 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
          {[
            { id: 'timeline', label: 'Active Cycle Roadmap', icon: Calendar },
            { id: 'follicles', label: 'Follicle Tracker', icon: TrendingUp },
            { id: 'reports', label: 'Lab Reports & Scans', icon: FileText },
            { id: 'prescriptions', label: 'Medications', icon: Pill },
            { id: 'coordinator', label: 'Care Nurse Chat', icon: MessageSquare }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-3.5 text-xs font-bold flex items-center gap-1.5 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'border-rose-600 text-rose-600 bg-white shadow-2xs'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-rose-50/50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Contents */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#FFFDFD]">
          
          {/* Active Cycle Roadmap */}
          {activeTab === 'timeline' && (
            <div className="space-y-6">
              
              <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-rose-600">
                    Next Clinical Milestone
                  </div>
                  <div className="text-base font-bold text-slate-900 mt-0.5">
                    Trigger Injection & Egg Retrieval (OPU)
                  </div>
                  <div className="text-xs text-slate-500">
                    Scheduled: Saturday, 08:30 AM at Hauz Khas Cleanroom Theatre #2
                  </div>
                </div>
                <button
                  onClick={() => alert("Pre-OPU fasting and admission instructions downloaded.")}
                  className="px-4 py-2 rounded-xl aura-btn-primary text-white text-xs font-bold transition-colors shrink-0 shadow-xs cursor-pointer"
                >
                  Download OPU Guidelines
                </button>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Stimulation Phase Progress
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl bg-white border border-rose-100 shadow-2xs">
                    <div className="text-xs text-slate-500">Total Follicles Growing</div>
                    <div className="text-2xl font-extrabold text-rose-600 font-heading mt-1">11 Follicles</div>
                    <div className="text-[11px] text-emerald-600 font-semibold mt-1">Right: 5 | Left: 6</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-rose-100 shadow-2xs">
                    <div className="text-xs text-slate-500">Endometrial Lining</div>
                    <div className="text-2xl font-extrabold text-amber-600 font-heading mt-1">9.2 mm</div>
                    <div className="text-[11px] text-amber-700 font-semibold mt-1">Trilaminar Receptive Pattern</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-rose-100 shadow-2xs">
                    <div className="text-xs text-slate-500">Peak Serum Estradiol (E2)</div>
                    <div className="text-2xl font-extrabold text-slate-800 font-heading mt-1">1,420 pg/mL</div>
                    <div className="text-[11px] text-slate-500 mt-1">Optimal Maturation Range</div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Follicle Tracker */}
          {activeTab === 'follicles' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-900 font-heading">
                  Serial Follicle Growth Progression (Days 2 to 9)
                </h4>
                <p className="text-xs text-slate-500">
                  Tracked via high-resolution 3D ultrasound transvaginal Doppler scans.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-rose-100 shadow-xs space-y-4">
                {[
                  { name: 'Dominant Right #1', day4: '10mm', day6: '14mm', day8: '18.5mm', status: 'Mature' },
                  { name: 'Dominant Right #2', day4: '9.5mm', day6: '13mm', day8: '17.8mm', status: 'Mature' },
                  { name: 'Dominant Left #1', day4: '10.2mm', day6: '14.5mm', day8: '19.0mm', status: 'Mature' },
                  { name: 'Dominant Left #2', day4: '8.8mm', day6: '12.5mm', day8: '16.5mm', status: 'Maturing' },
                  { name: 'Secondary Cohort (7)', day4: '7-8mm', day6: '11-12mm', day8: '14-15.5mm', status: 'Maturing' }
                ].map((fol, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-rose-50/30 border border-rose-100 text-xs">
                    <div className="font-bold text-slate-800">{fol.name}</div>
                    <div className="flex items-center gap-4 text-slate-600">
                      <span>D4: {fol.day4}</span>
                      <span>D6: {fol.day6}</span>
                      <span className="font-bold text-rose-600">D8: {fol.day8}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      {fol.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reports & Scans */}
          {activeTab === 'reports' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 font-heading">
                Diagnostic & Hormone Reports
              </h4>
              <div className="space-y-3">
                {reports.map((r, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white border border-rose-100 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <div className="font-bold text-sm text-slate-900">{r.title}</div>
                      <div className="text-xs text-slate-500">Date: {r.date} • Reviewed: {r.reviewedBy}</div>
                      <div className="text-xs font-semibold text-rose-600 mt-1">{r.result}</div>
                    </div>
                    <button
                      onClick={() => alert(`Downloading official PDF for ${r.title}`)}
                      className="px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prescriptions */}
          {activeTab === 'prescriptions' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 font-heading">
                Active Protocol Prescriptions & Injections
              </h4>
              <div className="space-y-3">
                {[
                  { name: 'Gonal-F (Recombinant FSH)', dose: '225 IU daily at 08:00 AM', instructions: 'Subcutaneous injection pen in abdomen' },
                  { name: 'Cetrotide (GnRH Antagonist)', dose: '0.25 mg daily at 09:00 PM', instructions: 'Prevents premature LH surge' },
                  { name: 'CoQ10 & Methylfolate Plus', dose: '1 Capsule twice daily after meals', instructions: 'Oocyte mitochondrial support' }
                ].map((p, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white border border-rose-100 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                      <Pill className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900">{p.name}</div>
                      <div className="text-xs font-semibold text-rose-600">{p.dose}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{p.instructions}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Care Coordinator Chat */}
          {activeTab === 'coordinator' && (
            <div className="space-y-4 flex flex-col h-[400px]">
              <div className="flex-1 overflow-y-auto space-y-3 p-3 bg-white rounded-2xl border border-rose-100">
                {nurseChat.map((m) => (
                  <div
                    key={m.id}
                    className={`flex ${m.sender === 'patient' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${
                        m.sender === 'patient'
                          ? 'aura-btn-primary text-white rounded-tr-none'
                          : 'bg-rose-50/50 text-slate-800 border border-rose-100 rounded-tl-none'
                      }`}
                    >
                      <div>{m.text}</div>
                      <div className={`text-[9px] text-right mt-1 ${m.sender === 'patient' ? 'text-rose-100' : 'text-slate-400'}`}>
                        {m.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendNurseChat} className="flex gap-2">
                <input
                  type="text"
                  value={nurseMessage}
                  onChange={(e) => setNurseMessage(e.target.value)}
                  placeholder="Message your Care Coordinator Sister Deepa..."
                  className="flex-1 px-4 py-2.5 rounded-xl border border-rose-200 bg-rose-50/30 text-xs focus:ring-2 focus:ring-rose-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl aura-btn-primary text-white text-xs font-bold cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
