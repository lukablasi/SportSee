import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

export default function Score({ score }) {
  const data = [
    {
      name: "Score",
      score: score * 100,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        className="radialBarChart-container"
        width={250}
        height={250}
        cx="50%"
        cy="50%"
        innerRadius="80%"
        outerRadius="90%"
        data={data}
        startAngle={90}
      >
        <RadialBar
          background
          dataKey="score"
          cornerRadius="50%"
          fill="#FF0101"
        />
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          dataKey={"name"}
          tick={false}
        />
        <text
          fontSize="1.2rem"
          fontWeight={500}
          x="50%"
          y="45%"
          textAnchor="middle"
        >
          {score * 100}%
        </text>
        <text fontSize="0.9rem" x="50%" y="55%" textAnchor="middle">
          of your
        </text>
        <text fontSize="0.9rem" x="50%" y="65%" textAnchor="middle">
          goal
        </text>
        <Legend align="left" verticalAlign="top" iconSize="0" />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
