"use client";
import React from "react";

const colorGroups = {
  "Primary Colors": {
    "Primary-900": "#39089D",
    "Primary-800": "#4A21A7",
    "Primary-700 (Opacity 70%)": "#39089DB2",
    "Primary-600": "#39089D",
  },
  "Event Colors": {
    Error: "#F04438",
    Warning: "#F79009",
    Caution: "#FEC84B",
    Success: "#12B76A",
  },
  "Secondary Colors": {
    "Secondary-Main": "#C1BCFF",
    "Secondary-Light": "#FFF8EC",
    "Secondary-Soft": "#C6F806",
  },
  "Button Colors": {
    "Button-25": "#FCFCFD",
    "Button-50": "#F8F9FC",
    "Button-100": "#EAECF5",
  },
  "Gray / Font Colors": {
    "Gray-900": "#101828",
    "Gray-800": "#252B37",
    "Gray-700": "#414651",
    "Gray-600": "#535862",
    "Gray-500": "#717680",
    "Gray-400": "#A4A7AE",
    "Gray-300": "#D5D7DA",
    "Gray-200": "#D5D7DA",
    "Gray-100": "#F5F5F5",
    "Gray-50": "#FAFAFA",
    "Gray-25": "#FDFDFD",
  },
};

export default function BrandGuidelinesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <header className="border-b pb-6">
          <h1 className="text-4xl font-bold text-gray-900">Brand Guidelines</h1>
          <p className="text-gray-600 mt-2">
            The official visual identity, colors, and typography for our brand.
          </p>
        </header>

        {/* Typography Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Typography
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Font Family
              </h3>
              <div className="p-4 bg-white border rounded-lg shadow-sm">
                <p className="text-gray-900 text-base">
                  <span className="font-semibold">Public Sans</span> — Modern,
                  clean, and optimized for readability.
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Font weights: 300, 400, 500, 600, 700
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-lg border shadow-sm">
                <p className="text-xs uppercase text-gray-500 mb-2">
                  Heading Style
                </p>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  Heading 1 — Bold 4xl
                </h1>
                <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                  Heading 2 — Semi-bold 3xl
                </h2>
                <h3 className="text-2xl font-medium text-gray-700 mb-2">
                  Heading 3 — Medium 2xl
                </h3>
                <h4 className="text-xl font-medium text-gray-700">
                  Heading 4 — Medium xl
                </h4>
              </div>

              <div className="p-6 bg-white rounded-lg border shadow-sm">
                <p className="text-xs uppercase text-gray-500 mb-2">
                  Body Style
                </p>
                <p className="text-base text-gray-800 mb-2">
                  Body text example using Public Sans Regular 400. This
                  paragraph demonstrates how text will appear across most
                  interfaces, ensuring readability and modern aesthetics.
                </p>
                <p className="text-sm text-gray-600">
                  Small text example (Public Sans 400). Ideal for metadata,
                  captions, and form labels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette Section */}
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
