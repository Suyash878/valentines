import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

export default function TextFooter() {
  return (
    <div className="w-full text-center mt-8 px-4">
      <h2
        className={`text-rose-600 text-2xl lg:text-4xl font-bold leading-tight mb-2 ${playfairDisplay.className}`}
      >
        <span className="text-pink-400">Match</span> the photo pairs to reveal <span className="text-pink-400">the surprise</span>
      </h2>
    </div>
  );
}
