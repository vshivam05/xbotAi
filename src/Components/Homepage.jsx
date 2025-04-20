import React, { useEffect, useState } from "react";
import newchat from "../assets/newchat.png";
import chat from "../assets/chat.svg";
// import darkMode from "../assets/darkmode.svg";
import sampleData from "../apiData/sampleData.json";
import person from "../assets/person.png";
import DefaultQuesJson from "../apiData/Default.json";
import DefaultQuestion from "./DefaultQuestion";
import "./Homepage.css";
import QuestionAnswer from "./QuestionAnswer";
import { useNavigate, Link } from "react-router-dom";
const Homepage = () => {
  const [HomepageData, setHomepageData] = useState([]);
  const [isHiden, setIsHidden] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // const navigate = useNavigate();
  // const storedData = localStorage.getItem("HomepageData");
  const handleClick = (ques) => {
    // console.log(ques);
    // setHomepageData(ques);
    // console.log(ques);
    
    // setIsHidden(true);

    const prevData = JSON.parse(localStorage.getItem("HomepageData")) || [];
    const updatedData = [...prevData, ques];
    localStorage.setItem("HomepageData", JSON.stringify(updatedData));
    setHomepageData(updatedData);
    setIsHidden(true);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setInputValue(value);
  };

  const handleAsk = (e) => {
    e.preventDefault();

    const matchedData = sampleData.filter((item) =>
      item.question.toLowerCase().includes(inputValue.toLowerCase())
    );

    const prevData = JSON.parse(localStorage.getItem("HomepageData")) || [];
    let newEntry;

    if (matchedData.length > 0) {
      newEntry = matchedData[0];
    } else {
      newEntry = {
        question: inputValue,
        response: "Sorry, Did not understand your query!",
      };
    }

    const updatedData = [...prevData, newEntry];

    // Save to localStorage
    localStorage.setItem("HomepageData", JSON.stringify(updatedData));

    // Update component state
    setHomepageData(updatedData);
    setIsHidden(true);
    setInputValue("");
  };

  const handleSave = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const storedData = localStorage.getItem("HomepageData");

    setHomepageData([...HomepageData, JSON.parse(storedData)]);

    // console.log("Homepage", HomepageData);
  }, []);
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen w-full">
        <div className="w-full md:w-1/4 bg-purple-200 p-4 flex flex-col gap-4">
          <div className="flex items-center justify-between bg-purple-300 p-3 rounded-lg shadow">
            <Link to="/" className="w-full">
              <button
                className="text-black font-bold text-xl w-full text-left"
                type="button"
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

          <Link to="/history">
            <button
              type="button"
              className=" w-full bg-purple-300 hover:bg-purple-400 text-black font-semibold py-2 px-4 rounded-lg shadow"
              // onClick={() => {
              //   navigate("/history");
              // }}
            >
              Past Conversations
            </button>
          </Link>
        </div>

        {/* right Content ********************************************************************/}
        <div className="w-full md:w-3/4 bg-purple-100 p-2 flex flex-col relative ">
          {/* Header */}
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

          {!isHiden ? (
            <div>
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
                    <DefaultQuestion
                      key={ques.id}
                      data={ques}
                      handleClick={() => {
                        handleClick(ques);
                      }}
                    />
                  ))}
                </div>

                {/* Input section */}
              </div>
            </div>
          ) : (
            HomepageData && <QuestionAnswer data={HomepageData} />
          )}

          <div className="flex flex-col md:flex-row  w-full  bottom-0  absolute p-2">
            <div className="w-full md:w-3/4">
              <input
                type="text"
                placeholder="Please tell me about your query!"
                className="w-full h-14 border-2 ..."
                onChange={handleInputChange}
                value={inputValue}
              />
            </div>
            <div className="flex gap-2 w-full md:w-1/4">
              <button
                data-testid="ask-button-main"
                type="submit"
                onClick={handleAsk}
                className="w-1/2 bg-purple-600 ..."
              >
                Ask
              </button>
              <button
                data-testid="save-button"
                type="button"
                onClick={handleSave}
                className="w-1/2 bg-gray-300 ..."
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
