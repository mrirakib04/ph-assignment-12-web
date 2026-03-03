"use client";
import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import Link from "next/link";

const FaqClient = ({ faqs = [] }) => {
  return (
    <div className="min-h-screen bg-[#030712] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block p-3 rounded-2xl bg-blue-600/10 mb-4 border border-blue-500/20">
            <FaQuestionCircle className="text-3xl md:text-4xl text-blue-500" />
          </div>
          {/* Responsive sizing: text-2xl for tiny screens, text-4xl for sm, text-6xl for md+ */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-indigo-500 to-purple-600 leading-tight">
            Help Center & FAQ
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Everything you need to know about Care.io. Find answers to common
            inquiries and support details.
          </p>
        </div>

        {/* Accordions */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <Accordion
              key={faq.id}
              sx={{
                backgroundColor: "#0f172a",
                color: "#e2e8f0",
                borderRadius: "20px !important",
                border: "1px solid #1e293b",
                mb: 2,
                boxShadow: "none",
                "&:before": { display: "none" },
                "&.Mui-expanded": {
                  border: "1px solid #3b82f6",
                  margin: "0 0 16px 0 !important",
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <FaChevronDown className="text-blue-500 text-xs md:text-sm" />
                }
                sx={{ px: { xs: 2, sm: 4 }, py: { xs: 1, md: 2 } }}
              >
                {/* Title Sizing: lg for mobile, xl for tablet, 2xl for desktop */}
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.5rem" },
                    lineHeight: 1.3,
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  borderTop: "1px solid #1e293b",
                  pt: 3,
                  px: { xs: 2, sm: 4 },
                }}
              >
                <Typography
                  sx={{
                    color: "#94a3b8",
                    fontSize: { xs: "0.95rem", md: "1.06rem" },
                    lineHeight: 1.7,
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-20 md:mt-28 bg-linear-to-b from-[#0f172a] to-transparent p-8 md:p-20 rounded-4xl md:rounded-[48px] border border-slate-800 text-center relative overflow-hidden">
          <h2 className="text-xl sm:text-3xl md:text-5xl font-black mb-6">
            Still have questions?
          </h2>
          <Link
            href="/help"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 sm:px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl text-sm md:text-base transition-all active:scale-95"
          >
            Contact Support Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FaqClient;
