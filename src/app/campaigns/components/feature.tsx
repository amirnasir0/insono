"use client";
import React, { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
}

const features: Feature[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 text-blue-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6.75v-.75a3 3 0 00-3-3h-1.5a3 3 0 00-3 3v.75M9.75 6.75h4.5M9 11.25h6M9.75 15.75h4.5M12 21v.008h.008V21H12z"
        />
      </svg>
    ),
    title: "Smartphone Connection",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 text-blue-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9.75v4.5m0 0v4.5m0-4.5H7.5m4.5 0h4.5M9.75 4.5h4.5M9 6.75h6M5.25 9.75h13.5M3 12.75h18"
        />
      </svg>
    ),
    title: "Simply Charge Overnight",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 text-blue-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 7.5L12 3m0 0L7.5 7.5m4.5-4.5v18m6-9h-6m0 0h-6"
        />
      </svg>
    ),
    title: "Outstanding Speech Clarity",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 text-blue-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 9a3 3 0 113 3 3 3 0 01-3-3zm0 0V3M8.25 21H3m5.25 0h5.25m0 0v-4.5a3.75 3.75 0 00-3.75-3.75H9a3.75 3.75 0 00-3.75 3.75V21m10.5-12v6m6 0H3"
        />
      </svg>
    ),
    title: "Red Dot Design Award Winner",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10">
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8 px-4">
        2025’s latest mini hearing machine at a glance
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg p-6 rounded-md hover:shadow-xl transition"
          >
            <div className="mb-4">{feature.icon}</div>
            <p className="text-center text-lg font-medium text-gray-700">
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
