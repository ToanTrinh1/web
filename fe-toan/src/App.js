import Header from "./Components/layout/Header";
import {Outlet} from "react-router-dom";
import './index.css';
const App =() => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export default App;