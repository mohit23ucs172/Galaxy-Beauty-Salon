"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  ChevronRight,
  ChevronLeft,
  Check,
  Sparkles,
  Scissors,
  Heart,
  Star,
  Droplets,
  Sun,
} from "lucide-react";

const services = [
  { id: "bridal", label: "Bridal Makeup", icon: Sparkles, duration: "3–4 hrs", price: "From ₹8,000" },
  { id: "skincare", label: "Skincare Facial", icon: Droplets, duration: "60–90 min", price: "From ₹3,500" },
  { id: "hair", label: "Hair Styling", icon: Scissors, duration: "1–3 hrs", price: "From ₹2,000" },
  { id: "spa", label: "Luxury Spa", icon: Heart, duration: "2 hrs", price: "From ₹5,000" },
  { id: "nails", label: "Nail Artistry", icon: Star, duration: "45–90 min", price: "From ₹1,500" },
  { id: "party", label: "Party Glam", icon: Sun, duration: "90 min", price: "From ₹4,500" },
];

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
  "05:00 PM", "06:00 PM",
];

const artists = [
  { id: "priya", name: "Priya Sharma", role: "Bridal & Makeup", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80", rating: 4.9, reviews: 284 },
  { id: "anjali", name: "Anjali Mehta", role: "Skincare Specialist", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80", rating: 4.8, reviews: 196 },
  { id: "riya", name: "Riya Kapoor", role: "Hair Stylist", img: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=200&q=80", rating: 4.9, reviews: 312 },
  { id: "any", name: "No Preference", role: "Best available artist", img: "", rating: null, reviews: null },
];

// Generate next 14 days
const getDates = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
      day: days[d.getDay()],
      date: d.getDate(),
      month: months[d.getMonth()],
      full: d.toISOString().split("T")[0],
      unavailable: i === 2 || i === 7,
    };
  });
};

const STEPS = ["Service", "Date & Time", "Artist", "Your Details", "Confirm"];

