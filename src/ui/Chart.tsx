"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { Card, CardContent, Typography } from "@mui/material";

const data = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 4780 },
];

const Chart = () => {
  return (
    <div className="flex-1">
      <Card
        sx={{
          borderRadius: 4,
          boxShadow: 4,
          background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight={600} mb={2}>
            Monthly Revenue
          </Typography>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} barGap={8}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1976d2" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#42a5f5" stopOpacity={0.4} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
              <Legend />
              <Bar
                dataKey="revenue"
                fill="url(#colorRevenue)"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chart;
