

import Upload from "../../../pages/Upload";
import Header from "../components/header";


function HeaderOnly({ children}) {
    return ( 
        <>
            <Header />
            <div className="content">
                {children}
            </div>
        </>
     );
}

export default HeaderOnly;