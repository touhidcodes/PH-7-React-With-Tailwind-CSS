import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
    BarChart,
    Bar,
} from "recharts";

const Dashboard = () => {
	const students = [
		{ id: 1, name: "John Doe", physics: 80, chemistry: 90, math: 70 },
		{ id: 2, name: "Jane Smith", physics: 70, chemistry: 85, math: 90 },
		{ id: 3, name: "Bob Johnson", physics: 60, chemistry: 70, math: 80 },
		{ id: 4, name: "Alice Lee", physics: 90, chemistry: 80, math: 95 },
		{ id: 5, name: "Mike Brown", physics: 75, chemistry: 65, math: 70 },
		{ id: 6, name: "Sara Lee", physics: 85, chemistry: 95, math: 90 },
		{ id: 7, name: "Tom Smith", physics: 65, chemistry: 70, math: 75 },
		{ id: 8, name: "Cindy Wu", physics: 95, chemistry: 80, math: 85 },
		{ id: 9, name: "David Kim", physics: 80, chemistry: 90, math: 95 },
		{ id: 10, name: "Emily Chen", physics: 90, chemistry: 85, math: 80 },
		{ id: 11, name: "Mark Davis", physics: 75, chemistry: 70, math: 65 },
		{ id: 12, name: "Karen Lee", physics: 85, chemistry: 90, math: 95 },
	];

	return (
		<div>
            {/* Linechart */}
			<LineChart width={500} height={300} data={students}>
				<Line
					type='monotone'
					dataKey='physics'
					stroke='#8884d8'
					activeDot={{ r: 8 }}
				/>
				<Line type='monotone' dataKey='chemistry' stroke='#82ca9d' />
				<Line type='monotone' dataKey='math' stroke='#888458' />
			</LineChart>
			{/* Barchart */}
			<BarChart
				width={500}
				height={300}
				data={students}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<Bar dataKey='physics' fill='#8884d8' />
				<Bar dataKey='chemistry' fill='#82ca9d' />
				<Bar dataKey='math' fill='#888458' />
			</BarChart>
		</div>
	);
};

export default Dashboard;
