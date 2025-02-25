"use client";
import Card from "@/components/Card";
import TextSection from "@/components/TextSection";
import Image from "next/image";
import BookPage from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/ahmedabad.jpg";
import SmileMemoji from "@/assets/images/memoji-smile.png";
import {
  IoLogoCss3,
  IoLogoGithub,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoReact,
} from "react-icons/io5";
import {
  SiDocker,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiTailwindcss,
  SiTurborepo,
  SiTypescript,
} from "react-icons/si";
import CardHeader from "@/components/CardHeader";
import ToolBoxItms from "@/components/ToolBoxItms";
import { useRef } from "react";

const TOOL_BOX = [
  {
    title: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    title: "HTML5",
    icon: IoLogoHtml5,
  },
  {
    title: "CSS3",
    icon: IoLogoCss3,
  },
  {
    title: "React.js",
    icon: IoLogoReact,
  },
  {
    title: "TypeScript",
    icon: SiTypescript,
  },
  {
    title: "Github",
    icon: IoLogoGithub,
  },
  {
    title: "MongoDB",
    icon: SiMongodb,
  },
  {
    title: "Node JS",
    icon: SiNodedotjs,
  },
  {
    title: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    title: "Express",
    icon: SiExpress,
  },
  {
    title: "Docker",
    icon: SiDocker,
  },
  {
    title: "PostgreSQL",
    icon: SiPostgresql,
  },
];



export const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <section id={"about"} className="font-sans py-20 container">
      <div>
        <TextSection
          eyebrow="About Me"
          text="A Glimps Into my World"
          description="Learn more about who I am, what I do, and what inspires me."
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5  lg:grid-cols-3">
            
            <Card className="h-[320px] md:col-span-5 lg:col-span-3">
              <CardHeader
                title="My ToolBox"
                description="Explore the Technologis and tools I use to crafting apps"
                className="pr-6 "
              />
              <ToolBoxItms
                items={TOOL_BOX}
                className="px-6 pt-6"
                itemWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolBoxItms
                items={TOOL_BOX}
                className="mt-6 "
                itemWrapperClassName="animate-move-right [animation-duration:20s]"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
