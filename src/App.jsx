import { Chart } from "react-google-charts"
import './App.css'

function App() {
  const data = [
    ["Задачи", "Часов в день"],
    ["Работа", 9],
    ["Еда", 3],
    ["Дорога", 2],
    ["Учеба", 3],
    ["Сон", 7],
  ]

  const options = {
    pieHole: 0.4, // Creates a Donut Chart. Does not do anything when is3D is enabled
    is3D: true, // Enables 3D view
    slices: {
      3: { offset: 0.2 }, // Explodes the second slice
    },
    pieStartAngle: 100, // Rotates the chart
    sliceVisibilityThreshold: 0.02, // Hides slices smaller than 2%
    legend: {
      position: "right",
      alignment: "center",
      textStyle: {
        color: "#233238",
        fontSize: 20,
      },
    },
    colors: ["#8AD1C2", "#9F8AD1", "#D18A99", "#BCD18A", "#D1C28A"],
  }

  return (
    <>
      <h1>Мои ежедневные действия</h1>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </>
  )
}

export default App
