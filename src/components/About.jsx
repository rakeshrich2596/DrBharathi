
import {
  HeartPulse,
  Baby,
  Stethoscope,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const expertise = [
  "Gynaecology and Menstrual Health",
  "PCOS and Hormonal Health",
  "Pregnancy and Obstetric Care",
  "Fertility and Reproductive Medicine",
];

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-white py-16 sm:py-20 lg:py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Doctor image */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -left-5 top-10 h-32 w-32 rounded-full bg-pink-100 blur-2xl" />
            <div className="absolute -bottom-5 right-0 h-36 w-36 rounded-full bg-blue-100 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white bg-pink-50 shadow-xl shadow-pink-100/60">
              <img
                src="/images/about.png"
                alt="Dr. Bharathi V, Obstetrician and Gynaecologist"
                className="h-[420px] w-full object-cover object-top sm:h-[540px]"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#4B123D]/90 via-[#4B123D]/45 to-transparent px-6 pb-7 pt-20 sm:px-8">
                <p className="text-2xl font-bold text-white">
                  Dr. Bharathi V
                </p>
                <p className="mt-2 text-sm text-white/90 sm:text-base">
                  Obstetrician & Gynaecologist
                </p>
              </div>
            </div>

            {/* Decorative healthcare card */}
            <div className="absolute -right-2 top-8 rounded-2xl border border-pink-100 bg-white p-3 shadow-lg sm:-right-6 sm:p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-pink-50 p-3 text-[#F0008B]">
                  <HeartPulse size={24} />
                </div>
                <div>
                  <p className="font-bold text-[#4B123D]">
                    Women's Health
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Care and guidance
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="absolute -left-2 bottom-20 rounded-2xl border border-blue-100 bg-white p-3 shadow-lg sm:-left-6 sm:p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-50 p-3 text-[#0875C9]">
                  <Stethoscope size={23} />
                </div>
                <div>
                  <p className="font-bold text-[#4B123D]">
                    Personalised Care
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Guidance for your needs
                  </p>
                </div>
              </div>
            </div> */}
          </div>

          {/* About content */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-100 bg-pink-50 px-4 py-2 text-sm font-semibold text-[#F0008B]">
              <HeartPulse size={17} />
              ABOUT OUR DOCTOR
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#4B123D] sm:text-4xl lg:text-[35px]">
              Meet Dr. Bharathi V
              <span className="mt-2 block text-[#0875C9]">
                Understanding Women's Health
              </span>
            </h2>

            <p className="mt-5 text-base font-semibold text-[#F0008B] sm:text-lg">
              Obstetrician & Gynaecologist
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Women's health needs can change through different stages of
              life. From menstrual concerns and PCOS to pregnancy planning
              and fertility-related questions, understanding your health is
              an important step towards making informed decisions.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              This section introduces Dr. Bharathi V and her areas of
              medical expertise, helping women explore relevant healthcare
              guidance and understand when to seek a consultation.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {expertise.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-[#F0008B]"
                  />
                  <span className="text-sm font-medium leading-6 text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#expertise"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F0008B] px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0875C9]"
              >
                Explore Expertise
                <ArrowUpRight size={19} />
              </a>

              <a
                href="#appointment"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#0875C9] px-7 py-4 font-semibold text-[#0875C9] transition hover:bg-[#0875C9] hover:text-white"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
