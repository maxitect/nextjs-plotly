"use client";

import React from "react";
import Plot from "react-plotly.js";

interface PlotProps {
  data: Plotly.Data[];
  layout: Partial<Plotly.Layout>;
}

const App: React.FC<PlotProps> = ({ data, layout }) => (
  <Plot data={data} layout={layout} />
);

export default App;
