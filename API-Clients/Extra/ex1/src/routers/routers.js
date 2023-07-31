import { createBrowserRouter } from "react-router-dom";
import Main from "../modules/Main/Main";
import Users from "../modules/Users/Users";
import Posts from "../modules/Posts/Posts";
import Comments from "../modules/Comments/Comments";
import path from "./path";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: path.users,
				element: <Users />,
			},
			{
				path: path.posts,
				element: <Posts />,
			},
			{
				path: path.comments,
				element: <Comments />,
			},
		],
	},
]);

export default router;
