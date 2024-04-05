import React, { useState, useRef, useCallback, useEffect } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumberAllowed) str += "0123456789";
    if (isCharacterAllowed) str += "!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, isCharacterAllowed, isNumberAllowed]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    if (passwordRef.current) {
      passwordRef.current.select();
    }
  };

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      ref={passwordRef}
      />
      <button
      onClick={copyPassword}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      >copy</button>
    </div>
    <div
    className='flex text-sm gap-x-2'
    >
      <div className='flex items-center gap-x-1'>
        <input 
        type="range" 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => setLength(e.target.value)}
        name="" 
        id=""
         />
         <label htmlFor="length">Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={isNumberAllowed}
        onChange={() => {
          setIsNumberAllowed((prev) => !prev)
        }}
         name=""
        id="" />
        <label htmlFor="number">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={isCharacterAllowed}
        onChange={() => {
          setIsCharacterAllowed((prev) => !prev)
        }}
         name=""
        id="" />
        <label htmlFor="charInput">Character</label>
      </div>
      
    </div>
  </div>
  );
}

export default PasswordGenerator;
