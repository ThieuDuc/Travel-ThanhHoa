import { ROUTERS } from "./utils/router";
import HomePages from "./pages/user/HomePages";
import ProfilePages from "./pages/user/profilePages";
import { Routes,Route } from "react-router-dom";
import MasterLayout from "./pages/user/theme/masterLayout";

const renderUserRouter = () =>{
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePages/>
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePages/>
        },
    ];
    return(
        <MasterLayout>
            <Routes>
                {
                    userRouters.map((item,key) =>(<Route key={key} path={item.path} element={item.component}></Route>))
                }
            </Routes>
        </MasterLayout>  
    );
};
const Routercustom = () =>{
    return renderUserRouter();
};
 
export default Routercustom;