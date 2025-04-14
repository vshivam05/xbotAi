import React from "react";

const DefaultQuestion = ({ data }) => {
  return (
    <>
      <div className="questionList card border-2 border-gray-300 rounded-lg p-4 shadow-md bg-white m-2">
        <h4 className="text-base font-medium text-gray-800">{data.question}</h4>
        <p className="  font-medium text-gray-400   ">
          Get immediate AI generated response
        </p>
      </div>
    </>
  );
};

export default DefaultQuestion;
