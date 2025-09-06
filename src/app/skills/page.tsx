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
        <div className="flex flex-col overflow-auto items-center justify-center h-[90%] z-10 relative">                                                   
          <h1 className="text-6xl md:text-3xl font-bold mb-2">My Skills!</h1>
          <div className="flex flex-col overflow-y-auto h-[85%] items-center justify-start w-full">
            <SkillsBar
              text="HTML"
              colors={[
                "bg-gradient-to-r from-amber-400 to-orange-600",
                "bg-neutral-200/60 dark:bg-white/10",
              ]}
              percentage={100}
            />
            <SkillsBar
              text="CSS"
              colors={[
                "bg-gradient-to-r from-sky-400 to-blue-600",
                "bg-neutral-200/60 dark:bg-white/10",
              ]}
              percentage={95}
            />
            <SkillsBar
              text="JavaScript"
              colors={[
                "bg-gradient-to-r from-yellow-400 to-amber-500",
                "bg-neutral-200/60 dark:bg-white/10",
              ]}
              percentage={90}
            />
            <SkillsBar
              text="React JS"
              colors={[
                "bg-gradient-to-r from-cyan-400 to-sky-600",
                "bg-neutral-200/60 dark:bg-white/10",
              ]}
              percentage={85}
            />
            <SkillsBar
              text="Python"
              colors={[
                "bg-gradient-to-r from-amber-300 to-yellow-500",
                "bg-neutral-200/60 dark:bg-white/10",
              ]}
              percentage={60}
            />
            <SkillsBar
              text="Git"
              colors={[
                "bg-gradient-to-r from-orange-500 to-red-500",
                "bg-neutral-200/60 dark:bg-white/10",
              ]}
              percentage={80}
            />
            <SkillsBar
              text="GitHub"
              colors={[
                "bg-gradient-to-r from-zinc-400 to-zinc-700",
                "bg-neutral-200/60 dark:bg-white/10",
              ]}
              percentage={80}
            />
            <SkillsBar
              text="VSCode"
              colors={[
                "bg-gradient-to-r from-sky-400 to-blue-700",
                "bg-neutral-200/60 dark:bg-white/10",
              ]}
              percentage={85}
            />
            <SkillsBar
              text="Tailwind CSS"
              colors={[
                "bg-gradient-to-r from-cyan-400 to-teal-500",
                "bg-neutral-200/60 dark:bg-white/10",
              ]}
              percentage={85}
            />
            <SkillsBar
              text="Bootstrap 5"
              colors={[
                "bg-gradient-to-r from-purple-400 to-violet-700",
                "bg-neutral-200/60 dark:bg-white/10",
              ]}
              percentage={75}
            />
            <SkillsBar
              text="jQuery"
              colors={[
                "bg-gradient-to-r from-indigo-400 to-blue-600",
                "bg-neutral-200/60 dark:bg-white/10",
              ]}
              percentage={70}
            />
            <SkillsBar
              text="Node.js"
              colors={[
                "bg-gradient-to-r from-emerald-400 to-green-700",
                "bg-neutral-200/60 dark:bg-white/10",
              ]}
              percentage={70}
            />
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
