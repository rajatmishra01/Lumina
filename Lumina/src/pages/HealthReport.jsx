import React from "react";
import { useNavigate } from "react-router-dom";

export default function HealthReport() {
  const navigate = useNavigate();

  return (
    <div className="mt-80 space-y-4">
      <button onClick={() => navigate(-1)} className="text-sm text-blue-600">← Back</button>
      <h1 className="text-2xl font-semibold">Health Report</h1>
      <p className="text-gray-600">Detailed health report page - replace SVG placeholder with real charts.</p>

      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <div className="h-64">Chart placeholder</div>
      </div>
    </div>
  );
}
