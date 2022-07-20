import "./style.css";
import PropTypes from "prop-types";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

/**
 * component displaying sessions spead on a linear chart
 * @param {array} sessions
 * @example const sessions = [{"day": 1, "sessionLength": 30}, {"day": 2, "sessionLength": 50}]
 * @returns (
 *  <SessionsSpeed sessions={sessions} />
 * )
 */

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

SessionsSpeed.propTypes = {
  sessions: PropTypes.array.isRequired,
};

SessionsSpeed.defaultProps = {
  sessions: [],
};
