import { memo } from "react";
import styled from "styled-components";
import { Message as MessageType } from "../../../types/schema";
import ChatDivider from "../ChatDivider";
import Message from "../Message";
import moment from "moment";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	& > div:not(:last-child) {
		margin-bottom: 10px;
	}
`;

interface MessageGroupProps {
	messages: MessageType[];
	chatDate: string;
}

const MessageGroup = ({ messages, chatDate }: MessageGroupProps) => {
	return (
		<Wrapper>
			<ChatDivider chatDate={chatDate} />
			{messages.map(({ createdAt, ...message }, index, messages) => {
				// 현재 시간을 다음 배열 요소와 비교하여, 같다면 시간을 노출 안함.
				if (
					index + 1 < messages.length &&
					moment(messages[index + 1].createdAt).isSame(createdAt, "minute")
				) {
					return (
						<Message {...message} key={message.id} createdAt={createdAt} />
					);
				} else {
					return (
						<Message {...message} createdAt={createdAt} key={message.id} />
					);
				}
			})}
		</Wrapper>
	);
};

export default memo(MessageGroup);
