import { memo } from "react";
import { Chat } from "../../../types/schema";
import ChatCard from "../../molcules/ChatCard";
import styled from "styled-components";

interface Props {
	chats: Chat[];
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0px 16px;
`;

const ChatList = ({ chats }: Props) => {
	return (
		<Wrapper>
			{chats.map((chat) => (
				<ChatCard {...chat} key={chat.id} />
			))}
		</Wrapper>
	);
};

export default memo(ChatList);
