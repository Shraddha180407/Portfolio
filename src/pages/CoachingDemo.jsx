import { useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  BookOpen,
  Award,
  Users,
  Calendar,
  Send,
  Star,
  ArrowLeft,
  ChevronDown,
  HelpCircle,
} from "lucide-react";
import { profile } from "../data/portfolio";

export default function CoachingDemo() {
  const [selectedCourse, setSelectedCourse] = useState("All Programs");
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lead, setLead] = useState({ name: "", phone: "", course: "Class 9 & 10 Foundation" });

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const courses = [
    {
      category: "foundation",
      title: "Class 9 & 10 Foundation",
      target: "CBSE & ICSE Boards",
      duration: "10-Month Academic Program",
      fee: "₹3,500 / month",
      description: "Build deep conceptual clarity in Mathematics & Science with structured weekly assessments and doubt sessions.",
      features: [
        "Complete NCERT & exemplar coverage",
        "Weekly chapter tests with graded feedback",
        "1:15 mentor-to-student batch ratio",
        "Bi-weekly parent performance reports",
      ],
      popular: false,
    },
    {
      category: "jee-neet",
      title: "Class 11 & 12 Board + JEE/NEET",
      target: "PCM & PCB Competitive Prep",
      duration: "Full 2-Year Program",
      fee: "₹5,200 / month",
      description: "Rigorous concept delivery and intensive problem solving designed for board excellence and competitive entrance exams.",
      features: [
        "In-depth physics, chemistry & math/bio modules",
        "All-India test series with rank analytics",
        "Dedicated Saturday 1-on-1 doubt clearing",
        "Curated formula sheets & previous 10-year question banks",
      ],
      popular: true,
    },
    {
      category: "crash",
      title: "Fast-Track Board Crash Course",
      target: "Class 10 & 12 Final Sprint",
      duration: "60-Day Intensive Revision",
      fee: "₹7,999 (One-Time)",
      description: "High-yield topic revision, answer-writing presentation masterclasses, and time management drills.",
      features: [
        "Rapid concept recap of key chapters",
        "10 full-length simulated mock board exams",
        "Examiner answer-sheet evaluation techniques",
        "Formula & reaction quick-reference guides",
      ],
      popular: false,
    },
  ];

  const filteredCourses = courses.filter((c) => {
    if (selectedCourse === "All Programs") return true;
    if (selectedCourse === "Foundation (9-10)") return c.category === "foundation";
    if (selectedCourse === "JEE / NEET (11-12)") return c.category === "jee-neet";
    if (selectedCourse === "Crash Course") return c.category === "crash";
    return true;
  });

  const faqs = [
    {
      q: "Can students attend a demo trial session before enrolling?",
      a: "Yes! Every prospective student can attend 2 complimentary demo trial sessions in their prospective batch to experience the teaching methodology, faculty interaction, and doubt-solving style firsthand before paying fees.",
    },
    {
      q: "What is the maximum batch size at Apex Academy?",
      a: "Apex strictly caps all classroom batches at 15 students. This ensures individual attention, regular homework checks, and active teacher-student engagement that auditorium-style institutes cannot offer.",
    },
    {
      q: "Are flexible fee installment plans available?",
      a: "Yes, tuition fees can be paid in monthly or quarterly installments without any additional surcharges. Transparent fee schedules and instant digital payment receipts are issued directly to parents.",
    },
    {
      q: "How are missed classes and chapter doubts resolved?",
      a: "Every Saturday is reserved strictly for 1-on-1 personalized doubt clearing. If a student misses a lecture due to school exams or illness, faculty summary notes and recorded session recaps are provided immediately.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-800 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Concept Demo Top Sticky Banner */}
      <div className="bg-[#450920] text-rose-100 text-[0.82rem] py-2.5 px-4 sm:px-6 sticky top-0 z-[120] flex items-center justify-between flex-wrap gap-2 shadow-md">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[0.72rem] bg-rose-900/80 text-rose-200 border border-rose-700/60 font-mono uppercase tracking-wider">
            Concept Demo
          </span>
          <span className="font-light">
            Sample client website for coaching institutes & academies. Fictional sample data.
          </span>
        </div>
        <div className="flex items-center gap-3 text-[0.82rem]">
          <Link
            to="/#work"
            className="inline-flex items-center gap-1 text-white hover:text-rose-200 font-medium underline underline-offset-2 transition-colors"
          >
            <ArrowLeft size={13} /> Back to Portfolio
          </Link>
          <a
            href={profile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded bg-white text-[#450920] font-semibold text-[0.78rem] hover:bg-rose-50 transition-colors"
          >
            Inquire for Your Website →
          </a>
        </div>
      </div>

      {/* Academy Header */}
      <header className="bg-white border-b border-slate-200 sticky top-10 z-[100] shadow-xs">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm">
              <GraduationCap size={22} />
            </div>
            <div>
              <div className="font-serif text-[1.25rem] font-bold text-slate-900 tracking-tight leading-none">
                Apex Academy
              </div>
              <div className="text-[0.72rem] font-mono text-slate-500 uppercase tracking-wider mt-0.5">
                Institute for Academic Excellence
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-[0.9rem] font-medium text-slate-600">
            <a href="#courses" className="hover:text-blue-600 transition-colors">Courses</a>
            <a href="#methodology" className="hover:text-blue-600 transition-colors">Methodology</a>
            <a href="#reviews" className="hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
            <a href="#contact-demo" className="hover:text-blue-600 transition-colors">Center Location</a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:+919999999999"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-200 text-slate-700 text-[0.84rem] font-medium hover:bg-slate-50 transition-colors"
            >
              <Phone size={14} className="text-blue-600" />
              <span>Call Center</span>
            </a>
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 text-white text-[0.85rem] font-semibold hover:bg-emerald-700 transition-colors shadow-xs"
            >
              <MessageCircle size={15} />
              <span>WhatsApp Admission</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-5 sm:px-8 bg-gradient-to-b from-blue-50/50 via-white to-white overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-800 text-[0.8rem] font-medium mb-6">
            <Award size={14} className="text-blue-600" />
            Admissions Open for 2026–27 Academic Session
          </div>

          <h1 className="font-serif text-[clamp(2.4rem,5.5vw,4.2rem)] font-bold text-slate-900 leading-[1.12] tracking-tight max-w-4xl mx-auto">
            Build strong concepts.<br className="hidden sm:inline" />
            Excel in boards and competitive entrance exams.
          </h1>

          <p className="mt-6 text-[1.05rem] sm:text-[1.2rem] text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Personalized mentoring for Grades 9–12 and JEE/NEET Foundation with experienced Delhi faculty, regular chapter diagnostics, and small batch sizes.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#courses"
              className="px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-[0.95rem] hover:bg-blue-700 shadow-sm transition-all duration-200 active:scale-[0.98]"
            >
              Explore Programs & Fees ↓
            </a>
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold text-[0.95rem] hover:bg-slate-50 shadow-xs transition-all duration-200 flex items-center gap-2 active:scale-[0.98]"
            >
              <MessageCircle size={17} className="text-emerald-600" />
              Book a Free Demo Class
            </a>
          </div>

          {/* Quick Metrics Bar (Sample Data) */}
          <div className="mt-14 pt-10 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">1:15</div>
              <div className="text-[0.8rem] text-slate-500 font-medium uppercase mt-0.5">Batch Ratio</div>
            </div>
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">8+ Yrs</div>
              <div className="text-[0.8rem] text-slate-500 font-medium uppercase mt-0.5">Faculty Experience</div>
            </div>
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">Weekly</div>
              <div className="text-[0.8rem] text-slate-500 font-medium uppercase mt-0.5">1-on-1 Doubt Sessions</div>
            </div>
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">100%</div>
              <div className="text-[0.8rem] text-slate-500 font-medium uppercase mt-0.5">Syllabus Completion</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses & Fee Structure */}
      <section id="courses" className="py-20 px-5 sm:px-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-[0.76rem] font-mono font-semibold text-blue-600 uppercase tracking-wider mb-2">
              Curriculum & Programs
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              Structured Batches for Every Aspirant
            </h2>
            <p className="mt-3 text-slate-600 text-[0.98rem]">
              Transparent fee schedule, rigorous syllabus schedules, and personal academic tracking.
            </p>

            {/* Interactive Course Category Selector */}
            <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
              {["All Programs", "Foundation (9-10)", "JEE / NEET (11-12)", "Crash Course"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedCourse(tab)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 active:scale-[0.97] ${
                    selectedCourse === tab
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-blue-400 hover:text-blue-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredCourses.map((c) => (
              <div
                key={c.title}
                className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                  c.popular
                    ? "bg-white border-2 border-blue-600 shadow-lg relative -translate-y-1"
                    : "bg-white border border-slate-200 shadow-xs hover:border-slate-300"
                }`}
              >
                {c.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-blue-600 text-white text-[0.72rem] font-bold uppercase tracking-wider shadow-xs">
                    Most Enrolled
                  </div>
                )}

                <div>
                  <div className="text-[0.78rem] font-mono text-slate-500 uppercase tracking-wider mb-1">
                    {c.target}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    {c.title}
                  </h3>
                  <p className="text-[0.88rem] text-slate-600 mb-5 leading-relaxed">
                    {c.description}
                  </p>

                  <div className="py-4 border-y border-slate-100 mb-6">
                    <div className="text-[0.75rem] font-mono text-slate-500 uppercase">Batch Fee</div>
                    <div className="font-serif text-2xl font-bold text-slate-900 mt-0.5">
                      {c.fee}
                    </div>
                    <div className="text-[0.78rem] text-slate-500 mt-0.5">{c.duration}</div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="text-[0.76rem] font-mono text-slate-500 uppercase tracking-wider">
                      Key Highlights:
                    </div>
                    {c.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5 text-[0.88rem] text-slate-700">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`${profile.whatsappUrl}&text=Hi,%20I'm%20inquiring%20about%20the%20${encodeURIComponent(c.title)}%20batch%20at%20Apex%20Academy`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-semibold text-[0.9rem] flex items-center justify-center gap-2 transition-all ${
                    c.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-xs"
                      : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                  }`}
                >
                  <MessageCircle size={16} />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-20 px-5 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-[0.76rem] font-mono font-semibold text-blue-600 uppercase tracking-wider mb-2">
              Teaching Methodology
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              Why Parents & Students Choose Apex
            </h2>
            <p className="mt-3 text-slate-600 text-[0.98rem]">
              Consistent focus on fundamentals, individual accountability, and structured feedback.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-7 rounded-2xl bg-[#FDFCFB] border border-slate-200 flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Users size={22} />
              </div>
              <div>
                <h3 className="font-serif text-[1.18rem] font-bold text-slate-900 mb-1.5">
                  Capped 15-Student Batches
                </h3>
                <p className="text-[0.88rem] text-slate-600 leading-relaxed">
                  No auditorium classes. Our small batch limit ensures teachers track every student's daily understanding and note-taking.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#FDFCFB] border border-slate-200 flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <BookOpen size={22} />
              </div>
              <div>
                <h3 className="font-serif text-[1.18rem] font-bold text-slate-900 mb-1.5">
                  1-on-1 Saturday Doubt Clearing
                </h3>
                <p className="text-[0.88rem] text-slate-600 leading-relaxed">
                  Every Saturday is dedicated strictly to individual doubt resolution so no misconception carries over into new chapters.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#FDFCFB] border border-slate-200 flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Calendar size={22} />
              </div>
              <div>
                <h3 className="font-serif text-[1.18rem] font-bold text-slate-900 mb-1.5">
                  Fortnightly Mock Board Tests
                </h3>
                <p className="text-[0.88rem] text-slate-600 leading-relaxed">
                  Exact pattern tests timed and graded with CBSE marking scheme rubrics to train time management and presentation.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#FDFCFB] border border-slate-200 flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Award size={22} />
              </div>
              <div>
                <h3 className="font-serif text-[1.18rem] font-bold text-slate-900 mb-1.5">
                  Direct Parent Progress Reports
                </h3>
                <p className="text-[0.88rem] text-slate-600 leading-relaxed">
                  Monthly parent meetings and digital scorecards sent via WhatsApp tracking attendance, homework submission, and test trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (Clearly Labelled Sample Data) */}
      <section id="reviews" className="py-20 px-5 sm:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[0.76rem] font-mono font-semibold text-blue-600 uppercase tracking-wider mb-2">
              Sample Feedback Component
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              Student & Parent Testimonials
            </h2>
            <p className="mt-2 text-slate-500 text-[0.85rem] italic">
              *(Illustrative sample reviews showcasing social proof layout for coaching clients)*
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[0.9rem] text-slate-700 leading-relaxed italic mb-4">
                  "The small batch size made all the difference for Class 10 science. Teachers cleared every doubt without rushing."
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <div className="font-semibold text-slate-900 text-[0.92rem]">Aarav Sharma</div>
                <div className="text-[0.76rem] text-slate-500">Class 10 CBSE Student (Sample)</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[0.9rem] text-slate-700 leading-relaxed italic mb-4">
                  "Regular WhatsApp test updates kept us in the loop. The Saturday doubt sessions helped my daughter gain real confidence in mathematics."
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <div className="font-semibold text-slate-900 text-[0.92rem]">Mrs. Sunita Verma</div>
                <div className="text-[0.76rem] text-slate-500">Parent of Class 12 Student (Sample)</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[0.9rem] text-slate-700 leading-relaxed italic mb-4">
                  "The formula notes and past 10-year question solving workshops saved months of self-study before my board exams."
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <div className="font-semibold text-slate-900 text-[0.92rem]">Rohan Gupta</div>
                <div className="text-[0.76rem] text-slate-500">JEE Foundation Aspirant (Sample)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (Interactive Accordion) */}
      <section id="faq" className="py-20 px-5 sm:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[0.76rem] font-mono font-semibold text-blue-600 uppercase tracking-wider mb-2">
              Common Admissions Queries
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-slate-600 text-[0.98rem]">
              Clear answers regarding demo trial classes, batch schedules, fees, and doubt clearing.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden transition-all duration-200 shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                  >
                    <span className="font-serif text-[1.08rem] sm:text-[1.18rem] font-medium text-slate-900">
                      {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-blue-50 text-blue-600 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown size={16} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-[0.94rem] text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick WhatsApp Admissions Banner */}
          <div className="mt-10 p-6 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                <HelpCircle size={20} />
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-sm">Have a specific question not listed here?</div>
                <div className="text-xs text-slate-500">Our academic counselors are available on WhatsApp for instant guidance.</div>
              </div>
            </div>
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-all active:scale-[0.97] shrink-0 flex items-center gap-1.5"
            >
              <MessageCircle size={14} />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Center Location & Direct Enquiry */}
      <section id="contact-demo" className="py-20 px-5 sm:px-8 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Center Info */}
            <div>
              <div className="text-[0.76rem] font-mono font-semibold text-blue-600 uppercase tracking-wider mb-2">
                Visit our center
              </div>
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">
                Apex Learning Center
              </h2>
              <p className="text-slate-600 text-[0.95rem] leading-relaxed mb-8">
                Feel free to visit our campus during office hours for course counseling, syllabus walk-throughs, or student demo registrations.
              </p>

              <div className="space-y-5 text-[0.9rem]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Campus Address</div>
                    <div className="text-slate-600 mt-0.5">
                      Plot 42, Main Commercial Complex, Model Town, Delhi — 110009
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Counseling Timings</div>
                    <div className="text-slate-600 mt-0.5">
                      Monday to Saturday: 9:30 AM — 7:00 PM (Sunday by appointment)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Admissions Desk</div>
                    <div className="text-slate-600 mt-0.5">
                      +91 99999 99999 / admissions@apexacademy-demo.com
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Box */}
              <div className="mt-8 p-5 rounded-xl bg-emerald-50 border border-emerald-200">
                <div className="font-semibold text-emerald-900 text-[0.95rem] mb-1">
                  Have a quick admission question?
                </div>
                <p className="text-[0.84rem] text-emerald-800 mb-3">
                  Chat directly with our academic counselor on WhatsApp for instant batch availability.
                </p>
                <a
                  href={profile.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold text-[0.85rem] hover:bg-emerald-700 transition-colors shadow-xs"
                >
                  <MessageCircle size={15} />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Quick Callback Form */}
            <div className="p-7 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1">
                Book a Free Counseling Session
              </h3>
              <p className="text-[0.84rem] text-slate-600 mb-6">
                Fill in your details and our team will get in touch within the day.
              </p>

              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <div>
                  <label className="block text-[0.74rem] font-mono text-slate-600 uppercase tracking-wider mb-1">
                    Student / Parent Name
                  </label>
                  <input
                    type="text"
                    required
                    value={lead.name}
                    onChange={(e) => setLead({ ...lead, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-[0.92rem] text-slate-900 focus:outline-none focus:border-blue-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[0.74rem] font-mono text-slate-600 uppercase tracking-wider mb-1">
                    Phone Number (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    required
                    value={lead.phone}
                    onChange={(e) => setLead({ ...lead, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-[0.92rem] text-slate-900 focus:outline-none focus:border-blue-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[0.74rem] font-mono text-slate-600 uppercase tracking-wider mb-1">
                    Interested Program
                  </label>
                  <select
                    value={lead.course}
                    onChange={(e) => setLead({ ...lead, course: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-[0.92rem] text-slate-900 focus:outline-none focus:border-blue-600 transition-colors"
                  >
                    <option value="Foundation 9-10">Class 9 & 10 Foundation</option>
                    <option value="Board + JEE/NEET 11-12">Class 11 & 12 Board + JEE/NEET</option>
                    <option value="Board Crash Course">60-Day Fast-Track Crash Course</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold text-[0.92rem] hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <span>Submit Counseling Request</span>
                  <Send size={14} />
                </button>

                {formSubmitted && (
                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[0.84rem] flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Demo request received! Our counselor will contact you.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Demo Footer */}
      <footer className="py-8 px-5 border-t border-slate-200 bg-slate-900 text-slate-400 text-center text-[0.82rem]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            Apex Academy — Functional Concept Demo for Educational Institutions
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-slate-300 hover:text-white underline transition-colors">
              Portfolio Home
            </Link>
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Order a Website Like This →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
