import React from "react";

const PriceCard = (props) => {
	const { name, price } = props.price;
	console.log(props);
	return (
		<div>
			<h2 className='text-center'>
				<span className='text-2xl font-semibold text-purple-600'> $ {price} </span>{" "}
				<span className='text-xl'>/ Month</span>
			</h2>
			<h5 className='text-2xl font-semibold text-center'>{name}</h5>
		</div>
	);
};

export default PriceCard;
