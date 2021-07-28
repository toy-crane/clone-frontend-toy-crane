import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		palette: {
			primary: string;
			chacoalGray: string;
			chacoalGray2: string;
			coolGray: string;
			paleGray: string;
			white: string;
			black: string;
			black_10: string;
		};
	}
}
