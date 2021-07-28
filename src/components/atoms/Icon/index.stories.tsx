import Icon from ".";

export default {
	title: "Atoms/Icon",
	component: [Icon],
};

export const Icons = () => (
	<div style={{ backgroundColor: "#5B36AC", display: "flex" }}>
		<Icon name="menu"></Icon>
		<Icon name="avatar"></Icon>
		<Icon name="picture"></Icon>
		<Icon name="search"></Icon>
		<Icon name="chevronLeft"></Icon>
		<Icon name="mail"></Icon>
		<Icon name="close"></Icon>
	</div>
);
