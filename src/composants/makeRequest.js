import React from "react";

const makeRequest = async (data) => {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
		method: "POST",
		mode: "cors",
		cache: "no-cache",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	});
	return await res.json();
};
export default makeRequest;