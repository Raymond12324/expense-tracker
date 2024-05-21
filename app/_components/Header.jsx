"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  // const { user, isSignedIn } = useUser();

  return (
    <div className="p-5  flex justify-between items-center border shadow">
      <Image src={"/logo.svg"} alt="logo" width={160} height={100} />
      {/* {isSignedIn ? (
        <>
          <UserButton />
        </>
      ) : (
        <Button className="font-bold">
          {" "}
          <Link href={"/sign-in"}>Get Started</Link>{" "}
        </Button>
      )} */}

<Button className="font-bold">
          {" "}
          <Link href={"/sign-in"}>Get Started</Link>{" "}
        </Button>
    </div>
  );
};

export default Header;
