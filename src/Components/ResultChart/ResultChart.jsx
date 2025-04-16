import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const resultData = [
  {
    id: 1,
    name: "Ayaan Hossain",
    physics: 85,
    chemistry: 78,
    biology: 92,
  },
  {
    id: 2,
    name: "Nila Rahman",
    physics: 74,
    chemistry: 81,
    biology: 88,
  },
  {
    id: 3,
    name: "Rayhan Ahmed",
    physics: 90,
    chemistry: 84,
    biology: 91,
  },
  {
    id: 4,
    name: "Tanjina Akter",
    physics: 66,
    chemistry: 72,
    biology: 70,
  },
  {
    id: 5,
    name: "Mahin Chowdhury",
    physics: 95,
    chemistry: 89,
    biology: 94,
  },
  {
    id: 6,
    name: "Sadia Islam",
    physics: 58,
    chemistry: 64,
    biology: 61,
  },
  {
    id: 7,
    name: "Farhan Rafi",
    physics: 79,
    chemistry: 83,
    biology: 76,
  },
  {
    id: 8,
    name: "Meherun Nahar",
    physics: 88,
    chemistry: 91,
    biology: 85,
  },
  {
    id: 9,
    name: "Anik Hasan",
    physics: 69,
    chemistry: 74,
    biology: 72,
  },
  {
    id: 10,
    name: "Jannatul Mawa",
    physics: 92,
    chemistry: 87,
    biology: 90,
  },
];

const ResultChart = () => {
  return (
    <div>
      <LineChart width={1200} height={500} data={resultData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="physics" stroke="red"></Line>
        <Line dataKey="chemistry" stroke="green"></Line>
        <Line dataKey="biology" stroke="blue"></Line>
      </LineChart>
    </div>
  );
};

export default ResultChart;
