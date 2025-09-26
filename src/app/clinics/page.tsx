// app/clinic/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

/* ---------- Types ---------- */
interface Clinic {
  id: string;
  name: string;
  locationLine: string;
  address: string;
  hours: string;
  tag?: string;
  catSlug?: string;
}

/* ---------- Data ---------- */
const clinics: Clinic[] = [
  {
    id: "vinod-nagar",
    name: "Insono Hearing Cänic - Vinod Nagar",
    locationLine: "VütOd Nagar — Dehi",
    address:
      "0-251 Ground Floor, O Block. West Vinod Nagar, New Delhi - 110092",
    hours: "Open by pm",
    tag: "Clinic",
  },
  {
    id: "banka",
    name: "Insono Hearing Cünic",
    locationLine: "Banka — Bihar",
    address:
      "Enjoy Better Hearing In, Navjy0ti Nursing Horne, near Indian Petrol Pump, Jagatpur. Banka. Bihar • 813102 India",
    hours: "Open by pm",
    tag: "Clinic",
  },
  {
    id: "deoghar",
    name: "Insono Hearing Clinic - Deoghar",
    locationLine: "— Jharkhand",
    address:
      "First Floor House No 349 A Purnima Height Ambedkar Chowk. near Krishna ENT. Barmasia, Deoghar, Jharkhand 814112. India",
    hours: "Open Closes by",
  },
  {
    id: "bhagalpur",
    name: "Insono Hearing Clinic - Bhagalpur",
    locationLine: "Bhagalpur —",
    address:
      "New Hearing Aid in Kalpana Oro Dental & implant Centre in near. Hatiya Rd. Tilkamanjhi. Bhagalpur, Bihar 812001, India",
    hours: "Open Closes by",
  },
  {
    id: "noida",
    name: "Insono Hearing Cünic - Noida",
    locationLine: "Noida — Uttar Pridesh",
    address:
      "E -142 Ground Floor, Sec 20. Noida Kerala Ayurveda Uttar Pradesh - 201301",
    hours: "Open by pm",
    tag: "VÉw Clinic",
  },
  {
    id: "asansol",
    name: "Insono Hearing Clinic",
    locationLine: "— West Weng•l",
    address: "Gt Road, Asansol",
    hours: "Open Closes by",
    tag: "- Asansol",
  },
  {
    id: "dehradun",
    name: "Insono Hearing Cänic",
    locationLine: "Dehradun — Uttrühand",
    address: "Dehradun",
    hours: "Open by 7 pm",
    tag: "- Dehradun",
  },
  {
    id: "gurgaon",
    name: "Insono Hearing Clinic - Gurgaon",
    locationLine: "Gurgson — H&yana",
    address:
      "Shop No-232, First Floor. Central Arcade. Mehrauli Gurgaon Rd Opposite Sahara Mall. A Bbck. DLF Phase 2, Sector 25. Gurugram Sarho,L Haryana 122008",
    hours: "Open Closes by pm",
  },
  {
    id: "giridih",
    name: "Insono Hearing Clinic — Giridih",
    locationLine: "Giridih — Jharkhand",
    address:
      "in Basernent, Under Bata Showroom, A & S Building Court Rd opposite of Old Telephone exchange office, Giridih Jharkhand 815301, India",
    hours: "Open Closes by pm",
  },
  {
    id: "lajpat-nagar",
    name: "Insono Hearing Clinic - Lajpat Nagar",
    locationLine: "Lajpat — Delhi",
    address:
      "E- 195, Ground Floor, Amar Colony, Lajpat Nagar-4 New Delhi -1b0024",
    hours: "Open Closes pm",
  },
  {
    id: "jamshedpur",
    name: "Insono Hearing Clinic — Jamshedpur",
    locationLine: "— hark and Jamshedpur",
    address: "Jamshedpur",
    hours: "Open by pm",
  },
  {
    id: "lucknow",
    name: "Insono Hearing Clinic — Lucknow",
    locationLine: "Lucknow — Uttar Pradesh",
    address:
      "10/36, Tedhi Pulia Ring Rd. near Narayan Automobile, behind Mahendra Agency. Shekhupura Vikas Nagar, Lucknow, Pradesh 226022",
    hours: "Open by 7 pm",
  },
  {
    id: "ranchi",
    name: "Insono Hearing Clinic — Ranchi",
    locationLine: "- Ranchi",
    address: "Online Service Available",
    hours: "Open by pm",
  },
  {
    id: "jalandhar",
    name: "Insono Hearing Cänic - Jalandhar",
    locationLine: "Service",
    address: "Jalandhar",
    hours: "Open Closes by 7 pm",
  },
  {
    id: "jammu",
    name: "Insono Hearing Cänic - Jammu",
    locationLine: "Jammu — Jammu & Kashmir",
    address: "Jammu",
    hours: "Service Open Closes by 7 pm",
  },
  {
    id: "garia-kolkata",
    name: "Insono Hearing Cänic - Garia Kolkata",
    locationLine: "Garia — West Bengal",
    address:
      "ACOUSTIC HEARING SOLUTION P-515r Raja S C Mullick Road, Garia Kolkata • 700084 Opp. Sreeleathers.",
    hours: "Open Closes by 7 pm",
  },
  {
    id: "chandigarh",
    name: "Insono Hearing Clinic - Chandigarh",
    locationLine: "ChM'digarh — Punjab",
    address: "Service Available",
    hours: "Open Closes Sy",
  },
  {
    id: "ambala",
    name: "Insono Hearing Clinic - Ambala",
    locationLine: "— Punjab",
    address: "Service Available",
    hours: "Open Closes by pm",
  },
  {
    id: "patna",
    name: "Insono Hearing Clinic - Patna",
    locationLine: "Patna — Bihar",
    address: "Service Available",
    hours: "Open Closes by pm",
  },
  {
    id: "ludhiana",
    name: "Insono Hearing Clinic — Ludhiana",
    locationLine: "LudhiMa — Punjab",
    address: "Service Avaiable",
    hours: "Open Sy pm",
  },
  {
    id: "hyderabad",
    name: "Insono Hearing Clinic — Hyderabad",
    locationLine: "Service Avaiable",
    address: "Hyderabad",
    hours: "Open Closes by 7 pm",
  },
  {
    id: "kolkata",
    name: "Insono Hearing Clinic — Kolkata",
    locationLine: "Kolkata — West",
    address:
      "13 Ram Mohan Dutta Road, (Near Northern Park) Bhawanipur Kolkata-700020",
    hours: "Open by pm",
  },
];

