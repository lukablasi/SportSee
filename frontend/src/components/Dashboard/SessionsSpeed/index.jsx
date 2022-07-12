import React, { PureComponent } from "react";
import "./style.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function SessionsSpeed({ sessions }) {
  const data = sessions.map((session) => ({
    day: session.day,
    length: session.sessionLength,
  }));
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="sessions-speed-tooltip">
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        style={{
          borderRadius: "5px",
          background: "#FF0000",
        }}
        width={500}
        height={300}
        data={data}
        margin={{
          top: 50,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tickMargin={10}
        />

        <Tooltip content={<CustomTooltip />} />
        <Line
          type="natural"
          dataKey="length"
          stroke="white"
          strokeWidth={2}
          activeDot={{ r: 4, fill: "white" }}
          dot={false}
        />

        <text x="10%" y="15%" fontSize="15px" stroke="white" opacity="0.5">
          Average speed of
        </text>
        <text x="10%" y="25%" fontSize="15px" stroke="white" opacity="0.5">
          your sessions
        </text>
      </LineChart>
    </ResponsiveContainer>
  );
}
