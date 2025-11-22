import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * BMI Page - responsive, Tailwind-based.
 * - Left: controls (gender, weight, age, height)
 * - Right: BMI card with gauge and CTA
 *
 * Note: This is UI + client-side BMI calculation demo (units: kg & meters via height conversion).
 */

function Gauge({ value }) {
  // value: BMI numeric (0..40+). We'll clamp/scale for needle.
  const clamped = Math.max(0, Math.min(40, value));
  // convert BMI (0..40) to angle -120deg..120deg (polar)
  const angle = -120 + (clamped / 40) * 240;
  return (
    <svg viewBox="0 0 200 110" className="w-full h-40">
      {/* background arc */}
      <path
        d="M10 90 A80 80 0 0 1 190 90"
        fill="none"
        stroke="#e6e6e6"
        strokeWidth="18"
        strokeLinecap="round"
      />
      {/* healthy arc */}
      <path
        d="M10 90 A80 80 0 0 1 90 20"
        fill="none"
        stroke="#8be28b"
        strokeWidth="18"
        strokeLinecap="round"
      />
      {/* overweight arc */}
      <path
        d="M90 20 A80 80 0 0 1 150 40"
        fill="none"
        stroke="#f9d85e"
        strokeWidth="18"
        strokeLinecap="round"
      />
      {/* obese arc */}
      <path
        d="M150 40 A80 80 0 0 1 190 90"
        fill="none"
        stroke="#f77a7a"
        strokeWidth="18"
        strokeLinecap="round"
      />
      {/* needle (rotate around 100,90) */}
      <g transform={`translate(100,90) rotate(${angle})`}>
        <line
          x1="0"
          y1="0"
          x2="45"
          y2="-45"
          stroke="#111827"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="0" cy="0" r="4" fill="#111827" />
      </g>
      {/* center labels */}
      <text x="100" y="105" textAnchor="middle" fontSize="11" fill="#374151">
        BMI
      </text>
    </svg>
  );
}

