import GlobalStyles from "./style/GlobalStyle";
import Normalize from "./style/Normalize";
import { ThemeProvider } from "styled-components";
import theme from "./style/themes/default";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import queryClient from "./libs/reactQuery";
import { RecoilRoot } from "recoil";
import { lazy, Suspense } from "react";

const Chats = lazy(() => import("./pages/Chats"));
const ChatRoom = lazy(() => import("./pages/ChatRoom"));

function App() {
	return (
		<RecoilRoot>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<Normalize />
					<Suspense fallback={<span>loading....</span>}>
						<Router>
							<Switch>
								<Route path="/list" render={() => <Chats />} />
								<Route path="/rooms/:room_id" render={() => <ChatRoom />} />
							</Switch>
						</Router>
					</Suspense>
				</ThemeProvider>
			</QueryClientProvider>
		</RecoilRoot>
	);
}

export default App;
