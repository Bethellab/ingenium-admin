import React, { useState } from "react";
import { FaReply, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { image } from "../../../assets/image/image"

// Define the types for props
interface QuestionCardProps {
    userName: string;
    timeAgo: string;
    text: string;
    profileImg: string;
    replies: QuestionData[];
    onReply: (reply: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
    userName,
    timeAgo,
    text,
    profileImg,
    replies,
    onReply,
}) => {
    const [showReplies, setShowReplies] = useState<boolean>(true);
    const [showReplyInput, setShowReplyInput] = useState<boolean>(false);
    const [replyInput, setReplyInput] = useState<string>("");

    const handleReplySubmit = () => {
        if (replyInput.trim()) {
            onReply(replyInput.trim());
            setReplyInput("");
            setShowReplyInput(false);
        }
    };

    return (
        <div className="flex flex-col gap-5 w-full">
            {/* Question/Comment Section */}
            <div className="flex gap-5 items-start">
                {/* Profile Image */}
                <div className="w-10 h-10 shrink-0">
                    <img src={profileImg} alt={`${userName} profile`} className="rounded-full object-cover" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 w-full">
                    {/* User Info */}
                    <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium text-lg">{userName}</span>
                        <div className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span className="text-gray-500 text-md">{timeAgo}</span>
                    </div>

                    {/* Question Text */}
                    <p className="text-base text-gray-800">{text}</p>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                        <button
                            className="flex items-center gap-2 text-md "
                            onClick={() => setShowReplyInput(!showReplyInput)}
                        >
                            <FaReply /> Reply
                        </button>
                        <button
                            className="flex items-center gap-2 text-md text-gray-500"
                            onClick={() => setShowReplies(!showReplies)}
                        >
                            {showReplies ? <FaChevronUp /> : <FaChevronDown />}
                            {showReplies ? "Collapse" : "Expand"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Replies Section */}
            {showReplies && replies.length > 0 && (
                <div className="ml-14 mt-4 flex flex-col gap-4">
                    {replies.map((reply, index) => (
                        <QuestionCard
                            key={index}
                            {...reply}
                            onReply={(newReply) => onReply(newReply)}
                        />
                    ))}
                </div>
            )}

            {/* Reply Input */}
            {showReplyInput && (
                <div className="flex gap-3 items-start ml-14 mt-2">
                    <textarea
                        value={replyInput}
                        onChange={(e) => setReplyInput(e.target.value)}
                        placeholder="Write a reply..."
                        className="flex-grow p-2 border rounded-lg text-gray-600"
                    />
                    <button
                        onClick={handleReplySubmit}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >
                        Submit
                    </button>
                </div>
            )}


        </div>
    );
};

interface QuestionData {
    userName: string;
    timeAgo: string;
    text: string;
    profileImg: string;
    replies: QuestionData[];
}

const ChatBox: React.FC = () => {
    const [questions, setQuestions] = useState<QuestionData[]>([
        {
            userName: "Henry Uku",
            timeAgo: "2 sec ago",
            text: "If they carry on with their plans, then a likely outcome, is the Billy-No-Mates scenario, Scotland and Wales rejoining the EU as independent nations, NI folded into a new Ireland. Leaving England alone with its glorious past. ",
            profileImg: image.person1,
            replies: [],
        },
        {
            userName: "Hillary Omitogun",
            timeAgo: "5 min ago",
            text: "Wow, Nice Read ",
            profileImg: image.person2,
            replies: [],
        },
        {
            userName: "Henry Uku",
            timeAgo: "2 sec ago",
            text: "If they carry on with their plans, then a likely outcome, is the Billy-No-Mates scenario, Scotland and Wales rejoining the EU as independent nations, NI folded into a new Ireland. Leaving England alone with its glorious past. ",
            profileImg: image.person1,
            replies: [],
        },
        {
            userName: "Hillary Omitogun",
            timeAgo: "5 min ago",
            text: "Wow, Nice Read ",
            profileImg: image.person2,
            replies: [],
        },
    ]);

    const handleReply = (index: number, reply: string) => {
        setQuestions((prevQuestions) =>
            prevQuestions.map((q, i) =>
                i === index
                    ? { ...q, replies: [...q.replies, { userName: "You", timeAgo: "Just now", text: reply, profileImg: image.person1, replies: [] }] }
                    : q
            )
        );
    };

    return (
        <div className="flex flex-col gap-6 py-4 px-6">

            {questions.map((question, index) => (
                <QuestionCard
                    key={index}
                    {...question}
                    onReply={(reply) => handleReply(index, reply)}
                />
            ))}

            <div>
                <div className="flex items-center w-full py-2 px-2 gap-4 border border-gray-300 rounded-lg ">
                    {/* Left Icon */}
                    <img src={image.profile_icon} />

                    {/* Input Field */}
                    <input
                        type="text"
                        className="flex-1 h-9 text-gray-700 text-md placeholder-gray-400 border-none focus:ring-0 outline-none bg-transparent"
                        placeholder="Reply"
                    />

                    {/* Right Icon */}
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5014 10.0008H4.0014M3.91675 10.2923L1.58183 17.267C1.39839 17.8149 1.30668 18.0889 1.3725 18.2576C1.42966 18.4041 1.55242 18.5152 1.7039 18.5575C1.87834 18.6061 2.1418 18.4876 2.66874 18.2505L19.3802 10.7303C19.8945 10.4989 20.1517 10.3831 20.2312 10.2224C20.3002 10.0827 20.3002 9.91883 20.2312 9.77916C20.1517 9.6184 19.8945 9.50268 19.3802 9.27123L2.66291 1.74849C2.13757 1.51209 1.87489 1.39389 1.70063 1.44237C1.54929 1.48448 1.42654 1.59527 1.36918 1.74151C1.30314 1.90991 1.39388 2.18328 1.57535 2.73004L3.9174 9.7863C3.94857 9.8802 3.96415 9.92716 3.9703 9.97518C3.97576 10.0178 3.97571 10.0609 3.97014 10.1035C3.96386 10.1515 3.94816 10.1984 3.91675 10.2923Z" stroke="#939090" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>

            </div>


        </div>
    );
};


export default ChatBox;
