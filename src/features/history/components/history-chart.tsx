import HistoryAreaChart from "@/components/area-chart";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page ss",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page Gg",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const HistoryChart = () => {
  return (
    <section>
      <div></div>
      <div className="p-4 radius-4 bg-surface">
        <HistoryAreaChart data={data} />
      </div>
    </section>
  );
};

export default HistoryChart;
