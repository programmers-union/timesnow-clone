"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const EditorialPolicyPage = () => {
  return (
    <section className=" editorial-policy">

             {/* Heading */}
          <div className="row   text-center about-hero p-5">
            <h1 className="display-5 fw-bold text-center  text-white">
              Editorial Policy
            </h1>
                      <p className="lead mb-0">
                No spin. No hidden agendas. Just reporting that you can trust.
                </p>
          </div>
      <div className="row  justify-content-center py-5 container">
        <div className="col-lg-9">
     

          {/* Intro */}
          <p className="lead mb-4 text-muted">
            At <span className="text-highlight">NewsFlashPro</span>, we don’t do
            corporate messaging. We’re a team of journalists working online from
            different places, and our goal is simple:{" "}
            <em>tell the story straight</em>. No spin. No hidden agendas. Just
            reporting that you can trust.
          </p>
          <p className="mb-5 body-text">
            We have a few rules that guide everything we do — not because we’re
            perfect, but because we care about getting it right.
          </p>

          {/* Sections */}
          {[
            {
              title: "Facts Come First",
              text: "Every claim we make is checked. When someone says something important, we trace it to the source. When we share numbers or data, we go back to the original document or study. If we’re unsure about something, we either explain it clearly or hold off until we know more.",
            },
            {
              title: "Independence Matters",
              text: "We don’t take money from big corporations, political groups, or anyone trying to influence what we report. Our stories are guided by what actually matters to readers, not by outside pressure.",
            },
            {
              title: "Transparency is Key",
              text: "If a story has limits — conflicting accounts, uncertainty, or sources we can’t fully name — we say so. We explain our process and make it clear when anonymity is necessary to protect someone.",
            },
            {
              title: "Fairness, Not False Balance",
              text: "We aim to give the full picture. That doesn’t mean giving everyone equal space — it means reporting the facts so you understand the story.",
            },
            {
              title: "Opinion vs. News",
              text: "Some pieces reflect opinions. These are clearly labeled. They do not change the facts in our reporting and don’t represent NewsFlashPro as a whole.",
            },
            {
              title: "Corrections",
              text: "We make mistakes. When that happens, we fix them and explain what changed. You can contact us at corrections@newsflashpro.com. Every correction is reviewed by an editor and clearly noted.",
            },
            {
              title: "Outside Contributors",
              text: "Sometimes we work with guest reporters or contributors. Even then, our standards stay the same: check facts, be fair, and be transparent. If a story is by a guest or the collective staff, we’ll clearly say so.",
            },
          ].map((section, idx) => (
            <div key={idx} className="mb-5">
              <h3 className="h4 fw-bold section-heading mb-3">
                {section.title}
              </h3>
              <p className="body-text">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialPolicyPage;
