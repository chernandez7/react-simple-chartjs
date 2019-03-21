import React from "react";
import PropTypes from "prop-types";
import { GetChartData, GetChartOptions, GetChartComponent } from "./ChartUtils";

class Chart extends React.Component {
  render() {
    const { chartType, labels, data, title, options } = this.props;

    const CHART_DATA = GetChartData(labels, data, options);
    const CHART_OPTIONS = GetChartOptions(
      labels,
      data,
      chartType,
      title,
      options
    );
    const chart = GetChartComponent(
      chartType,
      CHART_DATA,
      CHART_OPTIONS,
      options
    );

    return chart;
  }
}

export default Chart;

Chart.propTypes = {
  chartType: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  title: PropTypes.string,
  options: PropTypes.object
};

Chart.defaultProps = {
  title: "Super Simple Chart",
  options: {
    backgroundColor: "rgba(13,119,248,0.9)",
    borderColor: "rgba(13,119,248,0.9)",
    fill: true,
    responsive: true,
    shouldMaintainAspectRatio: true,
    shouldShowLegend: false,
    shouldShowTitle: true,
    titleFontSize: 18,
    showTooltips: true,
    tooltipBackgroundColor: "rgba(255,255,255,1)",
    tooltipTitleFontSize: 20,
    tooltipTitleFontColor: "rgba(0,0,0,0.8)",
    tooltipBodyFontSize: 18,
    tooltipBodyFontColor: "rgba(0,0,0,0.8)",
    displayXAxis: true,
    displayXAxisGridlines: true,
    displayXAxisTicks: true,
    beginXAxisAtZero: true,
    displayYAxis: true,
    displayYAxisGridlines: true,
    displayYAxisTicks: true,
    beginYAxisAtZero: true,
    width: 500,
    height: 250
  }
};
