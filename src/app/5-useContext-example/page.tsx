"use client";
import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const UseContextExample = () => {
  const { state, dispatch } = useContext(ThemeContext);
  console.log(state);

  return (
    <div className="useContextExample">
      <button
        className="themeBtn"
        onClick={() => dispatch({ type: "CHANGE_THEME" })}
      >
        Change Theme
      </button>
      <button
        className="fontBtn"
        onClick={() => dispatch({ type: "CHANGE_FONTSIZE", payload: 20 })}
      >
        Change Font Size
      </button>
    </div>
  );
};

export default UseContextExample;
