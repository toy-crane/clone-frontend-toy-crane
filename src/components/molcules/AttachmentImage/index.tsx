import styled from "styled-components";
import Icon from "../../atoms/Icon";
import ProgressBar from "../../atoms/ProgressBar";
import Image from "../../atoms/Image";

interface Props {
	src: string;
	alt: string;
	width: string;
	cancelable?: boolean;
	progress?: number;
	handleCancelUpload?: () => void;
}

const CloseButton = styled.div`
	display: flex;
	width: 40px;
	height: 40px;
	opacity: 0.8;
	border-radius: 26.5px;
	background-color: ${({ theme }) => theme.palette.black};
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
`;

const Container = styled.div<Pick<Props, "width">>`
	position: relative;
	width: ${({ width }) => (width ? width : "100%")};
`;

const StyledImage = styled(Image)`
	width: 100%;
	height: auto;
	margin-bottom: 6px;
`;

const AttachmentImage = ({
	width,
	cancelable,
	src,
	alt,
	progress,
	handleCancelUpload,
	...props
}: Props) => {
	return (
		<Container width={width} {...props}>
			{cancelable && (
				<CloseButton onClick={handleCancelUpload}>
					<Icon name="close" />
				</CloseButton>
			)}
			<StyledImage src={src} alt={alt} />
			{progress !== 100 && <ProgressBar percentage={progress} />}
		</Container>
	);
};

export default AttachmentImage;
