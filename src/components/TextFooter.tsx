import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

export default function TextFooter() {
  return (
    <>
      {/* Left Text */}
      <h1
        className={`absolute left-6 lg:left-10 bottom-8 lg:bottom-12 text-rose-600 text-2xl lg:text-5xl font-bold leading-tight ${playfairDisplay.className}`}
      >
        <span className="text-pink-400">Match</span> <br /> the photo pairs
      </h1>

      {/* Right Text */}
      <h1
        className={`absolute right-6 lg:right-10 bottom-8 lg:bottom-12 text-rose-600 text-2xl lg:text-5xl font-bold leading-tight text-right ${playfairDisplay.className}`}
      >
        to reveal <br /> <span className="text-pink-400">the surprise</span>
      </h1>

      {/* Copyright */}
      <p className="absolute bottom-4 right-5 text-rose-500 text-xs lg:text-sm opacity-50 hover:opacity-80 transition-opacity">
        © {new Date().getFullYear()}{" "}
        <Link href="https://visibait.com" className="hover:text-rose-600">
          visibait.com
        </Link>
      </p>
    </>
  );
}
