
import {
  HeartPulse,
  Activity,
  Baby,
  Flower2,
  Microscope,
  Stethoscope,
  ArrowRight,
} from "lucide-react";

const expertiseAreas = [
  {
    title: "Gynaecology & Menstrual Health",
    description:
      "Guidance for irregular periods, menstrual concerns and gynaecological health.",
    icon: HeartPulse,
    color: "pink",
  },
  {
    title: "PCOS & Hormonal Health",
    description:
      "Understand PCOS, hormonal changes and available care options.",
    icon: Activity,
    color: "purple",
  },
  {
    title: "Pregnancy & Obstetric Care",
    description:
      "Pregnancy guidance and care for different stages of motherhood.",
    icon: Baby,
    color: "blue",
  },
  {
    title: "Fertility & Reproductive Medicine",
    description:
      "Evaluation and guidance for fertility-related concerns and family planning.",
    icon: Flower2,
    color: "plum",
  },
  {
    title: "IUI Treatment",
    description:
      "Learn about intrauterine insemination and whether it may be suitable for you.",
    icon: HeartPulse,
    color: "cyan",
  },
  {
    title: "IVF / ICSI",
    description:
      "Explore assisted reproductive treatment options based on individual assessment.",
    icon: Microscope,
    color: "blue",
  },
  {
    title: "Laparoscopic Surgery",
    description:
      "Information about minimally invasive surgery for selected gynaecological conditions.",
    icon: Stethoscope,
    color: "pink",
  },
  {
    title: "Women's Health Guidance",
    description:
      "Understand symptoms, preventive care and when to consult a gynaecologist.",
    icon: Activity,
    color: "green",
  },
];

const colors = {
  pink: {
    icon: "bg-pink-500 text-white shadow-pink-100",
    hover: "hover:border-pink-200",
  },
  purple: {
    icon: "bg-purple-500 text-white shadow-purple-100",
    hover: "hover:border-purple-200",
  },
  blue: {
    icon: "bg-sky-500 text-white shadow-sky-100",
    hover: "hover:border-sky-200",
  },
  plum: {
    icon: "bg-[#4B123D] text-white shadow-pink-100",
    hover: "hover:border-[#E8CFE0]",
  },
  cyan: {
    icon: "bg-cyan-500 text-white shadow-cyan-100",
    hover: "hover:border-cyan-200",
  },
  green: {
    icon: "bg-emerald-500 text-white shadow-emerald-100",
    hover: "hover:border-emerald-200",
  },
};

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading - reference design layout */}
        <div className="mb-10 grid items-end gap-4 md:grid-cols-2 md:gap-10">
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-600">
              <span className="h-3 w-3 rounded-full bg-[#F0008B]" />
              Areas of Expertise
            </div>

            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Women's Healthcare
              <br className="hidden sm:block" /> Services for You
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-500 md:justify-self-end md:text-base">
            Explore women's healthcare services and learn about the
            support available for menstrual health, pregnancy, fertility
            and other gynaecological concerns.
          </p>
        </div>

        {/* Compact service cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expertiseAreas.map((area) => {
            const Icon = area.icon;
            const style = colors[area.color];

            return (
              <article
                key={area.title}
                className={`group flex min-h-[218px] flex-col rounded-3xl border border-transparent bg-white p-5 shadow-[0_5px_30px_rgba(15,23,42,0.055)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(75,18,61,0.10)] sm:p-5 ${style.hover}`}
              >
                {/* Icon and title */}
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full shadow-lg transition-transform duration-300 group-hover:scale-105 ${style.icon}`}
                  >
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-base font-bold leading-snug text-slate-900 sm:text-[17px]">
                    {area.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="flex-1 text-sm leading-6 text-slate-500">
                  {area.description}
                </p>

                {/* Read more link */}
                <a
                  href="#appointment"
                  className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-[#F0008B]"
                >
                  Book Consultation
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </article>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="mt-7 text-center text-xs leading-6 text-slate-500">
          Treatment suitability depends on individual medical assessment.
          This information is for general educational purposes.
        </p>
      </div>
    </section>
  );
}
