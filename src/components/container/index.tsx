import styled from "styled-components";

export const FlexBox = styled.div`
	width: 100%;
	height: 100vh;
	max-width: 600px;
	padding: 0 8px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	@media screen and (min-width: 600px) {
		margin: auto;
	}
`;

interface Props {
	children: React.ReactNode;
}

const Container = ({ children, ...props }: Props) => (
	<FlexBox {...props}>{children}</FlexBox>
);
export default Container;