export default function BookingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [step, setStep] = useState(0);
  const [booked, setBooked] = useState(false);

  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", notes: "" });

  const dates = getDates();

  const canProceed = () => {
    if (step === 0) return !!selectedService;
    if (step === 1) return !!selectedDate && !!selectedTime;
    if (step === 2) return !!selectedArtist;
    if (step === 3) return form.name.trim() && form.phone.trim() && form.email.trim();
    return true;
  };

  const serviceName = services.find((s) => s.id === selectedService)?.label;
  const artistName = artists.find((a) => a.id === selectedArtist)?.name;
  const dateObj = dates.find((d) => d.full === selectedDate);

  return (
    <section
      id="booking"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1A0A0A 0%, #2D1515 60%, #1A0A0A 100%)" }}
      ref={ref}
    >
      {/* Ambient BG */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 30% 50%, rgba(183,110,121,0.1) 0%, transparent 55%), radial-gradient(ellipse at 70% 30%, rgba(232,196,184,0.05) 0%, transparent 50%)",
      }} />
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(45deg, rgba(183,110,121,1) 0, rgba(183,110,121,1) 1px, transparent 0, transparent 50%)",
        backgroundSize: "28px 28px",
      }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: "rgba(183,110,121,0.14)", border: "1px solid rgba(183,110,121,0.3)" }}
          >
            <Calendar size={12} style={{ color: "#B76E79" }} />
            <span className="font-sans text-xs tracking-[0.25em] uppercase font-light" style={{ color: "#B76E79" }}>
              Reserve Your Seat
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight"
          >
            Book Your
            <br />
            <span className="italic" style={{
              background: "linear-gradient(135deg, #F7E7CE 0%, #E8C4B8 45%, #B76E79 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Transformation
            </span>
          </motion.h2>
        </div>

        <AnimatePresence mode="wait">
          {booked ? (
            <SuccessScreen key="success" onReset={() => { setBooked(false); setStep(0); setSelectedService(null); setSelectedDate(null); setSelectedTime(null); setSelectedArtist(null); setForm({ name: "", phone: "", email: "", notes: "" }); }} />
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-3xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Progress bar */}
              <div className="px-7 pt-7 pb-5">
                <div className="flex items-center justify-between mb-4">
                  {STEPS.map((s, i) => (
                    <div key={s} className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-400"
                        style={
                          i < step
                            ? { background: "linear-gradient(135deg,#B76E79,#8B6F6F)", color: "#fff" }
                            : i === step
                            ? { background: "rgba(183,110,121,0.25)", border: "2px solid #B76E79", color: "#E8C4B8" }
                            : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.25)" }
                        }
                      >
                        {i < step ? <Check size={12} strokeWidth={3} /> : i + 1}
                      </div>
                      <span className="hidden sm:block font-sans text-xs"
                        style={{ color: i <= step ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.2)" }}
                      >
                        {s}
                      </span>
                      {i < STEPS.length - 1 && (
                        <div className="hidden sm:block w-8 lg:w-14 h-px mx-1"
                          style={{ background: i < step ? "rgba(183,110,121,0.6)" : "rgba(255,255,255,0.08)" }}
                        />
                      )}
                    </div>
                  ))}
                </div>
                {/* Progress fill */}
                <div className="h-0.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(to right, #B76E79, #E8C4B8)" }}
                    animate={{ width: `${(step / (STEPS.length - 1)) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Step content */}
              <div className="px-7 pb-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step === 0 && (
                      <StepService services={services} selected={selectedService} onSelect={setSelectedService} />
                    )}
                    {step === 1 && (
                      <StepDateTime dates={dates} timeSlots={timeSlots} selectedDate={selectedDate} selectedTime={selectedTime} onSelectDate={setSelectedDate} onSelectTime={setSelectedTime} />
                    )}
                    {step === 2 && (
                      <StepArtist artists={artists} selected={selectedArtist} onSelect={setSelectedArtist} />
                    )}
                    {step === 3 && (
                      <StepDetails form={form} onChange={setForm} />
                    )}
                    {step === 4 && (
                      <StepConfirm serviceName={serviceName} dateObj={dateObj} selectedTime={selectedTime} artistName={artistName} form={form} />
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Nav buttons */}
                <div className="flex items-center justify-between mt-8 pt-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <button
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium font-sans transition-all duration-200"
                    style={{
                      color: step === 0 ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.6)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      background: "rgba(255,255,255,0.04)",
                      pointerEvents: step === 0 ? "none" : "auto",
                    }}
                  >
                    <ChevronLeft size={15} /> Back
                  </button>

                  {step < STEPS.length - 1 ? (
                    <motion.button
                      whileHover={canProceed() ? { scale: 1.02 } : {}}
                      whileTap={canProceed() ? { scale: 0.98 } : {}}
                      onClick={() => canProceed() && setStep((s) => s + 1)}
                      className="flex items-center gap-2 px-7 py-2.5 rounded-full text-sm font-medium font-sans transition-all duration-300"
                      style={
                        canProceed()
                          ? { background: "linear-gradient(135deg,#B76E79,#8B6F6F)", color: "#fff", boxShadow: "0 6px 24px rgba(183,110,121,0.35)" }
                          : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.25)", cursor: "not-allowed" }
                      }
                    >
                      Continue <ChevronRight size={15} />
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setBooked(true)}
                      className="flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold font-sans"
                      style={{
                        background: "linear-gradient(135deg, #B76E79 0%, #E8C4B8 100%)",
                        color: "#1A1A1A",
                        boxShadow: "0 8px 30px rgba(183,110,121,0.45)",
                      }}
                    >
                      Confirm Booking <Check size={15} strokeWidth={3} />
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ── Step 1: Service ── */
function StepService({ services, selected, onSelect }: { services: typeof services; selected: string | null; onSelect: (id: string) => void }) {
  return (
    <div>
      <h3 className="font-playfair text-xl text-white font-medium mb-1">Choose a Service</h3>
      <p className="font-sans text-xs text-white/40 mb-6 font-light">Select the service you would like to book</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {services.map((s) => {
          const Icon = s.icon;
          const active = selected === s.id;
          return (
            <motion.button
              key={s.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(s.id)}
              className="text-left p-4 rounded-xl transition-all duration-300"
              style={
                active
                  ? { background: "rgba(183,110,121,0.2)", border: "1px solid rgba(183,110,121,0.5)", boxShadow: "0 4px 20px rgba(183,110,121,0.15)" }
                  : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }
              }
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                style={{ background: active ? "rgba(183,110,121,0.3)" : "rgba(255,255,255,0.06)" }}
              >
                <Icon size={15} style={{ color: active ? "#E8C4B8" : "rgba(255,255,255,0.4)" }} />
              </div>
              <p className="font-sans text-sm font-medium" style={{ color: active ? "#E8C4B8" : "rgba(255,255,255,0.7)" }}>{s.label}</p>
              <p className="font-sans text-xs font-light mt-0.5" style={{ color: active ? "rgba(232,196,184,0.6)" : "rgba(255,255,255,0.25)" }}>{s.price}</p>
              <p className="font-sans text-xs font-light" style={{ color: active ? "rgba(232,196,184,0.5)" : "rgba(255,255,255,0.2)" }}>⏱ {s.duration}</p>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

/* ── Step 2: Date & Time ── */
function StepDateTime({ dates, timeSlots, selectedDate, selectedTime, onSelectDate, onSelectTime }: {
  dates: ReturnType<typeof getDates>; timeSlots: string[];
  selectedDate: string | null; selectedTime: string | null;
  onSelectDate: (d: string) => void; onSelectTime: (t: string) => void;
}) {
  return (
    <div>
      <h3 className="font-playfair text-xl text-white font-medium mb-1">Pick a Date & Time</h3>
      <p className="font-sans text-xs text-white/40 mb-5 font-light">Available slots for the next 2 weeks</p>

      {/* Date strip */}
      <div className="overflow-x-auto pb-2 mb-5">
        <div className="flex gap-2" style={{ minWidth: "max-content" }}>
          {dates.map((d) => {
            const active = selectedDate === d.full;
            return (
              <button
                key={d.full}
                disabled={d.unavailable}
                onClick={() => !d.unavailable && onSelectDate(d.full)}
                className="flex flex-col items-center px-3 py-3 rounded-xl transition-all duration-200 min-w-[56px]"
                style={
                  d.unavailable
                    ? { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", opacity: 0.3, cursor: "not-allowed" }
                    : active
                    ? { background: "linear-gradient(135deg,#B76E79,#8B6F6F)", border: "1px solid transparent", boxShadow: "0 4px 16px rgba(183,110,121,0.35)" }
                    : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }
                }
              >
                <span className="font-sans text-xs font-light" style={{ color: active ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.3)" }}>{d.day}</span>
                <span className="font-playfair text-lg font-semibold leading-none my-1" style={{ color: active ? "#fff" : "rgba(255,255,255,0.7)" }}>{d.date}</span>
                <span className="font-sans text-xs font-light" style={{ color: active ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.3)" }}>{d.month}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time grid */}
      {selectedDate && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <p className="font-sans text-xs text-white/40 mb-3 font-light tracking-wide uppercase">Available Times</p>
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
            {timeSlots.map((t, i) => {
              const busy = i === 2 || i === 5;
              const active = selectedTime === t;
              return (
                <button
                  key={t}
                  disabled={busy}
                  onClick={() => !busy && onSelectTime(t)}
                  className="py-2.5 rounded-xl text-xs font-medium font-sans transition-all duration-200"
                  style={
                    busy
                      ? { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.2)", cursor: "not-allowed", textDecoration: "line-through" }
                      : active
                      ? { background: "rgba(183,110,121,0.25)", border: "1px solid rgba(183,110,121,0.5)", color: "#E8C4B8" }
                      : { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.55)" }
                  }
                >
                  {t}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
}

/* ── Step 3: Artist ── */
function StepArtist({ artists, selected, onSelect }: { artists: typeof artists; selected: string | null; onSelect: (id: string) => void }) {
  return (
    <div>
      <h3 className="font-playfair text-xl text-white font-medium mb-1">Choose Your Artist</h3>
      <p className="font-sans text-xs text-white/40 mb-6 font-light">All our artists are certified professionals</p>
      <div className="grid sm:grid-cols-2 gap-3">
        {artists.map((a) => {
          const active = selected === a.id;
          return (
            <motion.button
              key={a.id}
              whileHover={{ y: -2 }}
              onClick={() => onSelect(a.id)}
              className="flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300"
              style={
                active
                  ? { background: "rgba(183,110,121,0.18)", border: "1px solid rgba(183,110,121,0.45)", boxShadow: "0 4px 20px rgba(183,110,121,0.12)" }
                  : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }
              }
            >
              {a.img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={a.img} alt={a.name} className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  style={{ border: active ? "2px solid rgba(183,110,121,0.6)" : "2px solid rgba(255,255,255,0.1)" }}
                />
              ) : (
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl"
                  style={{ background: "rgba(183,110,121,0.15)", border: "2px solid rgba(183,110,121,0.3)" }}>
                  ✨
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="font-sans text-sm font-medium" style={{ color: active ? "#E8C4B8" : "rgba(255,255,255,0.75)" }}>{a.name}</p>
                <p className="font-sans text-xs font-light" style={{ color: active ? "rgba(232,196,184,0.55)" : "rgba(255,255,255,0.3)" }}>{a.role}</p>
                {a.rating && (
                  <p className="font-sans text-xs mt-1" style={{ color: "#B76E79" }}>
                    ★ {a.rating} · {a.reviews} reviews
                  </p>
                )}
              </div>
              {active && (
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "#B76E79" }}>
                  <Check size={11} className="text-white" strokeWidth={3} />
                </div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

/* ── Step 4: Details ── */
function StepDetails({ form, onChange }: { form: { name: string; phone: string; email: string; notes: string }; onChange: (f: typeof form) => void }) {
  const inputStyle = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "0.75rem",
    color: "white",
    padding: "12px 16px",
    width: "100%",
    fontSize: "14px",
    fontFamily: "inherit",
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <div>
      <h3 className="font-playfair text-xl text-white font-medium mb-1">Your Details</h3>
      <p className="font-sans text-xs text-white/40 mb-6 font-light">We will send a confirmation to your email</p>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="font-sans text-xs text-white/40 tracking-widest uppercase mb-2 block">Full Name *</label>
          <div className="relative">
            <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "rgba(183,110,121,0.6)" }} />
            <input
              type="text"
              placeholder="Priya Sharma"
              value={form.name}
              onChange={(e) => onChange({ ...form, name: e.target.value })}
              style={{ ...inputStyle, paddingLeft: 40 }}
              onFocus={(e) => { e.target.style.borderColor = "rgba(183,110,121,0.5)"; }}
              onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
            />
          </div>
        </div>

        <div>
          <label className="font-sans text-xs text-white/40 tracking-widest uppercase mb-2 block">Phone Number *</label>
          <div className="relative">
            <Phone size={14} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "rgba(183,110,121,0.6)" }} />
            <input
              type="tel"
              placeholder="+91 73804 89240"
              value={form.phone}
              onChange={(e) => onChange({ ...form, phone: e.target.value })}
              style={{ ...inputStyle, paddingLeft: 40 }}
              onFocus={(e) => { e.target.style.borderColor = "rgba(183,110,121,0.5)"; }}
              onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="font-sans text-xs text-white/40 tracking-widest uppercase mb-2 block">Email Address *</label>
          <div className="relative">
            <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "rgba(183,110,121,0.6)" }} />
            <input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => onChange({ ...form, email: e.target.value })}
              style={{ ...inputStyle, paddingLeft: 40 }}
              onFocus={(e) => { e.target.style.borderColor = "rgba(183,110,121,0.5)"; }}
              onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="font-sans text-xs text-white/40 tracking-widest uppercase mb-2 block">Special Requests <span style={{ color: "rgba(255,255,255,0.2)" }}>(Optional)</span></label>
          <textarea
            placeholder="Any allergies, preferences, or special occasions we should know about..."
            value={form.notes}
            onChange={(e) => onChange({ ...form, notes: e.target.value })}
            rows={3}
            style={{ ...inputStyle, resize: "none" }}
            onFocus={(e) => { e.target.style.borderColor = "rgba(183,110,121,0.5)"; }}
            onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
          />
        </div>
      </div>
    </div>
  );
}

/* ── Step 5: Confirm ── */
function StepConfirm({ serviceName, dateObj, selectedTime, artistName, form }: {
  serviceName?: string; dateObj?: ReturnType<typeof getDates>[0];
  selectedTime: string | null; artistName?: string;
  form: { name: string; phone: string; email: string; notes: string };
}) {
  const rows = [
    { label: "Service", value: serviceName },
    { label: "Date", value: dateObj ? `${dateObj.day}, ${dateObj.date} ${dateObj.month}` : "—" },
    { label: "Time", value: selectedTime },
    { label: "Artist", value: artistName },
    { label: "Name", value: form.name },
    { label: "Phone", value: form.phone },
    { label: "Email", value: form.email },
  ];

  return (
    <div>
      <h3 className="font-playfair text-xl text-white font-medium mb-1">Review & Confirm</h3>
      <p className="font-sans text-xs text-white/40 mb-6 font-light">Please verify your details before confirming</p>

      <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
        {rows.map((row, i) => (
          <div key={row.label} className="flex items-center justify-between px-5 py-3.5"
            style={{ borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}
          >
            <span className="font-sans text-xs text-white/35 tracking-wide">{row.label}</span>
            <span className="font-sans text-sm font-medium text-white/80">{row.value || "—"}</span>
          </div>
        ))}
      </div>

      {form.notes && (
        <div className="mt-3 p-4 rounded-xl" style={{ background: "rgba(183,110,121,0.07)", border: "1px solid rgba(183,110,121,0.15)" }}>
          <p className="font-sans text-xs text-white/40 mb-1">Special Requests</p>
          <p className="font-sans text-sm font-light text-white/60">{form.notes}</p>
        </div>
      )}

      <div className="mt-5 p-4 rounded-xl flex items-start gap-3"
        style={{ background: "rgba(183,110,121,0.08)", border: "1px solid rgba(183,110,121,0.18)" }}>
        <Sparkles size={14} style={{ color: "#B76E79", marginTop: 2, flexShrink: 0 }} />
        <p className="font-sans text-xs font-light text-white/45 leading-relaxed">
          A confirmation will be sent to <span style={{ color: "#E8C4B8" }}>{form.email}</span>. Free cancellation up to 24 hours before your appointment. We look forward to welcoming you.
        </p>
      </div>
    </div>
  );
}

/* ── Success screen ── */
function SuccessScreen({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-16 px-8 rounded-3xl"
      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
        style={{ background: "linear-gradient(135deg, #B76E79, #8B6F6F)", boxShadow: "0 10px 40px rgba(183,110,121,0.4)" }}
      >
        <Check size={32} className="text-white" strokeWidth={3} />
      </motion.div>

      <h3 className="font-playfair text-3xl font-medium text-white mb-3">Booking Confirmed!</h3>
      <p className="font-cormorant text-xl font-light mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
        We can&apos;t wait to see you. A confirmation has been sent to your email.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onReset}
          className="px-7 py-3 rounded-full text-sm font-medium font-sans"
          style={{ background: "linear-gradient(135deg,#B76E79,#8B6F6F)", color: "#fff", boxShadow: "0 6px 24px rgba(183,110,121,0.3)" }}
        >
          Book Another Appointment
        </button>
        <a href="/" className="px-7 py-3 rounded-full text-sm font-medium font-sans"
          style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)" }}>
          Back to Home
        </a>
      </div>
    </motion.div>
  );
}