export default function BMIPage() {
  const navigate = useNavigate();

  // Gender segmented control
  const [gender, setGender] = useState("male");

  // Weight in kg (range 30..180)
  const [weight, setWeight] = useState(70);

  // Age (10..100)
  const [age, setAge] = useState(30);

  // Height input: we'll keep height in cm for internal calc.
  // But UI shows feet/inches control mimic — to keep UI simple, provide slider for height cm (120..220),
  // and show feet/inches derived.
  const [heightCm, setHeightCm] = useState(170);

  // Calculated BMI
  const bmi = useMemo(() => {
    if (!heightCm) return 0;
    const heightM = heightCm / 100;
    const result = weight / (heightM * heightM);
    return Number.isFinite(result) ? parseFloat(result.toFixed(1)) : 0;
  }, [weight, heightCm]);

  const bmiCategory = useMemo(() => {
    if (bmi === 0) return { label: "—", color: "text-gray-600" };
    if (bmi < 18.5) return { label: "Underweight", color: "text-indigo-600" };
    if (bmi < 25) return { label: "Healthy", color: "text-green-600" };
    if (bmi < 30) return { label: "Over weight", color: "text-yellow-600" };
    return { label: "Obese", color: "text-red-600" };
  }, [bmi]);

  // convert cm -> feet/inches display
  const feet = Math.floor(heightCm / 2.54 / 12);
  const inches = Math.round(heightCm / 2.54 - feet * 12);

  return (
    <div className="mt-120 space-y-6">
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800"
        >
          ← Back
        </button>

        <div className="hidden md:flex items-center gap-3">
          {/* small header right side */}
          <div className="text-sm text-gray-500">BMI Calculator</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LEFT: controls (spans 2 cols on md) */}
          <div className="md:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-xl font-semibold text-gray-800">
                  BMI Calculator
                </h1>
                <p className="text-sm text-gray-500">Body Mass Index</p>
              </div>
              <div className="text-sm text-gray-500">Age {age}</div>
            </div>

            {/* Gender segmented control */}
            <div className="mb-6">
              <label className="text-sm text-gray-600 block mb-2">Gender</label>
              <div className="inline-flex bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setGender("male")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    gender === "male"
                      ? "bg-yellow-400 text-black shadow-sm"
                      : "text-gray-600"
                  }`}
                  aria-pressed={gender === "male"}
                >
                  Male
                </button>
                <button
                  onClick={() => setGender("female")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    gender === "female"
                      ? "bg-yellow-400 text-black shadow-sm"
                      : "text-gray-600"
                  }`}
                  aria-pressed={gender === "female"}
                >
                  Female
                </button>
                <button
                  onClick={() => setGender("other")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    gender === "other"
                      ? "bg-yellow-400 text-black shadow-sm"
                      : "text-gray-600"
                  }`}
                  aria-pressed={gender === "other"}
                >
                  Other
                </button>
              </div>
            </div>

            {/* Weight slider */}
            <div className="mb-6">
              <label className="text-sm text-gray-600 block mb-2">
                Weight (KG)
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="30"
                  max="180"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full"
                  aria-label="Weight in kilograms"
                />
                <div className="w-16 text-right text-sm font-medium text-gray-700">
                  {weight}kg
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-400">
                Recommended range: 30kg — 180kg
              </div>
            </div>

            {/* Age slider */}
            <div className="mb-6">
              <label className="text-sm text-gray-600 block mb-2">Age</label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full"
                  aria-label="Age"
                />
                <div className="w-12 text-right text-sm font-medium text-gray-700">
                  {age}
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-400">
                Age helps tailor the recommendation
              </div>
            </div>

            {/* Height slider */}
            <div className="mb-6">
              <label className="text-sm text-gray-600 block mb-2">Height</label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="120"
                  max="220"
                  value={heightCm}
                  onChange={(e) => setHeightCm(Number(e.target.value))}
                  className="w-full"
                  aria-label="Height in centimeters"
                />
                <div className="w-20 text-right text-sm font-medium text-gray-700">
                  {feet}&apos; {inches}&quot;
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-400">120 cm — 220 cm</div>
            </div>

            {/* Calculate button */}
            <div className="flex items-center justify-center md:justify-start">
              <button
                onClick={() => {}}
                className="px-6 py-2 bg-yellow-500 text-black rounded-full font-medium hover:shadow-md transition"
              >
                Calculate
              </button>
            </div>
          </div>

          {/* RIGHT: BMI card */}
          <aside className="flex flex-col items-center gap-4">
            <div className="bg-white w-56 md:w-64 p-4 rounded-2xl shadow-sm">
              <div className="mb-2 text-sm text-gray-500">Your BMI</div>

              {/* === Replace Gauge with Image === */}
              <div className="w-full flex justify-center">
                <img
                  src="/images/bmi.png"
                  alt="BMI Gauge"
                  className="w-40 md:w-48"
                />
              </div>

              <div className="mt-2 text-center">
                <div className={`text-lg font-semibold ${bmiCategory.color}`}>
                  {bmi === 0 ? "—" : bmi}
                </div>
                <div className="text-xs text-gray-500">{bmiCategory.label}</div>
              </div>

              <ul className="mt-3 text-xs text-gray-500 space-y-1">
                <li>1. Check overall health & activity</li>
                <li>2. Consult a doctor for abnormal values</li>
                <li>3. Balanced diet & exercise recommended</li>
              </ul>

              <button
                className="mt-4 w-full px-3 py-2 bg-yellow-500 text-black rounded-md font-medium hover:shadow-md"
                onClick={() =>
                  alert("Get Diet Plan — integrate with your flow")
                }
              >
                Get Diet Plan
              </button>
            </div>

            {/* small hints */}
            <div className="text-xs text-gray-400 text-center max-w-xs">
              BMI is a screening tool. For personalized assessment consult a
              healthcare professional.
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
