# react-simple-chartjs

[![Build Status](https://travis-ci.com/chernandez7/react-simple-chartjs.svg?branch=master)](https://travis-ci.com/chernandez7/react-simple-chartjs) [![npm version](https://badge.fury.io/js/react-simple-chartjs.svg)](https://badge.fury.io/js/react-simple-chartjs)

ChartJS 2 wrapper that makes adding charts to React easy.

## Chart Generator

## Installation

npm:

```sh
npm i react-simple-chartjs
```

yarn:

```sh
yarn install react-simple-chartjs
```

## Example

```jsx
import Chart from 'react-simple-chartjs';

export default Chart = () => (
  <Chart
    chartType={"Vertical Bar"}
    labels={["Jan", "Feb", "March"]}
    data={[1,5,8]}
    title={"Very cool chart"}
    options={{
      backgroundColor:{"rgba(13,119,248,0.9)"}
    }}
  />
);
```

## Props

| Prop        | Type             | Required | Description                                                                                       |
| :---------- | :--------------- | :------: | :------------------------------------------------------------------------------------------------ |
| `title`     | string           |          | Title of the chart                                                                                |
| `chartType` | string           |    ✓     | Type of chart. Current options are `Vertical Bar`, `Horizontal Bar`, `Simple Line`, `Area Chart`. |
| `labels`    | array of strings |    ✓     | Data labels that describe each data point.                                                        |
| `data`      | array of numbers |    ✓     | Data that you want to graph                                                                       |
| `options`   | object           |          | Config object to control the look and functionality of the chart. More info below.                |

## `options` object

| Prop                        | Type   | Description                                                                                                |
| :-------------------------- | :----- | :--------------------------------------------------------------------------------------------------------- |
| `backgroundColor`           | string | HEX or RGB string defining the background color of the data. Default value is `"rgba(13,119,248,0.9)"`.    |
| `borderColor`               | string | HEX or RGB string defining the border color of the data. Default value is `"rgba(13,119,248,0.9)"`.        |
| `fill`                      | bool   | Toggle to show or hide the background color. Default value is `true`.                                      |
| `responsive`                | bool   | Toggle to make the chart responsive. Default value is `true`.                                              |
| `shouldMaintainAspectRatio` | bool   | Toggle to make the chart keep its aspect ratio. Default value is `true`.                                   |
| `shouldShowLegend`          | bool   | Toggle to show or hide the legend is using multiple datasets. Default value is `false`.                    |
| `shouldShowTitle`           | bool   | Toggle to show or hide the chart title. Default value is `true`.                                           |
| `titleFontSize`             | number | Size of the title font. Default value is `18`.                                                             |
| `showTooltips`              | bool   | Toggle to show or hide the tooltips on hover. Default value is `true`.                                     |
| `tooltipBackgroundColor`    | string | HEX or RGB string defining the background color of the tooltips. Default value is `"rgba(255,255,255,1)"`. |
| `tooltipTitleFontSize`      | number | Size of the tooltip title font. Default value is `20`.                                                     |
| `tooltipTitleFontColor`     | string | HEX or RGB string defining the color of the tooltip title. Default value is `"rgba(0,0,0,0.8)"`.           |
| `tooltipBodyFontSize`       | number | Size of the tooltip body font. Default value is `18`.                                                      |
| `tooltipBodyFontColor`      | string | HEX or RGB string defining the color of the tooltip body. Default value is `"rgba(0,0,0,0.8)"`.            |
| `displayXAxis`              | bool   | Toggle to show or hide the X-axis. Default value is `true`.                                                |
| `displayXAxisGridlines`     | bool   | Toggle to show or hide the X-axis gridlines. Default value is `true`.                                      |
| `displayXAxisTicks`         | bool   | Toggle to show or hide the X-axis ticks. Default value is `true`.                                          |
| `beginXAxisAtZero`          | bool   | Toggle to start the X-axis at 0. Default value is `true`.                                                  |
| `displayYAxis`              | bool   | Toggle to show or hide the Y-axis. Default value is `true`.                                                |
| `displayYAxisGridlines`     | bool   | Toggle to show or hide the Y-axis gridlines. Default value is `true`.                                      |
| `displayYAxisTicks`         | bool   | Toggle to show or hide the Y-axis ticks. Default value is `true`.                                          |
| `beginYAxisAtZero`          | bool   | Toggle to start the Y-axis at 0. Default value is `true`.                                                  |
| `width`                     | number | Width of the chart component. Default value is `500`.                                                      |
| `height`                    | number | Height of the chart component. Default value is `500`.                                                     |

## Thanks to

Thanks to `react-chartjs-2` and `chart.js` contributors!

## TODO

- Create Generator
- Testing
- Support Multiple Datasets
- Support default fonts, fontSize, fontcolor
- Support More Chart Types
- Refine PropTypes
- Support custom formatting for callback functions
- Better organize options prop (?)
