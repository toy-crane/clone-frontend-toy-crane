import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;

const Divider = styled.hr`
	border-top: 0.5px solid #e6e6eb;
	flex: 1;
`;

const ChatDate = styled.div`
	opacity: 0.4;
	font-size: 12px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	margin: 0px 10px;
	color: ${({ theme }) => theme.palette.chacoalGray2};
`;

interface Props {
	chatDate: string;
}

const ChatDivider = ({ chatDate }: Props) => (
	<Wrapper>
		<Divider />
		<ChatDate>{chatDate}</ChatDate>
		<Divider />
	</Wrapper>
);
export default ChatDivider;
