"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Workout } from "@prisma/client";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);

export default function ChartCard({
  workouts,
  name,
}: {
  workouts: Workout[];
  name: string;
}) {
  const chartData = workouts.map((el) => {
    const retObj = {
      date:
        el.createdAt.toDateString().split(" ")[1] +
        " " +
        el.createdAt.toDateString().split(" ")[2],
      load: el.workoutLoad,
    };
    console.log(retObj);
    return retObj;
  });

  const data = {
    labels: chartData.map((d) => d.date),
    datasets: [
      {
        label: "Load",
        data: chartData.map((d) => d.load),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "kg", // Dodajemy jednostkę kg do osi Y
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Usuwamy legendę
      },
    },
  };

  return (
    <div className="w-[350px] md:w-[600px]">
      <Card>
        <CardHeader className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <CardTitle>{name.split(" ")[0]} load chart</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="my-2 ">
          <Bar data={data} options={options} />
        </CardContent>
      </Card>
    </div>
  );
}
