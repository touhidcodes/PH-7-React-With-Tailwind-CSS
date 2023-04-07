import React, { useState } from "react";
import "./Navbar.css";
import Link from "./Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
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
		<nav className='bg-purple-400'>
			<div onClick={() => setOpen(!open)} className='md:hidden'>
				<span>
					{open == true ? (
						<XMarkIcon className='h-6 w-6 text-purple-500' />
					) : (
						<Bars3Icon className='h-6 w-6 text-purple-500' />
					)}
				</span>
			</div>
			<ul
				className={`md:flex ${
					open ? "top-6" : "-top-96"
				} absolute duration-500 md:static bg-purple-300 py-2`}
			>
				{routes.map((route) => (
					<Link key={route.id} route={route}></Link>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
