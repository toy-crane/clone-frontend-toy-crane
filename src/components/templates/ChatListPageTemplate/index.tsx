import Container from "../../container";
import styled from "styled-components";
import { memo } from "react";

interface Props {
	chatListHeader: React.ReactNode;
	chatList: React.ReactNode;
}

const ChatListHeaderContainer = styled.div`
	position: sticky;
	height: 44px;
	top: 0;
`;
const ChatListContainer = styled.div`
	flex: 1;
`;

const ChatListPageTemplate = ({ chatList, chatListHeader }: Props) => (
	<Container>
		<ChatListHeaderContainer>{chatListHeader}</ChatListHeaderContainer>
		<ChatListContainer>{chatList}</ChatListContainer>
	</Container>
);

export default memo(ChatListPageTemplate);
