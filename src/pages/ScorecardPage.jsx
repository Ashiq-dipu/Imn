import React, { useState } from 'react';
import Header from '../components/Header';
import SociFooter from '../components/sociwave/SociFooter';
import { CheckCircle2, TrendingUp, AlertCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function ScorecardPage({ onOpenContact }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: "video_frequency",
      category: "Content Volume & Velocity",
      question: "How frequently does your company publish high-quality video content?",
      options: [
        { label: "Daily (Consistent short-form & weekly long-form)", score: 25 },
        { label: "2-3 times per week (A mix of reels & updates)", score: 18 },
        { label: "Once a month or sporadically", score: 10 },
        { label: "Rarely or not at all", score: 2 }
      ]
    },
    {
      id: "production_quality",
      category: "Cinematic Quality & Authority",
      question: "What level of production gear & lighting do you currently use?",
      options: [
        { label: "Cinema packages (ARRI/RED/Sony FX), studio lighting & audio mastering", score: 25 },
        { label: "DSLR / Mirrorless camera with basic ring light & shotgun mic", score: 16 },
        { label: "Smartphones / Webcams with natural ambient lighting", score: 8 },
        { label: "No internal video production hardware", score: 0 }
      ]
    },
    {
      id: "podcast_presence",
      category: "Thought Leadership & Long-Form",
      question: "Do you have a dedicated video podcast or multi-angle interview show?",
      options: [
        { label: "Yes, multi-camera studio with weekly syndicated episodes", score: 25 },
        { label: "Yes, remote Zoom/Riverside interviews", score: 15 },
        { label: "Planning to launch within 60 days", score: 8 },
        { label: "No current podcast architecture", score: 0 }
      ]
    },
    {
      id: "conversion_strategy",
      category: "Distribution & Revenue Conversion",
      question: "How well does your video content drive inbound leads & revenue?",
      options: [
        { label: "Direct revenue driver — trackable pipeline & sponsor partnerships", score: 25 },
        { label: "Moderate engagement, but hard to correlate directly to closed deals", score: 14 },
        { label: "Low views, mostly viewed by existing internal team", score: 6 },
        { label: "No tracking or inbound attribution setup", score: 0 }
      ]
    }
  ];

  const handleSelect = (qId, score) => {
    const updated = { ...answers, [qId]: score };
    setAnswers(updated);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);

  const getTier = (score) => {
    if (score >= 80) return { label: "Category Dominator (Tier 1)", color: "text-emerald-600", desc: "Your brand possesses commanding visual authority and disciplined distribution. Focus on episodic long-form docu-series and national syndication." };
    if (score >= 55) return { label: "Emerging Authority (Tier 2)", color: "text-blue-600", desc: "You have strong foundational assets, but lack turnkey monthly volume and multi-camera consistency. A 30 Reels/month retainer will unlock exponential velocity." };
    if (score >= 30) return { label: "Invisible Contender (Tier 3)", color: "text-amber-600", desc: "Your market perception currently lags your actual expertise. Switching to cinema-grade commercial assets and podcast infrastructure is critical." };
    return { label: "Unseen Brand (Tier 4)", color: "text-soci-coral", desc: "You are leaving massive enterprise goodwill and market share on the table. You need an immediate foundational Brand Blueprint." };
  };

  const tier = getTier(totalScore);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-soci-dark">
      <Header onOpenContact={onOpenContact} />

      <main className="py-16 sm:py-24 px-6 sm:px-12 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-soci-coral" />
            <span className="font-mono text-xs uppercase font-bold tracking-widest text-soci-coral">
              EXECUTIVE AUDIT TOOL
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-soci-dark tracking-tight mb-4">
            Business Visibility Scorecard
          </h1>
          <p className="text-soci-muted text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Answer 4 diagnostic questions to evaluate your brand's video presence, perceived authority, and algorithmic distribution score.
          </p>
        </div>

        {/* Scorecard Interactive Card */}
        <div className="bg-soci-card rounded-3xl p-8 sm:p-12 border border-soci-border shadow-sm mb-20">
          {!submitted ? (
            <div>
              {/* Progress Bar */}
              <div className="flex items-center justify-between text-xs font-mono text-soci-muted mb-4">
                <span>QUESTION 0{step + 1} OF 0{questions.length}</span>
                <span className="font-bold text-soci-coral">{questions[step].category}</span>
              </div>
              <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden mb-8">
                <div
                  className="h-full bg-soci-coral transition-all duration-300"
                  style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-soci-dark mb-8">
                {questions[step].question}
              </h3>

              {/* Options */}
              <div className="space-y-4">
                {questions[step].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(questions[step].id, opt.score)}
                    className="w-full text-left p-5 sm:p-6 rounded-2xl border border-soci-border bg-[#F1F5F9] hover:bg-soci-dark hover:text-white hover:border-soci-dark transition-all duration-200 group flex items-center justify-between"
                  >
                    <span className="font-medium text-sm sm:text-base group-hover:text-white">
                      {opt.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-soci-coral opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-soci-coral/10 text-soci-coral flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8" />
              </div>

              <span className="font-mono text-xs uppercase font-bold tracking-widest text-soci-coral">
                YOUR VISIBILITY SCORE
              </span>
              <div className="text-6xl sm:text-7xl font-extrabold text-soci-dark my-3">
                {totalScore} <span className="text-3xl text-soci-muted font-normal">/ 100</span>
              </div>

              <div className={`text-xl font-bold mb-4 ${tier.color}`}>
                {tier.label}
              </div>

              <p className="text-soci-muted text-sm sm:text-base max-w-xl mx-auto mb-8 font-light leading-relaxed">
                {tier.desc}
              </p>

              <div className="pt-8 border-t border-soci-border flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={onOpenContact}
                  className="px-8 py-3.5 rounded-full bg-soci-coral text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-soci-dark transition-colors shadow-lg"
                >
                  Schedule Free Brand Strategy Audit
                </button>
                <button
                  onClick={() => {
                    setAnswers({});
                    setStep(0);
                    setSubmitted(false);
                  }}
                  className="px-6 py-3.5 rounded-full border border-soci-border text-xs font-mono font-bold hover:bg-neutral-100 transition-colors"
                >
                  Retake Diagnostic
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <SociFooter onOpenContact={onOpenContact} />
    </div>
  );
}

