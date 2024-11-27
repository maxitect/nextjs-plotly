"use client";

import Plotly2D from "../components/Plotly2D";

export default function Home() {
  return (
    <Plotly2D
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
