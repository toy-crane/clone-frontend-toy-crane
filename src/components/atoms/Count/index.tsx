import { memo } from "react";
import styled from "styled-components";

interface Props {
	number: number;
}

const StyledCount = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 18px;
	height: 18px;
	border-radius: 10.5px;
	background-color: ${(props) => props.theme.palette.primary};
	color: ${({ theme }) => theme.palette.white};
	font-family: AppleSDGothicNeo-Bold;
	font-size: 10px;
	letter-spacing: -0.08px;
	line-height: normal;
	font-stretch: normal;
	font-style: normal;
`;

const Count = ({ number, ...props }: Props) => (
	<StyledCount {...props}>{number}</StyledCount>
);
export default memo(Count);
