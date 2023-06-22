"use client";
import React, { useEffect, useRef } from "react";

const UseRefExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const handleClick = () => {
    console.log("username is:" + usernameRef.current?.value);
  };

  return (
    <div className="flex flex-col mt-24 gap-3">
      <input
        type="text"
        ref={inputRef}
        className="inputText"
        placeholder="focus here"
      />
      <input type="text" ref={usernameRef} className="inputText" placeholder="username" />
      <button className="btn" onClick={handleClick}>
        Send
      </button>
    </div>
  );
};

export default UseRefExample;
