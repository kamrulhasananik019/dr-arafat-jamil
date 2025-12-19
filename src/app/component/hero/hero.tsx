import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-sky-50 to-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Internist • Gold Medalist (FCPS)
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight">
              Dr. Lt Col Arafat Jamil
              <br />
              <span className="text-blue-600">
                Internal Medicine Specialist
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-gray-600 text-lg leading-relaxed">
              Dr. Lt Col Arafat Jamil is a highly trained Internist based in
              Dhaka, Bangladesh, with extensive clinical, academic, and
              international experience. He currently serves as the Personal
              Physician to the Honorable Chief Advisor of the Interim Government
              of Bangladesh, Professor Dr. Muhammad Yunus.
            </p>

            {/* <p className="mt-4 max-w-2xl text-gray-600 text-lg leading-relaxed">
              He provides comprehensive medical supervision, risk assessment,
              travel medicine support, and strategic clinical care at the highest
              level of national leadership, with a strong commitment to
              evidence-based medicine and compassionate patient care.
            </p> */}

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-white text-xl hover:bg-blue-700 transition"
              >
                Book Appointment
                <span>↗</span>
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-blue-600 px-8 py-4 text-blue-600 text-xl hover:bg-blue-50 transition"
              >
                View Profile
              </Link>
            </div>

            {/* TRUST / AUTHORITY */}
            <div className="mt-8">
              <p className="text-sm text-gray-500">
                Personal Physician to the Honorable Chief Advisor of Bangladesh
              </p>
            </div>

            {/* TRUSTED USERS */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/40?img=${i}`}
                    className="h-10 w-10 rounded-full border-2 border-white"
                    alt="user"
                  />
                ))}
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white text-sm">
                  +
                </span>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">
                  Trusted by 5000+
                </span>{" "}
                Patients Worldwide
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2">
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative z-10">
                <img
                  src="https://demo.rstheme.com/html/flixta/assets/images/banner/banner-thumb-09.png"
                  alt="Dr. Lt Col Arafat Jamil"
                  width={480}
                  height={620}
                  className="object-contain"
                  priority
                />
              </div>

              {/* Background shape */}
              <div className="absolute -right-10 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-blue-100 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
