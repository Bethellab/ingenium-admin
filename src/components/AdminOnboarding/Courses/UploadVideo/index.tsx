import { image } from '@/assets/image/image'
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'

import { Link, useNavigate } from 'react-router-dom'
import UploadVideos from './UploadVideos'
import UploadQuiz from './UploadQuiz'



const ToggleSwitch = () => (
    <div className="flex items-center justify-end w-[32px] h-[20px] bg-gray-400/80 rounded-full relative">
        <div className="w-[17px] h-[17px] bg-white rounded-full shadow mt-[1.5px] ml-[1.5px]" />
    </div>
);


// Define types for chapter and lesson data
type Chapter = {
    title: string;
    lessons: string[];  // For video lessons
    quizzes: string[];  // For quizzes
    isOpen: boolean;
};



const UploadVideo: React.FC = () => {

    const navigate = useNavigate()

    // State to hold chapters and lessons
    const [chapters, setChapters] = useState<Chapter[]>([
        { title: 'Chapter 1', lessons: ['Lesson 1', 'Lesson 2'], quizzes: ['Quiz'], isOpen: true },
    ]);


    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [showLessonType, setShowLessonType] = useState<boolean>(false);
    const [selectedLessonType, setSelectedLessonType] = useState<string>('Video');
    const [selectedQuizType, setSelectedQuizType] = useState<string>('Quiz');
    const [currentChapterIndex, setCurrentChapterIndex] = useState<number | null>(null);
    const [selectedLesson, setSelectedLesson] = useState<string | null>(null);


    const handleLessonClick = (lesson: string, type: string) => {
        setSelectedLesson(lesson);  // Track selected lesson
        setShowLessonType(true);  // Show the lesson type
        setSelectedLessonType(type);  // Set the lesson type (either 'Video' or 'Quiz')
    };


    // Add a new chapter
    // Add a new chapter
    const addChapter = (): void => {
        setChapters([
            ...chapters,
            { title: `Chapter ${chapters.length + 1}`, lessons: [], quizzes: [], isOpen: false },
        ]);
    };

    // Add a new lesson to a specific chapter
    const addLesson = (chapterIndex: number): void => {
        setCurrentChapterIndex(chapterIndex); // Set the chapter index for adding a lesson
        setIsModalOpen(true); // Open the modal when adding a lesson
    };

    // Toggle the visibility of lessons for a specific chapter
    const toggleLessons = (chapterIndex: number): void => {
        const newChapters = [...chapters];
        newChapters[chapterIndex].isOpen = !newChapters[chapterIndex].isOpen;
        setChapters(newChapters);
    };

    const deleteChapter = (chapterIndex: number) => {
        const newChapters = chapters.filter((_, index) => index !== chapterIndex);
        setChapters(newChapters);
    };

    // Handle lesson type change
    // const handleLessonTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setSelectedLessonType(event.target.value);
    // };

    // Handle modal cancellation
    const handleCancel = () => {
        setIsModalOpen(false); // Close the modal without making any changes
    };

    // Create lesson (with dynamic lesson number)
    const handleCreateLesson = () => {
        if (currentChapterIndex !== null) {
            const newChapters = [...chapters];
            const chapter = newChapters[currentChapterIndex];

            if (selectedLessonType === 'Video') {
                // Add a new video lesson
                const newLessonName = ` Lesson ${chapter.lessons.length + 1}`;
                chapter.lessons.push(newLessonName);
            } else if (selectedLessonType === 'Quiz') {
                // Add a new quiz
                const newQuizName = `Quiz`;
                chapter.quizzes.push(newQuizName);  // Make sure to have 'quizzes' array
            }

            setChapters(newChapters);  // Update the chapters state
            setIsModalOpen(false);  // Close the modal
            setSelectedLessonType('Video');  // Reset lesson type
            setSelectedQuizType('Quiz');  // Reset quiz type
        }
    };

    return (
        <div>

            <div className="flex justify-between items-center border-b py-2 px-4">
                {/* Breadcrumb */}
                <nav className="text-sm sm:text-lg text-gray-600 px-4 md:px-10 py-2">
                    <Link to="/courses" className="">
                        Courses
                    </Link>
                    <span className="mx-2">{'>'}</span>
                    <Link to="/home">
                        Money Matter
                    </Link>
                    <span className="mx-2">{'>'}</span>
                    <span className="font-semibold">Lession 1</span>
                </nav>


                <div>

                    <div className='flex items-center gap-4'>
                        <button className="bg-white border rounded-md  px-2 py-2" >Preview</button>
                        <button className="bg-primary text-white rounded-md px-2 py-2 whitespace-nowrap" onClick={() => navigate('/courses/analytics')}>Publish Course</button>
                    </div>


                </div>





            </div>

            <div className='mt-10'>
                <div
                    className="bg-cover bg-center w-full h-[45vh] lg:h-[50vh] rounded-md"
                    style={{ backgroundImage: `url(${image.uploadvideobg})` }}
                >
                    <div className="flex flex-col items-center">
                        <div className="mt-20 sm:mt-28 px-4">
                            <h2 className="text-center text-white text-2xl sm:text-3xl font-semibold">
                                Money matters 💸
                            </h2>
                            <p className="text-gray-200 text-sm sm:text-base">
                                Master the Art of Money: From Earning to Investing.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-4 mt-16 sm:mt-20 mx-4">
                            <button className="bg-white border rounded-md px-4 py-2 text-sm sm:text-base">
                                Upload cover image
                            </button>
                            <button className="bg-white border rounded-md px-4 py-2 text-sm sm:text-base">
                                Randomize image
                            </button>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col lg:flex-row items-start w-full lg:gap-2 lg:mx-2">


                    {/*** Course */}
                    <div className="rounded-md p-4 flex-1">
                        <div className="rounded-md p-4 flex-1">
                            <div className="space-y-3">
                                {/* Header */}
                                <div className="flex justify-between items-center w-full py-3 flex-wrap gap-2">
                                    <span className="text-lg sm:text-2xl font-medium text-gray-900 tracking-[-0.2px]">Chapters</span>
                                    <button
                                        className="flex px-3 py-1 gap-2 justify-center items-center bg-white rounded-md border border-gray-300"
                                        onClick={addChapter}
                                    >
                                        <img src={image.add} className="w-4 h-4" />
                                        <span className="text-sm sm:text-md font-medium text-gray-900">New Chapter</span>
                                    </button>
                                </div>

                                {/* Chapters list */}
                                <div className="w-full flex flex-col gap-3 py-3 px-2 bg-gray-50 rounded-lg border border-gray-300">
                                    {chapters.map((chapter, chapterIndex) => (
                                        <div key={chapterIndex}>
                                            <div className="flex justify-between items-center w-full py-2 px-2 border-b flex-wrap gap-2">
                                                <div className="flex gap-4 items-center">
                                                    <img src={image.drag_indicator} className="w-5 h-5" />
                                                    <div className="flex gap-5 items-center">
                                                        <FaChevronDown
                                                            onClick={() => toggleLessons(chapterIndex)}
                                                            style={{
                                                                cursor: 'pointer',
                                                                transform: chapter.isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                                            }}
                                                        />
                                                        <span className="text-sm sm:text-lg font-medium text-gray-900 tracking-[-0.2px]">
                                                            {chapter.title}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4 mx-4">
                                                    <img
                                                        src={image.add}
                                                        className="w-4 h-4 cursor-pointer"
                                                        onClick={() => addLesson(chapterIndex)}
                                                    />
                                                    <img
                                                        src={image.delete_icon}
                                                        className="w-4 h-4 cursor-pointer"
                                                        onClick={() => deleteChapter(chapterIndex)}
                                                    />
                                                </div>
                                            </div>

                                            {/* Show lessons only when chapter is open */}
                                            {chapter.isOpen && (
                                                <div className="flex flex-col gap-3 w-full mt-4">
                                                    {chapter.lessons.map((lesson, lessonIndex) => (
                                                        <div
                                                            key={lessonIndex}
                                                            className="flex gap-3 items-center py-2 px-2 w-full rounded-lg"
                                                        >
                                                            <img src={image.drag_indicator} className="w-5 h-5" />
                                                            <div
                                                                className="flex gap-2 items-center cursor-pointer"
                                                                onClick={() => handleLessonClick(lesson, 'Video')}
                                                            >
                                                                <img
                                                                    src={image.movie_info}
                                                                    className="w-5 h-5"
                                                                />
                                                                <span className="text-sm sm:text-lg font-normal text-gray-900">
                                                                    {lesson}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    {chapter.quizzes.map((quiz, quizIndex) => (
                                                        <div
                                                            key={quizIndex}
                                                            className="flex gap-3 items-center py-2 px-2 w-full rounded-lg"
                                                        >
                                                            <img src={image.drag_indicator} className="w-5 h-5" />
                                                            <div
                                                                className="flex gap-2 items-center cursor-pointer"
                                                                onClick={() => handleLessonClick(quiz, 'Quiz')}
                                                            >
                                                                <img
                                                                    src={image.movie_info}
                                                                    className="w-5 h-5"
                                                                />
                                                                <span className="text-sm sm:text-lg font-normal text-gray-900">{quiz}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Add lesson button */}
                                            <button
                                                className="flex w-full h-8 px-3 py-1 gap-2 justify-center items-center bg-opacity-20 bg-white rounded-md border border-gray-300 shadow-inner mt-4"
                                                onClick={() => addLesson(chapterIndex)}
                                            >
                                                <img src={image.add} className="w-4 h-4" />
                                                <span className="text-xs sm:text-sm font-medium text-gray-900">New Lesson</span>
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {/* Modal for adding a lesson */}
                                {isModalOpen && (
                                    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
                                        <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-[600px]">
                                            <div className="mb-5">
                                                <h2 className="text-lg sm:text-2xl font-medium text-gray-900">New Lesson</h2>
                                                <p>Select the type of lesson you'd like to offer</p>
                                            </div>

                                            <div className="space-y-4">
                                                <div className="border p-3 rounded-md">
                                                    <label
                                                        className="flex items-center space-x-2"
                                                        onClick={() => setSelectedLessonType('Video')}
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="lessonType"
                                                            value="Video"
                                                            className="form-radio"
                                                        />
                                                        <div className="flex flex-col">
                                                            <span className="text-sm sm:text-xl">Video</span>
                                                            <p className="text-gray-600 text-xs sm:text-sm">
                                                                Offer your users a video to watch
                                                            </p>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="border p-3 rounded-md">
                                                    <label
                                                        className="flex items-center space-x-2"
                                                        onClick={() => setSelectedLessonType('Quiz')}
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="lessonType"
                                                            value="Quiz"
                                                            className="form-radio"
                                                        />
                                                        <div className="flex flex-col">
                                                            <span className="text-sm sm:text-xl">Quiz</span>
                                                            <p className="text-gray-600 text-xs sm:text-sm">
                                                                Assess knowledge by asking questions and returning a grade
                                                            </p>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="flex justify-between mt-6">
                                                <button
                                                    onClick={handleCancel}
                                                    className="px-4 py-2 bg-gray-200 rounded-md text-gray-800"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    onClick={handleCreateLesson}
                                                    className="px-4 py-2 bg-blue-600 rounded-md text-white"
                                                >
                                                    Create Lesson
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>


                    {/** Settings */}
                    <div  >

                        <div className="w-full lg:w-[500px] p-4 mt-6 ">
                            {!showLessonType && (
                                <div className=" p-[24px] flex flex-col gap-4 items-start bg-white rounded-[16px] border border-[#d9d9d9] ">
                                    {/* Header */}
                                    <div >
                                        <h1 className="text-[24px] font-medium">
                                            Settings
                                        </h1>

                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col w-full gap-4">
                                        {/* Toggle Option */}
                                        <div className="flex flex-col gap-[10px] w-full">
                                            <span className="text-[14px] font-normal text-[#8c8c8c]">
                                                Requires lesson completion
                                            </span>
                                            <div className="flex items-center gap-[12px]">
                                                <ToggleSwitch />
                                                <span className="text-[18px] leading-[27px] text-[#262626]">
                                                    Lesson must be completed in order
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )}

                        </div>


                        {showLessonType && selectedLesson && (
                            <div>
                                <p className="text-xl mb-2">
                                    {selectedLesson}
                                </p>
                                <div>
                                    <div className="flex flex-col gap-4">
                                        {/* Check for selected lesson type */}
                                        {selectedLessonType === 'Video' ? (
                                            <div className="p-4 bg-white rounded-[16px] border-[#d9d9d9] lg:w-[750px] lg:h-[300px]">
                                                <UploadVideos /> {/* Component for handling video uploads */}
                                            </div>
                                        ) : selectedQuizType === 'Quiz' ? (
                                            <div className="w-auto lg:w-[750px] lg:h-[300px]">
                                                <UploadQuiz /> {/* Component for handling quiz uploads */}
                                            </div>
                                        ) : (
                                            <div className="p-[24px] flex flex-col gap-4 items-start bg-white rounded-[16px] border border-[#d9d9d9]">
                                                {/* Default fallback for other lesson settings */}
                                                {/* Header */}
                                                <div>
                                                    <h1 className="text-[24px] font-medium">Settings</h1>
                                                </div>

                                                {/* Content */}
                                                <div className="flex flex-col w-full gap-4">
                                                    {/* Toggle Option */}
                                                    <div className="flex flex-col gap-[10px] w-full">
                                                        <span className="text-[14px] font-normal text-[#8c8c8c]">
                                                            Requires lesson completion
                                                        </span>
                                                        <div className="flex items-center gap-[12px]">
                                                            <ToggleSwitch />
                                                            <span className="text-[18px] leading-[27px] text-[#262626]">
                                                                Lesson must be completed in order
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}




                    </div>






                </div>

            </div>



        </div>
    )
}

export default UploadVideo