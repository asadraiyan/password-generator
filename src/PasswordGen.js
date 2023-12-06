import React from "react";

const PasswordGen = () => {
  return (
    <>
      <div className="container">
        <div className="pass-box">
          <h1>Password Generator</h1>
          <div className="input-box">
            <input type="text" placeholder="password" />
            <button>Copy</button>
          </div>
          <div className="custom-pass">
            <h2>Customise your password</h2>
            <div className="custom-options">
              <input type="range" max={50} min={8} />
              <span>Length(16)</span>
              <div className="input-checkbox">
                <input type="checkbox" />
                <span>Numbers</span>
                <input type="checkbox" />
                <span>Characters</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGen;
