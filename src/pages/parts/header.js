import React from "react";
import Logo from "public/images/logo.svg";
import { useRouter } from "next/router";
import Link from "next/link";
import propTypes from "prop-types";
export default function Header({ onLight }) {
  const linkColor = onLight ? "text-gray-900" : "text-white";
  const router = useRouter();

  const linkCta =
    router.pathname.indexOf("/login") > -1
      ? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register`
      : `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/login`;
  const textCta = router.pathname.indexOf("/login") > -1 ? "Daftar" : "Masuk";
  return (
    <header className="flex justify-between items-center">
      <div style={{ height: 54 }}>
        <Logo className="on-dark"></Logo>
      </div>
      <ul className="flex">
        <li>
          <Link href="/">
            <a
              className={[
                linkColor,
                "text-white hover:text-green-500 text-lg px-6 py-3",
              ].join(" ")}
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a
              className={[
                linkColor,
                "text-white hover:text-green-500 text-lg px-6 py-3",
              ].join(" ")}
            >
              Pricing
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a
              className={[
                linkColor,
                "text-white hover:text-green-500 text-lg px-6 py-3",
              ].join(" ")}
            >
              Features
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a
              className={[
                linkColor,
                "text-white hover:text-green-500 text-lg px-6 py-3",
              ].join(" ")}
            >
              Stories
            </a>
          </Link>
        </li>
        <li>
          <a
            className="bg-indigo-700 hover:bg-indigo-800 transition-all duration-200 text-white hover:text-green-500 text-lg px-6 py-3 ml-6"
            href=""
            target="_blank"
            rel="noopener noreferrer"
            href={linkCta}
          >
            {textCta}
          </a>
        </li>
      </ul>
    </header>
  );
}
Header.propTypes = {
  onLight: propTypes.bool,
};
