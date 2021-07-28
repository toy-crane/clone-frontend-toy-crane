import Container from "../../container";
import styled from "styled-components";
import { memo } from "react";

interface Props {
	chatRoomHeader: React.ReactNode;
	messageList: React.ReactNode;
	messageInput: React.ReactNode;
}

const StyledContainer = styled(Container)``;

const ChatRoomHeaderContainer = styled.div`
	position: sticky;
	height: 44px;
	top: 0;
`;
const MessageListContainer = styled.div`
	background-color: ${(props) => props.theme.palette.paleGray};
	padding: 20px 16px 20px 16px;
	flex: 1;
`;
const MessageInputContainer = styled.div`
	background-color: ${(props) => props.theme.palette.paleGray};
	padding: 10px 16px 10px 20px;
	position: sticky;
	bottom: 0;
`;

const ChatListPageTemplate = ({
	messageList,
	chatRoomHeader,
	messageInput,
}: Props) => (
	<StyledContainer>
		<ChatRoomHeaderContainer>{chatRoomHeader}</ChatRoomHeaderContainer>
		<MessageListContainer>{messageList}</MessageListContainer>
		<MessageInputContainer>{messageInput}</MessageInputContainer>
	</StyledContainer>
);

export default memo(ChatListPageTemplate);
