"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className="p-5 flex justify-between items-center border shadow-sm bg-white dark:bg-gray-900">
      {/* Left side - Logo and name */}
      <div className="flex items-center gap-2">
        <Image
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRviUIILvO_4vw2KxrEa0YPEXCgI0HUrunK3g&s"
          }
          alt="logo"
          width={50}
          height={35}
        />
        <h1 className="text-base font-bold md:text-2xl text-gray-900 dark:text-white">Extrack</h1>
      </div>

      {/* Right side - Auth + Theme */}
      <div className="flex gap-3 items-center">
        <ThemeToggle /> {/* Add toggle button here */}

        {isSignedIn ? (
          <UserButton />
        ) : (
          <>
            <Link href={"/dashboard"}>
              <Button variant="outline" className="rounded-full">
                Login
              </Button>
            </Link>
            <Link href={"/sign-in"}>
              <Button className="rounded-full">Sign-in</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
