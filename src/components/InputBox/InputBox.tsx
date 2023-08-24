"use client";

import { createMessage } from "@/graphql/mutations";
import { API } from "aws-amplify";
import { useState } from "react";

const InputBox = () => {
	const [message, setMessage] = useState<string>("");

	const sendMessage = async () => {
		const input = {};
		try {
			API.graphql({
				authMode: "API_KEY",
				query: createMessage,
				variables: {
					input: input,
				},
			});
		} catch (error) {}
	};
	return (
		<div>
			<input
				type="text"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<button onClick={() => alert(message)}>Submit</button>
		</div>
	);
};

export default InputBox;
