import React, { memo } from "react";
import { useCallback } from "react";
import { useState } from "react";
import styled from "styled-components";

interface Props {
	value?: string;
	onChange?: (value: string) => void;
	onKeyPress?: (value: string) => void;
	placeholder?: string;
}

const StyledInput = styled.input`
	width: 281px;
	height: 50px;
	padding: 16px;
	border-radius: 25px;
	box-shadow: 0 2px 4px 0 ${({ theme }) => theme.palette.black_10};
	background-color: ${({ theme }) => theme.palette.white};
	font-size: 14px;
	font-weight: 500;
	letter-spacing: -0.12px;
	color: #74747e;
`;

const TextInput = ({
	value,
	onChange,
	onKeyPress,
	placeholder = "메시지를 입력하세요.",
	...props
}: Props) => {
	const [text, setText] = useState<string | undefined>(value);
	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setText(e.target.value);
			onChange?.(e.target.value);
		},
		[onChange]
	);

	const handleKeyPress = useCallback(
		(e: React.KeyboardEvent<HTMLInputElement>) => {
			if (e.key === "Enter" && text) {
				onKeyPress?.(text);
			}
		},
		[onKeyPress, text]
	);

	return (
		<StyledInput
			value={text || ""}
			onChange={handleChange}
			onKeyPress={handleKeyPress}
			placeholder={placeholder}
			type="text"
			{...props}
		></StyledInput>
	);
};
export default memo(TextInput);
