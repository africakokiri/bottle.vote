"use client";

import { Button } from "@/components/ui/Button";
import { LinkButton } from "@/components/ui/LinkButton";

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
    <header className="bg-element/30 fixed z-10 w-full border-b backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        {/* 타이틀 */}
        <Link href="/">
          <h1 className="gradient-text text-xl font-bold md:text-2xl">bottle.vote</h1>
        </Link>

        <div className="flex gap-4">
          {/* 다크모드 */}
          <Button
            variant="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
            <span className="sr-only">테마 전환</span>
          </Button>

          {/* 투표 추가 */}
          <LinkButton
            variant="icon"
            href="/vote/create"
          >
            <PlusIcon className="h-4 w-4" />
            <span className="sr-only">투표 생성</span>
          </LinkButton>

          {/* 프로필 */}
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
