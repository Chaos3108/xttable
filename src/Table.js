import React, { useState } from "react";

const Table = () => {
  const data = [
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];
  const [tableData, setTableData] = useState(data);
  const sortDate = () => {
    const sortedData = [...tableData].sort(
      (b, a) => new Date(a.date) - new Date(b.date)
    );
    setTableData(sortedData);
  };
  const sortByViews = () => {
    const sortedData = [...tableData].sort((a, b) => b.views - a.views);
    setTableData(sortedData);
  };
  return (
    <div>
      <h1>Date and Views Table</h1>
      <div
        style={{
          display: "flex",
          width: "30vh",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={() => {
            sortDate();
          }}
        >
          {" "}
          Sort By Date{" "}
        </button>
        <button
          onClick={() => {
            sortByViews();
          }}
        >
          {" "}
          Sort By Views{" "}
        </button>
      </div>
      <table>
        <thead
          style={{
            display: "flex",
            width: "45vh",
            justifyContent: "space-between",
          }}
        >
          <tr>Date</tr>
          <tr>Views</tr>
          <tr>Article</tr>
        </thead>
        <tbody>
          {tableData.map((item) => {
            return (
              <tr
                style={{
                  display: "flex",
                  width: "45vh",
                  justifyContent: "space-between",
                }}
              >
                <td>{item.date} </td>
                <td>{item.views} </td>
                <td>{item.article} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
