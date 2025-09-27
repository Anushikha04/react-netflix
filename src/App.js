import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div className="App">
      <Provider store={appStore}>
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
