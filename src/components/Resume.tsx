import React, { useState } from "react";
import { Download } from "lucide-react";

const Resume: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleResumeAction = (action: "view" | "download") => {
    const resumePath = "/assests/GREESHMANTH POKURU.pdf";

    if (action === "view") {
      // View Resume - Opens in a new tab
      window.open(resumePath, "_blank");
    } else if (action === "download") {
      // Download Resume
      const link = document.createElement("a");
      link.href = resumePath;
      link.download = "GREESHMANTH POKURU.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    setShowOptions(false); // Close the options after action
  };

  return (
    <section id="resume" className="py-20 ">
      <div className="container mx-auto px-6 text-center">
        <h2 className="section-title text-center mb-16 relative">My Resume</h2>

        <div className="max-w-md mx-auto glass-card p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center">
          <h3 className="text-2xl font-bold text-purple mb-6">Download My CV</h3>
          <p className="text-muted-foreground mb-8">
            Get a comprehensive overview of my skills, experience, and qualifications.
          </p>
          <button
            className="btn-primary flex items-center gap-2 group"
            onClick={() => setShowOptions(!showOptions)} // Toggle options on click
          >
            <Download size={18} className="group-hover:animate-bounce" />
            <span>Resume</span>
          </button>

          {/* Message with View and Download Options */}
          {showOptions && (
            <div className="mt-4 text-center">
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                What would you like to do?
              </p>
              <div className="flex justify-center gap-4">
                <button
                  className="btn-secondary px-4 py-2 rounded-lg"
                  onClick={() => handleResumeAction("view")}
                >
                  View Resume
                </button>
                <button
                  className="btn-primary px-4 py-2 rounded-lg"
                  onClick={() => handleResumeAction("download")}
                >
                  Download Resume
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;