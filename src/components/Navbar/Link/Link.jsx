import React from "react";

const Link = (props) => {
	const { name, path } = props.route;
	// console.log(props);
	return (
		<li className='p-5'>
			<a href={path}>{name}</a>
		</li>
	);
};

export default Link;
