import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { publicRoutes } from "./routes";
import { DefaultLayOut } from "./components/layout";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            //const Page = route.component;
            let Layout = DefaultLayOut;
            if (route.Layout) {
              Layout = route.Layout;
            } else if (route.Layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <route.component />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </>
  );
}

export default App;
