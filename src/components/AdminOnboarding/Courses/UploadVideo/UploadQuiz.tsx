import { useState } from 'react'
import { image } from '@/assets/image/image'

import { FaCheck, FaChevronDown } from 'react-icons/fa'
import { MdClose } from 'react-icons/md';
import TextEditor from './TextEditor';

interface Question {
    id: number;
    text: string;
    options: string[];
    correctOption: string | null;
}


const UploadQuiz = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select multiple');
    const [tempOption, setTempOption] = useState(selectedOption);

    const options = ['Multiple Choice', 'Select Multiple', 'True/False'];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const saveSelection = () => {
        setSelectedOption(tempOption);
        setIsOpen(false);
    };


    // Add a new question
    const [questions, setQuestions] = useState<Question[]>([]);

    const addQuestion = () => {
        const newQuestion: Question = {
            id: Date.now(), // Unique ID
            text: '',
            options: [],
            correctOption: null,
        };
        setQuestions([...questions, newQuestion]);
    };





    return (
        <div>
            <div className="flex flex-col gap-4 p-6 my-0 bg-white rounded-xl border border-gray-300">
                <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col">
                        <span className="text-2xl font-medium text-gray-800">Question</span>
                        <span className="text-lg text-gray-600">
                            Configure the questions your users will be prompted with when participating in this quiz.
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-4 p-3 bg-gray-100 rounded-lg border border-gray-300">

                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <img src={image.drag_indicator} alt="Question Icon" className="w-5 h-5" />
                            <span className="text-lg font-medium text-gray-800">Question 1</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                {/* Dropdown Header */}
                                <div
                                    onClick={toggleDropdown}
                                    className="flex items-center gap-2 px-3 py-2 bg-white rounded-md border border-gray-300 shadow-sm cursor-pointer"
                                >
                                    <span className="text-sm text-gray-700">{selectedOption}</span>
                                    <FaChevronDown className="w-3 h-3 text-gray-500" />
                                </div>

                                {/* Dropdown Menu */}
                                {isOpen && (
                                    <div className="absolute mt-1 w-[200px] bg-white rounded-md border border-gray-300 shadow-md z-10 ">
                                        <div className="flex flex-col p-2 gap-3">
                                            {options.map((option) => (
                                                <label
                                                    key={option}
                                                    className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100 border"
                                                >
                                                    <input
                                                        type="radio"
                                                        name="dropdown-option"
                                                        value={option}
                                                        checked={tempOption === option}
                                                        onChange={() => setTempOption(option)}
                                                        className="text-blue-600"
                                                    />
                                                    <span className="text-sm text-gray-700">{option}</span>
                                                </label>
                                            ))}
                                        </div>

                                        {/* Save Button */}
                                        <button
                                            onClick={saveSelection}
                                            className="block w-full px-3 py-2 text-sm text-white bg-blue-500 rounded-b-md hover:bg-blue-600"
                                        >
                                            Save
                                        </button>
                                    </div>
                                )}
                            </div>
                            <img
                                src={image.delete_icon}
                                alt="Delete Icon"
                                className="w-5 h-5 cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* Question Text Input */}
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-gray-800">Question text</span>
                        <input
                            type="text"
                            placeholder="Ask a question here"
                            className="w-full px-4 py-2 text-sm text-gray-700 bg-white border rounded-lg placeholder-gray-400"
                        />
                    </div>

                    {/* Options */}
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-gray-800">Options</span>

                        {/* Option 1 */}
                        <div className="flex justify-between items-center px-3 py-2 bg-white border rounded-lg">
                            <div className="flex items-center gap-2">
                                <img src={image.drag_indicator} alt="Option Icon" className="w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Option text"
                                    className="w-full md:w-[400px] text-md py-1 text-gray-700 placeholder-gray-400"
                                />
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="px-2 py-1 text-xs text-green-600 bg-green-100 rounded-md border border-green-200">
                                    Correct
                                </button>
                                <button className='border p-1 '>
                                    <FaCheck className='text-black w-3 h-3' />
                                </button>
                                <button className='border p-1 '>
                                    <MdClose className='text-black' />
                                </button>
                                <button className='border p-1 '>
                                    <img src={image.delete_icon} alt="Delete Icon" className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Option 2 */}
                        <div className="flex justify-between items-center px-3 py-2 bg-white border rounded-lg">
                            <div className="flex items-center gap-2">
                                <img src={image.drag_indicator} alt="Option Icon" className="w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Option text"
                                    className="w-full md:w-[400px] text-md py-1 text-gray-700 placeholder-gray-400"
                                />
                            </div>
                            <div className="flex items-center gap-3">
                                <button className='border p-1 '>
                                    <FaCheck className='text-black w-3 h-3' />
                                </button>
                                <button className='border p-1 '>
                                    <MdClose className='text-black' />
                                </button>
                                <button className='border p-1 '>
                                    <img src={image.delete_icon} alt="Delete Icon" className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Add Option Button */}
                    <button
                        className="flex w-full h-8 px-3 py-3 gap-2 justify-center items-center bg-white rounded-md border"
                    >
                        <img src={image.add} className="w-4 h-4" />
                        <span className="text-sm font-medium text-gray-900">Add option</span>
                    </button>

                </div>

                {/* Add Question Button */}
                <button
                    onClick={addQuestion}
                    className="flex w-full h-8 px-3 py-3 gap-2 justify-center items-center bg-white rounded-md border"
                >
                    <img src={image.add} className="w-4 h-4" />
                    <span className="text-sm font-medium text-gray-900">Add Question</span>
                </button>
            </div>


            <div>
                <TextEditor />
            </div>

        </div>
    )
}

export default UploadQuiz