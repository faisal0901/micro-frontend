import React from "react";
import Link from "next/link";
export default function Footer() {
  function submit() {}
  return (
    <footer className="container mx-auto">
      <div className="flex justify-between">
        <div className="w-1/6">
          <h6 className="text-white">company</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link href="#">
                <a className="text-indigo-600 hover:text-teal-500 hover:underline">
                  Api developer
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a className="text-indigo-600 hover:text-teal-500 hover:underline">
                  Carrier
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a className="text-indigo-600 hover:text-teal-500 hover:underline">
                  Our Story
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a className="text-indigo-600 hover:text-teal-500 hover:underline">
                  New soon
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/6">
          <h6 className="text-white">Student</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link href="#">
                <a className="text-indigo-600 hover:text-teal-500 hover:underline">
                  Get scholarship
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a className="text-indigo-600 hover:text-teal-500 hover:underline">
                  Our pathskill
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a className="text-indigo-600 hover:text-teal-500 hover:underline">
                  All Feature
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a className="text-indigo-600 hover:text-teal-500 hover:underline">
                  Refund Policy
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/6">
          <h6 className="text-white">Touch us</h6>
          <p className="mt-3 text-indigo-600 leading-loose">
            micro center <br />
            Allesyi Block X no. 12 <br />
            Jakarta selatan ,indonesia <br />
            +21 2020 5555
          </p>
        </div>
        <div className="w-2/6">
          <h6 className="text-white">Promotion</h6>
          <p className="mt-3 text-indigo-600 leading-loose">
            Submit your email for New Updates
          </p>
          <form onSubmit={submit}>
            <input
              type="text"
              className="bg-white focus:outline-none border-0 px-6 py-3 md:w-1/2 w-full"
              placeholder="Your email Addres"
            />
            <button className="bg-orange-600 hover:bg-yellow-500 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3">
              Daftar Now
            </button>
          </form>
        </div>
      </div>
      <div className="border-t pt-8 mt-8 border-gray-500 text-center">
        <p className="text-indigo-600">
          2020 Copyright Micro by BuildWith Angga. All Rights Reserved{" "}
        </p>
      </div>
    </footer>
  );
}
