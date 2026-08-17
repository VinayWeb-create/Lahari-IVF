import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Video, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  User, 
  Phone, 
  Mail, 
  FileText,
  Sparkles,
  Download,
  Check
} from 'lucide-react';
import { DOCTORS_DATA } from '../data/doctorsData';
import { LOCATIONS_DATA } from '../data/locationsData';
import confetti from 'canvas-confetti';

interface VirtualConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoctor?: string;
  initialType?: 'in_person' | 'video_consult';
  initialNotes?: string;
  selectedCity: string;
}

export const VirtualConsultationModal: React.FC<VirtualConsultationModalProps> = ({
  isOpen,
  onClose,
  initialDoctor,
  initialType = 'video_consult',
  initialNotes = '',
  selectedCity
}) => {
  const [step, setStep] = useState<number>(1);
  const [consultType, setConsultType] = useState<'in_person' | 'video_consult'>(initialType);
  const [doctorName, setDoctorName] = useState<string>(initialDoctor || DOCTORS_DATA[0].name);
  const [centerCity, setCenterCity] = useState<string>(selectedCity);
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow');
  const [selectedSlot, setSelectedSlot] = useState<string>('03:30 PM - 04:00 PM');
  
  // Patient details
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [yearsTrying, setYearsTrying] = useState('1 - 2 Years');
  const [medicalNotes, setMedicalNotes] = useState(initialNotes);
  const [bookingRefId, setBookingRefId] = useState('');

  if (!isOpen) return null;

  const dates = [
    { label: 'Today', day: 'Aug 14' },
    { label: 'Tomorrow', day: 'Aug 15' },
    { label: 'Saturday', day: 'Aug 16' },
    { label: 'Monday', day: 'Aug 18' }
  ];

  const slots = [
    '10:30 AM - 11:00 AM',
    '11:45 AM - 12:15 PM',
    '02:15 PM - 02:45 PM',
    '03:30 PM - 04:00 PM',
    '05:00 PM - 05:30 PM',
    '06:15 PM - 06:45 PM'
  ];

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `Lahari-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRefId(ref);
    setStep(3); // Confirmed
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-rose-100 flex items-center justify-between z-20">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-rose-600">
              Instant Appointment Desk
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 font-heading">
              {step === 3 ? 'Consultation Confirmed' : 'Book Fertility Specialist Consultation'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-rose-50 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          
          {step === 1 && (
            <div className="space-y-6">
              
              {/* Type Switcher */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  1. Select Consultation Mode
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setConsultType('video_consult')}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      consultType === 'video_consult'
                        ? 'border-rose-300 bg-rose-50/70 text-rose-700 ring-2 ring-rose-200'
                        : 'border-rose-100 hover:bg-rose-50/30 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <Video className="w-5 h-5" />
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        1st Free
                      </span>
                    </div>
                    <div className="font-bold text-sm">HD Video Consultation</div>
                    <div className="text-xs text-slate-500 mt-0.5">Secure Google Meet / Zoom link sent via SMS</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setConsultType('in_person')}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      consultType === 'in_person'
                        ? 'border-rose-300 bg-rose-50/70 text-rose-700 ring-2 ring-rose-200'
                        : 'border-rose-100 hover:bg-rose-50/30 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <MapPin className="w-5 h-5 text-rose-500" />
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">
                        In-Clinic
                      </span>
                    </div>
                    <div className="font-bold text-sm">Hospital Clinic Visit</div>
                    <div className="text-xs text-slate-500 mt-0.5">Direct examination & 3D scan at flagship center</div>
                  </button>
                </div>
              </div>

              {/* Select Specialist */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  2. Choose Senior Consultant
                </label>
                <select
                  value={doctorName}
                  onChange={(e) => setDoctorName(e.target.value)}
                  className="w-full p-3 rounded-xl border border-rose-200 bg-white text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-rose-500"
                >
                  {DOCTORS_DATA.map((doc) => (
                    <option key={doc.id} value={doc.name}>
                      {doc.name} — {doc.title} ({doc.successRate}% Success Rate)
                    </option>
                  ))}
                </select>
              </div>

              {/* Select Date & Slots */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  3. Select Date
                </label>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {dates.map((d) => (
                    <button
                      key={d.label}
                      type="button"
                      onClick={() => setSelectedDate(d.label)}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedDate === d.label
                          ? 'border-rose-600 aura-btn-primary text-white shadow-sm'
                          : 'border-rose-100 hover:bg-rose-50/50 text-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold">{d.label}</div>
                      <div className={`text-[10px] ${selectedDate === d.label ? 'text-rose-100' : 'text-slate-400'}`}>
                        {d.day}
                      </div>
                    </button>
                  ))}
                </div>

                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Available Time Slots
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {slots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`p-2 rounded-xl text-xs font-bold border text-center transition-all cursor-pointer ${
                        selectedSlot === slot
                          ? 'border-rose-300 bg-rose-50 text-rose-700'
                          : 'border-rose-100 hover:bg-rose-50/30 text-slate-600'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full py-3.5 rounded-2xl aura-btn-primary text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                Continue to Patient Information →
              </button>

            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleConfirmBooking} className="space-y-4">
              
              <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 flex items-center justify-between text-xs mb-2">
                <div>
                  <span className="text-slate-500">Selected Slot: </span>
                  <span className="font-bold text-slate-900">{selectedDate}, {selectedSlot}</span>
                  <div className="text-slate-600 font-semibold">{doctorName}</div>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-bold text-rose-600 hover:underline cursor-pointer"
                >
                  Change
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Patient Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="e.g. Radhika Sharma"
                    className="w-full p-3 rounded-xl border border-rose-200 text-xs sm:text-sm focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full p-3 rounded-xl border border-rose-200 text-xs sm:text-sm focus:ring-2 focus:ring-rose-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="radhika@example.com"
                  className="w-full p-3 rounded-xl border border-rose-200 text-xs sm:text-sm focus:ring-2 focus:ring-rose-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Brief Medical Background / Questions (Optional)
                </label>
                <textarea
                  rows={3}
                  value={medicalNotes}
                  onChange={(e) => setMedicalNotes(e.target.value)}
                  placeholder="Mention previous treatments, AMH levels, or specific concerns..."
                  className="w-full p-3 rounded-xl border border-rose-200 text-xs sm:text-sm focus:ring-2 focus:ring-rose-500"
                />
              </div>

              <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Free First Consultation applied automatically via promo code Lahari2026.</span>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 py-3 rounded-xl border border-rose-200 font-bold text-xs text-slate-700 hover:bg-rose-50 cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3.5 rounded-2xl aura-btn-primary text-white font-bold text-xs shadow-md cursor-pointer"
                >
                  Confirm & Reserve Appointment
                </button>
              </div>

            </form>
          )}

          {step === 3 && (
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Appointment Confirmed
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 font-heading mt-1">
                  We look forward to meeting you, {patientName || 'Patient'}!
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Booking Reference Number: <strong className="text-slate-900">{bookingRefId}</strong>
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FFFDFD] border border-rose-100 text-left space-y-2.5 text-xs">
                <div className="flex justify-between border-b border-rose-100 pb-2">
                  <span className="text-slate-500">Consultant:</span>
                  <span className="font-bold text-slate-900">{doctorName}</span>
                </div>
                <div className="flex justify-between border-b border-rose-100 pb-2">
                  <span className="text-slate-500">Date & Slot:</span>
                  <span className="font-bold text-rose-600">{selectedDate} at {selectedSlot}</span>
                </div>
                <div className="flex justify-between border-b border-rose-100 pb-2">
                  <span className="text-slate-500">Consultation Mode:</span>
                  <span className="font-bold text-slate-900">
                    {consultType === 'video_consult' ? 'HD Video Telehealth (Link sent via WhatsApp)' : `In-Clinic at ${centerCity} Hospital`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Consultation Fee:</span>
                  <span className="font-bold text-emerald-700">FREE (Zero Cost)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => alert(`Calendar invite (.ics) generated for ${doctorName} on ${selectedDate}.`)}
                  className="flex-1 py-3 rounded-xl border border-rose-200 hover:bg-rose-50 text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-rose-600" />
                  <span>Add to Google / Apple Calendar</span>
                </button>
                
                <button
                  onClick={onClose}
                  className="flex-1 py-3 rounded-xl aura-btn-primary text-white text-xs font-bold shadow-md cursor-pointer"
                >
                  Done
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
