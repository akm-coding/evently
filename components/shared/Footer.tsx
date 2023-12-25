import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
        <p>
          2023 Evently. All Rights reserved. Developed by{" "}
          <a
            href="https://github.com/aungkaungmyat-is-coding"
            className="underline text-primary-500"
            target="_blank"
          >
            AKM
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
