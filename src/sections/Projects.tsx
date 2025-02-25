import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import GrainImage from "@/assets/images/grain.jpg";
import TextSection from "@/components/TextSection";
import BackendImage from "@/assets/images/backend.png";
import Snackcase from "@/assets/images/snackcase.png";
import AspectMate from "@/assets/images/aspectmate.png";
import Event from "@/assets/images/event.png";
import Management from "@/assets/images/management.png";


const portfolioProjects = [
  {
    company: "Navratri Event",
    year: "2024",
    title: "Smart Event Ticketing & Management System",
    description:
      "A seamless event management solution with online ticket booking, payment integration, and QR-based entry verification for enhanced security and efficiency.",
    results: [
      {
        title:
          "Event Organization & Ticketing: Create and manage events with an intuitive ticketing system.",
      },
      {
        title:
          "Online Ticket Purchase: Users can buy tickets online with an integrated payment gateway.",
      },
      {
        title:
          "QR Code-Based Entry: Each ticket includes a unique QR code for secure access.",
      },
      {
        title:
          "Admin Control Panel: Admins can scan QR codes or input ticket IDs to verify entries.",
      },
    ],
    link: "https://event.matangievent.com",
    image: Event,
    buttonTitle: "Visit Live Site",
  },
  {
    company: "Management System",
    year: "2025 ",
    title: "Book PG And Maid",
    description:
      "A smart platform for finding and booking PG accommodations and maid services, ensuring convenience and ease for users.",
    results: [
      { title: "PG Booking System: Users can search, compare, and book PG accommodations." },
      { title: "Maid Hiring Portal: Allows users to find and hire verified maids for household work." },
      { title: "Seamless Payment Integration: Supports secure online payments for bookings." },
      { title: "User-Friendly Dashboard: Provides an intuitive interface for managing bookings and services." },
      { title: "Admin Management: Enables admins to oversee PG listings, maid profiles, and user transactions." },
      { title: "Responsive & Scalable: Optimized for both mobile and desktop users with a smooth UI." },
    ],
    link: "https://management.matangievent.com",
    image: Management,
    buttonTitle: "Visit Live Site",
  },
];

export const ProjectsSection = () => {
  return (
    <section id={"projects"} className="pb-16 lg:py-24">
      <div className="container font-sans">
        <TextSection
          eyebrow="Real world Projects"
          text="Featured Projects"
          description="See How i Transofrom concepts into real world projects"
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.title}
              className=""
              // style={{ top: `calc(56px + ${index * 20}px)` }}
            >
              <div className="bg-gray-800 px-8 pt-8 md:pt-12 md:px-10 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:pointer-events-none after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 lg:pt-16 lg:px-20">
                <div
                  style={{
                    backgroundImage: `url(${GrainImage.src})`,
                  }}
                  className="absolute inset-0 opacity-10 -z-10"
                />
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 ">
                  <div className="lg:pb-2">
                    <div className="bg-gradient-to-r from-emerald-400 to-purple-500 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.company}</span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-4xl md:mt-5 mt-2">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result) => (
                        <li
                          className="flex gap-2 text-sm md:text-base"
                          key={result.title}
                        >
                          <CheckCircleIcon className="size-5 md:size-6" />
                          {result.title}
                        </li>
                      ))}
                    </ul>
                    <a href={project.link} target="_blank">
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>{project.buttonTitle}</span>
                        <ArrowRightIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                  <div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
