import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashLayout from "./dashboard/DashLayout";
import Layout from './web/Layout'
import { AppRoutes } from "./AppRoutes";
import { v4 as uniqueHash } from 'uuid'
function App() {
  const uniqueId = uniqueHash()
  return (
    <>
      <BrowserRouter>
        <Routes>
          {
            AppRoutes.map(({ web }) => {
              return web.map(({ pathname, component }) => {
                return <Route path={pathname} element={<Layout>{component}</Layout>} key={uniqueId} />
              })
            })
          }
          <Route path="/dashboard" element={<DashLayout />}>
            {
              AppRoutes.map(({ admin }) => {
                return admin.map(({ nestedPath, component }) => {
                  return <Route path={nestedPath} element={component} key={uniqueId} />
                })
              })
            }
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
