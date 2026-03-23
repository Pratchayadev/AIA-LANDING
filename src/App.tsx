/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  MapPin,
  BrainCircuit,
  Headset,
  AlertTriangle,
  HelpCircle,
  Gavel,
  UserX,
  ChevronDown,
  Phone,
  MessageCircle,
  Star,
  CheckCircle2,
  Wallet,
  Stethoscope,
  CalendarDays,
  Menu,
  X,
  HeartPulse,
  Send,
} from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-editorial transition-all border border-transparent hover:border-primary/10">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-bold text-lg gap-4"
      >
        <span>{question}</span>
        <ChevronDown className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-on-surface-variant leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [lineId, setLineId] = useState('');
  const [interest, setInterest] = useState('health-happy');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-14 px-6 bg-white rounded-[2rem] border border-trust/20 shadow-editorial max-w-xl mx-auto">
        <p className="text-2xl font-bold text-trust mb-2">ขอบคุณที่ฝากข้อมูล</p>
        <p className="text-on-surface-variant leading-relaxed">
          ทีมงานจะติดต่อกลับเพื่อปรึกษาเรื่องประกันสุขภาพ AIA โดยเร็วที่สุด
        </p>
        <a
          href="#contact"
          className="inline-block mt-6 text-primary font-bold underline-offset-4 hover:underline"
          onClick={(ev) => {
            ev.preventDefault();
            setSubmitted(false);
          }}
        >
          ส่งข้อมูลเพิ่มอีกครั้ง
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-[2rem] p-8 md:p-12 shadow-editorial border border-outline-variant/20 space-y-6 max-w-xl mx-auto text-left"
    >
      <div>
        <label htmlFor="lead-name" className="block text-sm font-bold text-on-surface mb-2">
          ชื่อ–นามสกุล
        </label>
        <input
          id="lead-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-outline-variant/40 px-4 py-3.5 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          placeholder="เช่น สมชาย ใจดี"
        />
      </div>
      <div>
        <label htmlFor="lead-phone" className="block text-sm font-bold text-on-surface mb-2">
          เบอร์โทรศัพท์
        </label>
        <input
          id="lead-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-xl border border-outline-variant/40 px-4 py-3.5 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          placeholder="08x-xxx-xxxx"
        />
      </div>
      <div>
        <label htmlFor="lead-line" className="block text-sm font-bold text-on-surface mb-2">
          Line ID
        </label>
        <input
          id="lead-line"
          name="lineId"
          type="text"
          value={lineId}
          onChange={(e) => setLineId(e.target.value)}
          className="w-full rounded-xl border border-outline-variant/40 px-4 py-3.5 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          placeholder="@yourline หรือเว้นว่างได้"
        />
      </div>
      <div>
        <label htmlFor="lead-interest" className="block text-sm font-bold text-on-surface mb-2">
          สนใจเรื่องใด
        </label>
        <select
          id="lead-interest"
          name="interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="w-full rounded-xl border border-outline-variant/40 px-4 py-3.5 text-on-surface bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        >
          <option value="health-happy">AIA Health Happy — เหมาจ่ายค่ารักษา</option>
          <option value="ci-plus">ประกันเหมาจ่าย AIA CI Plus — โรคร้ายแรง</option>
          <option value="online">ซื้อประกัน AIA ออนไลน์ — ขอความช่วยเหลือขั้นตอน</option>
          <option value="tax">ลดหย่อนภาษี ประกันชีวิต AIA</option>
          <option value="near-me">ตัวแทน AIA ใกล้ฉัน (อุดรธานี)</option>
          <option value="ipd">ผู้ป่วยใน (IPD) / ค่าห้อง–ผ่าตัด</option>
          <option value="opd">ผู้ป่วยนอก (OPD)</option>
          <option value="family">แผนครอบครัว</option>
          <option value="unsure">ยังไม่แน่ใจ — ขอคำแนะนำ</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-primary text-white font-bold text-lg hover:opacity-95 transition-opacity shadow-lg"
      >
        <Send className="w-5 h-5" />
        ส่งคำขอปรึกษาฟรี
      </button>
      <p className="text-sm text-on-surface-variant text-center leading-relaxed">
        กดส่งถือว่ายอมรับให้ติดต่อกลับเพื่อให้คำปรึกษาเรื่องแผน{' '}
        <a href="#plans" className="text-primary font-semibold underline-offset-2 hover:underline">
          ประกันสุขภาพ AIA
        </a>{' '}
        เท่านั้น ไม่มีข้อผูกมัด
      </p>
    </form>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = 'text-slate-600 hover:text-primary transition-colors';
  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen relative">
      <a
        href="#hero"
        className="absolute left-0 top-0 -translate-y-full focus:translate-y-4 focus:left-4 z-[100] bg-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm text-primary outline-none ring-2 ring-primary/30"
      >
        ข้ามไปยังเนื้อหาหลัก
      </a>

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav shadow-sm py-3' : 'bg-transparent py-5'}`}
        aria-label="เมนูหลัก"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          <a href="#hero" className="text-2xl font-black text-primary font-headline tracking-tighter">
            AIA อุดรธานี
          </a>

          <div className="hidden md:flex flex-wrap gap-x-6 gap-y-2 items-center font-headline font-bold text-sm tracking-tight">
            <a href="#solution" className={navClass}>
              ทำไม AIA
            </a>
            <a href="#benefits" className={navClass}>
              จุดเด่น
            </a>
            <a href="#local" className={`${navClass} text-primary border-b-2 border-primary pb-0.5`}>
              ตัวแทนอุดรฯ
            </a>
            <a href="#plans" className={navClass}>
              แผนประกัน
            </a>
            <a href="#key-offers" className={navClass}>
              แผนยอดนิยม
            </a>
            <a href="#faq" className={navClass}>
              คำถาม
            </a>
            <a href="#about" className={navClass}>
              เกี่ยวกับ
            </a>
            <a href="#contact" className={navClass}>
              ติดต่อ
            </a>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="#contact"
              className="hidden lg:inline-flex px-6 py-2.5 rounded-full font-bold text-white gradient-primary hover:opacity-90 active:scale-95 transition-all text-sm"
            >
              ปรึกษาฟรี
            </a>
            <a
              href="tel:0000000000"
              className="hidden sm:inline px-4 py-2 text-primary font-bold text-sm hover:bg-primary/5 rounded-full transition-colors"
            >
              โทรด่วน
            </a>
            <button
              type="button"
              className="md:hidden p-2 text-on-surface"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-surface pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col space-y-5 font-headline font-bold text-lg">
              <a href="#solution" onClick={closeMobile} className="py-1">
                ทำไม AIA
              </a>
              <a href="#benefits" onClick={closeMobile} className="py-1">
                จุดเด่น
              </a>
              <a href="#local" onClick={closeMobile} className="py-1 text-primary">
                ตัวแทนอุดรฯ
              </a>
              <a href="#plans" onClick={closeMobile} className="py-1">
                แผนประกัน
              </a>
              <a href="#key-offers" onClick={closeMobile} className="py-1">
                แผนยอดนิยม
              </a>
              <a href="#faq" onClick={closeMobile} className="py-1">
                คำถาม
              </a>
              <a href="#about" onClick={closeMobile} className="py-1">
                เกี่ยวกับ
              </a>
              <a href="#contact" onClick={closeMobile} className="py-1">
                ติดต่อ
              </a>
              <a
                href="#contact"
                onClick={closeMobile}
                className="w-full py-4 rounded-xl text-white gradient-primary text-center mt-2"
              >
                ปรึกษาฟรี
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <h1 className="font-headline font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-on-surface leading-[1.08] mb-8 tracking-tight">
              <span className="text-primary">AIA Health Happy</span> · ประกันเหมาจ่าย AIA CI Plus
              <span className="text-on-surface"> — ตัวแทน AIA ใกล้ฉัน อุดรธานี</span>
            </h1>
            <p className="text-lg sm:text-xl text-on-surface-variant mb-10 font-sans leading-relaxed max-w-xl">
              ซื้อประกัน AIA ออนไลน์หรือนัดปรึกษาในพื้นที่ — เทียบเบี้ย แผนสุขภาพ และโอกาสใช้สิทธิ{' '}
              <strong className="text-on-surface font-semibold">ลดหย่อนภาษี ประกันชีวิต AIA</strong> ตามเกณฑ์ที่ใช้ได้จริง
              พร้อมช่วยคุณตัดสินใจเลือกแผนที่ตรงเป้าหมาย
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a
                href="#contact"
                className="text-center px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                ปรึกษาฟรี
              </a>
              <a
                href="#plans"
                className="text-center px-10 py-5 bg-surface-container-high text-on-surface rounded-2xl font-bold text-lg hover:bg-surface-container-highest transition-all"
              >
                เช็คแผนประกัน
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-trust/15 rounded-full filter blur-3xl opacity-60" />
            <figure className="relative rounded-3xl overflow-hidden shadow-editorial border-8 border-white bg-gradient-to-b from-white via-surface-container-low to-surface-container">
              <img
                src="/images/pornpavee-sripimsor.png"
                alt="ภาพถ่ายมืออาชีพของ พรปวีณ์ ศรีพิมพ์สอ ตัวแทนประกันสุขภาพ AIA อุดรธานี สวมเสื้อสูทดำและแว่นตา"
                className="w-full h-[min(72vh,680px)] object-contain object-bottom"
                width={640}
                height={800}
                decoding="async"
                fetchPriority="high"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 bg-gradient-to-t from-black/85 via-black/45 to-transparent">
                <p className="text-white font-headline font-bold text-xl sm:text-2xl mb-1">
                  พรปวีณ์ ศรีพิมพ์สอ (Pornpavee Sripimsor)
                </p>
                <p className="text-white/90 text-sm sm:text-base font-medium">
                  ที่ปรึกษาประกันสุขภาพ AIA · บริการในพื้นที่อุดรธานี
                </p>
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </header>

      <section className="py-24 md:py-32 bg-surface-container-low" aria-labelledby="trust-heading">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div id="trust">
              <h2 id="trust-heading" className="font-headline text-3xl sm:text-4xl font-extrabold mb-10 text-on-surface leading-tight">
                ความน่าเชื่อถือจากตัวแทนที่อยู่ใกล้คุณ
              </h2>
              <p className="text-lg text-on-surface-variant mb-12 leading-relaxed">
                ไม่ใช่แค่ขายกรมธรรม์ — เราเป็นที่ปรึกษาที่ช่วยคุณเข้าใจว่า{' '}
                <strong className="text-on-surface">ประกันสุขภาพ AIA คุ้มไหม</strong> กับชีวิตจริงในอุดรธานี
              </p>
              <div className="space-y-10">
                {[
                  {
                    icon: ShieldCheck,
                    title: 'ประสบการณ์ดูแลลูกค้าจริง',
                    desc: 'ดูแลเคสในอุดรธานีและใกล้เคียง เข้าใจขั้นตอนสมัครและการเคลม',
                  },
                  {
                    icon: MapPin,
                    title: 'ความเชี่ยวชาญในพื้นที่',
                    desc: 'รู้เรทค่ารักษาและโรงพยาบาลในพื้นที่ ช่วยเลือกแผนให้สอดคล้องการใช้ชีวิต',
                  },
                  {
                    icon: BrainCircuit,
                    title: 'คำแนะนำตรงไปตรงมา',
                    desc: 'เทียบแผนให้เห็นภาพ ทั้งเบี้ยและความคุ้มครอง ไม่ oversell',
                  },
                  {
                    icon: Headset,
                    title: 'ช่วยดูแลเรื่องเคลม',
                    desc: 'ประสานงานและให้คำแนะนำเมื่อต้องใช้กรมธรรม์จริง',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-6"
                  >
                    <div className="p-3 bg-trust/10 rounded-2xl">
                      <item.icon className="text-trust w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              id="pain"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-surface-container-highest p-10 sm:p-12 rounded-[2.5rem] border-l-[12px] border-primary shadow-editorial h-fit"
            >
              <h2 className="font-headline text-2xl sm:text-3xl font-bold mb-8">
                ความเสี่ยงที่หลายคนกังวลก่อนซื้อประกัน
              </h2>
              <ul className="space-y-5">
                {[
                  { icon: AlertTriangle, text: 'ค่ารักษาแพงขึ้นเรื่อย ๆ กระทบเงินออมและครอบครัว' },
                  { icon: HelpCircle, text: 'ไม่รู้ว่าแผนไหนในแผนประกันสุขภาพ AIA เหมาะกับตัวเอง' },
                  { icon: Gavel, text: 'กลัวซื้อแล้วเวลาเจ็บป่วยจะเคลมยากหรือไม่คุ้ม' },
                  { icon: UserX, text: 'กลัวไม่มีคนคอยดูแลหลังสมัคร — ติดต่อตัวแทนไม่ได้' },
                ].map((item) => (
                  <li
                    key={item.text}
                    className="flex items-start gap-4 py-4 border-b border-outline-variant/20 last:border-0"
                  >
                    <item.icon className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                    <span className="font-semibold text-base sm:text-lg leading-snug">{item.text}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-on-surface-variant leading-relaxed">
                เราช่วยคุณมองภาพชัดก่อนตัดสินใจ — เริ่มจาก{' '}
                <a href="#contact" className="text-primary font-bold underline-offset-2 hover:underline">
                  ปรึกษาฟรี
                </a>{' '}
                หรืออ่าน{' '}
                <a href="#faq" className="text-primary font-bold underline-offset-2 hover:underline">
                  คำถามที่พบบ่อย
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="solution" className="py-24 md:py-32 bg-trust-muted/40 border-y border-trust/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="font-headline text-3xl sm:text-5xl font-extrabold text-on-surface mb-6 leading-tight">
              ทางเลือกด้านสุขภาพ: แผนประกันสุขภาพ AIA
            </h2>
            <p className="text-lg sm:text-xl text-on-surface-variant leading-relaxed">
              AIA ออกแบบความคุ้มครองให้ยืดหยุ่น — ทั้งผู้ป่วยใน ผู้ป่วยนอก และโรคร้ายแรง — เพื่อลดความเสี่ยงค่ารักษาก้อนโต
              และให้คุณโฟกัสกับการหาย ไม่ใช่เรื่องเงิน
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'ความคุ้มครองยืดหยุ่น',
                body: 'เลือกระดับวงเงินและความคุ้มครองให้เข้ากับงบประมาณ ปรับแผนได้ตามช่วงชีวิต',
              },
              {
                title: 'มูลค่าระยะยาว',
                body: 'วางแผนสุขภาพระยะยาว ลดภาระครอบครัวเมื่อเกิดเหตุไม่คาดฝัน',
              },
              {
                title: 'เครือข่ายโรงพยาบาล',
                body: 'ใช้บริการเครือข่ายทั่วประเทศ รองรับการรักษาในหลายรูปแบบตามเงื่อนไขกรมธรรม์',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-trust/15 shadow-sm"
              >
                <HeartPulse className="w-10 h-10 text-trust mb-4" />
                <h3 className="font-headline font-bold text-xl mb-3">{card.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-on-surface-variant max-w-2xl mx-auto">
            อยากรู้ว่า <strong className="text-on-surface">ซื้อประกันสุขภาพ AIA</strong> ควรเริ่มจากแบบไหน — ดูรายละเอียด{' '}
            <a href="#plans" className="text-trust font-bold underline-offset-2 hover:underline">
              เปรียบเทียบแผน
            </a>{' '}
            หรือ{' '}
            <a href="#contact" className="text-trust font-bold underline-offset-2 hover:underline">
              ฝากเบอร์ให้เราโทรกลับ
            </a>
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-surface" id="benefits">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-headline text-3xl sm:text-5xl font-extrabold text-on-surface mb-6">
              จุดเด่นที่มักถูกใจเมื่อเลือกประกันสุขภาพ AIA
            </h2>
            <p className="text-lg sm:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              ครอบคลุมค่ารักษา ลดการสำรองจ่ายในเครือข่าย และปรับแผนได้ตามช่วงอายุ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-secondary text-white p-12 sm:p-16 rounded-[3rem] relative overflow-hidden group">
              <div className="z-10 relative">
                <h3 className="text-3xl sm:text-4xl font-headline font-bold mb-6 leading-tight">
                  วงเงินคุ้มครองสูง
                  <br />
                  เลือกรักษาในโรงพยาบาลที่ไว้ใจได้
                </h3>
                <p className="text-lg sm:text-xl opacity-95 mb-10 max-w-md leading-relaxed">
                  ออกแบบมาเพื่อลดความกังวลเรื่องค่าห้อง ค่าผ่าตัด และกรณีรุนแรง — ตามเงื่อนไขแต่ละแบบประกัน
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-2 bg-white/20 rounded-full text-sm font-bold backdrop-blur-md">
                    แผนหลากหลาย
                  </span>
                  <span className="px-5 py-2 bg-white/20 rounded-full text-sm font-bold backdrop-blur-md">
                    รักษาได้ทั่วไทย (ตามกรมธรรม์)
                  </span>
                </div>
              </div>
              <Stethoscope className="absolute -bottom-20 -right-20 w-[400px] h-[400px] opacity-10 group-hover:scale-110 transition-transform duration-700" />
            </div>

            <div className="bg-[#e0f2fe] p-10 rounded-[3rem] flex flex-col justify-between group">
              <Wallet className="w-12 h-12 text-[#0369a1] group-hover:-translate-y-2 transition-transform" />
              <div>
                <h3 className="text-2xl font-bold text-[#0c4a6e] mb-3">ไม่ต้องสำรองจ่าย (เครือข่าย)</h3>
                <p className="text-[#0c4a6e]/85 text-lg leading-relaxed">
                  ระบบ cashless ในโรงพยาบาลเครือข่ายช่วยลดภาระเงินสดก่อนรักษา
                </p>
              </div>
            </div>

            <div className="bg-primary-fixed p-10 rounded-[3rem] flex flex-col justify-between group">
              <Star className="w-12 h-12 text-primary group-hover:rotate-12 transition-transform" />
              <div>
                <h3 className="text-2xl font-bold text-on-primary-fixed mb-3">คุ้มครองโรคร้ายแรง</h3>
                <p className="text-on-primary-fixed-variant text-lg leading-relaxed">
                  ตัวเลือกสำหรับดูแลรายได้เมื่อเผชิญโรคร้ายแรง (ตามเงื่อนไขแผน)
                </p>
              </div>
            </div>

            <div className="md:col-span-2 bg-surface-container-highest p-12 sm:p-16 rounded-[3rem] border border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-md">
                <h3 className="text-2xl sm:text-3xl font-headline font-bold mb-5">ปรับแผนตามงบประมาณ</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  เราช่วยคุณหาจุดสมดุลระหว่างเบี้ยประกันกับความคุ้มครอง — เพื่อแผนที่อยู่ได้ระยะยาว
                </p>
              </div>
              <CalendarDays className="w-28 h-28 sm:w-32 sm:h-32 text-primary opacity-20 shrink-0" />
            </div>
          </div>
        </div>
      </section>

      <section id="local" className="py-24 md:py-32 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-[3rem] overflow-hidden shadow-editorial h-[420px] sm:h-[520px] border-8 border-white">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC87bltywu2zGHHq1-WFEVzmlnuu3uihTK-a645U1uGzcdlNUwYCtbUh1mgbHciXQxVkwYHpQg6nU0PoBd2QIjrfZpMIuxvMqG16ZIbz8lczBbxufioophMacXpdKv5MLIQXOrwXc9dwUqFaUpgIYFtvhSpNcWNpqWHwdq5CII_OsVVZelLCH5ttz0qfi9DE1amv7QKpiRL2zLxm22ire-rmnAPSsVBZQWrH0fDM_XxbXRv4q1xfL2jabfVAyvTMg2CyArVeFGx8Kc7"
                alt="จุดเด่นทางวัฒนธรรมและแลนด์มาร์กจังหวัดอุดรธานี"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 sm:-right-10 bg-white p-6 sm:p-8 rounded-3xl shadow-editorial max-w-xs hidden md:block">
              <p className="font-headline font-bold text-trust text-lg sm:text-xl mb-2">ดูแลคนอุดรธานี</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                ตัวแทน AIA อุดรธานี พร้อมนัดพบและติดตามงานในพื้นที่ — ไม่ทิ้งให้คุณรอคอลเซ็นเตอร์อย่างเดียว
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block px-5 py-1.5 bg-trust/10 text-trust font-bold rounded-full text-sm mb-6">
              ตัวแทน AIA อุดรธานี · AIA อุดรธานี ติดต่อ
            </span>
            <h2 className="font-headline text-3xl sm:text-5xl font-extrabold mb-8 leading-tight">
              ตัวแทน AIA ใกล้ฉัน — อุดรธานี
              <br />
              <span className="text-primary">สมัครประกันสุขภาพ AIA กับคนที่ติดตามได้จริง</span>
            </h2>
            <p className="text-lg sm:text-xl text-on-surface-variant mb-10 leading-relaxed">
              เมื่อคุณค้นหา &quot;ตัวแทน AIA ใกล้ฉัน&quot; หรือ &quot;ตัวแทน AIA อุดรธานี&quot; สิ่งที่ได้มากกว่ากรมธรรม์คือที่ปรึกษาที่ช่วยอธิบายข้อยกเว้น เอกสาร
              การซื้อประกัน AIA ออนไลน์ และการเคลมแบบเข้าใจง่าย
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'นัดพบในพื้นที่', desc: 'คุยแบบเห็นหน้าในอุดรธานีหรือช่องทางออนไลน์ตามสะดวก' },
                { title: 'แผนตรงไลฟ์สไตล์', desc: 'ออกแบบให้สอดคล้องรายได้และการใช้บริการรพ.ในพื้นที่' },
                { title: 'ช่วยเรื่องเคลม', desc: 'แนะนำขั้นตอนและประสานงานเมื่อเกิดเหตุ' },
                { title: 'ติดต่อตรง', desc: 'สื่อสารกับที่ปรึกษาโดยตรง ลดความรอนาน' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-7 bg-white rounded-3xl shadow-sm border border-outline-variant/10 hover:shadow-editorial transition-shadow"
                >
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex mt-10 px-8 py-4 rounded-2xl bg-trust text-white font-bold hover:opacity-95 transition-opacity"
            >
              ขอติดต่อกลับจากอุดรธานี
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-surface" id="plans">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-headline text-3xl sm:text-5xl font-extrabold text-on-surface mb-6">
              แนวทางเลือกแผนประกันสุขภาพ AIA
            </h2>
            <p className="text-lg sm:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              โฟกัสแผนที่ลูกค้ามักถามถึง เช่น <strong className="text-on-surface">AIA Health Happy</strong> และ{' '}
              <strong className="text-on-surface">ประกันเหมาจ่าย AIA CI Plus</strong> — เบี้ยและความคุ้มครองขึ้นกับอายุและแบบประกันจริง
              ควรยืนยันกับตัวแทนก่อนสมัคร
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-stretch">
            <article className="bg-surface-container-low p-10 sm:p-12 rounded-[3.5rem] border border-outline-variant/20 hover:border-primary/40 transition-all flex flex-col justify-between group">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">แผนมาตรฐาน (IPD เน้นผู้ป่วยใน)</h3>
                <p className="text-on-surface-variant text-base sm:text-lg mb-8 leading-relaxed">
                  เหมาะเริ่มต้น เน้นค่าห้อง ผ่าตัด และการรักษาในโรงพยาบาล
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3 text-base sm:text-lg">
                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                    ครอบคลุมค่าห้องและค่าอาตามแบบประกัน
                  </li>
                  <li className="flex items-start gap-3 text-base sm:text-lg">
                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                    โฟกัสการรักษาแบบผู้ป่วยใน
                  </li>
                  <li className="flex items-start gap-3 text-base sm:text-lg">
                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                    เบี้ยเริ่มต้นปรับตามอายุและความคุ้มครอง
                  </li>
                </ul>
              </div>
              <a
                href="#contact"
                className="block text-center w-full py-5 rounded-2xl bg-surface-container-highest font-bold text-on-surface group-hover:bg-primary group-hover:text-white transition-all text-lg"
              >
                สอบถามแผนนี้
              </a>
            </article>

            <article className="bg-white p-10 sm:p-12 rounded-[3.5rem] border-4 border-primary shadow-2xl flex flex-col justify-between transform lg:scale-[1.03] z-10 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-full font-bold text-xs sm:text-sm tracking-wide">
                นิยมสำหรับครอบคลุมสูง
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">AIA Health Happy</h3>
                <p className="text-on-surface-variant text-base sm:text-lg mb-8 leading-relaxed">
                  แผนเหมาจ่ายค่ารักษายอดนิยม — วงเงินรวมต่อปีตามแบบที่เลือก ปรับกับ OPD ได้บางแบบ (ตามเงื่อนไขผลิตภัณฑ์)
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3 text-base sm:text-lg font-semibold">
                    <Star className="text-primary w-6 h-6 shrink-0 mt-0.5 fill-primary" />
                    วงเงินรวมสูงต่อปี (ตามแบบประกันที่เลือก)
                  </li>
                  <li className="flex items-start gap-3 text-base sm:text-lg">
                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                    ยืดหยุ่นเลือกความคุ้มครอง OPD
                  </li>
                  <li className="flex items-start gap-3 text-base sm:text-lg">
                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                    ตัวเลือกคุ้มครองโรคร้ายแรงเสริม
                  </li>
                </ul>
              </div>
              <a
                href="#contact"
                className="block text-center w-full py-5 rounded-2xl bg-primary font-bold text-white shadow-lg shadow-primary/30 text-lg hover:opacity-90 transition-all"
              >
                เช็คเบี้ยและรายละเอียด
              </a>
            </article>

            <article className="bg-surface-container-low p-10 sm:p-12 rounded-[3.5rem] border border-outline-variant/20 hover:border-primary/40 transition-all flex flex-col justify-between group">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">พรีเมียม · ประกันเหมาจ่าย AIA CI Plus</h3>
                <p className="text-on-surface-variant text-base sm:text-lg mb-8 leading-relaxed">
                  เหมาะผู้ที่ต้องการวงเงินสูง เน้นคุ้มครองโรคร้ายแรงแบบเหมาจ่ายตามเงื่อนไขผลิตภัณฑ์ และบริการเสริมอื่น ๆ ที่มีในตลาด
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3 text-base sm:text-lg">
                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                    โฟกัสแนวคิดประกันเหมาจ่าย AIA CI Plus ตามแบบที่จำหน่าย
                  </li>
                  <li className="flex items-start gap-3 text-base sm:text-lg">
                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                    วงเงินสูงตามแผนที่เลือก
                  </li>
                  <li className="flex items-start gap-3 text-base sm:text-lg">
                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                    ตัวเลือกการรักษาในต่างประเทศ (บางแบบ)
                  </li>
                  <li className="flex items-start gap-3 text-base sm:text-lg">
                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                    บริการผู้ช่วยสุขภาพ (บางแผน)
                  </li>
                </ul>
              </div>
              <a
                href="#contact"
                className="block text-center w-full py-5 rounded-2xl bg-surface-container-highest font-bold text-on-surface group-hover:bg-primary group-hover:text-white transition-all text-lg"
              >
                ปรึกษาแผนพรีเมียม
              </a>
            </article>
          </div>
        </div>
      </section>

      <section
        id="key-offers"
        className="py-20 md:py-28 bg-gradient-to-b from-trust-muted/50 to-surface scroll-mt-24 border-y border-trust/10"
        aria-labelledby="key-offers-heading"
      >
        <div className="max-w-7xl mx-auto px-8">
          <h2
            id="key-offers-heading"
            className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-on-surface mb-4 leading-tight"
          >
            คีย์เวิร์ดที่ลูกค้าค้นหา — พร้อมช่วยคุณตัดสินใจซื้อ
          </h2>
          <p className="text-center text-on-surface-variant text-lg max-w-3xl mx-auto mb-14 leading-relaxed">
            รวมแผนและบริการที่มักนำไปสู่การปิดการขายจริง: จากแบบเหมาจ่ายยอดนิยม ไปจนถึงการซื้อออนไลน์และสิทธิลดหย่อนภาษี
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                k: 'AIA Health Happy',
                d: 'แผนเหมาจ่ายค่ารักษาที่ถูกค้นหาบ่อย — เทียบวงเงินและเบี้ยกับที่ปรึกษา',
              },
              {
                k: 'ประกันเหมาจ่าย AIA CI Plus',
                d: 'เน้นคุ้มครองโรคร้ายแรงแนวเหมาจ่าย ตามเงื่อนไขผลิตภัณฑ์ที่จำหน่าย',
              },
              {
                k: 'ซื้อประกัน AIA ออนไลน์',
                d: 'ประสานเอกสารและขั้นตอนผ่านช่องทางออนไลน์ มีตัวแทนช่วยตรวจความถูกต้องก่อนยืนยัน',
              },
              {
                k: 'ตัวแทน AIA ใกล้ฉัน',
                d: 'บริการในอุดรธานีและใกล้เคียง นัดพบหรือคุยออนไลน์ได้ตามสะดวก',
              },
              {
                k: 'ลดหย่อนภาษี ประกันชีวิต AIA',
                d: 'ช่วยอธิบายกรอบสิทธิ์เบื้องต้น โปรดยืนยันรายละเอียดกับผู้เชี่ยวชาญด้านภาษีและกรมธรรม์',
              },
            ].map((item) => (
              <a
                key={item.k}
                href="#contact"
                className="group block p-8 rounded-3xl bg-white border border-trust/15 shadow-sm hover:shadow-editorial hover:border-primary/25 transition-all"
              >
                <h3 className="font-headline font-bold text-xl text-primary mb-3 group-hover:underline underline-offset-4">
                  {item.k}
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">{item.d}</p>
                <span className="inline-block mt-5 text-sm font-bold text-trust">ขอใบเสนอราคา →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 md:py-24 bg-surface-container-low border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4 flex justify-center">
            <div className="rounded-3xl overflow-hidden border-4 border-white shadow-editorial bg-white w-full max-w-xs aspect-[3/4]">
              <img
                src="/images/pornpavee-sripimsor.png"
                alt="พรปวีณ์ ศรีพิมพ์สอ ที่ปรึกษาประกันสุขภาพ AIA อุดรธานี"
                className="w-full h-full object-contain object-bottom"
                width={400}
                height={520}
                loading="lazy"
              />
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-headline text-3xl sm:text-4xl font-extrabold mb-6">เกี่ยวกับที่ปรึกษา</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-4">
              <strong className="text-on-surface">พรปวีณ์ ศรีพิมพ์สอ (Pornpavee Sripimsor)</strong> เป็นที่ปรึกษาด้านแผนประกันสุขภาพ AIA
              ให้บริการลูกค้าในจังหวัดอุดรธานีและพื้นที่ใกล้เคียง โดยเน้นการอธิบายข้อมูลให้เข้าใจง่าย เปรียบเทียบแผนอย่างตรงไปตรงมา
              และอยู่เคียงข้างเมื่อคุณต้องการความช่วยเหลือด้านการเคลม
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
              หากคุณกำลังเปรียบเทียบ <strong className="text-on-surface">AIA Health Happy</strong> กับ{' '}
              <strong className="text-on-surface">ประกันเหมาจ่าย AIA CI Plus</strong> หรือสนใจ{' '}
              <strong className="text-on-surface">ซื้อประกัน AIA ออนไลน์</strong> และ{' '}
              <strong className="text-on-surface">ลดหย่อนภาษี ประกันชีวิต AIA</strong> เราช่วยคุณมองเป็นขั้นตอนและเลือกแผนที่เหมาะกับงบประมาณ
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 font-bold text-primary hover:underline underline-offset-4">
              ติดต่อขอคำปรึกษา
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-surface-container-low" id="faq">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-headline text-3xl sm:text-5xl font-extrabold text-center mb-6">
            คำถามที่พบบ่อย (FAQ)
          </h2>
          <p className="text-center text-on-surface-variant mb-14 max-w-2xl mx-auto leading-relaxed">
            รวมคำถามยอดนิยมสำหรับผู้ที่กำลังหาข้อมูล{' '}
            <strong className="text-on-surface">สมัครประกันสุขภาพ AIA</strong> และต้องการตัดสินใจอย่างมั่นใจ
          </p>
          <div className="space-y-5">
            <FAQItem
              question="ประกันสุขภาพ AIA ดีไหม?"
              answer="โดยภาพรวม AIA มีความมั่นคง เครือข่ายโรงพยาบาลกว้าง และแผนหลากหลาย รวมถึงแบบอย่าง AIA Health Happy สำหรับเหมาจ่ายค่ารักษา — ความคุ้มค่าขึ้นกับแบบประกันและสุขภาพของผู้เอาประกัน ควรเทียบกับที่ปรึกษา"
            />
            <FAQItem
              question="ราคาเริ่มต้นประมาณเท่าไหร่?"
              answer="เบี้ยประกันสุขภาพ AIA ขึ้นกับอายุ เพศ อาชีพ และความคุ้มครองที่เลือก โดยทั่วไปสามารถออกแบบให้เริ่มต้นในระดับที่เข้าถึงได้ แล้วค่อยปรับเพิ่มเมื่อพร้อม — ขอใบเสนอราคาจากตัวแทนจะได้ตัวเลขที่ชัดเจนที่สุด"
            />
            <FAQItem
              question="เคลมยากไหม?"
              answer="หากเข้าเงื่อนไขกรมธรรม์และแจ้งข้อมูลครบ โดยเฉพาะการใช้โรงพยาบาลเครือข่ายมักช่วยลดขั้นตอนเอกสาร ตัวแทน AIA อุดรธานีช่วยแนะนำการเตรียมเอกสารและประสานงานเบื้องต้นได้"
            />
            <FAQItem
              question="เหมาะสำหรับใคร?"
              answer="เหมาะกับผู้ที่ต้องการป้องกันค่ารักษาก้อนโต ทั้งพนักงาน ผู้ประกอบการ และครอบครัวที่ต้องการสวัสดิการสุขภาพเสริม รวมถึงผู้ที่ต้องการวางแผนก่อนเกษียณ"
            />
            <FAQItem
              question="สมัครประกันสุขภาพ AIA ต้องทำอย่างไร?"
              answer="ขั้นตอนหลักคือปรึกษาตัวแทนเพื่อเลือกแผน กรอกใบคำขอเอาประกัน ชำระเบี้ย และอาจมีการตรวจสุขภาพหรือให้ข้อมูลประวัติตามเกณฑ์บริษัท หลังอนุมัติจึงได้รับความคุ้มครองตามวันเริ่มสัญญา"
            />
            <FAQItem
              question="ซื้อประกัน AIA ออนไลน์ทำอย่างไรให้ถูกต้อง?"
              answer="ควรซื้อผ่านตัวแทน AIA ที่ตรวจสอบได้ กรอกข้อมูลจริง ชำระเบี้ยตามช่องทางที่บริษัทกำหนด และเก็บเอกสารกรมธรรม์ ตัวแทน AIA ใกล้ฉันในอุดรธานีช่วยประสานออนไลน์ อธิบายเงื่อนไข และตรวจเอกสารก่อนยืนยันคำสั่งซื้อ"
            />
            <FAQItem
              question="ลดหย่อนภาษี ประกันชีวิต AIA ใช้ได้กับแบบไหน?"
              answer="สิทธิลดหย่อนภาษีขึ้นกับประเภทกรมธรรม์และเกณฑ์กฎหมายในแต่ละปี ควรปรึกษาตัวแทนเพื่อดูว่าแผนที่สนใจเข้าเงื่อนไขหรือไม่ และยืนยันรายละเอียดกับผู้เชี่ยวชาญด้านภาษีอีกครั้ง"
            />
            <FAQItem
              question="AIA Health Happy กับประกันเหมาจ่าย AIA CI Plus ต่างกันอย่างไร?"
              answer="AIA Health Happy เน้นความคุ้มครองค่ารักษาพยาบาลแบบเหมาจ่ายตามวงเงินแผน ส่วนประกันเหมาจ่าย AIA CI Plus เน้นคุ้มครองโรคร้ายแรงตามเงื่อนไขผลิตภัณฑ์ หลายคนใช้คู่กันหรือเลือกอย่างใดอย่างหนึ่งตามเป้าหมาย — ควรให้ที่ปรึกษาช่วยสรุปให้ตรงงบและความเสี่ยงของคุณ"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 md:py-32 bg-surface scroll-mt-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-headline text-3xl sm:text-5xl font-extrabold text-on-surface mb-4">
              รับคำปรึกษาฟรี — ไม่มีข้อผูกมัด
            </h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              ระบุความสนใจ เช่น <strong className="text-on-surface">AIA Health Happy</strong> หรือ{' '}
              <strong className="text-on-surface">ประกันเหมาจ่าย AIA CI Plus</strong> — เราจะติดต่อกลับเพื่อช่วย{' '}
              <strong className="text-on-surface">ซื้อประกัน AIA ออนไลน์</strong> หรือนัดพบในฐานะ{' '}
              <strong className="text-on-surface">ตัวแทน AIA ใกล้ฉัน</strong> ในอุดรธานี รวมถึงคำแนะนำเบื้องต้นเรื่อง{' '}
              <strong className="text-on-surface">ลดหย่อนภาษี ประกันชีวิต AIA</strong>
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      <section className="py-24 md:py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white p-12 sm:p-20 rounded-[3rem] md:rounded-[4rem] relative overflow-hidden shadow-editorial text-center"
          >
            <div className="relative z-10">
              <h2 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
                เริ่มวางแผนสุขภาพวันนี้
                <br />
                อย่ารอจนกว่าจะเจ็บป่วย
              </h2>
              <p className="text-lg sm:text-2xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed">
                ให้เราช่วยคุณเลือกแผนประกันสุขภาพ AIA ที่เหมาะกับชีวิตจริงในอุดรธานี
              </p>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <a
                  href="#contact"
                  className="px-10 py-5 sm:px-12 sm:py-6 bg-white text-primary rounded-2xl font-bold text-lg sm:text-xl hover:scale-[1.02] transition-transform flex items-center gap-3 shadow-xl"
                >
                  <MessageCircle className="w-6 h-6 shrink-0" />
                  ปรึกษาฟรี
                </a>
                <a
                  href="#contact"
                  className="px-10 py-5 sm:px-12 sm:py-6 bg-secondary-container text-on-secondary-container rounded-2xl font-bold text-lg sm:text-xl hover:scale-[1.02] transition-transform flex items-center gap-3 shadow-xl"
                >
                  <MessageCircle className="w-6 h-6 shrink-0" />
                  Line ID: @aiaudon
                </a>
                <a
                  href="tel:0000000000"
                  className="px-10 py-5 sm:px-12 sm:py-6 bg-primary-container text-white border-2 border-white/30 rounded-2xl font-bold text-lg sm:text-xl hover:scale-[1.02] transition-transform flex items-center gap-3 shadow-xl"
                >
                  <Phone className="w-6 h-6 shrink-0" />
                  โทร: 0xx-xxx-xxxx
                </a>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-[min(100vw,500px)] h-[500px] bg-white/10 rounded-full -mr-40 -mt-40 blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[min(100vw,400px)] h-[400px] bg-black/10 rounded-full -ml-40 -mb-40 blur-[80px]" />
          </motion.div>
        </div>
      </section>

      <footer className="bg-surface-container py-16 md:py-24 border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-14">
            <div className="max-w-lg">
              <div className="text-2xl sm:text-3xl font-black text-primary font-headline tracking-tight mb-5">
                AIA ประกันสุขภาพ · อุดรธานี
              </div>
              <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed mb-6">
                ที่ปรึกษาประกันสุขภาพ AIA โดย พรปวีณ์ ศรีพิมพ์สอ บริการคำปรึกษา การสมัคร และการดูแลหลังขายในพื้นที่อุดรธานี
                เน้นคำอธิบายที่เข้าใจง่ายและการเลือกแผนที่คุ้มค่า
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                คีย์เวิร์ดหลัก: AIA Health Happy · ประกันเหมาจ่าย AIA CI Plus · ซื้อประกัน AIA ออนไลน์ · ตัวแทน AIA ใกล้ฉัน ·
                ลดหย่อนภาษี ประกันชีวิต AIA — พร้อม ประกันสุขภาพ AIA ราคา · ตัวแทน AIA อุดรธานี · สมัครประกันสุขภาพ AIA
              </p>
            </div>

            <nav className="flex flex-col gap-4 font-headline font-bold text-sm" aria-label="ลิงก์หน้าเว็บ">
              <p className="text-on-surface-variant font-normal text-xs uppercase tracking-wider mb-1">ลิงก์ภายใน</p>
              <a href="#solution" className="hover:text-primary transition-colors">
                ทำไม AIA
              </a>
              <a href="#benefits" className="hover:text-primary transition-colors">
                จุดเด่นประกันสุขภาพ
              </a>
              <a href="#local" className="hover:text-primary transition-colors">
                ตัวแทน AIA อุดรธานี
              </a>
              <a href="#plans" className="hover:text-primary transition-colors">
                แผนประกัน
              </a>
              <a href="#key-offers" className="hover:text-primary transition-colors">
                แผนยอดนิยม (คีย์เวิร์ด)
              </a>
              <a href="#faq" className="hover:text-primary transition-colors">
                FAQ
              </a>
              <a href="#about" className="hover:text-primary transition-colors">
                เกี่ยวกับที่ปรึกษา
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                ฟอร์มติดต่อ
              </a>
            </nav>
          </div>
          <p className="text-on-surface-variant/70 text-sm mt-12 pt-8 border-t border-outline-variant/20">
            © {new Date().getFullYear()} ข้อมูลเพื่อการให้คำปรึกษา — เงื่อนไขความคุ้มครองเป็นไปตามกรมธรรม์และหลักเกณฑ์บริษัท AIA
          </p>
        </div>
      </footer>
    </div>
  );
}
