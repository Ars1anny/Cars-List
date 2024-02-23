import { FC } from "react";
import Header from "./layouts/Header/Header";
import TodoList from "./components/TodoList";

const App: FC = () => {
	return (
		<>
		<Header/>
		<TodoList />
		</>
	);
};

export default App;
