import React from "react";

export default function CardSmall({ item }) {
  return (
    <>
      <div
        className="flex gap-3 h-40 border-gray-900 w-1/3"
        style={{ borderBottomWidth: "1px" }}
      >
        <img
          src={
            item.urlToImage ||
            "https://www.servicedriventransport.com/wp-content/uploads/2023/06/News.jpg"
          }
          width="150"
          height="150"
          className="object-scale-down"
        />
        <h3 className="">{item.title}</h3>
      </div>
    </>
  );
}
