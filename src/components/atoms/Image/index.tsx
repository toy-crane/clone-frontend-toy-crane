import styled from "styled-components";

interface Props {
	src: string;
	alt: string;
	width?: string;
	onClick?: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

const StyledImage = styled.img`
	border-radius: 12px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
	cursor: pointer;
`;

const Image = ({ src, alt, width, onClick, ...props }: Props) => {
	return (
		<StyledImage
			src={src}
			alt={alt}
			width={width}
			onClick={onClick}
			{...props}
		></StyledImage>
	);
};
export default Image;
