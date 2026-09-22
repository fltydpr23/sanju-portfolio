"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const recipient = "hello@sanjanavijai.com";
    const subject = encodeURIComponent(`Art Therapy Inquiry from ${name.trim()}`);
    const bodyContent = `Hi Sanjana,

My name is ${name.trim()} (${email.trim()}).

A bit about my child:
${message.trim() || "N/A"}

Looking forward to connecting with you.`;

    const body = encodeURIComponent(bodyContent);
    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Open user's default email client
    window.location.href = mailtoUrl;

    setStatus("success");
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setStatus("idle");
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-charcoal dark:bg-charcoal-deep text-sand relative transition-colors">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          <div>
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-serif mb-8">Begin gently.</h2>
              <p className="text-lg text-sand/70 font-light leading-relaxed max-w-md mb-12">
                If you feel this might be the right space for your child, I would love to connect. We can start with a short, pressure-free conversation.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <div>
                  <span className="block text-sm tracking-widest uppercase text-sand/50 mb-2">Email</span>
                  <a href="mailto:hello@sanjanavijai.com" className="text-xl font-serif hover:text-peach transition-colors">
                    hello@sanjanavijai.com
                  </a>
                </div>
                <div>
                  <span className="block text-sm tracking-widest uppercase text-sand/50 mb-2">Location</span>
                  <p className="text-lg font-light text-sand/80">
                    Online & Selected physical spaces in Bangalore.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} className="bg-sand/5 p-6 sm:p-8 md:p-12 rounded-3xl md:rounded-[2rem] border border-sand/10 min-h-[400px] md:min-h-[450px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {status !== "success" ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col gap-8" 
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm tracking-widest uppercase text-sand/60">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      placeholder="e.g. Maya Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-transparent border-b border-sand/20 pt-2 pb-3 text-lg focus:outline-none focus:border-peach transition-colors placeholder:text-sand/30"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm tracking-widest uppercase text-sand/60">Your Email</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      placeholder="e.g. maya@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-transparent border-b border-sand/20 pt-2 pb-3 text-lg focus:outline-none focus:border-peach transition-colors placeholder:text-sand/30"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm tracking-widest uppercase text-sand/60">A bit about your child</label>
                    <textarea 
                      id="message"
                      rows={4}
                      placeholder="Feel free to share what your child enjoys or what you hope to explore together..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-transparent border-b border-sand/20 pt-2 pb-3 text-lg focus:outline-none focus:border-peach transition-colors resize-none placeholder:text-sand/30"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="mt-4 py-4 rounded-full bg-sand text-charcoal hover:bg-peach transition-all font-medium tracking-wide flex items-center justify-center gap-3 active:scale-[0.99]"
                  >
                    Send Message
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="text-center py-8"
                >
                  <h3 className="text-3xl font-serif text-peach mb-6">Message Received</h3>
                  <p className="text-lg text-sand/80 font-light mb-4">
                    Thank you for sharing. Take a deep breath.
                  </p>
                  <p className="text-sm text-sand/50 font-light mb-8 max-w-sm mx-auto">
                    Your email app has been opened with your message pre-filled. I will read through your note with care and get back to you within 2–3 days.
                  </p>
                  <button
                    onClick={handleReset}
                    className="text-xs uppercase tracking-widest text-peach/80 hover:text-peach underline underline-offset-4 transition-colors"
                  >
                    Send another note
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
