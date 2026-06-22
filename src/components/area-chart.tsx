import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";
// import { RechartsDevtools } from '@recharts/devtools';

interface Props {
  data?: Array<Record<string, string | number>>;
  isAnimationActive?: boolean;
}

const HistoryAreaChart = ({ data, isAnimationActive = true }: Props) => {
  return (
    <AreaChart
      style={{ width: "100%", maxHeight: "50vh", aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#000" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#cef739" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#cef739" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#cef739" stopOpacity={0} />
        </linearGradient>
      </defs>
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="rate"
        stroke="#cef739"
        fillOpacity={1}
        fill="url(#colorUv)"
        isAnimationActive={isAnimationActive}
      />
      {/* <Area
      type="monotone"
      dataKey="pv"
      stroke="#82ca9d"
      fillOpacity={1}
      fill="url(#colorPv)"
      isAnimationActive={isAnimationActive}
    /> */}
      {/* <RechartsDevtools /> */}
    </AreaChart>
  );
};

export default HistoryAreaChart;
