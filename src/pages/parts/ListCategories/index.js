import React from "react";
import RenderItem from "./RenderItem";
import Link from "next/link";
import IconAdvertisement from "public/images/icon-business.svg";
import IconGame from "public/images/icon-game-dev.svg";
import IconBusiness from "public/images/icon-business.svg";
import IconTravel from "public/images/icon-travel.svg";
import IconWritter from "public/images/icon-writer.svg";
import IconCustomer from "public/images/icon-customer.svg";

export default function ListCategories() {
  const data = [
    {
      imageName: <IconBusiness />,
      name: "business development",
      total: 12493,
    },
    {
      imageName: <IconWritter />,
      name: "content writter",
      total: 839,
    },
    {
      imageName: <IconAdvertisement />,
      name: "Product Advertisement",
      total: 478,
    },
    {
      imageName: <IconCustomer />,
      name: "Customer relationship",
      total: 839,
    },
    {
      imageName: <IconGame />,
      name: "Game development",
      total: 12493,
    },
    {
      imageName: <IconTravel />,
      name: "Travel Guidence",
      total: 73,
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-auto">
          <h2 className="text-lg text-gray-600">Category</h2>
          <h3 className="text-xl text-gray-900">
            Explore & <span className="text-teal-400">Learn</span>
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
