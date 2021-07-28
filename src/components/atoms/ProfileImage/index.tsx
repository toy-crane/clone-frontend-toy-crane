import { memo } from "react";
import styled from "styled-components";

interface Props {
	src: string;
}

export const StyledAvatar = styled.img`
	box-sizing: border-box;
	display: block;
	box-sizing: border-box;
	width: 56px;
	height: 56px;
	border-radius: 28px;
	background-color: ${({ theme }) => theme.palette.white};
`;

const Avatar = ({ src, ...props }: Props) => (
	<StyledAvatar src={src} {...props}></StyledAvatar>
);
export default memo(Avatar);
