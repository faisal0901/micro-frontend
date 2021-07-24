import React from "react";
import Link from "next/link";
import FormatNumber from "src/helper/formatNumber";
export default function RenderItem({ item }) {
  return (
    <div className="w-1/6 px-2">
      <div className="card relative transition-all duration-300">
        {item.imageName}
        <div className="card-meta mt-10 text-start">
          <h4 className="text-lg  transition-all duration-200 w-1/2">
            {item.name}
          </h4>
          <h5 className="text-sm transition-all duration-500 mt-2">
            {FormatNumber(item.total)} Course
          </h5>
          <Link href="#">
            <a className="link-wrapped"></a>
          </Link>
        </div>
      </div>
    </div>
  );
}
