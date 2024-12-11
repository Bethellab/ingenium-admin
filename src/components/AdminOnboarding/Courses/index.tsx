import { useState } from "react";
import { image } from "@/assets/image/image";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [courseName, setCourseName] = useState("");
  const [courseTagline, setCourseTagline] = useState("");
  const [courseDescription, setCourseDescription] = useState("");

  const progress = (step / 4) * 100;

  const navigate = useNavigate()

  const handleContinue = () => {
    if (step === 1 && courseName) setStep(step + 1);
    if (step === 2 && courseTagline) setStep(step + 1);
    if (step === 3 && courseDescription) setStep(step + 1);
  };

  const handleReset = () => {
    setIsModalOpen(false);
    setStep(1);
    setCourseName("");
    setCourseTagline("");
    setCourseDescription("");
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center w-full lg:w-[600px] p-6 flex-col gap-6 lg:mt-28">
        <div className="flex items-center flex-col gap-2">
          <img src={image.teaching} alt="Teaching" />
          <span className="text-2xl font-semibold text-center lg:whitespace-nowrap">
            Start creating your first course!
          </span>
          <span className="text-md font-normal text-[#6c6a6a] text-center w-96">
            Share your expertise and inspire others by launching your very own course today.
          </span>
          <button
            className="bg-primary text-center py-2 text-white rounded-xl w-96 mt-4"
            onClick={() => setIsModalOpen(true)}
          >
            Create your course now
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] h-[70%] max-w-[500px] relative">
            {/* Progress Bar */}
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
              <div
                className="bg-primary h-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Modal Content */}
            {step === 1 && (
              <div className="flex flex-col  mt-8">
                <div className="flex items-center justify-center flex-col">

                  <h2 className="text-2xl font-semibold mb-2">What's Your Course name?</h2>
                  <p className="w-96 text-gray-600">Pick a name that best represents your course content. Don’t worry—you can always edit it later if needed.</p>

                </div>

                <div className="mt-10 flex flex-col gap-2">
                  <label className="text-md">Course name</label>
                  <input
                    type="text"
                    placeholder="Enter course name"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                    className="border rounded-xl w-full p-2 mb-4"
                  />

                </div>

                <div className="mt-44 flex items-center justify-end gap-4">
                  <button
                    className="bg-gray-300 py-2 rounded-lg  w-32"

                    onClick={handleReset}
                  >
                    Cancel
                  </button>
                  <button
                    className={`w-32 py-2 rounded-lg ${courseName
                      ? "bg-primary text-white"
                      : "bg-blue-300 text-white cursor-not-allowed"
                      }`}
                    disabled={!courseName}
                    onClick={handleContinue}
                  >
                    Continue
                  </button>


                </div>

              </div>
            )}

            {step === 2 && (
              <div className="flex flex-col  mt-8">
                <div className="flex items-center justify-center flex-col">

                  <h2 className="text-2xl font-semibold mb-2">Create a Catchy Tagline</h2>
                  <p className="w-96 text-gray-600">Summarize what your course is about in a few impactful words. Keep it concise and engaging.</p>

                </div>

                <div className="mt-10 flex flex-col gap-2">
                  <label className="text-md">Course tagline</label>
                  <input
                    type="text"
                    placeholder="Enter course tagline"
                    value={courseTagline}
                    onChange={(e) => setCourseTagline(e.target.value)}
                    className="border rounded-md w-full p-2 mb-4"
                  />

                </div>


                <div className="mt-44 flex items-center justify-end gap-4">
                  <button
                    className="bg-gray-300 py-2 rounded-lg  w-32"

                    onClick={handleReset}
                  >
                    Cancel
                  </button>
                  <button
                    className={`w-32 py-2 rounded-lg ${courseTagline
                      ? "bg-primary text-white"
                      : "bg-blue-300 text-white cursor-not-allowed"
                      }`}
                    disabled={!courseTagline}
                    onClick={handleContinue}
                  >
                    Continue
                  </button>


                </div>

              </div>
            )}

            {step === 3 && (
              <div className="flex flex-col  mt-8">
                <div className="flex items-center justify-center flex-col">

                  <h2 className="text-2xl font-semibold mb-2">Describe What’s Included</h2>
                  <p className="w-96 text-gray-600">Give learners a sneak peek into your course. Briefly outline key topics and what they will gain by the end of it.</p>

                </div>

                <div className="mt-10 flex flex-col gap-2">
                  <label className="text-md">Description</label>
                  <textarea
                    placeholder="Describe the course content"
                    value={courseDescription}
                    onChange={(e) => setCourseDescription(e.target.value)}
                    className="border rounded-xl w-full p-2 mb-4"
                    rows={5}
                  />

                </div>


                <div className="mt-16 flex items-center justify-end gap-4">
                  <button
                    className="bg-gray-300 py-2 rounded-lg  w-32"

                    onClick={handleReset}
                  >
                    Cancel
                  </button>
                  <button
                    className={`w-32 py-2 rounded-lg ${courseDescription
                      ? "bg-primary text-white"
                      : "bg-blue-300 text-white cursor-not-allowed"
                      }`}
                    disabled={!courseDescription}
                    onClick={handleContinue}
                  >
                    Continue
                  </button>


                </div>

              </div>
            )}

            {step === 4 && (
              <div className="flex items-center flex-col gap-2">

                <div className="mt-24 flex items-center flex-col">
                  <img src={image.teaching} alt="Teaching" />
                  <p className="font-bold text-xl">{courseName} is now Live!</p>

                  <p className="text-gray-600">Congrats! You’ve successfully created your course</p>

                </div>




                <button
                  className="bg-primary text-white py-2 px-6 rounded-lg mt-4 w-96"
                  // onClick={handleReset}
                  onClick={() => navigate('/courses/uploadvideo')}
                >
                 Let's Proceed
                </button>
              </div>
            )}

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={handleReset}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
