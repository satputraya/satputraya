"use client";

import React, { useState } from "react";

export default function StringToCsv() {
  const [inputString, setInputString] = useState("");
  const [csvString, setCsvString] = useState("");

  const convertToCsv = () => {
    const cleanedString = inputString.trim();
    let formattedCsvString = cleanedString.replace(/\\"/g, '"');
    formattedCsvString = formattedCsvString.replace(/\\n/g, "\n");
    formattedCsvString = formattedCsvString.replace(/""/g, '"');
    formattedCsvString = formattedCsvString.replace(/\\/g, "");
    setCsvString(formattedCsvString);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(csvString)
      .then(() => alert("CSV data copied to clipboard"))
      .catch((error) =>
        console.error("Error copying CSV data to clipboard: ", error)
      );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">String to CSV Converter</h1>
      <div className="mb-1 flex gap-1">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={convertToCsv}
        >
          Convert
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>
      <textarea
        className="w-full p-2 border border-[#aaaaaa] rounded-md outline-none"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
        placeholder="Enter string data here..."
        rows={10}
      />
      <textarea
        className="w-full p-2 border border-[#aaaaaa] rounded-md outline-none"
        value={csvString}
        readOnly
        rows={10}
        placeholder="CSV data will appear here..."
      />
    </div>
  );
}
