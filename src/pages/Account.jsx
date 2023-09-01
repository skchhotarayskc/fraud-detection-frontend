import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className="bg-blue-400 h-[100vh]">
      <Navbar />
      <div className="mt-20 w-96 h-96 mx-auto flex items-center bg-white shadow-xl rounded-xl">
        <div className="ml-6">
          <p className="my-10">Name: Sushant Kumar Chhotaray</p>
          <p className="my-10">Account No.: 2002040068</p>
          <p className="my-10">Balance: ₹50000</p>

          <Link to="/transactions">
            <button className="h-10 bg-green-700 text-white p-3 rounded-md flex justify-center items-center">Initiate Transaction</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Account;
