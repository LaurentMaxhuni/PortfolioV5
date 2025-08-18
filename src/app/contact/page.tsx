import { FloatingDock } from "@/components/ui/floating-dock";
import { HomeIcon, InfoIcon, PhoneIcon, PowerCircleIcon } from "lucide-react";
import { IconSlideshow } from "@tabler/icons-react";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import TitleComponent from "@/components/title-component";
import { cn } from "@/lib/utils";

export default function Contact() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black overflow-hidden">
      <FollowerPointerCard
        title={<TitleComponent title="Laurent Maxhuni" avatar="/favicon.ico" />}
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
