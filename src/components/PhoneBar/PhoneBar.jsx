import React, { useState } from "react";
import axios from "axios";
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const PhoneBar = () => {
	const [phones, setPhones] = useState([]);
	axios
		.get("https://openapi.programming-hero.com/api/phones?search=iphone")
		.then((data) => {
			const loadedData = data.data.data;
			const phone = loadedData.map((phone) => {
				const part = phone.slug.split("-");
				const price = parseInt(part);

				const phoneData = {
					name: phone.phone_name,
					price: price,
				};
				return phoneData;
			});
			console.log(phone);
			setPhones(phone);
		});

	return (
		<div>
			<BarChart width={150} height={40} data={phones}>
				<Bar dataKey='price' fill='#8884d8' />
			</BarChart>
		</div>
	);
};

export default PhoneBar;
