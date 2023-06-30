import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Fragment, useEffect , useState } from "react";
import { publicRoutes } from "./routes";
import { DefaultLayOut } from "./components/layout";

function App() {
  const [api,setApi] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/course/api')
    .then(res => res.json())
    .then (data => {
      setApi(data)
    })
  },[])
  console.log(api);

  return (
    <>
      <Container>
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
      </Container>
    </>
  );
}

export default App;
