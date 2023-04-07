import React from 'react';
import {CheckIcon } from "@heroicons/react/24/solid";

const Feature = ({feature}) => {
    return (
			<div className='mb-1'>
				<p className='flex '>
					<span>
						<CheckIcon className='h-6 w-6 text-purple-500' />
					</span>
					<span className='ml-2 font-semibold'>{feature}</span>
				</p>
			</div>
		);
};

export default Feature;