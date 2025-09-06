"use client";
import { FloatingDock } from "@/components/ui/floating-dock";
import { HomeIcon, InfoIcon, PhoneIcon, PowerCircleIcon } from "lucide-react";
import { IconHtml, IconSlideshow } from "@tabler/icons-react";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import TitleComponent from "@/components/title-component";
import { cn } from "@/lib/utils";
import SkillsBar from "@/components/skills-bar";

export default function Skills() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black overflow-hidden">
      <FollowerPointerCard
        title={
          <TitleComponent title="Laurent Maxhuni" avatar="/favicon-32x32.png" />
        }
        className="w-full h-full"
      >
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <div className="flex flex-col overflow-auto items-center justify-center h-[90%] max-h-[90%] z-10 relative py-[35px]">
          <h1 className="text-6xl md:text-3xl font-bold">My Skills!</h1>
          <div>
            <SkillsBar text="HTML" colors={["bg-orange-600", "bg-orange-900"]} percentage={100} />
          <SkillsBar text="CSS" colors={["bg-blue-600", "bg-blue-900"]} percentage={95} />
          <SkillsBar text="JavaScript" colors={["bg-yellow-600", "bg-yellow-900"]} percentage={90} />
          <SkillsBar text="TypeScript" colors={["bg-blue-400", "bg-blue-800"]} percentage={85} />
          <SkillsBar text="React" colors={["bg-sky-400", "bg-sky-800"]} percentage={80} />
          <SkillsBar text="Next.js" colors={["bg-white", "bg-gray-800"]} percentage={75} />
          <SkillsBar text="Node.js" colors={["bg-green-600", "bg-green-900"]} percentage={70} />
          <SkillsBar text="Python" colors={["bg-yellow-300", "bg-yellow-600"]} percentage={60} />
          </div>
        </div>
      </FollowerPointerCard>
      <FloatingDock
        items={[
          {
            title: "Home",
            icon: <HomeIcon />,
            href: "/",
          },
          {
            title: "About",
            icon: <InfoIcon />,
            href: "/about",
          },
          {
            title: "Skills",
            icon: <PowerCircleIcon />,
            href: "/skills",
          },
          {
            title: "Projects",
            icon: <IconSlideshow />,
            href: "/projects",
          },
          {
            title: "Contact",
            icon: <PhoneIcon />,
            href: "/contact",
          },
        ]}
        desktopClassName="fixed bottom-0 left-[50%] -translate-[50%] bg-gray-800 p-4"
        mobileClassName="fixed bottom-0 left-[50%] -translate-[50%] p-4 flex items-cetner justify-center"
      />
    </div>
  );
}
