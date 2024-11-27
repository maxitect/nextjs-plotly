"use client";

import PlotlyApp from "../components/PlotlyApp";

export default function Home() {
  return (
    <PlotlyApp
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "red" },
        },
        { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
      ]}
      layout={{ width: 320, height: 240, title: { text: "A Fancy Plot" } }}
    />
  );
}
