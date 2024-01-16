"use client";
// import React, { useState, useEffect } from "react";
// import Chart from "chart.js/auto";
// import Button from "./Button";

// export const DynamicPanel: React.FC = () => {
//   const [isPanelVisible, setPanelVisible] = useState(false);

//   const togglePanel = () => {
//     setPanelVisible(!isPanelVisible);
//   };

//   useEffect(() => {
//     if (isPanelVisible) {
//       const ctx = document.getElementById("myChart") as HTMLCanvasElement;
//       if (ctx) {
//         Chart.getChart(ctx)?.destroy();

//         new Chart(ctx, {
//           type: "bar",
//           data: {
//             labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//             datasets: [
//               {
//                 label: "# of Votes",
//                 data: [12, 19, 3, 5, 2, 3],
//                 backgroundColor: [
//                   "rgba(255, 99, 132, 0.2)",
//                   "rgba(54, 162, 235, 0.2)",
//                   "rgba(255, 206, 86, 0.2)",
//                   "rgba(75, 192, 192, 0.2)",
//                   "rgba(153, 102, 255, 0.2)",
//                   "rgba(255, 159, 64, 0.2)",
//                 ],
//                 borderColor: [
//                   "rgba(255, 99, 132, 1)",
//                   "rgba(54, 162, 235, 1)",
//                   "rgba(255, 206, 86, 1)",
//                   "rgba(75, 192, 192, 1)",
//                   "rgba(153, 102, 255, 1)",
//                   "rgba(255, 159, 64, 1)",
//                 ],
//                 borderWidth: 1,
//               },
//             ],
//           },
//         });
//       }
//     }
//   }, [isPanelVisible]);

//   return (
//     <div className="flex flex-col items-center mt-8">
//       <h3 className="text-lg font-bold mb-2">Dynamic Panel</h3>
//       <Button onClick={togglePanel} text= {isPanelVisible ? "Hide Graph" : "See Graph"} />
//       <div
//         className={`bg-gray-100 box-content p-4 rounded-md shadow-md transition-opacity transition-height duration-300 ease-out ${
//           isPanelVisible ? "opacity-100 h-auto" : "opacity-0 h-0"
//         }`}
//       >
//         <canvas id="myChart" className="w-1/2 sm:w-full lg:w-full" width={500} height={250}></canvas>
//       </div>
//     </div>
//   );
// };
import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";

const DynamicPanel = () => {
  const [chartData, setChartData] = useState({
    labels: ["A", "B", "C", "D", "E"],
    data: [10, 5, 8, 12, 6],
  });

  useEffect(() => {
    // Función para simular la actualización de datos en tiempo real
    const updateData = () => {
      const newData = {
        labels: chartData.labels,
        data: chartData.data.map((value) => value + Math.random() * 5 - 2.5),
      };

      setChartData(newData);
    };

    // Actualizar cada 5 segundos (ajusta este intervalo según tus necesidades)
    const interval = setInterval(updateData, 10000);

    // Limpiar el intervalo al desmontar el componente para evitar fugas de memoria
    return () => clearInterval(interval);
  }, [chartData]);

  useEffect(() => {
    const canvas = document.getElementById(
      "myChart"
    ) as HTMLCanvasElement | null;

    if (canvas) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        // Destruir el gráfico anterior si existe
        Chart.getChart(ctx)?.destroy();

        // Crear el nuevo gráfico
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: chartData.labels,
            datasets: [
              {
                label: "Datos",
                data: chartData.data,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          },
        });
      }
    }
  }, [chartData]);

  return (
    <div className="w-4/12 flex flex-col items-center mt-8">
      <h3 className="text-lg font-bold mb-2">Dynamic Panel</h3>
      <canvas
        id="myChart"
        className="w-full sm:w-full lg:w-full"
        width={500}
        height={250}
      ></canvas>
    </div>
  );
};

export default DynamicPanel;
