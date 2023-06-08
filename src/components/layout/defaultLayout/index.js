import Header from "../components/header";
import SideBar from "../components/sideBar";

function DefaultLayOut({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <SideBar />
        {children}
      </div>
    </>
  );
}

export default DefaultLayOut;
