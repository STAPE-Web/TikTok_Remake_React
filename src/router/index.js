import Main from "../pages/Main"
import Upload from "../pages/Upload"
import Profile from "../pages/Profile"
import Settings from "../pages/Settings"

export const Routes = [
    { path: '/', component: Main, exact: true },
    { path: '/upload', component: Upload, exact: true },
    { path: '/profile', component: Profile, exact: true },
    { path: '/settings', component: Settings, exact: true },
]