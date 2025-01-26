import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        onClose();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen, onClose]);

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 modal-overlay"
      onClick={handleOutsideClick}
    >
      <div className="relative p-1 w-[90%] md:w-[70%] max-w-4xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 z-0"></div>
        <div className="relative bg-white p-4 rounded shadow-lg z-10">
          <button className="absolute top-2 right-2 text-black" onClick={onClose}>
            X
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

const Guidelines = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div id="guidelines" className="text-white py-10 px-5">
      <div className="container mx-auto max-w-6xl p-8 rounded-lg shadow-lg border-2 border-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500">
        <h2 className="relative font-bold text-[40px] tracking-wide text-center mb-8">
          Tech Horizon <span className="gradient-text-purple">Guidelines</span>
        </h2>

        <div className="mb-10">
          <h3 className="font-semibold text-[28px] mb-4">Rules and Regulations</h3>
          <div className="pl-5 space-y-4">
            <p>
              <strong>Team Composition:</strong> Teams can consist of <span className="gradient-text-purple">1 to 4 members</span>. All team members must be students of a university or college.
            </p>
            <p>
              <strong>Eligibility:</strong> Participants must present a <span className="gradient-text-purple">valid student ID</span>.
            </p>
            <p>
              <strong>Entry Fee:</strong> The entry fee is <span className="gradient-text-purple">₹2000 per team</span>. This includes meals.
            </p>
            <p>
              <strong>Code of Conduct:</strong> Participants are allowed to use open standard repositories, APIs, and publicly available libraries. The use of readymade or precompiled code will lead to disqualification. Progress must be tracked during the code-fest, and participants must push their code changes on GitHub.
            </p>
            <p>
              <strong>Final Domain:</strong> The final domain for the team will be disclosed on <span className="gradient-text-purple">February 4, 2025</span>.
            </p>
            <p>
              <strong>Judging Criteria:</strong> Innovation, Technical complexity, Design and user experience, Presentation.
            </p>
            <p>
              <strong>Decisions:</strong> Decisions by organizers and judges are final.
            </p>
            <p>
              <strong>Updates:</strong> Updates will be posted on social media and emailed to teams.
            </p>
          </div>
          <div className="flex justify-center mt-5">
            <button onClick={() => setModalOpen(true)} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded shadow-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-105">
              Register Now
            </button>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="font-semibold text-[28px] mb-4">Important Dates</h3>
          <div className="pl-5 space-y-4">
            <p>
              <strong>Abstract Submission:</strong> Last date: <span className="gradient-text-purple">February 10,, 2025</span>
            </p>
            <p>
              <strong>Team Confirmation:</strong> After <span className="gradient-text-purple">February 11, 2025</span>
            </p>
            <p>
              <strong>Payment:</strong> Payment of <span className="gradient-text-purple">₹1000 per team</span> must be made by <span className="gradient-text-purple">February 20, 2025</span>.
            </p>
            <p>
              <strong>Event Dates:</strong> <span className="gradient-text-purple">February 27 & 28, 2025</span>
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="font-semibold text-[28px] mb-4">Notes</h3>
          <div className="pl-5 space-y-4">
            <p>
              <strong>Note:</strong> The order preference of the domain is solely for our reference. We do not assure that the topic allocation will be based on your top preferences only.
            </p>
            <p>
              <strong>Note:</strong> All updates regarding the event will be posted on social media handles and mailed to each team.
            </p>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <iframe
          src="https://near.tl/sm/By8hFExpc"
          title="Registration Form"
          className="w-full h-[700px] border-0"
          style={{ overflow: "hidden", display: "block" }}
        ></iframe>
      </Modal>
    </div>
  );
};

export default Guidelines;