import React from 'react';
import {useParams } from 'react-router-dom';

function User() {
	const {fname} = useParams();
	return (		
		<>			
			<h1>Hello {fname}</h1>
			<h4>How R U?</h4>
		</>
	);

	}
export default User
