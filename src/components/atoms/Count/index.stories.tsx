import Count from ".";

export default {
	title: "Atoms/Count",
	component: [Count],
};

export const CountWithNumber = () => (
	<div>
		<Count number={1}></Count>
		<Count number={2}></Count>
	</div>
);
