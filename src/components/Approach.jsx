
import { ArrowUpRight, HeartHandshake } from "lucide-react";

const journeySteps = [
  {
    number: "01",
    title: "Listen to Your Concerns",
    description:
      "Discuss your symptoms, menstrual health, pregnancy concerns or fertility questions.",
    color: "#F0008B",
    background: "#FFF0F8",
  },
  {
    number: "02",
    title: "Understand Your Health",
    description:
      "Your medical history and individual needs help guide the appropriate assessment.",
    color: "#0875C9",
    background: "#EDF7FF",
  },
  {
    number: "03",
    title: "Explore Your Options",
    description:
      "Understand relevant care options and discuss your questions with your doctor.",
    color: "#4B123D",
    background: "#F7EEF5",
  },
  {
    number: "04",
    title: "Follow-Up When Needed",
    description:
      "Follow your doctor's advice and attend recommended reviews.",
    color: "#16845B",
    background: "#EDF9F2",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="overflow-hidden bg-white py-16 sm:py-20 lg:py-10"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-100 bg-pink-50 px-4 py-2 text-sm font-semibold text-[#F0008B]">
            <HeartHandshake size={17} />
            OUR APPROACH
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Your Health Journey, <span className="mt-1 inline-block text-[#0875C9]">
              Step by Step
            </span>
            
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Every woman's concerns are different. Understanding your
            needs is an important first step towards informed
            healthcare decisions.
          </p>
        </div>

        {/* Journey steps */}
        <div className="relative mt-14 lg:mt-20">
          {/* Connecting line - desktop */}
          <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-gradient-to-r from-pink-200 via-blue-200 to-emerald-200 lg:block" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {journeySteps.map((step) => (
              <div
                key={step.number}
                className="group relative"
              >
                {/* Number and connecting line - mobile */}
                <div className="flex items-start gap-5 lg:block">
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white text-xl font-extrabold shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl lg:mb-7"
                    style={{
                      backgroundColor: step.background,
                      color: step.color,
                    }}
                  >
                    {step.number}
                  </div>

                  <div className="flex-1 pb-2 lg:pb-0">
                    <h3 className="text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#F0008B] sm:text-xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Short accent underline */}
                <div
                  className="ml-[84px] mt-4 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-20 lg:ml-0 lg:mt-6"
                  style={{ backgroundColor: step.color }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-3xl border border-pink-100 bg-gradient-to-r from-pink-50 via-white to-blue-50 p-6 text-center sm:p-8 lg:mt-16 lg:flex-row lg:text-left">
          <div>
            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Thoughtful guidance for every stage of women's health.
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
              Take the next step towards understanding your healthcare needs.
            </p>
          </div>

          <a
            href="#appointment"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#F0008B] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-200/60 transition duration-300 hover:-translate-y-1 hover:bg-[#0875C9]"
          >
            Book a Consultation
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
