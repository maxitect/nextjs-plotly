"use client";

import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

interface Plotly2DProps {
  data: Plotly.Data[];
  layout: Partial<Plotly.Layout>;
}

export default function Plotly2D({ data, layout }: Plotly2DProps) {
  return <Plot data={data} layout={layout} />;
}
