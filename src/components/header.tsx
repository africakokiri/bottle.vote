"use client";

import { Button } from "@/ui/button";
import { LinkButton } from "@/ui/link-button";

import { MoonIcon, PlusIcon, SunIcon, UserIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="bg-element/50 fixed top-0 left-0 w-full backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/">
          <h1 className="text-gradient text-xl font-extrabold sm:text-2xl">bottle.vote</h1>
        </Link>

        <div className="flex items-center gap-4">
          <Button
            variant="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
            <span className="sr-only">테마 전환</span>
          </Button>

          <LinkButton
            variant="icon"
            href="/vote/create"
          >
            <PlusIcon className="h-4 w-4" />
            <span className="sr-only">투표 생성</span>
          </LinkButton>

          <LinkButton
            variant="icon"
            href="/profile"
          >
            <UserIcon className="h-4 w-4" />
            <span className="sr-only">프로필</span>
          </LinkButton>
        </div>
      </div>
    </header>
  );
};
