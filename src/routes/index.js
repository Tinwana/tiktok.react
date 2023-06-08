
import Home from "../pages/Home"
import Following from "../pages/following"
import { HeaderOnly } from "../components/layout"
import Upload from "../pages/Upload"
export const publicRoutes = [
    {path:'/', component: Home},
    {path:'/following', component:Following},
    {path:'/upload', component:Upload, Layout:HeaderOnly},


]
export const privateRoutes = [

]