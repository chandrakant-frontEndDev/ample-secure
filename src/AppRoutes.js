import DashboardHome from "./dashboard/pages/DashboardHome";
import Home from './web/Home'
import About from './web/About'
import Contact from './web/Contact'
import Services from './web/Services'
import Career from './web/Career'

export const AppRoutes = [
    {
        web: [
            {
                pathname: '/',
                component: <Home />,
            },
            {
                pathname: '/About',
                component: <About />,
            },
            {
                pathname: '/Services',
                component: <Services />,
            },
            {
                pathname: '/Career',
                component: <Career />,
            },
            {
                pathname: '/Contact',
                component: <Contact />,
            }
        ],
        admin: [
            {
                nestedPath: 'home',
                component: <DashboardHome />,
            }
        ]
    },
]