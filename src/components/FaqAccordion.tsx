"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqAccordionItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqAccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} style={{ borderBottom: "1px solid #e8e8e8" }}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between py-5 text-left group"
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium pr-4 transition-colors" style={{ color: "#010f62" }}>
                {item.question}
              </span>
              <ChevronDown
                className={`ml-4 h-4 w-4 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                style={{ color: isOpen ? "#0033ff" : "#62718d" }}
              />
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="pb-6 text-base leading-relaxed pr-12" style={{ color: "#62718d" }}>
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
