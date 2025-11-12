"use client";
import React from "react";

const colorGroups = {
  "Primary Colors": {
    "Primary-900": "#42307D",
    "Primary-800": "#53389E",
    "Primary-700": "#6941C6",
    "Primary-600": "#7F56D9",
    "Primary-500": "#9E77ED",
    "Primary-400": "#B692F6",
    "Primary-300": "#D6BBFB",
    "Primary-200": "#E9D7FE",
    "Primary-100": "#F4EBFF",
    "Primary-50": "#F9F5FF",
    "Primary-25": "#FCFAFF",
  },
  "Event Colors": {
    Error: "#F04438",
    Warning: "#F79009",
    Caution: "#FEC848",
    "Success-500": "#12B76A",
  },
  "Button Colors": {
    "Button-25": "#FCFCFD",
    "Button-50": "#F8F9FC",
    "Button-100": "#EAECF5",
  },
  "Gradient Colors": {
    "Gradient-600": "#7F56D9",
  },
};

export default function BrandGuidelinesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="border-b pb-6">
          <h1 className="text-4xl font-bold text-gray-900">Brand Guidelines</h1>
          <p className="text-gray-600 mt-2">
            This page defines the brand color palette for consistent use across
            all applications.
          </p>
        </header>

        {Object.entries(colorGroups).map(([groupName, colors]) => (
          <section key={groupName}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              {groupName}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
              {Object.entries(colors).map(([name, hex]) => (
                <div
                  key={name}
                  className="flex flex-col items-center rounded-xl overflow-hidden bg-white shadow-sm border border-gray-200"
                >
                  <div
                    className="w-full h-20"
                    style={{ backgroundColor: hex }}
                  />
                  <div className="p-3 text-center">
                    <p className="font-medium text-sm text-gray-800">{name}</p>
                    <p className="text-xs text-gray-500">{hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
