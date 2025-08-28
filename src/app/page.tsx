"use client";
import { FloatingDock } from "@/components/ui/floating-dock";
import "./globals.css";
import { HomeIcon, InfoIcon, PhoneIcon, PowerCircleIcon } from "lucide-react";
import { IconSlideshow } from "@tabler/icons-react";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { cn } from "@/lib/utils";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import TitleComponent from "@/components/title-component";


export default function Home() {
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
        <div className="flex flex-col items-center justify-center h-[90%] text-center relative bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-2 font-bold">
          <h1 className="text-2xl md:text-6xl font-bold mb-1">
            Hello, I am Laurent Maxhuni!👋
          </h1>
          <h1 className="text-2xl md:text-6xl font-bold mb-4">
            <span className="mb-2 block lg:inline">And I am</span>{" "}
            <ContainerTextFlip className="text-2xl md:text-6xl w0fit h-fit" />
          </h1>
          <p className="text-gray-500">
            (I don&apos;t know how to fix your printer)
          </p>
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
        mobileClassName="fixed bottom-0 right-0 p-4 flex items-cetner justify-center"
      />
    </div>
  );
}
