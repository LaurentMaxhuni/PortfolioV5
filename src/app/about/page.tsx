"use client";
import { FloatingDock } from "@/components/ui/floating-dock";
import { HomeIcon, InfoIcon, PhoneIcon, PowerCircleIcon } from "lucide-react";
import { IconSlideshow } from "@tabler/icons-react";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import TitleComponent from "@/components/title-component";
import { cn } from "@/lib/utils";

export default function About() {
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
        <div className="flex flex-col items-center justify-center h-[90%] relative bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-2 font-bold">
          <div className="text-left w-[45%]">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              About me! 😊
            </h1>
            <p className="font-normal wrap-normal">
              I am Laurent Maxhuni, a 15 year old Full-Stack Web Developer. I
              started learning programming at 13 years old starting with simple
              HTML and CSS. 😄 Then I continued with JavaScript which intrigued
              me so much that I just kept seeing programming being my future.
              Which led me to learn React, Next.js, Node.js, etc.{" "}
              <span className="text-gray-500">
                (I dont want to bore you! 😅)
              </span>
              <br />
              Apart from coding I have other hobbies as well, such as:
            </p>
            <div className="mt-4 mb-3 flex flex-wrap gap-2">
              <span className="text-blue-100 bg-slate-700 w-fit rounded-full py-1 px-2 mr-1 hover:transform hover:scale-105 transition-transform">
                🎮 Gaming
              </span>
              <span className="text-blue-100 bg-slate-700 w-fit rounded-full py-1 px-2 mx-1">
                ♟️ Chess
              </span>
              <span className="text-blue-100 bg-slate-700 w-fit rounded-full py-1 px-2">
                🏓 Table Tennis
              </span>
            </div>
            <p>I am fluent in 2 languages.</p>
            <div className="mt-2">
              <span className="text-blue-100 bg-slate-700 w-fit rounded-full py-1 px-2 mr-1">
                🇦🇱 Albanian
              </span>
              <span className="text-blue-100 bg-slate-700 w-fit rounded-full py-1 px-2">
                🇺🇸 English
              </span>
            </div>
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
        desktopClassName="fixed bottom-0 left-[50%] -translate-[50%] bg-gray-800 p-4 z-10"
        mobileClassName="fixed bottom-0 right-0 p-4 flex items-cetner justify-center z-10"
      />
    </div>
  );
}
