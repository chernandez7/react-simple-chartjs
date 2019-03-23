"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactChartjs = require("react-chartjs-2");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var ChartTypes = {
  V_BAR: "Vertical Bar",
  H_BAR: "Horizontal Bar",
  LINE: "Simple Line",
  AREA: "Area Chart"
};
_reactChartjs.defaults.global.defaultFontColor = "#283444";
_reactChartjs.defaults.global.defaultFontSize = 18;
_reactChartjs.defaults.global.defaultFontFamily = "Lato";
_reactChartjs.defaults.global.tooltips.titleFontFamily = "Lato";

var Chart = (function(_React$Component) {
  _inherits(Chart, _React$Component);

  function Chart() {
    _classCallCheck(this, Chart);

    return _possibleConstructorReturn(
      this,
      (Chart.__proto__ || Object.getPrototypeOf(Chart)).apply(this, arguments)
    );
  }

  _createClass(Chart, [
    {
      key: "GetChartData",
      value: function GetChartData(labels, data, options) {
        var backgroundColor = options.backgroundColor,
          borderColor = options.borderColor,
          fill = options.fill;

        return {
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              fill: fill
            }
          ]
        };
      }
    },
    {
      key: "GetChartOptions",
      value: function GetChartOptions(labels, data, chartType, title, options) {
        var responsive = options.responsive,
          shouldMaintainAspectRatio = options.shouldMaintainAspectRatio,
          shouldShowLegend = options.shouldShowLegend,
          shouldShowTitle = options.shouldShowTitle,
          titleFontSize = options.titleFontSize,
          showTooltips = options.showTooltips,
          tooltipBackgroundColor = options.tooltipBackgroundColor,
          tooltipTitleFontSize = options.tooltipTitleFontSize,
          tooltipTitleFontColor = options.tooltipTitleFontColor,
          tooltipBodyFontSize = options.tooltipBodyFontSize,
          tooltipBodyFontColor = options.tooltipBodyFontColor,
          displayXAxis = options.displayXAxis,
          displayXAxisGridlines = options.displayXAxisGridlines,
          displayXAxisTicks = options.displayXAxisTicks,
          beginXAxisAtZero = options.beginXAxisAtZero,
          displayYAxis = options.displayYAxis,
          displayYAxisGridlines = options.displayYAxisGridlines,
          displayYAxisTicks = options.displayYAxisTicks,
          beginYAxisAtZero = options.beginYAxisAtZero;

        if (chartType === ChartTypes.H_BAR) {
          return {
            responsive: responsive,
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
                label: function label(tooltipItem, data) {
                  if (Number(tooltipItem.xLabel) < 0) {
                    return (
                      "-$" +
                      Math.abs(Number(tooltipItem.yLabel))
                        .toFixed(0)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    );
                  }
                  return (
                    "$" +
                    Math.abs(Number(tooltipItem.xLabel))
                      .toFixed(0)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  );
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
                    callback: function callback(label, index, labels) {
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
          responsive: responsive,
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
              label: function label(tooltipItem, data) {
                if (Number(tooltipItem.yLabel) < 0) {
                  return (
                    "-$" +
                    Math.abs(Number(tooltipItem.yLabel))
                      .toFixed(0)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  );
                }
                return (
                  "$" +
                  Math.abs(Number(tooltipItem.yLabel))
                    .toFixed(0)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                );
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
                  beginAtZero: beginXAxisAtZero
                }
              }
            ],
            yAxes: [
              {
                display: displayYAxis,
                gridLines: { display: displayYAxisGridlines },
                ticks: {
                  display: displayYAxisTicks,
                  beginAtZero: beginYAxisAtZero,
                  callback: function callback(label, index, labels) {
                    if (Number(label) < 0) {
                      return (
                        "-$" +
                        Math.abs(Number(label))
                          .toFixed(0)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      );
                    }
                    return (
                      "$" +
                      Math.abs(Number(label))
                        .toFixed(0)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    );
                  }
                }
              }
            ]
          }
        };
      }
    },
    {
      key: "GetChartComponent",
      value: function GetChartComponent(
        chartType,
        chartData,
        chartOptions,
        options
      ) {
        var width = options.width,
          height = options.height;

        switch (chartType) {
          case ChartTypes.V_BAR:
            return _react2.default.createElement(_reactChartjs.Bar, {
              data: chartData,
              options: chartOptions,
              width: width,
              height: height
            });

          case ChartTypes.H_BAR:
            return _react2.default.createElement(_reactChartjs.HorizontalBar, {
              data: chartData,
              options: chartOptions,
              width: width,
              height: height
            });

          case ChartTypes.LINE:
            return _react2.default.createElement(_reactChartjs.Line, {
              data: chartData,
              options: chartOptions,
              width: width,
              height: height
            });
          case ChartTypes.AREA:
            return _react2.default.createElement(_reactChartjs.Line, {
              data: chartData,
              options: chartOptions,
              width: width,
              height: height
            });
          default:
            return _react2.default.createElement(_reactChartjs.Bar, {
              data: chartData,
              options: chartOptions,
              width: width,
              height: height
            });
        }
      }
    },
    {
      key: "render",
      value: function render() {
        var _props = this.props,
          chartType = _props.chartType,
          labels = _props.labels,
          data = _props.data,
          title = _props.title,
          options = _props.options;

        var CHART_DATA = this.GetChartData(labels, data, options);
        var CHART_OPTIONS = this.GetChartOptions(
          labels,
          data,
          chartType,
          title,
          options
        );
        var chart = this.GetChartComponent(
          chartType,
          CHART_DATA,
          CHART_OPTIONS,
          options
        );

        return chart;
      }
    }
  ]);

  return Chart;
})(_react2.default.Component);

exports.default = Chart;

Chart.propTypes = {
  chartType: _propTypes2.default.string.isRequired,
  labels: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  data: _propTypes2.default.arrayOf(_propTypes2.default.number).isRequired,
  title: _propTypes2.default.string,
  options: _propTypes2.default.object
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
