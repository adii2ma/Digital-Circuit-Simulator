import React from "react";
import Image from "next/image";
import D from "@/public/logic-gate-or-svgrepo-com.svg";
import cir from "@/public/8bvaKz01 (1).svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1b1c1d] flex flex-col relative overflow-hidden">
      <div className="flex flex-col justify-center items-center h-[92vh]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-center text-center mb-6 z-10 gap-2 sm:gap-3">
          <div className="flex flex-row items-center gap-0">
            <Image
              src={D}
              alt="Logic Gate"
              className="h-16 sm:h-20 lg:h-28 w-auto animate-pulse flex-shrink-0 object-contain translate-y-[-0.1em] sm:translate-y-[-0.4em]"
            />
            <h1 className="text-emerald-600 text-5xl sm:text-6xl lg:text-7xl font-extrabold drop-shadow-[0_0_10px_rgba(0,255,157,0.3)]">
              igital{" "}
            </h1>
          </div>

          <h1 className="text-emerald-600 text-5xl sm:text-6xl lg:text-7xl font-extrabold drop-shadow-[0_0_10px_rgba(0,255,157,0.3)]">
            Circuit Simulator
          </h1>
        </div>

        <p className="text-gray-300 text-center text-lg sm:text-xl lg:text-2xl max-w-2xl mb-8 leading-relaxed z-10">
          Build, test, and analyze your digital circuits virtually — no
          breadboard required.
        </p>

        <div className="relative z-10">
          <Image
            src={cir}
            alt="Circuit illustration"
            className="h-[30vh] drop-shadow-[0_0_25px_rgba(0,255,157,0.4)] hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        <Link href="/circuit" className="z-10">
          <button className="mt-10 px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 text-black font-bold text-2xl shadow-[0_0_20px_rgba(0,255,157,0.3)] hover:shadow-[0_0_40px_rgba(0,255,157,0.6)] hover:scale-105 transition-all duration-300">
            Try it out!
          </button>
        </Link>
      </div>

      {/* About Section */}
      <section className="bg-[#141515] py-20 px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-emerald-500 mb-6 drop-shadow-[0_0_8px_rgba(0,255,157,0.3)]">
          About the Project
        </h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg sm:text-xl leading-relaxed">
          The{" "}
          <span className="text-emerald-400 font-semibold">
            Digital Circuit Simulator{" "}
          </span>
          is an interactive learning platform designed to make digital
          electronics accessible and engaging. Built with modern web
          technologies, it offers a seamless drag-and-drop interface that lets
          you visualize, connect, and test digital logic components — all within
          your browser.
        </p>
      </section>

      {/* Core Features Section */}
      <section className="bg-black py-20 px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-emerald-500 mb-12 drop-shadow-[0_0_8px_rgba(0,255,157,0.3)]">
          Core Features
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 text-center">
          <div className="p-6 rounded-xl bg-[#1f1f1f] hover:bg-[#242424] transition-all duration-300 shadow-[0_0_15px_rgba(0,255,157,0.1)] flex flex-col justify-center items-center min-h-[220px]">
            <h3 className="text-emerald-400 text-2xl font-semibold mb-2">
              Logic Gate Design
            </h3>
            <p className="text-gray-300 text-base">
              Build circuits visually using AND, OR, NOT, NAND, NOR, XOR, and
              XNOR gates.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#1f1f1f] hover:bg-[#242424] transition-all duration-300 shadow-[0_0_15px_rgba(0,255,157,0.1)] flex flex-col justify-center items-center min-h-[220px]">
            <h3 className="text-emerald-400 text-2xl font-semibold mb-2">
              Interactive Connections
            </h3>
            <p className="text-gray-300 text-base">
              Connect components with dynamic wires and handles.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#1f1f1f] hover:bg-[#242424] transition-all duration-300 shadow-[0_0_15px_rgba(0,255,157,0.1)] flex flex-col justify-center items-center min-h-[220px]">
            <h3 className="text-emerald-400 text-2xl font-semibold mb-2">
              Live Testing
            </h3>
            <p className="text-gray-300 text-base">
              Observe instant changes in output as you toggle input switches and
              test your logic.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#1f1f1f] hover:bg-[#242424] transition-all duration-300 shadow-[0_0_15px_rgba(0,255,157,0.1)] flex flex-col justify-center items-center min-h-[220px]">
            <h3 className="text-emerald-400 text-2xl font-semibold mb-2">
              Browser-Based
            </h3>
            <p className="text-gray-300 text-base">
              No installations or hardware setup — experiment directly from your
              web browser.
            </p>
          </div>
        </div>
      </section>

      {/* Subtle footer glow */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#00ff9d1a] to-transparent"></div>
    </div>
  );
}
