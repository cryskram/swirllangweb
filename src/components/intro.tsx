"use client";

import Image from "next/image";
import Link from "next/link";

const Intro = () => {
  return (
    // <div className="min-h-screen items-center -mt-28 flex justify-center">
    <div className="mt-28 flex justify-center">
      <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
        <div className="flex flex-col w-1/3">
          <div className="text-6xl font-semibold">
            <h1>Build Faster</h1>
            <h1>and Better Software</h1>
          </div>
          <p className="text-lg text-slate-600">
            A modern, beginner-friendly language that combines power,
            performance, and simplicity
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <Link
              href="/"
              className="border-2 border-slate-900 bg-slate-900 text-slate-200 text-2xl p-2 rounded-2xl drop-shadow-3xl hover:drop-shadow-4xl transition-all duration-200"
            >
              Download
            </Link>
            <Link
              href="/"
              className="border-2 border-slate-900 text-slate-900 text-2xl p-2 rounded-2xl hover:bg-slate-700 hover:text-slate-200 hover:border-slate-700 hover:drop-shadow-3xl"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div>
          <Image
            className="rounded-xl shadow-2xl w-full shadow-slate-950 hidden md:block"
            // className="rounded-xl w-full drop-shadow-3xl"
            src="/codeGithubD.png"
            width={512}
            height={512}
            alt="sample program"
          />
        </div>
      </div>
      {/* <FaAngleDown
        onClick={() => console.log("hello")}
        className="absolute bottom-0 mb-2 animate-bounce text-3xl"
      /> */}
    </div>
  );
};

export default Intro;
