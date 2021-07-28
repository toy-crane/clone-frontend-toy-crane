import ProgressBar from ".";

export default {
	title: "Atoms/ProgressBar",
	component: [ProgressBar],
};

export const DefaultProgressBar = () => (
	<div>
		<ProgressBar percentage={10}></ProgressBar>
	</div>
);
