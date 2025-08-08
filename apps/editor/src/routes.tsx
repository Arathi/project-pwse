import type { RouteObject } from "react-router";

import Editor from "./pages/Editor";
import Root from "./pages/Root";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/editor",
        element: <Editor />,
      },
    ],
  },
];

export default routes;
