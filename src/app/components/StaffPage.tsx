"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const StaffPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="staff-hero py-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-3">NewsFlashPro Staff</h1>
              <p className="lead mb-0">
                Journalism is teamwork. Every story reflects many hands.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-9 mx-auto">
            <p className="intro-text mb-4">
              Sometimes, the stories we publish are the result of collaboration.
              At <span className="text-highlight">NewsFlashPro</span>, reporting
              often means multiple hands working together — fact-checking,
              editing, reviewing, and shaping an article until it’s ready for
              readers. When you see{" "}
              <strong>“NewsFlashPro Staff”</strong> as the byline, it usually
              means the story came from a shared effort inside our newsroom or
              from trusted outside contributors whose work met our standards.
            </p>

            <div className="body-text mb-4">
              <p>
                This byline represents teamwork. Some stories involve quick
                breaking updates, while others are long investigations that take
                weeks of back-and-forth. Either way, the staff credit reflects
                that no single person could (or should) take sole ownership.
                It’s our way of saying: the whole newsroom stands behind this
                piece.
              </p>

              <p>
                We also use <strong>NewsFlashPro Staff</strong> when we publish
                guest work from respected writers, researchers, or
                subject-matter experts. Before anything goes live, our editors
                review the content closely, confirm the information, and make
                sure it fits our editorial policy. If it runs under the staff
                name, you can trust it meets the same standards as everything
                else on the site.
              </p>
            </div>

            <div className="quote-section p-4 rounded mb-5">
              <p className="h5 mb-0 text-dark">
                “The staff byline means the whole newsroom stands together.”
              </p>
            </div>

            <p className="body-text">
              You can always contact the team directly at{" "}
              <a href="mailto:staff@newsflashpro.com">staff@newsflashpro.com</a>{" "}
              if you’d like to pitch a story, share feedback, or ask about one
              of our articles. We take every message seriously and make sure it
              reaches the right person inside the newsroom.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Band */}
      <div className="py-5 mt-5 ">

      </div>
    </>
  );
};

export default StaffPage;
