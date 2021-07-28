import GlobalStyles from "../src/style/GlobalStyle";
import defaultTheme from "../src/style/themes/default";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { addDecorator } from "@storybook/react";
import StoryRouter from "storybook-react-router";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

// storybook에 global Style 적용하기
addDecorator((story) => (
	<>
		<GlobalStyles /> {story()}
	</>
));

// storybook에 theming 적용하기
const themes = [defaultTheme];
addDecorator(withThemesProvider(themes), ThemeProvider);

// storybook에서 react-router 사용하기
addDecorator(StoryRouter());
