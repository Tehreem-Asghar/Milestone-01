"use client"
import Link from "next/link";

export default function HelloWorld() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <h1 className="text-white pt-5 pl-3 font-bold text-2xl">Nextjs : Milestone 01</h1>

      <div className="min-h-16 px-16 mt-14 flex justify-center text-white flex-col text-center">
        <h1 className="text-5xl  mt-5 font-semibold animate-colorChange hover:scale-110 transition-transform duration-500"> Hello World </h1>
        <h5 className="mt-14"> 
          To learn more about the Next.js application file structure, click the
          button below for details.
        </h5>

        <Link
          href={"https://github.com/Tehreem-Asghar/Milestone-01/blob/main/README.md"}
        >
        <button className="bg-blue-700 border mt-11 text-white py-2 px-4 rounded hover:bg-blue-800 transition-colors duration-300 max-w-xs mx-auto block ">
          Learn more
        </button>
        </Link>
        <h4 className="text-white text-center mt-20">
          <i>Created by GIAIC senior student:  <b>Tehreem Asghar</b></i>
        </h4>
      </div>
    </div>
  );
}