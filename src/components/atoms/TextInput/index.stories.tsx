import TextInput from ".";

export default {
	title: "Atoms/TextInput",
	component: [TextInput],
};

export const TextInputDefault = () => (
	<TextInput onChange={(value) => console.log(value)}></TextInput>
);

export const TextInputWithValue = () => (
	<TextInput
		onChange={(value) => console.log(value)}
		value="출근 했어요?"
	></TextInput>
);

export const TextInputWithOnKeyPress = () => (
	<TextInput
		onChange={(value) => console.log(value)}
		onKeyPress={(value) => console.log("엔터를 입력하셨습니다.", value)}
		value="출근 했어요?"
	></TextInput>
);
