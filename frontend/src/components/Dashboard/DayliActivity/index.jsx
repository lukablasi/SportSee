import "./style.css";
import PropTypes from "prop-types";

/**
 * component is displaying chart with daily activities
 * @param {array} sessions
 * @example
 * const sessions = [{"day":"2020-07-01","kilogram":80,"calories":240}, {"day":"2020-07-02","kilogram":80,"calories":220}]
 * return (
 * <DayliActivity sessions={sessions} />
 * )
 */

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function DayliActivity({ sessions }) {
  const data = sessions.map((session, index) => ({
    day: index + 1,
    kilograms: session.kilogram,
    calories: session.calories,
  }));
  const DailyActivityTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="dailyActivity-tooltip">
          <p className="dailyActivity-label">{`${payload[0].value}kg`}</p>
          <p className="dailyActivity-label">{`${payload[1].value * 7}Kcal`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        barSize={10}
        barGap={10}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <text x="5%" y="15%">
          Daily activity
        </text>
        <XAxis dataKey="day" />
        <YAxis
          dataKey="calories"
          orientation="right"
          label={{ fill: "green" }}
        />
        <Tooltip content={<DailyActivityTooltip />} />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={7}
          wrapperStyle={{
            padding: 15,
          }}
        />
        <Bar
          name="Weight (kg)"
          dataKey="kilograms"
          radius={[10, 10, 0, 0]}
          fill="#282D30"
        />
        <Bar
          name="Burned calories (kCal)"
          dataKey="calories"
          radius={[10, 10, 0, 0]}
          fill="#E60000"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

DayliActivity.propTypes = {
  sessions: PropTypes.array.isRequired,
};

DayliActivity.defauktProps = {
  sessions: [],
};
