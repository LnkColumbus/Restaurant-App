import { Outlet } from 'react-router-dom'

import { Navbar } from '../ui/Navbar'

export const AppLayout = () => {
  return (
    <>
        <nav>
            <Navbar />
        </nav>
        <main
            style={{
                margin: "30px auto",
                maxWidth: "1440px",
                padding: "0px 20px",
            }}
        >
            <Outlet />
        </main>
    </>
  )
}
