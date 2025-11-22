import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";


const InfoCard = ({ emoji, title, value }) => (
  <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition">
    <p className="text-sm text-gray-500 flex items-center gap-2">
      <span className="text-xl">{emoji}</span>
      <span>{title}</span>
    </p>
    <h3 className="mt-3 text-lg font-semibold text-gray-800">{value}</h3>
  </div>
);

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="mt-120 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left area (main) */}
      <div className="lg:col-span-2 flex flex-col gap-6">
        <section className="relative h-72 bg-[#FFF7C6] rounded-2xl p-4 md:p-6 lg:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-4">
            {/* Text block - responsive sizes (mobile small, md+ bigger) */}
            <div className="md:ml-20 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Best Caring,
              </h2>
              <h3 className="mt-1 text-xl md:text-2xl lg:text-4xl font-bold text-gray-500">
                Better Doctors
              </h3>
              <p className="mt-3 text-sm md:text-base lg:text-lg font-normal text-black">
                Find the nearest doctor to you, Today
              </p>
            </div>

            {/* Image wrapper: keep your same structure but make it static on small screens and absolute on md+ */}
            <div className="md:absolute md:right-6 md:top-8 md:w-36 md:h-36  w-32 h-32 shrink-0">
              <img
                src="/images/Image 2.png"
                alt="Doctor"
                className="h-40 lg:h-64 md:h-64"
              />
            </div>
          </div>
        </section>

        {/* Info cards */}
        <section className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <InfoCard
            icon="/images/material-symbols-light_ecg-heart-sharp.png"
            title="Heart rate"
            value="80 beats / min"
          />

          <InfoCard
            icon="/images/mingcute_lungs-fill.png"
            title="Lung capacity"
            value="4.75 litres"
          />

          <InfoCard
            icon="/images/healthicons_blood-cells-24px.png"
            title="Blood cells"
            value="5 million / ml"
          />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* BMI Card - clickable */}
          {/* BMI Card - clickable */}
          <div
            role="button"
            onClick={() => navigate("/bmi")}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer"
            aria-label="Open BMI Calculator"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              BMI Calculator
            </h3>

            {/* BMI Image */}
            <div className="w-full flex justify-center mb-4">
              <img
                src="/images/bmi.png" /* <-- put your bmi image in public/images/bmi.png */
                alt="BMI Chart"
                className="w-44 h-auto"
              />
            </div>

            {/* BMI Details */}
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                •<span className="font-medium">Healthy BMI range:</span> 18.5
                kg/m² – 25 kg/m²
              </li>
              <li>
                •{" "}
                <span className="font-medium">Healthy weight for height:</span>{" "}
                59.9 kg – 81 kg
              </li>
              <li>
                • <span className="font-medium">BMI Prime:</span> 0.8
              </li>
              <li>
                • <span className="font-medium">Ponderal Index:</span> 11.1
                kg/m³
              </li>
            </ul>
          </div>

          {/* Health Report Card - clickable */}
          <div
            role="button"
            onClick={() => navigate("/health-report")}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer"
            aria-label="Open Health Report"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              Health report
            </h3>

            <div className="mt-4">
              <svg viewBox="0 0 400 120" className="w-full h-32" aria-hidden>
                <defs>
                  <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.6" />
                    <stop
                      offset="100%"
                      stopColor="#a5b4fc"
                      stopOpacity="0.05"
                    />
                  </linearGradient>
                </defs>

                {/* area */}
                <path
                  d="M0 90 L60 60 L120 80 L180 40 L240 70 L300 50 L360 30 L400 40 L400 120 L0 120 Z"
                  fill="url(#g1)"
                  stroke="none"
                />
                {/* line */}
                <polyline
                  points="0,90 60,60 120,80 180,40 240,70 300,50 360,30 400,40"
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-xs text-gray-500 mt-2">
                Click to view detailed health report.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Right sidebar */}
      <aside className="flex flex-col  ">
        {/* Calendar card */}
        <div className="bg-[#FFF2A099] w-72 p-4 rounded-2xl">
          <div className="bg-white mb-8 p-4 rounded-xl shadow-sm w-64">
            <div className="mb-4">
              <p className="text-sm text-gray-500">Select date</p>
              <p className="text-2xl font-medium text-gray-700">Mon, Aug 17</p>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
              <div className="flex items-center gap-2">
                <button
                  aria-label="Previous month"
                  className="p-1 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-200"
                >
                  ◀
                </button>
                <button
                  aria-label="Next month"
                  className="p-1 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-200"
                >
                  ▶
                </button>
              </div>

              <div className="text-sm">August 2025</div>
              <div />
            </div>

            {/* Weekday headers */}
            <div className="grid grid-cols-7 gap-1 text-xs text-gray-600 mb-2">
              {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                <div key={`wd-${i}`} className="text-center font-medium py-1">
                  {d}
                </div>
              ))}
            </div>

            {/* Days */}
            <div className="grid grid-cols-7 gap-1 text-xs text-gray-600 mb-3">
              {Array.from({ length: 31 }).map((_, idx) => {
                const day = idx + 1;
                const isActive = day === 17 || day === 20;
                return (
                  <div
                    key={`day-${day}`}
                    className={`h-8 flex items-center justify-center rounded transition
                ${
                  isActive
                    ? "bg-yellow-100 text-yellow-800 font-semibold"
                    : "hover:bg-gray-100"
                }
              `}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isActive ? "true" : "false"}
                  >
                    {day}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-end gap-2">
              <button className="text-sm text-gray-500 hover:underline">
                Cancel
              </button>
              <button className="px-3 py-1 bg-yellow-600 text-white rounded-md text-sm">
                OK
              </button>
            </div>
          </div>

          {/* Recent Appointments card */}
          <div className="bg-white p-4 rounded-2xl shadow-sm w-64">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-semibold text-gray-800">
                Recent appointments
              </h4>
              <button className="text-sm text-gray-500 hover:underline">
                View all
              </button>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-50 text-green-700 flex items-center justify-center">
                  ✅
                </div>
                <div>
                  <div className="text-sm font-medium">Dentist</div>
                  <div className="text-xs text-gray-500">
                    Sept 12, 2025 • 10:00 AM
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-50 text-yellow-700 flex items-center justify-center">
                  🩺
                </div>
                <div>
                  <div className="text-sm font-medium">
                    Regular Kidney checkup
                  </div>
                  <div className="text-xs text-gray-500">
                    Aug 28, 2025 • 2:00 PM
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-700 flex items-center justify-center">
                  💊
                </div>
                <div>
                  <div className="text-sm font-medium">
                    Heart Scan - Dr. Roy
                  </div>
                  <div className="text-xs text-gray-500">
                    Aug 02, 2025 • 11:30 AM
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}
