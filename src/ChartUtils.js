import React from "react";
import { Bar, Line, HorizontalBar, defaults } from "react-chartjs-2";
import ChartTypes from "./Types/ChartTypes";

defaults.global.defaultFontColor = "#283444";
defaults.global.defaultFontSize = 18;
defaults.global.defaultFontFamily = "Lato";
defaults.global.tooltips.titleFontFamily = "Lato";

function GetChartData(labels, data, options) {
  const { backgroundColor, borderColor, fill } = options;
  return {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderColor,
        fill
      }
    ]
  };
}

function GetChartOptions(labels, data, chartType, title, options) {
  const {
    responsive,
    shouldMaintainAspectRatio,
    shouldShowLegend,
    shouldShowTitle,
    titleFontSize,
    showTooltips,
    tooltipBackgroundColor,
    tooltipTitleFontSize,
    tooltipTitleFontColor,
    tooltipBodyFontSize,
    tooltipBodyFontColor,
    displayXAxis,
    displayXAxisGridlines,
    displayXAxisTicks,
    beginXAxisAtZero,
    displayYAxis,
    displayYAxisGridlines,
    displayYAxisTicks,
    beginYAxisAtZero
  } = options;
  if (chartType === ChartTypes.H_BAR) {
    return {
      responsive,
      maintainAspectRatio: shouldMaintainAspectRatio,
      devicePixelRatio: 1,
      events: ["click"],
      legend: { display: shouldShowLegend },
      layout: {
        padding: { left: 0, right: 0, top: 0, bottom: 0 },
        margin: { left: 0, right: 0, top: 0, bottom: 0 }
      },
      title: {
        display: shouldShowTitle,
        text: title,
        fontSize: titleFontSize
      },
      tooltips: {
        enabled: showTooltips,
        backgroundColor: tooltipBackgroundColor,
        titleFontSize: tooltipTitleFontSize,
        titleFontColor: tooltipTitleFontColor,
        titleFontFamily: "Lato",
        titleMarginBottom: 12.5,
        bodyFontSize: tooltipBodyFontSize,
        bodyFontColor: tooltipBodyFontColor,
        bodyFontFamily: "Lato",
        bodySpacing: 12.5,
        displayColors: true,
        multiKeyBackground: "#FFFFFF",
        xPadding: 20,
        yPadding: 10,
        callbacks: {
          label(tooltipItem, data) {
            if (Number(tooltipItem.xLabel) < 0) {
              return `-$${Math.abs(Number(tooltipItem.yLabel))
                .toFixed(0)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
            }
            return `$${Math.abs(Number(tooltipItem.xLabel))
              .toFixed(0)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
          }
        }
      },
      scales: {
        xAxes: [
          {
            display: displayXAxis,
            gridLines: { display: displayXAxisGridlines },
            ticks: {
              display: displayXAxisTicks,
              beginAtZero: beginXAxisAtZero,
              callback(label, index, labels) {
                return Intl.NumberFormat("the", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0
                })
                  .format(label)
                  .replace(/^(\D-)/, "$");
              }
            }
          }
        ],
        yAxes: [
          {
            display: displayYAxis,
            gridLines: { display: displayYAxisGridlines },
            ticks: {
              display: displayYAxisTicks,
              beginAtZero: beginYAxisAtZero
            }
          }
        ]
      }
    };
  }
  return {
    responsive,
    maintainAspectRatio: shouldMaintainAspectRatio,
    devicePixelRatio: 1,
    legend: { display: shouldShowLegend },
    layout: { padding: { left: 0, right: 0, top: 50, bottom: 0 } },
    title: {
      display: shouldShowTitle,
      text: title,
      fontSize: titleFontSize
    },
    tooltips: {
      enabled: showTooltips,
      backgroundColor: tooltipBackgroundColor,
      titleFontSize: tooltipTitleFontSize,
      titleFontColor: tooltipTitleFontColor,
      titleFontFamily: "Lato",
      bodyFontSize: tooltipBodyFontSize,
      bodyFontColor: tooltipBodyFontColor,
      bodyFontFamily: "Lato",
      displayColors: false,
      xPadding: 20,
      yPadding: 10,
      callbacks: {
        label(tooltipItem, data) {
          if (Number(tooltipItem.yLabel) < 0) {
            return `-$${Math.abs(Number(tooltipItem.yLabel))
              .toFixed(0)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
          }
          return `$${Math.abs(Number(tooltipItem.yLabel))
            .toFixed(0)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
        }
      }
    },
    scales: {
      xAxes: [
        {
          display: displayXAxis,
          gridLines: { display: displayXAxisGridlines },
          ticks: { display: displayXAxisTicks, beginAtZero: beginXAxisAtZero }
        }
      ],
      yAxes: [
        {
          display: displayYAxis,
          gridLines: { display: displayYAxisGridlines },
          ticks: {
            display: displayYAxisTicks,
            beginAtZero: beginYAxisAtZero,
            callback(label, index, labels) {
              if (Number(label) < 0) {
                return `-$${Math.abs(Number(label))
                  .toFixed(0)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
              }
              return `$${Math.abs(Number(label))
                .toFixed(0)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
            }
          }
        }
      ]
    }
  };
}

function GetChartComponent(chartType, chartData, chartOptions, options) {
  const { width, height } = options;
  switch (chartType) {
    case ChartTypes.V_BAR:
      return (
        <Bar
          data={chartData}
          options={chartOptions}
          width={width}
          height={height}
        />
      );
    case ChartTypes.H_BAR:
      return (
        <HorizontalBar
          data={chartData}
          options={chartOptions}
          width={width}
          height={height}
        />
      );
    case ChartTypes.LINE:
      return (
        <Line
          data={chartData}
          options={chartOptions}
          width={width}
          height={height}
        />
      );
    case ChartTypes.AREA:
      return (
        <Line
          data={chartData}
          options={chartOptions}
          width={width}
          height={height}
        />
      );
    default:
      return (
        <Bar
          data={chartData}
          options={chartOptions}
          width={width}
          height={height}
        />
      );
  }
}

export { GetChartData, GetChartOptions, GetChartComponent };
