import React from "react";
import newchat from "../assets/newchat.png";
import chat from "../assets/chat.svg";
import { useNavigate, Link } from "react-router-dom";
import person from "../assets/person.png";
import bot from "../assets/bot.png";
const PastConversation = () => {
  const navigate = useNavigate();
  const storedData = localStorage.getItem("HomepageData");
  const parsedData = JSON.parse(storedData) || [];
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen w-full">
        <div className="w-full md:w-1/4 bg-white-200 p-4 flex flex-col gap-4">
          <div className="flex items-center justify-between bg-purple-300 p-3 rounded-lg shadow">
            <Link to="/" className="w-full">
              <button
                type="button"
                className="text-black font-bold text-xl w-full md:w-full text-left"
                // onClick={() => {
                //   navigate("/");
                // }}
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
            </Link>
          </div>

          <Link to="/history"></Link>
          <button
            type="button"
            className="bg-purple-300 hover:bg-purple-400 text-black font-semibold py-2 px-4 rounded-lg shadow"
            // onClick={() => {
            //   navigate("/history");
            // }}
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

          <div className="PastChatList">
            {
              // console.log(parsedData)

              parsedData && parsedData.length > 0 ? (
                parsedData.map((item, index) => (
                  <div
                    key={index}
                    className="QNA p-4 space-y-4 bg-white border-2 border-gray-300 rounded-lg shadow-md hover:bg-purple-100 transition duration-300 ease-in-out"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={person}
                        alt="User"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="text-gray-800 font-medium text-base">
                        {item.question}
                        <div className="text-sm text-gray-500 mt-1">
                          {item.time}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <img
                        src={bot}
                        alt="Bot"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="text-gray-800 font-medium text-base">
                        {item.response}
                        <div className="text-sm text-gray-500 mt-1">
                          {item.time}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h3>No data present</h3>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default PastConversation;
