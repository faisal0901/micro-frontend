import React, { useState } from "react";

export default function Hero() {
  const [state, setState] = useState(() => "");
  function submit() {
    window.open(
      `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}register?email=${state}`
    );
  }

  return (
    <div className="flex justify-between items-center">
      <div className="w-1/2">
        <h1 className="text-5xl text-white mb-5 font-medium">
          <span className="text-teal-500">The New </span>
          Way To
          <br />
          Achive Good
          <span className="text-teal-500"> Skills</span>
        </h1>
        <p className="text-white text-lg mb-8">
          We provide tons of pathskill that you <br /> can choose and focus on
        </p>
        <form onSubmit={submit}>
          <input
            type="text"
            onChange={(event) => setState(event.target.value)}
            className="bg-white focus:outline-none border-0 px-6 py-3 w-1/2"
            placeholder="your email addres"
          />
          <button className="bg-orange-600 hover:bg-yellow-500 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3">
            Daftar Now
          </button>
        </form>
      </div>
      <div className="w-1/2 flex justify-end pt-24 pr-16">
        <div className="relative" style={{ width: 369, height: 440 }}>
          <div
            className="absolute border-indigo-700 border-2 -mt-12 -mr-6 right-0"
            style={{ width: 324, height: 374 }}
          ></div>
          <div className="absolute w-full h-full -mb-8 -ml-8">
            <img src="/images/img-hero-mba-alisa.jpg" alt="Mbak" />
          </div>
          <div
            className="absolute z-10 bg-white py-3 px-4 mt-24 "
            style={{ transform: "translateX(-50%)", width: 290 }}
          >
            <p className="text-gray-900 mb-2">
              {" "}
              Metode belajar yang santai seperti nonton drakor di Netflix
            </p>
            <span className="text-gray-600">Alyssa, Apps Developer</span>
          </div>
        </div>
      </div>
    </div>
  );
}
