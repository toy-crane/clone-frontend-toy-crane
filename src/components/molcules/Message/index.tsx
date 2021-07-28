import "moment/locale/ko";
import moment from "moment";
import { Message as MessageType } from "../../../types/schema";
import styled from "styled-components";
import { memo } from "react";
import Image from "../../atoms/Image";

type Props = MessageType & {
	createdAt?: Date;
};

const Wrapper = styled.div<Pick<Props, "isMine">>`
	display: flex;
	flex-direction: ${({ isMine }) => (isMine ? "row-reverse" : "row")};
`;

const MessageBox = styled.div<Pick<Props, "isMine">>`
	display: inline-flex;
	padding: 12px;
	border-radius: 12px;
	box-shadow: 0 2px 4px 0
		${({ isMine, theme }) =>
			isMine ? `rgba(91, 56, 177, 0.4)` : theme.palette.black_10};
	background-color: ${(props) => props.theme.palette.white};
	font-size: 14px;
	font-weight: 600;
	background-color: ${({ isMine, theme }) => isMine && theme.palette.primary};
	color: ${({ theme, isMine }) =>
		isMine ? theme.palette.white : theme.palette.chacoalGray2};
	margin: ${({ isMine }) => (isMine ? "0 4px 0 4px" : "0 4px 0 0")};
`;

const MessageSentTime = styled.div`
	opacity: 0.4;
	font-size: 12px;
	font-weight: 500;
	align-self: flex-end;
	font-stretch: normal;
	letter-spacing: normal;
	color: ${(props) => props.theme.palette.chacoalGray2};
`;

const StyledImage = styled(Image)<Pick<Props, "isMine">>`
	margin: ${({ isMine }) => (isMine ? "0 4px 0 4px" : "0 4px 0 0")};
`;

const Message = ({ createdAt, isMine, src, content, ...props }: Props) => (
	<Wrapper isMine={isMine}>
		{content && <MessageBox isMine={isMine}>{content}</MessageBox>}
		{src && (
			<StyledImage
				src={src}
				alt={`${props.id} attachment image`}
				width="200px"
				isMine={isMine}
			/>
		)}
		{createdAt && (
			<MessageSentTime>{moment(createdAt).format("hh:mm")}</MessageSentTime>
		)}
	</Wrapper>
);

export default memo(Message);
