/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Instagram,
  MessageCircle,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Heart,
  Diamond,
  User,
  Globe,
} from "lucide-react";

// --- Components ---

const Logo = ({ className = "w-24 h-24" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    {/* Recreating the four-heart clover logo */}
    <div className="grid grid-cols-2 gap-0.5 transform rotate-45">
      {[0, 1, 2, 3].map((i) => (
        <Heart
          key={i}
          className="w-full h-full text-gold fill-gold"
          strokeWidth={1}
        />
      ))}
    </div>
  </div>
);

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to 30 days from now for demo purposes
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8 justify-center mt-8">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <div className="text-3xl md:text-5xl font-serif text-gold mb-1">
            {value.toString().padStart(2, "0")}
          </div>
          <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/50">
            {label === "days"
              ? "Dias"
              : label === "hours"
                ? "Horas"
                : label === "minutes"
                  ? "Minutos"
                  : "Segundos"}
          </div>
        </div>
      ))}
    </div>
  );
};

const Gallery = () => {
  const images = [
    "/assets/img/cat-han-Ks6wd1Zyf1o-unsplash.jpg",
    "/assets/img/jasmin-chew-UbeNYvk6ED0-unsplash.jpg",
    "/assets/img/kateryna-hliznitsova-ceSCZzjTReg-unsplash.jpg",
    "/assets/img/kateryna-hliznitsova-pjrPWwwYx1I-unsplash.jpg",
    "/assets/img/segal-jewelry-NsH-CvU0deg-unsplash.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl border border-gold/20 group">
      <div className="aspect-[4/5] relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-gold border border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-gold border border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentIndex ? "bg-gold w-4" : "bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setEmail("");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-gold selection:text-black">
      {/* Header */}
      <header className="py-8 px-6 flex flex-col items-center gap-6 z-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Logo className="w-16 h-16 md:w-20 md:h-20" />
        </motion.div>

        <nav className="flex gap-6">
          <a
            href="https://instagram.com/ddjoiasesemijoias"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-gold transition-colors flex items-center gap-2 text-sm uppercase tracking-widest"
          >
            <Instagram size={18} />
            <span className="hidden md:inline">@ddjoiasesemijoias</span>
          </a>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-12 pb-24 px-6 overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-gold/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[150px]" />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-7xl font-serif leading-tight mb-8">
                <span className="block text-white/90">A tradição da alta</span>
                <span className="gold-text-gradient italic">
                  joalheria artesanal
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
                Há 34 anos encantando com joias belas, sofisticadas e
                exclusivas. Nossa nova experiência digital está chegando para
                transformar seus desejos em realidade.
              </p>

              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <a
                  href="https://wa.me/551996433292?text=Olá! Gostaria de saber mais sobre as joias artesanais."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-gradient px-8 py-4 rounded-full text-black font-semibold flex items-center gap-3 hover:scale-105 transition-transform shadow-lg shadow-gold/20"
                >
                  <MessageCircle size={20} />
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 px-6 bg-zinc-950/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif mb-4">
                Galeria de Antecipação
              </h2>
              <div className="w-24 h-px bg-gold mx-auto opacity-50" />
            </div>
            <Gallery />
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src="\assets\img\nexaro-studio-CZ_xnWXvaYw-unsplash.jpg"
                  alt="Janete Duraes de Souza"
                  className="rounded-2xl border border-gold/20 grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-black border border-gold/30 p-6 rounded-xl hidden md:block">
                  <div className="text-gold font-serif text-4xl mb-1">34</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/50">
                    Anos de Experiência
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-3xl md:text-5xl font-serif">
                A Arte de Janete Duraes
              </h2>
              <p className="text-white/70 leading-relaxed text-lg">
                Liderada pela ourives autodidata Janete Duraes de Souza, a D&D
                Joias é o resultado de mais de três décadas de dedicação à
                perfeição.
              </p>
              <p className="text-white/70 leading-relaxed">
                Nosso foco é a joalheria artesanal autoral, onde cada peça é
                única e carrega uma história. Oferecemos atendimento
                personalizado para mulheres, homens e crianças, atendendo
                clientes em todo o Brasil e no exterior.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <Diamond size={16} className="text-gold" />
                  Peças Exclusivas
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <User size={16} className="text-gold" />
                  Personalização
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <Globe size={16} className="text-gold" />
                  Envio Internacional
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <Heart size={16} className="text-gold" />
                  Feito com Alma
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact/News Section */}
        <section className="py-24 px-6 bg-zinc-950/80 border-y border-gold/10">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Seja o primeiro a saber
            </h2>
            <p className="text-white/60 mb-10">
              Deixe seu e-mail para receber um convite exclusivo para o nosso
              lançamento online.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col md:flex-row gap-4 mb-12"
            >
              <input
                type="email"
                required
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-black border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-gold transition-colors text-white"
              />
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="gold-gradient px-8 py-4 rounded-full text-black font-semibold disabled:opacity-50 transition-all"
              >
                {isSubmitting
                  ? "Enviando..."
                  : submitted
                    ? "Inscrito!"
                    : "Me avisar"}
              </button>
            </form>

            <div className="flex flex-col items-center gap-4">
              <p className="text-sm text-white/40 uppercase tracking-widest">
                Ou faça seu pedido agora
              </p>
              <a
                href="https://wa.me/5513991320202"
                className="text-gold hover:text-gold-light transition-colors flex items-center gap-2 font-medium"
              >
                <MessageCircle size={20} />
                Encomendas Personalizadas via WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-serif mb-6">
                  Nova Localização
                </h2>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Estamos mudando para um novo espaço em Mongaguá, em parceria
                  com a <strong>Top 20 Modas</strong>. Um ambiente preparado
                  para oferecer ainda mais conforto e exclusividade no seu
                  atendimento.
                </p>

                <div className="flex items-start gap-4 text-white/80">
                  <MapPin className="text-gold shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Av. Monteiro Lobato, 9970</p>
                    <p className="text-white/50">
                      Agenor de Campos, Mongaguá - SP
                    </p>
                  </div>
                </div>
              </div>

              <div className="aspect-video rounded-2xl overflow-hidden border border-gold/20 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <iframe
                  src="https://www.google.com/maps?q=Av.%20Monteiro%20Lobato,%209970,%20Agenor%20de%20Campos,%20Mongagu%C3%A1%20-%20SP&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização D&D Joias"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo className="w-12 h-12" />
            <p className="text-white/30 text-xs tracking-widest uppercase">
              © 2026 D&D Joias & Semi Joias Finas. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex gap-8">
            <a
              href="https://instagram.com/ddjoiasesemijoias"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-gold transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://wa.me/5513991320202"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-gold transition-colors"
            >
              <MessageCircle size={24} />
            </a>
            <a
              href="mailto:contato@ddjoias.com.br"
              className="text-white/40 hover:text-gold transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
