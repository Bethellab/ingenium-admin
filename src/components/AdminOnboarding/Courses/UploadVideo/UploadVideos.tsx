import React, { useState } from "react";
import { image } from "@/assets/image/image";
import TextEditor from "./TextEditor";

const UploadVideos = () => {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [uploadComplete, setUploadComplete] = useState(false);  // To track when the upload is finished

    // Handle file selection
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setUploadComplete(false);  // Reset upload complete status when a new file is selected
            console.log("Selected file:", selectedFile);  // Debug: Log the selected file
        }
    };

    // Simulate the upload process
    const handleUpload = () => {
        if (!file) {
            console.log("No file selected");  // Debug: Log no file selected
            return;
        }

        console.log("Uploading file:", file);  // Debug: Log the file to be uploaded

        // Simulate an upload by increasing progress every 100ms
        setUploading(true);
        let progress = 0;
        const uploadInterval = setInterval(() => {
            if (progress < 100) {
                progress += 1;
                setUploadProgress(progress);
            } else {
                clearInterval(uploadInterval);
                setUploading(false);  // End the upload simulation
                setUploadComplete(true);  // Set upload complete status
                console.log("Upload completed");  // Debug: Log completion
            }
        }, 100);
    };

    return (
        <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center border py-10 rounded-md">
                {/* If uploading, show the progress bar */}
                {uploading ? (
                    <>
                        <div className="w-full max-w-xs ">
                            <div className="flex flex-col justify-center items-center ">
                                <img src={image.movie} alt="Movie upload" className="w-4 h-4" />
                                <h2 className="text-xl font-semibold">Upload a video...</h2>

                            </div>

                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between ">
                                    <div>
                                        <span className="font-semibold text-xs text-blue-600">
                                            {Math.round(uploadProgress)}%
                                        </span>
                                    </div>
                                </div>
                                <div className="flex mb-2 w-full bg-gray-200 rounded">
                                    <div
                                        style={{ width: `${uploadProgress}%` }}
                                        className="bg-blue-600 text-xs leading-none py-1 text-center   text-white rounded"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600">Uploading video...</p>
                    </>
                ) : uploadComplete ? (
                    <div>
                        <img src={image.videoimg} />
                    </div>
                ) : (
                    <>
                        {/* If not uploading or complete, show the regular upload UI */}
                        <img src={image.movie} alt="Movie upload" />
                        <h2 className="text-xl font-semibold">Upload a video...</h2>
                        <p className="text-gray-600">Please use .mp4, .mov, .mpeg, or .webm.</p>

                        {/* Hidden file input */}
                        <div className="flex flex-col justify-center items-center">
                            {/* Hidden input field for file selection */}
                            <input
                                type="file"
                                accept=".mp4,.mov,.mpeg,.webm"
                                onChange={handleFileChange}
                                id="fileInput"
                                 // Hides the input field
                            />

                            {/* Button that triggers the file input */}
                            <label htmlFor="fileInput">
                                <button
                                    type="button"
                                    className="py-2 px-4 border rounded-md mt-4 bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-400"
                                    disabled={uploading || !file}
                                    onClick={handleUpload}
                                >
                                    {uploading ? "Uploading..." : "Upload File"}
                                </button>
                            </label>
                        </div>
                    </>
                )}
            </div>

            <div>
                <TextEditor />
            </div>
        </div>
    );
};

export default UploadVideos;
