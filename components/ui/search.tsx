"use client";

import React, { useState } from "react";
import Button from "./button";

interface EmailInputProps {
  placeholder?: string;
  buttonText?: string;
  onSubmit?: (value: string) => void;
  className?: string; // optional for custom styling
}

const SearchInput: React.FC<EmailInputProps> = ({
  placeholder = "Enter your Email",
  buttonText = "Join",
  onSubmit,
  className = "",
}) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (onSubmit) onSubmit(value);
  };

  return (
    <div
      className={`flex items-center bg-white rounded-full shadow-md px-4 py-2 gap-2 ${className}`}
    >
      <input
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 text-lg px-2"
      />

      <Button
        onClick={handleSubmit}
        variant="primary"
        size="sm"
      
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default SearchInput;
