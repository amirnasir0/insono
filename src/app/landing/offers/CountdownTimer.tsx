"use client";

import { useEffect, useState } from "react";

const LS_KEY = "insono_offer_ends_at";
const DURATION_MS = 2 * 60 * 60 * 1000; // 2 hours

function pad(n: number) { return String(n).padStart(2, "0"); }

export default function CountdownTimer({ endsAt }: { endsAt: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Get or create a persistent deadline in localStorage
    let deadline: number;
    const stored = localStorage.getItem(LS_KEY);

    if (stored) {
      deadline = parseInt(stored, 10);
      // If stored deadline has already passed, reset it with a fresh 2 hours
      if (deadline <= Date.now()) {
        deadline = Date.now() + DURATION_MS;
        localStorage.setItem(LS_KEY, String(deadline));
      }
    } else {
      // First visit — use server endsAt if valid, else set fresh 2-hour deadline
      const serverDeadline = new Date(endsAt).getTime();
      deadline = serverDeadline > Date.now() ? serverDeadline : Date.now() + DURATION_MS;
      localStorage.setItem(LS_KEY, String(deadline));
    }

    const calc = () => {
      const diff = deadline - Date.now();
      if (diff <= 0) {
        // Auto-reset silently with a new 2-hour window
        deadline = Date.now() + DURATION_MS;
        localStorage.setItem(LS_KEY, String(deadline));
        return;
      }
      const days    = Math.floor(diff / 86400000);
      const hours   = Math.floor((diff % 86400000) / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    };

    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [endsAt]);

  const units = [
    { label: "Days",  value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins",  value: timeLeft.minutes },
    { label: "Secs",  value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center gap-2">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            <div className="bg-[#0D2240] text-white font-black text-xl sm:text-2xl rounded-xl px-3 py-2 min-w-[52px] text-center tabular-nums leading-none">
              {pad(u.value)}
            </div>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">{u.label}</span>
          </div>
          {i < 3 && <span className="text-[#0D2240] font-black text-xl mb-4">:</span>}
        </div>
      ))}
    </div>
  );
}
