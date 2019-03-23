!(function(t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e(
        require("prop-types"),
        require("react"),
        require("react-chartjs-2")
      ))
    : "function" == typeof define && define.amd
    ? define(["prop-types", "react", "react-chartjs-2"], e)
    : (t.reactSimpleChartjs = e(t.PropTypes, t.react, t.reactChartjs2));
})(this, function(t, e, o) {
  (t = t && t.hasOwnProperty("default") ? t.default : t),
    (e = e && e.hasOwnProperty("default") ? e.default : e),
    (o.defaults.global.defaultFontColor = "#283444"),
    (o.defaults.global.defaultFontSize = 18),
    (o.defaults.global.defaultFontFamily = "Lato"),
    (o.defaults.global.tooltips.titleFontFamily = "Lato");
  var i = (function(t) {
    function i() {
      t.apply(this, arguments);
    }
    return (
      t && (i.__proto__ = t),
      ((i.prototype = Object.create(t && t.prototype)).constructor = i),
      (i.prototype.render = function() {
        var t = this.props,
          i = t.chartType,
          a = t.title,
          l = t.options;
        return (function(t, i, a, l) {
          var r = l.width,
            n = l.height;
          switch (t) {
            case "Vertical Bar":
              return e.createElement(o.Bar.default, {
                data: i,
                options: a,
                width: r,
                height: n
              });
            case "Horizontal Bar":
              return e.createElement(o.HorizontalBar.default, {
                data: i,
                options: a,
                width: r,
                height: n
              });
            case "Simple Line":
            case "Area Chart":
              return e.createElement(o.Line.default, {
                data: i,
                options: a,
                width: r,
                height: n
              });
            default:
              return e.createElement(o.Bar.default, {
                data: i,
                options: a,
                width: r,
                height: n
              });
          }
        })(
          i,
          (function(e, o, i) {
            return {
              labels: t.labels,
              datasets: [
                {
                  data: t.data,
                  backgroundColor: i.backgroundColor,
                  borderColor: i.borderColor,
                  fill: i.fill
                }
              ]
            };
          })(0, 0, l),
          (function(t, e, o, i, a) {
            var l = a.responsive,
              r = a.shouldMaintainAspectRatio,
              n = a.shouldShowLegend,
              s = a.shouldShowTitle,
              d = a.titleFontSize,
              p = a.showTooltips,
              c = a.tooltipBackgroundColor,
              u = a.tooltipTitleFontSize,
              y = a.tooltipTitleFontColor,
              b = a.tooltipBodyFontSize,
              g = a.tooltipBodyFontColor,
              h = a.displayXAxis,
              f = a.displayXAxisGridlines,
              F = a.displayXAxisTicks,
              m = a.beginXAxisAtZero,
              x = a.displayYAxis,
              A = a.displayYAxisGridlines,
              S = a.displayYAxisTicks,
              C = a.beginYAxisAtZero;
            return "Horizontal Bar" === o
              ? {
                  responsive: l,
                  maintainAspectRatio: r,
                  devicePixelRatio: 1,
                  events: ["click"],
                  legend: { display: n },
                  layout: {
                    padding: { left: 0, right: 0, top: 0, bottom: 0 },
                    margin: { left: 0, right: 0, top: 0, bottom: 0 }
                  },
                  title: { display: s, text: i, fontSize: d },
                  tooltips: {
                    enabled: p,
                    backgroundColor: c,
                    titleFontSize: u,
                    titleFontColor: y,
                    titleFontFamily: "Lato",
                    titleMarginBottom: 12.5,
                    bodyFontSize: b,
                    bodyFontColor: g,
                    bodyFontFamily: "Lato",
                    bodySpacing: 12.5,
                    displayColors: !0,
                    multiKeyBackground: "#FFFFFF",
                    xPadding: 20,
                    yPadding: 10,
                    callbacks: {
                      label: function(t, e) {
                        return Number(t.xLabel) < 0
                          ? "-$" +
                              Math.abs(Number(t.yLabel))
                                .toFixed(0)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                          : "$" +
                              Math.abs(Number(t.xLabel))
                                .toFixed(0)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                      }
                    }
                  },
                  scales: {
                    xAxes: [
                      {
                        display: h,
                        gridLines: { display: f },
                        ticks: {
                          display: F,
                          beginAtZero: m,
                          callback: function(t, e, o) {
                            return Intl.NumberFormat("the", {
                              style: "currency",
                              currency: "USD",
                              minimumFractionDigits: 0
                            })
                              .format(t)
                              .replace(/^(\D-)/, "$");
                          }
                        }
                      }
                    ],
                    yAxes: [
                      {
                        display: x,
                        gridLines: { display: A },
                        ticks: { display: S, beginAtZero: C }
                      }
                    ]
                  }
                }
              : {
                  responsive: l,
                  maintainAspectRatio: r,
                  devicePixelRatio: 1,
                  legend: { display: n },
                  layout: {
                    padding: { left: 0, right: 0, top: 50, bottom: 0 }
                  },
                  title: { display: s, text: i, fontSize: d },
                  tooltips: {
                    enabled: p,
                    backgroundColor: c,
                    titleFontSize: u,
                    titleFontColor: y,
                    titleFontFamily: "Lato",
                    bodyFontSize: b,
                    bodyFontColor: g,
                    bodyFontFamily: "Lato",
                    displayColors: !1,
                    xPadding: 20,
                    yPadding: 10,
                    callbacks: {
                      label: function(t, e) {
                        return Number(t.yLabel) < 0
                          ? "-$" +
                              Math.abs(Number(t.yLabel))
                                .toFixed(0)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                          : "$" +
                              Math.abs(Number(t.yLabel))
                                .toFixed(0)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                      }
                    }
                  },
                  scales: {
                    xAxes: [
                      {
                        display: h,
                        gridLines: { display: f },
                        ticks: { display: F, beginAtZero: m }
                      }
                    ],
                    yAxes: [
                      {
                        display: x,
                        gridLines: { display: A },
                        ticks: {
                          display: S,
                          beginAtZero: C,
                          callback: function(t, e, o) {
                            return Number(t) < 0
                              ? "-$" +
                                  Math.abs(Number(t))
                                    .toFixed(0)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                              : "$" +
                                  Math.abs(Number(t))
                                    .toFixed(0)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                          }
                        }
                      }
                    ]
                  }
                };
          })(0, 0, i, a, l),
          l
        );
      }),
      i
    );
  })(e.Component);
  return (
    (i.propTypes = {
      chartType: t.string.isRequired,
      labels: t.arrayOf(t.string).isRequired,
      data: t.arrayOf(t.number).isRequired,
      title: t.string,
      options: t.object
    }),
    (i.defaultProps = {
      title: "Super Simple Chart",
      options: {
        backgroundColor: "rgba(13,119,248,0.9)",
        borderColor: "rgba(13,119,248,0.9)",
        fill: !0,
        responsive: !0,
        shouldMaintainAspectRatio: !0,
        shouldShowLegend: !1,
        shouldShowTitle: !0,
        titleFontSize: 18,
        showTooltips: !0,
        tooltipBackgroundColor: "rgba(255,255,255,1)",
        tooltipTitleFontSize: 20,
        tooltipTitleFontColor: "rgba(0,0,0,0.8)",
        tooltipBodyFontSize: 18,
        tooltipBodyFontColor: "rgba(0,0,0,0.8)",
        displayXAxis: !0,
        displayXAxisGridlines: !0,
        displayXAxisTicks: !0,
        beginXAxisAtZero: !0,
        displayYAxis: !0,
        displayYAxisGridlines: !0,
        displayYAxisTicks: !0,
        beginYAxisAtZero: !0,
        width: 500,
        height: 250
      }
    }),
    i
  );
});
//# sourceMappingURL=index.umd.js.map
