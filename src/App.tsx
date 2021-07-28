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
	return <div>Hello</div>;
}

export default App;
