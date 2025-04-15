import React from "react";
import newchat from "../assets/newchat.png";
import chat from "../assets/chat.svg";
import { useNavigate } from "react-router-dom";
const PastConversation = () => {
  const navigate = useNavigate();
  const storedData = localStorage.getItem("HomepageData");
  const parsedData = JSON.parse(storedData) || [];
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen w-full">
        <div className="w-full md:w-1/4 bg-white-200 p-4 flex flex-col gap-4">
          <div className="flex items-center justify-between bg-purple-300 p-3 rounded-lg shadow">
            <button
              type="submit"
              className="text-black font-bold text-xl w-full text-left"
              onClick={() => {
                navigate("/");
              }}
            >
              <div className="flex flex-row gap-4 items-center">
                <img
                  src={newchat}
                  alt="New Query"
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-lg font-semibold text-black">
                  New Query?
                </span>
                <span className="text-black font-bold">
                  <img
                    src={chat}
                    alt="new chat"
                    className=" me-0 h-8 rounded-full"
                  />
                </span>
              </div>
            </button>
          </div>

          <button
            className="bg-purple-300 hover:bg-purple-400 text-black font-semibold py-2 px-4 rounded-lg shadow"
            onClick={() => {
              navigate("/history");
            }}
          >
            Past Conversations
          </button>
        </div>

        {/* Past Conversations */}

        <div className="right w-full md:w-3/4 bg-purple-100 p-4 flex flex-col gap-4">
          <div className="flex justify-between items-center mb-8">
            <header>
              <h1 className="text-3xl font-bold text-purple-500">
                Customer Support AI
              </h1>
            </header>
            <div className="flex items-center gap-2">
              <span className="text-sm text-black">Light </span>
              <div>{/* <img src={darkMode} className=" h-8 " alt="" /> */}</div>
            </div>
          </div>
          <h3 className=" fw-bolder text-center text-3gitxl text-black-500 font-bold mb-4">
            Conversation History
          </h3>
        </div>
      </div>
    </>
  );
};

export default PastConversation;
