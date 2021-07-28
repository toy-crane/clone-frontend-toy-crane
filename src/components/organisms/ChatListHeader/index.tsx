import { memo } from "react";
import styled from "styled-components";
import Icon from "../../atoms/Icon";

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ theme }) => theme.palette.primary};
	height: 44px;
	padding: 0px 12px;
`;

const Title = styled.div`
	font-weight: bold;
	color: ${({ theme }) => theme.palette.white};
	font-size: 17px;
	letter-spacing: -0.12px;
`;

const ChatListHeader = () => (
	<Wrapper>
		<Icon name="menu" />
		<Title>채팅</Title>
		<Icon name="avatar" />
	</Wrapper>
);
export default memo(ChatListHeader);
