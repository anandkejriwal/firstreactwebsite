import React, { useState } from 'react';

const YashApp = () => {

	let arr = [];

	const [InpVal, ChangeInpVal] = useState([]);

	const ChangeInpValue = () => {
		// arr.push();
		// ChangeInpVal(arr);
		console.log(document.getElementById('TextInput').value)
	}

	return (
		<>
			<input type="text" id="TextInput" onInput={ChangeInpValue} />
			<button>+</button>

			{InpVal.map(Val => {
				return <List name={Val} />
			})}
		</>
	)
}

const List = (props) => {
	return (
		<div>
			{props.name}
		</div>
	)
}

export default YashApp;