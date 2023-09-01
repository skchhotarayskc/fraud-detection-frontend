import React, { useState } from "react";
import { Link } from "react-router-dom";
import Account from "./Account";

function MPINForm() {
  const [mpin, setMPIN] = useState("");
  const [incorrectAttempts, setIncorrectAttempts] = useState(0);
  const maxIncorrectAttempts = 3;

  const handleSubmit = (e) => {
    e.preventDefault();

    const correctMPIN = "1234";

    if (mpin === correctMPIN) {
      console.log("MPIN submitted successfully");
    } else {
      console.log("Incorrect MPIN submitted");
      setIncorrectAttempts(incorrectAttempts + 1);
    }

    if (incorrectAttempts >= maxIncorrectAttempts) {
      console.log("You have reached the limit of incorrect MPIN attempts.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">MPIN</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="mpin"
            className="block text-sm font-medium text-gray-700"
          >
            MPIN:
          </label>
          <input
            type="text"
            id="mpin"
            value={mpin}
            onChange={(e) => setMPIN(e.target.value)}
            required
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div>
          <Link to="/account">
            <button
              type="submit"
              className={`px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 ${
                incorrectAttempts >= maxIncorrectAttempts
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
              disabled={incorrectAttempts >= maxIncorrectAttempts}
            >
              Submit
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default MPINForm;
