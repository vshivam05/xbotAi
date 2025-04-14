import React from "react";
import newchat from "../assets/newchat.png";
import chat from "../assets/chat.svg";
import darkMode from "../assets/darkmode.svg";
import person from "../assets/person.png";
import DefaultQuesJson from "../apiData/Default.json";
import DefaultQuestion from "./DefaultQuestion";
import "./Homepage.css";
const Homepage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen w-full">
        <div className="w-full md:w-1/4 bg-purple-200 p-4 flex flex-col gap-4">
          <div className="flex items-center justify-between bg-purple-300 p-3 rounded-lg shadow">
            <button className="text-black font-bold text-xl w-full text-left">
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

          <button className="bg-purple-300 hover:bg-purple-400 text-black font-semibold py-2 px-4 rounded-lg shadow">
            Past Conversations
          </button>
        </div>

        {/* right Content ********************************************************************/}
        <div className="w-full md:w-3/4 bg-purple-100 p-2 flex flex-col relative ">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-purple-500">
              Customer Support AI
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-black">Light </span>
              <div>
                <img src={darkMode} className=" h-8 " alt="" />
              </div>
            </div>
          </div>

          {/* Centered Message */}
          <div className="flex flex-col items-center mt-20 flex-1">
            <h2 className="text-2xl font-bold mt-0">
              Hi, Please tell me your query!
            </h2>
            <img
              src={person}
              alt="Support"
              className="w-20 h-20 mt-2 rounded-full"
            />
          </div>
          {/* questio list  */}
          <div className="defaultQues mb-4 md:mb-6 mt-4 w-full">
            {/* Grid of questions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {DefaultQuesJson.map((ques) => (
                <DefaultQuestion key={ques.id} data={ques} />
              ))}
            </div>

            {/* Input section */}
            <div className="input w-full flex items-center mt-5 mb-4">
              <form className="w-full flex gap-4 " action="">
                <input
                  className=" w-full md:w-3/4 h-12 border-2 border-gray-300 rounded-lg p-2  shadow-md  focus:outline-none focus:ring-2 focus:ring-purple-500 ml-2"
                  type="text"
                  placeholder="Please tell me about your query!"
                  
                />
                <button className=" w-1/6">Ask</button>
                <button className=" w-1/6">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
