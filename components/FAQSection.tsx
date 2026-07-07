"use client";

import { useState } from "react";
import FAQItem from "./FAQItem";

interface FAQData {
  question: string;
  answer: string;
}

const faqData: FAQData[] = [
  {
    question: "What ingredients are in your products?",
    answer: "Placeholder answer 1.",
  },
  {
    question: "Are your products safe for puppies/kittens?",
    answer: "Placeholder answer 2.",
  },
  {
    question: "How long does shipping take?",
    answer: "Placeholder answer 2.",
  },
  {
    question: "Are your products vet-approved?",
    answer: "Placeholder answer 2.",
  },
  {
    question: "How should I store your products?",
    answer: "Placeholder answer 2.",
  },
  {
    question: "Is your packaging eco-friendly?",
    answer: "Placeholder answer 2.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white p-3">
      <div className="md:mx-30">
        <h2 className="text-[#E0027B] font-bold text-2xl text-center">
          Frequently Asked Questions
        </h2>

        <div className="max-w-2xl mx-auto">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