/* ---------- Comparison Items ---------- */
const comparisonItems: string[] = [
  "Booking for an appointment at hearing clinics is quick and easy",
  "Free hearing checkup at any time and anywhere",
  "Generating free preliminary hearing report",
  "Visiting a hearing clinic is mandatory",
  "Home visits by the hearing experts",
  "Live interaction with hearing experts at any time",
  "Many choices for hearing aids",
  "Clinic visit for the purchase of hearing aid accessories is compulsory",
  "Reminder for the service and warranty of the hearing aid",
  "Transparency while selecting the hearing aid by using Latest Hii5 technology is available",
  "Hassle-free hearing care experience at your fingertips",
];

/* ------------------ Component ------------------ */
export default function ClinicPage() {
  return (
    <main className="bg-gradient-to-b from-[#eaf5ff] to-white text-gray-900">
      {/* Breadcrumb area */}
      <section className="py-12 pt-24">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#112f70]">
            Insono Hearing Clinics
          </h1>
          <p className="mt-2 text-[#112f70]">
            Best hearing experiences at Insono Hearing Clinics. Trusted by 1
            Million+ satisfied customers.
          </p>
        </div>
      </section>

      {/* Clinics grid */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {clinics.map((c) => (
                <article
                  key={c.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full"
                >
                  <div className="bg-[#e9f2ff] p-3">
                    <p className="text-[#023784] font-semibold">{c.name}</p>
                    {c.tag && (
                      <p className="text-xs text-gray-600 mt-1">{c.tag}</p>
                    )}
                  </div>

                  <div className="p-4 flex-1">
                    <p className="text-sm font-semibold text-[#023784]">
                      {c.locationLine}
                    </p>
                    <p className="mt-2 text-sm text-gray-700 whitespace-pre-line">
                      {c.address}
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="text-green-600 font-bold text-sm">
                        {c.hours.includes("Open") ? "Open" : c.hours}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {c.hours.includes("Closes") ? "· " + c.hours : ""}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 border-t bg-white">
                    <Link
                      href={`/appointment?cat=${encodeURIComponent(
                        c.catSlug || c.id
                      )}&slug=${encodeURIComponent(c.id)}`}
                      className="block text-center bg-[#023784] text-white py-2 rounded-md font-semibold"
                    >
                      Book Appointment
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-8 bg-gradient-to-r from-[#4b72b5] to-[#023784]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white">
              Insono Vs Other Providers
            </h3>
            <p className="text-white">
              How we excel compared to other providers
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl overflow-hidden">
              <tbody>
                <tr className="border-b">
                  <td className="p-4 w-1/2"></td>
                  <td className="p-4 text-center bg-[#eaf2ff] w-1/4">
                    <div className="mx-auto w-36">
                      <Image
                        src="/logo.webp"
                        alt="Insono"
                        width={200}
                        height={80}
                        className="mx-auto"
                      />
                    </div>
                  </td>
                  <td className="p-4 text-center font-bold w-1/4">Others</td>
                </tr>

                {comparisonItems.map((row, idx) => {
                  const othersTickExceptions = [
                    "Visiting a hearing clinic is mandatory",
                    "Clinic visit for the purchase of hearing aid accessories is compulsory",
                  ];
                  const othersHasTick = othersTickExceptions.includes(row);

                  return (
                    <tr key={idx} className="border-b">
                      <td className="p-4 text-sm text-gray-700">{row}</td>
                      <td className="p-4 text-center bg-[#eaf2ff]">
                        <Image
                          src="https://storage.googleapis.com/hz-prd-media/static/hzv0.0.0.150/images/website/hz_greentickroun_icon.svg"
                          alt="tick"
                          width={28}
                          height={28}
                          className="mx-auto"
                        />
                      </td>
                      <td className="p-4 text-center">
                        {othersHasTick ? (
                          <Image
                            src="https://storage.googleapis.com/hz-prd-media/static/hzv0.0.0.150/images/website/hz_greentickroun_icon.svg"
                            alt="tick"
                            width={28}
                            height={28}
                            className="mx-auto"
                          />
                        ) : (
                          <Image
                            src="https://storage.googleapis.com/hz-prd-media/static/hzv0.0.0.150/images/website/hz_cancel_icon.svg"
                            alt="cross"
                            width={28}
                            height={28}
                            className="mx-auto"
                          />
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
