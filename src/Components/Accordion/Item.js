import React, { useState } from "react";
import { cssTransition } from "react-transition-group";
import ArrowDown from "public/images/icon-arrow-down.svg";
export default function Item({ name, id, child, active, toggle, children }) {
  return (
    <div className="bg-white border-gray-300 border overflow-hidden">
      <div className="meta pl-4 py-2 relative flex justify-between items-center">
        <span className="text-gray-600">{name}</span>
      </div>
    </div>
  );
}
