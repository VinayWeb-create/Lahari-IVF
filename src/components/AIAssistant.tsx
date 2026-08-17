import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  Calendar, 
  ShieldCheck, 
  Stethoscope, 
  RefreshCw,
  FileText,
  Volume2,
  VolumeX,
  MessageCircle
} from 'lucide-react';

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: (doctor?: string, notes?: string) => void;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({
  isOpen,
  onClose,
  onOpenBooking
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Hello, I am **Dr. Lahari AI**, your Senior Fertility & Reproductive Science Clinical Copilot.

I can help explain lab reports (such as AMH, Semen DFI, Folliculometry), break down complex procedures (Day-5 Blastocyst culture, PGT-A, Laser Hatching), or guide you through personalized fertility success odds.

How may I assist your family planning journey today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [speechEnabled, setSpeechEnabled] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickChips = [
    'Explain my AMH of 1.1 ng/mL',
    'IUI vs IVF success rates at age 34',
    'What is PGT-A chromosome testing?',
    'IVF packages & 0% EMI financing',
    'Why did my previous IVF cycle fail?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || inputMessage;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai-fertility-consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          patientContext: {
            app: 'Lahari IVF Web Platform'
          }
        })
      });

      const data = await res.json();
      const aiReplyText = data.response || "Thank you. Our senior medical specialists are ready to review your exact clinical reports during a consultation.";

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, aiMsg]);

      // Simple browser speech synthesis if enabled
      if (speechEnabled && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const plainText = aiReplyText.replace(/[#*`]/g, '');
        const utterance = new SpeechSynthesisUtterance(plainText.slice(0, 200));
        utterance.rate = 1.0;
        window.speechSynthesis.speak(utterance);
      }
    } catch (err) {
      console.error('AI assistant error:', err);
      const fallbackMsg: ChatMessage = {
        id: `ai-err-${Date.now()}`,
        sender: 'ai',
        text: "I am ready to help evaluate your clinical symptoms, AMH level, or schedule a free second opinion with Dr. Ananya Sen-Sharma. Would you like to book a slot?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl w-full max-w-2xl h-[85vh] max-h-[750px] shadow-2xl border border-slate-100 flex flex-col overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-rose-50 via-pink-50 to-amber-50 text-slate-900 border-b border-rose-100 px-6 py-4 flex items-center justify-between z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl aura-btn-primary flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-extrabold text-base font-heading text-slate-900">Dr. Lahari AI</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 border border-rose-200">
                  Clinical Copilot
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Senior Reproductive Medicine & Diagnostics Intelligence
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSpeechEnabled(!speechEnabled)}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                speechEnabled ? 'bg-rose-100 border-rose-300 text-rose-700' : 'border-rose-200 text-slate-400 hover:text-slate-700 hover:bg-rose-50'
              }`}
              title={speechEnabled ? 'Voice Enabled' : 'Enable Voice Assistant'}
            >
              {speechEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white hover:bg-rose-100 text-slate-500 hover:text-slate-900 transition-colors border border-rose-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#FFFDFD]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-8 h-8 rounded-full aura-btn-primary text-white flex items-center justify-center text-xs font-bold shrink-0 mt-1 shadow-xs">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-xs ${
                  msg.sender === 'user'
                    ? 'aura-btn-primary text-white rounded-tr-none'
                    : 'bg-white text-slate-800 border border-rose-100 rounded-tl-none space-y-2'
                }`}
              >
                <div className="whitespace-pre-wrap font-sans">
                  {msg.text}
                </div>
                <div
                  className={`text-[10px] text-right mt-1 ${
                    msg.sender === 'user' ? 'text-rose-100' : 'text-slate-400'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center text-xs font-bold shrink-0 mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 justify-start items-center">
              <div className="w-8 h-8 rounded-full aura-btn-primary text-white flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 animate-spin" />
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-rose-100 text-xs text-slate-500 font-medium flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-rose-500 animate-ping"></span>
                <span>Dr. Lahari AI is reviewing clinical protocols...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Chips */}
        <div className="px-4 py-2 bg-white border-t border-rose-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 shrink-0">
            Suggested:
          </span>
          {quickChips.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(chip)}
              className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors whitespace-nowrap shrink-0 border border-rose-200 cursor-pointer"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Input Bar & Handover CTA */}
        <div className="p-4 bg-white border-t border-rose-100 shrink-0 space-y-2.5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about your AMH, IVF vs ICSI, failed cycles, or costs..."
              className="flex-1 px-4 py-3 rounded-xl border border-rose-200 bg-rose-50/30 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white transition-all"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className="p-3 rounded-xl aura-btn-primary text-white disabled:opacity-40 transition-colors cursor-pointer shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Encrypted Medical Triage
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenBooking(undefined, "Patient conversation initiated via Dr. Lahari AI Assistant");
              }}
              className="font-bold text-rose-600 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Calendar className="w-3 h-3" />
              <span>Transfer to Senior Doctor Consultation →</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
