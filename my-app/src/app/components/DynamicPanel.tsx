"use client";
import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";

export const DynamicPanel: React.FC = () => {
  const [isPanelVisible, setPanelVisible] = useState(false);

  const togglePanel = () => {
    setPanelVisible(!isPanelVisible);
  };

  useEffect(() => {
    if (isPanelVisible) {
      const ctx = document.getElementById("myChart") as HTMLCanvasElement;
      if (ctx) {
        Chart.getChart(ctx)?.destroy();

        new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
              {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
        });
      }
    }
  }, [isPanelVisible]);

  return (
    <div className="flex flex-col items-center mt-8">
      <h3 className="text-lg font-bold mb-2">Dynamic Panel</h3>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 transition duration-300 ease-out"
        onClick={togglePanel}
      >
        {isPanelVisible ? "Hide Graph" : "See Graph"}
      </button>

      <div
        className={`bg-gray-100 box-content p-4 rounded-md shadow-md transition-opacity transition-height duration-300 ease-out ${
          isPanelVisible ? "opacity-100 h-auto" : "opacity-0 h-0"
        }`}
      >
        <canvas id="myChart" className="w-1/2 sm:w-full lg:w-full" width={500} height={250}></canvas>
      </div>
    </div>
  );
};
