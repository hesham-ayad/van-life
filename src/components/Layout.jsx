import { Outlet } from "react-router-dom";

import Header from "./Header";

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <footer>&#169; 2023 #VANLIFE</footer>
        </>
    )
}

export default Layout