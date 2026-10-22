import {
  ArrowUpRight,
  ArrowUp,
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
  ChevronRight,
  Globe,
} from "lucide-react";

const quickLinks = [
  { name: "Home", path: "#home" },
  { name: "About Us", path: "#about" },
  { name: "Our Expertise", path: "#expertise" },
  { name: "Our Approach", path: "#approach" },
  { name: "Knowledge Centre", path: "#knowledge" },
  { name: "FAQs", path: "#faq" },
];

const services = [
  "IVF Treatment",
  "IUI Treatment",
  "ICSI Treatment",
  "PCOS Treatment",
  "Male Fertility Treatment",
  "Laparoscopy & Hysteroscopy",
];

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/bharatifertilityandwomencenter/?hl=en",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/bharatifertilityandwomencenter/",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@Bharatifertilitycenter",
  },
];

const mapDirectionUrl =
  "https://maps.app.goo.gl/wRWkXBB3tLkvErEa6"
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#24091F] text-white">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#F0008B]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#0875C9]/10 blur-3xl" />

      

      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-16 sm:px-8 lg:px-10 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand Information */}
          <div className="lg:col-span-4">
            <a href="#home" className="inline-flex items-center">
              <img
                src="/images/dr_logo3.png"
                alt="Bharati Fertility & Women Center"
                className="h-24 w-auto max-w-[350px] object-contain object-left"
              />
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
              Supporting your journey towards parenthood with personalized
              fertility care, ethical guidance and compassionate support.
            </p>

            <div className="mt-6 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#F66DBB]">
                <Heart size={19} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Care with compassion
                </p>

                <p className="mt-1 text-xs leading-5 text-white/55">
                  Your wellbeing matters at every step.
                </p>
              </div>
            </div>

            {/* Official Social Media Links */}
            <div className="mt-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                Connect with us
              </p>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.name} page`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-xs font-medium text-white/70 transition-all duration-300 hover:border-[#F0008B] hover:bg-[#F0008B] hover:text-white"
                  >
                    <Globe size={15} />
                    {social.name}
                    <ArrowUpRight size={13} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-[#F0008B] to-[#0875C9]" />

            <ul className="mt-6 space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-[#F66DBB]"
                  >
                    <ChevronRight
                      size={15}
                      className="text-[#F0008B] transition-transform group-hover:translate-x-1"
                    />

                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold text-white">
              Our Services
            </h3>

            <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-[#F0008B] to-[#0875C9]" />

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#expertise"
                    className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-[#F66DBB]"
                  >
                    <ChevronRight
                      size={15}
                      className="text-[#F0008B] transition-transform group-hover:translate-x-1"
                    />

                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold text-white">
              Get in Touch
            </h3>

            <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-[#F0008B] to-[#0875C9]" />

            <div className="mt-6 space-y-6">
              {/* Clinic Address */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F0008B]/15 text-[#F66DBB]">
                  <MapPin size={19} />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Mandaveli Clinic
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    New No. 49, Old No. 21,
                    <br />
                    Venkatakrishna Road,
                    <br />
                    Opposite Bank of Baroda,
                    <br />
                    Mandaveli, Chennai – 600028.
                  </p>

                  <a
                    href={mapDirectionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#F66DBB] transition-colors hover:text-white"
                  >
                    <MapPin size={14} />
                    Get Directions
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0875C9]/20 text-[#69B8FF]">
                  <Phone size={18} />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Call Us
                  </h4>

                  <a
                    href="tel:+918220052005"
                    className="mt-2 block text-sm text-white/65 transition-colors hover:text-[#69B8FF]"
                  >
                    +91 82 2005 2005
                  </a>

                  <a
                    href="tel:+919791154545"
                    className="mt-1 block text-sm text-white/65 transition-colors hover:text-[#69B8FF]"
                  >
                    +91 97911 54545
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F0008B]/15 text-[#F66DBB]">
                  <Mail size={18} />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Email Us
                  </h4>

                  <a
                    href="mailto:bharatifertility@gmail.com"
                    className="mt-2 break-all text-sm text-white/65 transition-colors hover:text-[#F66DBB]"
                  >
                    bharatifertility@gmail.com
                  </a>
                </div>
              </div>

              {/* Appointment Link */}
              <a
                href="#appointment"
                className="group flex w-full items-center justify-between rounded-xl border border-white/15 bg-white/[0.04] px-4 py-4 transition-all duration-300 hover:border-[#F0008B]/60 hover:bg-white/[0.08]"
              >
                <div className="flex items-center gap-3">
                  <Clock size={19} className="text-[#F66DBB]" />

                  <span className="text-sm font-medium text-white">
                    Plan Your Visit
                  </span>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-white/60 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-white/50 sm:text-sm">
            © {currentYear} Bharati Fertility & Women Center. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href="#privacy-policy"
              className="text-xs text-white/50 transition-colors hover:text-white sm:text-sm"
            >
              Privacy Policy
            </a>

            <a
              href="#terms"
              className="text-xs text-white/50 transition-colors hover:text-white sm:text-sm"
            >
              Terms & Conditions
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#F0008B] to-[#0875C9] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <ArrowUp size={19} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}