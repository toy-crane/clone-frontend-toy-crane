import styled from "styled-components";

interface Props {
	percentage?: number;
}

const Container = styled.div`
	width: 100%;
	background-color: #e5e5e7;
	border-radius: 3px;
`;

const Bar = styled.div<Props>`
	width: ${({ percentage }) => `${percentage}%`};
	background-color: ${({ theme }) => theme.palette.primary};
	height: 6px;
	border-radius: 3px;
`;

const ProgressBar = ({ percentage }: Props) => (
	<Container>
		<Bar percentage={percentage}></Bar>
	</Container>
);
export default ProgressBar;
