import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import axios from 'axios';

const renderChart = (data, chartRef, dataPoint) => {
  const svgWidth = 600;
  const svgHeight = 400;
  const margin = { top: 20, right: 30, bottom: 40, left: 50 };

  const width = svgWidth - margin.left - margin.right;
  const height = svgHeight - margin.top - margin.bottom;

  // Clear previous SVG content
  d3.select(chartRef.current).selectAll('*').remove();

  // Create SVG container
  const svg = d3
    .select(chartRef.current)
    .attr('width', svgWidth)
    .attr('height', svgHeight)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  // Set up scales
  const xScale = d3
    .scaleBand()
    .domain(data.map((d) => d.country))
    .range([0, width])
    .padding(0.1);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d[dataPoint])])
    .nice()
    .range([height, 0]);

  // Add axes
  svg
    .append('g')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(xScale));

  svg.append('g').call(d3.axisLeft(yScale));

  // Add bars
  svg
    .selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (d) => xScale(d.country))
    .attr('y', (d) => yScale(d[dataPoint]))
    .attr('width', xScale.bandwidth())
    .attr('height', (d) => height - yScale(d[dataPoint]))
    .attr('fill', 'red');
};

const D3BarChart = ({ apiEndpoint, dataPoint }) => {
  const chartRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(apiEndpoint);
        const data = response.data.patientChart;

        // Render the bar chart
        renderChart(data, chartRef, dataPoint);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiEndpoint, dataPoint]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <svg ref={chartRef}></svg>
    </div>
  );
};

export default D3BarChart;
