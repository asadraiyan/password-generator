import React, { useCallback, useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PasswordGen = () => {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) str += "0123456789";
    if (characters) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbers, characters, setPassword]);

  const PasswordRef = useRef(null);

  useEffect(() => {
    passwordGen();
  }, [length, numbers, characters, setPassword]);

  const handleCopyText = () => {
    PasswordRef.current?.select();
    PasswordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
    toast.success("Copied to clipboard", {
      position: "top-center",
    });
  };

  return (
    <>
      <div className="container">
        <div className="pass-box">
          <h1>Password Generator</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="password"
              ref={PasswordRef}
              value={password}
              readOnly
            />
            <button onClick={handleCopyText}>Copy</button>
          </div>
          <div className="custom-pass">
            <h2>Customise your password</h2>
            <div className="custom-options">
              <input
                type="range"
                max={50}
                min={8}
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <span>Length({length})</span>
              <div className="input-checkbox">
                <input
                  type="checkbox"
                  defaultChecked={numbers}
                  onChange={() => setNumbers((prev) => !prev)}
                />
                <span>Numbers</span>
                <input
                  type="checkbox"
                  defaultChecked={characters}
                  onChange={() => setCharacters((prev) => !prev)}
                />
                <span>Characters</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default PasswordGen;
