
import Home from "../pages/Home"
import Following from "../pages/following"
import { HeaderOnly } from "../components/layout"
import Upload from "../pages/Upload"
import Profile from "../components/layout/components/Profile"
export const publicRoutes = [
    {path:'/@/:nickname', component:Profile},
    {path:'/following', component:Following},
    {path:'/explore', component:Following},
    {path:'/live', component:Following},
    {path:'/upload', component:Upload, Layout:HeaderOnly},
    {path:'/', component: Home},


]
export const privateRoutes = [

]