import React, { useState } from "react";
import "./Navbar.css";
import { list } from "postcss";
import Link from "./Link/Link";
import { BeakerIcon, Bars3Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const routes = [
		{ id: 1, name: "Home", path: "./home" },
		{
			id: 2,
			name: "About Us",
			path: "./about",
		},
		{
			id: 3,
			name: "Services",
			path: "./services",
		},
		{
			id: 4,
			name: "Products",
			path: "./products",
		},
		{
			id: 5,
			name: "Contact Us",
			path: "./contact",
		},
	];

	return (
		<nav>
			<div onClick={() => setOpen(!open)}>
				<Bars3Icon className='h-6 w-6 text-purple-500' />
				<span>{open == true ? "open" : "close"}</span>
			</div>
			<ul className='md:flex'>
				{routes.map((route) => (
					<Link key={route.id} route={route}></Link>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
