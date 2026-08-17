import React, { useState } from 'react';
import { 
  X, 
  LayoutDashboard, 
  Users, 
  Calendar, 
  FileText, 
  TrendingUp, 
  ShieldCheck, 
  Search, 
  Plus, 
  CheckCircle2, 
  PhoneCall, 
  Clock,
  DollarSign,
  Activity,
  Edit
} from 'lucide-react';
import { DOCTORS_DATA } from '../data/doctorsData';
import { PACKAGES_DATA } from '../data/packagesData';

interface AdminCMSModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminCMSModal: React.FC<AdminCMSModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'leads' | 'doctors' | 'pricing' | 'analytics'>('leads');
  const [searchTerm, setSearchTerm] = useState('');
  const [leadsList, setLeadsList] = useState([
    {
      id: 'LD-9021',
      name: 'Radhika & Rohit Sharma',
      phone: '+91 98765 43210',
      city: 'New Delhi',
      doctor: 'Dr. Ananya Sen-Sharma',
      type: 'Self-Egg IVF + Blastocyst',
      status: 'Confirmed - Video Call',
      date: 'Today, 03:30 PM',
      notes: 'AMH 2.4, 2y trying'
    },
    {
      id: 'LD-9022',
      name: 'Pooja & Vikram Reddy',
      phone: '+91 98112 33445',
      city: 'Hyderabad',
      doctor: 'Dr. Rajesh V. Kamineni',
      type: 'Recurrent IVF Failure Second Opinion',
      status: 'Awaiting Report Upload',
      date: 'Tomorrow, 11:00 AM',
      notes: '2 prior failed cycles elsewhere'
    },
    {
      id: 'LD-9023',
      name: 'Sneha Kapur',
      phone: '+91 99201 88776',
      city: 'Mumbai',
      doctor: 'Dr. Priya Ramamurthy',
      type: 'Elective Oocyte Vitrification (Egg Freezing)',
      status: 'Consultation Complete',
      date: 'Yesterday',
      notes: 'Age 31, corporate fertility benefits'
    }
  ]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl border border-slate-100 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-rose-50 via-pink-50 to-amber-50 text-slate-900 border-b border-rose-100 px-6 py-4 flex items-center justify-between z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl aura-btn-primary text-white flex items-center justify-center font-black shadow-md">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-base font-heading text-slate-900">Hospital Administrative CMS</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                  Staff Role: Lead Coordinator
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Lahari IVF Network • Real-Time Appointment Triage & Conversion Analytics
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
            { id: 'leads', label: 'Patient Triage & Bookings', icon: Users },
            { id: 'analytics', label: 'Conversion Telemetry', icon: TrendingUp },
            { id: 'doctors', label: 'Doctor Schedule Control', icon: Calendar },
            { id: 'pricing', label: 'Package & EMI Management', icon: DollarSign }
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

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#FFFDFD]">
          
          {/* Patient Triage & Bookings */}
          {activeTab === 'leads' && (
            <div className="space-y-4">
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search patient, phone, UHID..."
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-rose-200 text-xs focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => alert("Simulated: Exported leads to CSV.")}
                    className="px-3.5 py-2 rounded-xl bg-white border border-rose-200 text-xs font-bold text-slate-700 hover:bg-rose-50 cursor-pointer"
                  >
                    Export CSV
                  </button>
                </div>
              </div>

              {/* Leads Table */}
              <div className="bg-white rounded-2xl border border-rose-100 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-rose-50/50 text-slate-600 font-bold border-b border-rose-100">
                      <tr>
                        <th className="p-3.5">Ref ID / Patient</th>
                        <th className="p-3.5">Contact</th>
                        <th className="p-3.5">Assigned Specialist</th>
                        <th className="p-3.5">Inquiry Type</th>
                        <th className="p-3.5">Status</th>
                        <th className="p-3.5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-rose-50">
                      {leadsList.map((lead) => (
                        <tr key={lead.id} className="hover:bg-rose-50/30 transition-colors">
                          <td className="p-3.5">
                            <div className="font-bold text-slate-900">{lead.name}</div>
                            <div className="text-[10px] text-slate-400">{lead.id} • {lead.city}</div>
                          </td>
                          <td className="p-3.5 font-medium text-slate-700">
                            {lead.phone}
                          </td>
                          <td className="p-3.5 text-slate-800 font-semibold">
                            {lead.doctor}
                          </td>
                          <td className="p-3.5 text-slate-600">
                            <span className="truncate max-w-[150px] block">{lead.type}</span>
                          </td>
                          <td className="p-3.5">
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-100">
                              {lead.status}
                            </span>
                          </td>
                          <td className="p-3.5 text-right">
                            <button
                              onClick={() => alert(`Calling ${lead.name} at ${lead.phone}...`)}
                              className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-bold hover:bg-emerald-100 text-[11px] cursor-pointer"
                            >
                              Call Patient
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* Conversion Analytics */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-rose-100">
                  <div className="text-xs text-slate-500">Monthly Consultations</div>
                  <div className="text-2xl font-extrabold text-rose-600 font-heading mt-1">1,482</div>
                  <div className="text-[11px] text-emerald-600 font-semibold mt-1">↑ 18.4% vs last month</div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-rose-100">
                  <div className="text-xs text-slate-500">Clinical Conversion Rate</div>
                  <div className="text-2xl font-extrabold text-amber-600 font-heading mt-1">42.8%</div>
                  <div className="text-[11px] text-amber-700 font-semibold mt-1">Free Consult → OPU Cycle</div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-rose-100">
                  <div className="text-xs text-slate-500">AI Assistant Interventions</div>
                  <div className="text-2xl font-extrabold text-slate-900 font-heading mt-1">3,910</div>
                  <div className="text-[11px] text-rose-600 font-semibold mt-1">Dr. Lahari triage sessions</div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-rose-100">
                  <div className="text-xs text-slate-500">0% EMI Approvals</div>
                  <div className="text-2xl font-extrabold text-amber-600 font-heading mt-1">₹4.2 Cr</div>
                  <div className="text-[11px] text-amber-700 font-semibold mt-1">Zero-cost medical loans</div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-rose-100 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Top Inquiry Intent by Specialization
                </h4>
                {[
                  { name: 'Self-Egg IVF + Day-5 Blastocyst', pct: '48%', color: 'bg-rose-500' },
                  { name: 'Recurrent Implantation Failure & PGT-A', pct: '24%', color: 'bg-pink-500' },
                  { name: 'Social / Medical Egg Freezing (Vitrification)', pct: '16%', color: 'bg-amber-500' },
                  { name: 'Male Micro-TESE & PICSI', pct: '12%', color: 'bg-emerald-500' }
                ].map((item, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold text-slate-700">
                      <span>{item.name}</span>
                      <span>{item.pct}</span>
                    </div>
                    <div className="w-full h-2 bg-rose-50 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full`} style={{ width: item.pct }}></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* Doctors Schedule */}
          {activeTab === 'doctors' && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Specialist Daily Capacity & Slots
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {DOCTORS_DATA.map((doc) => (
                  <div key={doc.id} className="p-4 rounded-2xl bg-white border border-rose-100 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{doc.name}</div>
                      <div className="text-xs text-slate-500">{doc.centre}</div>
                      <div className="text-[11px] font-semibold text-rose-600 mt-1">Next Slot: {doc.nextSlot}</div>
                    </div>
                    <button
                      onClick={() => alert(`Editing schedule slots for ${doc.name}`)}
                      className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-xs font-bold text-rose-700 flex items-center gap-1 cursor-pointer"
                    >
                      <Edit className="w-3 h-3" />
                      <span>Edit Slots</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Packages */}
          {activeTab === 'pricing' && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Transparent Package Pricing Configurator
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PACKAGES_DATA.map((pkg) => (
                  <div key={pkg.id} className="p-4 rounded-2xl bg-white border border-rose-100 flex items-start justify-between gap-3">
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{pkg.name}</div>
                      <div className="text-xs text-rose-600 font-extrabold mt-0.5">
                        ₹{pkg.basePrice.toLocaleString('en-IN')} (EMI ₹{pkg.emiPerMonth}/mo)
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">{pkg.inclusions.length} Inclusions</div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      Live
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
