import "moment/locale/ko";
import styled from "styled-components";
import Avatar from "../../atoms/ProfileImage";
import Count from "../../atoms/Count";
import moment from "moment";
import { useMemo, useCallback } from "react";
import { memo } from "react";
import { Chat } from "../../../types/schema";
import { useHistory } from "react-router-dom";

interface Props extends Chat {}

const Wrapper = styled.div`
	display: flex;
	height: 74px;
	padding: 10px 0px;
	background-color: ${({ theme }) => theme.palette.white};
	width: 100%;
	&:hover {
		cursor: pointer;
	}
`;
const ChatPicture = styled(Avatar)`
	margin-right: 15px;
	align-self: center;
	justify-self: center;
`;
const ContentWrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
`;
const TitleWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 3px;
`;
const ChatName = styled.div`
	font-weight: bold;
	font-size: 16px;
	letter-spacing: -0.2px;
	color: ${({ theme }) => theme.palette.chacoalGray};
`;
const LastSentMessageTime = styled.div`
	font-size: 11px;
	align-self: center;
	color: ${({ theme }) => theme.palette.coolGray};
`;

const MessageWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const PreviewMessage = styled.div`
	font-size: 13px;
	letter-spacing: -0.1px;
	color: ${({ theme }) => theme.palette.coolGray};
`;

const ChatCard = ({
	id,
	pictureId,
	name,
	unreadMessageCount,
	lastMessage: { createdAt: lastSentMessageTime, content: lastSentMessage },
}: Props) => {
	const history = useHistory();

	// 마지막 보낸 메시지 포맷팅
	const formattedLastSentTime = useMemo(
		() =>
			moment(lastSentMessageTime).isSame(new Date(), "day")
				? moment(lastSentMessageTime).format("hh:mm")
				: moment(lastSentMessageTime).format("dddd"),
		[lastSentMessageTime]
	);

	// 채팅룸으로 이동
	const moveToRoom = useCallback(() => history.push(`/rooms/${id}/`), [
		history,
		id,
	]);

	return (
		<Wrapper onClick={moveToRoom}>
			<ChatPicture
				src={require(`../../../assets/chatPicture/${pictureId}.png`).default}
			></ChatPicture>
			<ContentWrapper>
				<TitleWrapper>
					<ChatName>{name}</ChatName>
					<LastSentMessageTime>{formattedLastSentTime}</LastSentMessageTime>
				</TitleWrapper>
				<MessageWrapper>
					<PreviewMessage>{lastSentMessage}</PreviewMessage>
					{unreadMessageCount !== 0 && <Count number={unreadMessageCount} />}
				</MessageWrapper>
			</ContentWrapper>
		</Wrapper>
	);
};
export default memo(ChatCard);
