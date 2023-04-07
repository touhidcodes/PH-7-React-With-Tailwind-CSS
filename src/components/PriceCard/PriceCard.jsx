import React from "react";
import Feature from "../Feature/Feature";
const PriceCard = (props) => {
	const { name, price, features } = props.price;
	// console.log(props);
	return (
		<div className='bg-indigo-300 mt-10 rounded-xl p-5 flex flex-col '>
			<h2 className='text-center'>
				<span className='text-2xl font-semibold text-slate-900'>$ {price}</span>
				<span className='text-xl'>/ Month</span>
			</h2>
			<h5 className='text-2xl font-semibold text-center mt-3'>{name}</h5>
			<p className='text-2xl font-semibold mt-3 mb-2'>Features: </p>
			<div className='mb-2'>
				{features.map((feature, idx) => (
					<Feature key={idx} feature={feature}></Feature>
				))}
			</div>
			<button className='w-full bg-purple-500 py-2 rounded-xl text-xl font-semibold text-white mt-auto'>
				Buy Now
			</button>
		</div>
	);
};

export default PriceCard;
