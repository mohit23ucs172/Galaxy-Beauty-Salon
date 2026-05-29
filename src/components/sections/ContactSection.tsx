"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Instagram,
  Youtube,
} from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Mazar Gali, Near Bus Station", "Maharajganj, UP 273303"],
    action: { label: "Get Directions →", href: "https://maps.google.com/?q=Maharajganj,UP" },
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 73804 89240", "+91 70682 47380 (WhatsApp)"],
    action: { label: "Call Now →", href: "tel:+917380489240" },
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon–Sat: 11:00 AM – 8:00 PM", "Sunday: 1:00 PM – 6:00 PM"],
    action: { label: "Book Appointment →", href: "#booking" },
  },
  {
    icon: Mail,
    title: "Find Us Online",
    lines: ["@galaxy._salon", "Galaxy Beauty Salon (YouTube)"],
    action: { label: "Follow on Instagram →", href: "https://www.instagram.com/galaxy._salon" },
  },
];

const socials = [
  { icon: Instagram, label: "@galaxy._salon", href: "https://www.instagram.com/galaxy._salon", color: "#E1306C" },
  { icon: Youtube, label: "Galaxy Beauty Salon", href: "https://www.youtube.com/@galaxybeautysalon", color: "#FF0000" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputBase = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    fontSize: "14px",
    fontFamily: "inherit",
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "white",
  } as React.CSSProperties;

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "#FDFAF6" }}
      ref={ref}
    >
      {/* BG decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-25" style={{
        background: "radial-gradient(circle, rgba(232,196,184,0.8) 0%, transparent 70%)",
        transform: "translate(30%,-20%)",
      }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 pointer-events-none opacity-20" style={{
        background: "radial-gradient(circle, rgba(183,110,121,0.5) 0%, transparent 70%)",
        transform: "translate(-30%,30%)",
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: "rgba(183,110,121,0.08)", border: "1px solid rgba(183,110,121,0.2)" }}
          >
            <MessageSquare size={12} style={{ color: "#B76E79" }} />
            <span className="font-sans text-xs tracking-[0.25em] uppercase font-light" style={{ color: "#B76E79" }}>
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight"
            style={{ color: "#1A1A1A" }}
          >
            We&apos;d Love to
            <br />
            <span className="italic" style={{
              background: "linear-gradient(135deg, #B76E79 0%, #E8C4B8 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Hear from You
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-cormorant text-xl max-w-xl mx-auto font-light"
            style={{ color: "#8B6F6F" }}
          >
            Questions, enquiries, or just want to say hello — our team responds within 2 hours.
          </motion.p>
        </div>

        {/* Contact info cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contactDetails.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 + 0.2 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-6 transition-all duration-300"
                style={{
                  background: "white",
                  border: "1px solid rgba(183,110,121,0.15)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 50px rgba(183,110,121,0.12)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(183,110,121,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(183,110,121,0.15)";
                }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(183,110,121,0.1)" }}>
                  <Icon size={18} style={{ color: "#B76E79" }} />
                </div>
                <h4 className="font-playfair text-base font-medium mb-2" style={{ color: "#1A1A1A" }}>
                  {item.title}
                </h4>
                {item.lines.map((line) => (
                  <p key={line} className="font-sans text-sm font-light" style={{ color: "#8B6F6F" }}>{line}</p>
                ))}
                <a
                  href={item.action.href}
                  className="inline-block font-sans text-xs font-medium mt-3 transition-colors"
                  style={{ color: "#B76E79" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#8B6F6F"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#B76E79"; }}
                >
                  {item.action.label}
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Two-column: Form + Map */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl p-8"
            style={{
              background: "linear-gradient(135deg, #1A0A0A 0%, #2D1515 100%)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "linear-gradient(135deg, #B76E79, #8B6F6F)", boxShadow: "0 8px 30px rgba(183,110,121,0.4)" }}
                >
                  <Send size={24} className="text-white" />
                </motion.div>
                <h3 className="font-playfair text-2xl font-medium text-white mb-3">Message Sent!</h3>
                <p className="font-cormorant text-lg font-light mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                  We will get back to you within 2 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setFormData({ name: "", phone: "", email: "", service: "", message: "" }); }}
                  className="font-sans text-sm px-6 py-2.5 rounded-full"
                  style={{ border: "1px solid rgba(183,110,121,0.4)", color: "#B76E79" }}
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="font-playfair text-2xl font-medium text-white mb-1">Send a Message</h3>
                <p className="font-sans text-xs font-light mb-7" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Fill in the form and we will reach out promptly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-sans text-xs tracking-widest uppercase block mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={inputBase}
                        onFocus={(e) => { e.target.style.borderColor = "rgba(183,110,121,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(183,110,121,0.08)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                    <div>
                      <label className="font-sans text-xs tracking-widest uppercase block mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 73804 89240"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={inputBase}
                        onFocus={(e) => { e.target.style.borderColor = "rgba(183,110,121,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(183,110,121,0.08)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-sans text-xs tracking-widest uppercase block mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputBase}
                      onFocus={(e) => { e.target.style.borderColor = "rgba(183,110,121,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(183,110,121,0.08)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                    />
                  </div>

                  <div>
                    <label className="font-sans text-xs tracking-widest uppercase block mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>
                      Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{ ...inputBase, appearance: "none" }}
                      onFocus={(e) => { e.target.style.borderColor = "rgba(183,110,121,0.5)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
                    >
                      <option value="" style={{ background: "#1A0A0A" }}>Select a service</option>
                      {["Bridal Makeup", "Skincare Facial", "Hair Styling", "Luxury Spa", "Nail Artistry", "Membership Plans", "General Enquiry"].map((s) => (
                        <option key={s} value={s} style={{ background: "#1A0A0A" }}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-sans text-xs tracking-widest uppercase block mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ ...inputBase, resize: "none" }}
                      onFocus={(e) => { e.target.style.borderColor = "rgba(183,110,121,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(183,110,121,0.08)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-sans text-sm font-medium"
                    style={{
                      background: "linear-gradient(135deg, #B76E79 0%, #8B6F6F 100%)",
                      color: "#fff",
                      boxShadow: "0 6px 24px rgba(183,110,121,0.35)",
                    }}
                  >
                    Send Message <Send size={14} />
                  </motion.button>
                </form>

                {/* Social links */}
                <div className="mt-7 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="font-sans text-xs text-center font-light mb-4" style={{ color: "rgba(255,255,255,0.25)" }}>
                    Or reach us directly on
                  </p>
                  <div className="flex justify-center gap-4">
                    {socials.map(({ icon: Icon, label, href }) => (
                      <a key={label} href={href}
                        className="flex items-center gap-2 font-sans text-xs font-light transition-colors"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#E8C4B8"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)"; }}
                      >
                        <Icon size={13} />
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </>
            )}
          </motion.div>

          {/* Map + info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5"
          >
            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden flex-1 min-h-[320px] relative"
              style={{ border: "1px solid rgba(183,110,121,0.2)", boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.9!2d83.56!3d27.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996e0a7b4c5a5a5%3A0x1234567890abcdef!2sMaharajganj%2C%20Uttar%20Pradesh%20273303!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320, filter: "saturate(0.9) contrast(1.05)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Galaxy Beauty Salon Location"
              />
              {/* Map overlay pin card */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl p-4 flex items-center gap-3"
                style={{
                  background: "rgba(26,10,10,0.92)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(183,110,121,0.25)" }}>
                  <MapPin size={15} style={{ color: "#B76E79" }} />
                </div>
                <div>
                  <p className="font-playfair text-sm font-medium text-white">Galaxy Beauty Salon</p>
                  <p className="font-sans text-xs font-light" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Mazar Gali, Near Bus Station, Maharajganj
                  </p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto font-sans text-xs font-medium px-3 py-1.5 rounded-full flex-shrink-0"
                  style={{ background: "rgba(183,110,121,0.3)", color: "#E8C4B8" }}
                >
                  Directions
                </a>
              </div>
            </div>

            {/* Quick action cards */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://wa.me/917068247380"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(37,211,102,0.12), rgba(18,140,126,0.12))",
                  border: "1px solid rgba(37,211,102,0.2)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(37,211,102,0.4)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(37,211,102,0.2)"; }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-sm font-medium" style={{ color: "#1A1A1A" }}>WhatsApp Us</p>
                  <p className="font-sans text-xs font-light" style={{ color: "#8B6F6F" }}>Fastest response</p>
                </div>
              </a>

              <a
                href="tel:+917380489240"
                className="group rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300"
                style={{
                  background: "rgba(183,110,121,0.06)",
                  border: "1px solid rgba(183,110,121,0.18)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(183,110,121,0.4)"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(183,110,121,0.1)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(183,110,121,0.18)"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(183,110,121,0.06)"; }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(183,110,121,0.15)" }}>
                  <Phone size={18} style={{ color: "#B76E79" }} />
                </div>
                <div>
                  <p className="font-sans text-sm font-medium" style={{ color: "#1A1A1A" }}>Call Us</p>
                  <p className="font-sans text-xs font-light" style={{ color: "#8B6F6F" }}>Mon–Sat 11AM–8PM</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
