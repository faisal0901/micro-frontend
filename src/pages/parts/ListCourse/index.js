import React from "react";
import Link from "next/link";
import RenderItem from "./RenderItem";
export default function ListCourse({ data }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-auto">
          <h2 className="text-lg text-gray-600">New Classes</h2>
          <h3 className="text-xl text-gray-900">
            Summer <span className="text-teal-400">Productive</span>
          </h3>
        </div>
        <div className="w-auto">
          <Link href="/course">
            <a className="text-gray-600 hover:underline text-sm">View All</a>
          </Link>
        </div>
      </div>
      <div
        className="flex justify-start items-center  -mx-4 mt-6"
        style={{ flexWrap: "wrap" }}
      >
        {data?.length > 0 ? (
          data.map((item, index) => {
            return <RenderItem item={item} key={index}></RenderItem>;
          })
        ) : (
          <div>no course</div>
        )}
      </div>
    </>
  );
}
