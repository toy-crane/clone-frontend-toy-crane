import { useCallback } from "react";
import { memo } from "react";
import { useState } from "react";
import styled from "styled-components";
import Icon from "../../atoms/Icon";
import TextInput from "../../atoms/TextInput";

const Wrapper = styled.div`
	display: flex;
	& > input {
		margin-right: 12px;
	}
`;

const SendButton = styled.div`
	background-color: ${({ theme }) => theme.palette.primary};
	border-radius: 25px;
	padding: 16px 12px;
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

const StyledTextInput = styled(TextInput)`
	flex: 1;
`;

interface Props {
	submitMessage: (text: string) => void;
}

const MessageInput = ({ submitMessage }: Props) => {
	const [message, setMessage] = useState<string>();
	const handleSubmit = useCallback(() => message && submitMessage(message), [
		message,
		submitMessage,
	]);

	return (
		<Wrapper>
			<StyledTextInput
				value={message}
				onChange={setMessage}
				onKeyPress={handleSubmit}
			/>
			<SendButton>
				<Icon name="mail" onClick={handleSubmit} />
			</SendButton>
		</Wrapper>
	);
};

export default memo(MessageInput);
