function t(t) {
  return t && "object" == typeof t && "default" in t ? t.default : t;
}
var e = t(require("prop-types")),
  i = t(require("react")),
  o = require("react-chartjs-2");
(o.defaults.global.defaultFontColor = "#283444"),
  (o.defaults.global.defaultFontSize = 18),
  (o.defaults.global.defaultFontFamily = "Lato"),
  (o.defaults.global.tooltips.titleFontFamily = "Lato");
var a = (function(t) {
  function e() {
    t.apply(this, arguments);
  }
  return (
    t && (e.__proto__ = t),
    ((e.prototype = Object.create(t && t.prototype)).constructor = e),
    (e.prototype.render = function() {
      var t = this.props,
        e = t.chartType,
        a = t.title,
        l = t.options;
      return (function(t, e, a, l) {
        var r = l.width,
          n = l.height;
        switch (t) {
          case "Vertical Bar":
            return i.createElement(o.Bar.default, {
              data: e,
              options: a,
              width: r,
              height: n
            });
          case "Horizontal Bar":
            return i.createElement(o.HorizontalBar.default, {
              data: e,
              options: a,
              width: r,
              height: n
            });
          case "Simple Line":
          case "Area Chart":
            return i.createElement(o.Line.default, {
              data: e,
              options: a,
              width: r,
              height: n
            });
          default:
            return i.createElement(o.Bar.default, {
              data: e,
              options: a,
              width: r,
              height: n
            });
        }
      })(
        e,
        (function(e, i, o) {
          return {
            labels: t.labels,
            datasets: [
              {
                data: t.data,
                backgroundColor: o.backgroundColor,
                borderColor: o.borderColor,
                fill: o.fill
              }
            ]
          };
        })(0, 0, l),
        (function(t, e, i, o, a) {
          var l = a.responsive,
            r = a.shouldMaintainAspectRatio,
            n = a.shouldShowLegend,
            s = a.shouldShowTitle,
            d = a.titleFontSize,
            p = a.showTooltips,
            c = a.tooltipBackgroundColor,
            u = a.tooltipTitleFontSize,
            b = a.tooltipTitleFontColor,
            y = a.tooltipBodyFontSize,
            g = a.tooltipBodyFontColor,
            h = a.displayXAxis,
            F = a.displayXAxisGridlines,
            f = a.displayXAxisTicks,
            m = a.beginXAxisAtZero,
            x = a.displayYAxis,
            A = a.displayYAxisGridlines,
            S = a.displayYAxisTicks,
            C = a.beginYAxisAtZero;
          return "Horizontal Bar" === i
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
                title: { display: s, text: o, fontSize: d },
                tooltips: {
                  enabled: p,
                  backgroundColor: c,
                  titleFontSize: u,
                  titleFontColor: b,
                  titleFontFamily: "Lato",
                  titleMarginBottom: 12.5,
                  bodyFontSize: y,
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
                      gridLines: { display: F },
                      ticks: {
                        display: f,
                        beginAtZero: m,
                        callback: function(t, e, i) {
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
                layout: { padding: { left: 0, right: 0, top: 50, bottom: 0 } },
                title: { display: s, text: o, fontSize: d },
                tooltips: {
                  enabled: p,
                  backgroundColor: c,
                  titleFontSize: u,
                  titleFontColor: b,
                  titleFontFamily: "Lato",
                  bodyFontSize: y,
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
                      gridLines: { display: F },
                      ticks: { display: f, beginAtZero: m }
                    }
                  ],
                  yAxes: [
                    {
                      display: x,
                      gridLines: { display: A },
                      ticks: {
                        display: S,
                        beginAtZero: C,
                        callback: function(t, e, i) {
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
        })(0, 0, e, a, l),
        l
      );
    }),
    e
  );
})(i.Component);
(a.propTypes = {
  chartType: e.string.isRequired,
  labels: e.arrayOf(e.string).isRequired,
  data: e.arrayOf(e.number).isRequired,
  title: e.string,
  options: e.object
}),
  (a.defaultProps = {
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
  (module.exports = a);
//# sourceMappingURL=index.js.map
