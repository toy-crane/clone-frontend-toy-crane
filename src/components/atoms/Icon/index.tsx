import { memo } from "react";
import styled from "styled-components";

interface Props {
	name:
		| "menu"
		| "avatar"
		| "chevronLeft"
		| "picture"
		| "search"
		| "mail"
		| "close";
	onClick?: () => void;
}

const StyledIcon = styled.img`
	width: 24px;
	height: 24px;
	cursor: pointer;
`;

const Icon = ({ name, onClick }: Props) => (
	<StyledIcon
		src={require(`../../../assets/icon/${name}.svg`).default}
		alt={name}
		onClick={onClick}
	></StyledIcon>
);
export default memo(Icon);
