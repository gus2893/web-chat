"use client";
import { User } from "@/API";
import { listUsers } from "@/graphql/queries";
import { API } from "aws-amplify";
import { GetServerSideProps } from "next";
import SignInButton from "../SignInButton/SignInButton";

export const getServerSideProps: GetServerSideProps<{
	users: any;
}> = async () => {
	let users = await API.graphql({
		query: listUsers,
		authToken: "da2-6fbhcpxjh5akjafq7bnh76apci",
	});
	// try {
	// } catch (e) {
	// 	console.log("ERR", e);
	// }

	console.log("usersx", users);

	return { props: { users } };
};

const SignInBox = () => {
	let users;
	const test = async () => {
		console.log("here");

		users = await API.graphql({
			query: listUsers,
			authMode: "API_KEY",
		});
	};
	test();
	console.log("USERS", users);
	return <div className="flex">hello</div>;
};

export default SignInBox;
