import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../layout/Dashboard/Dashboard';
import Main from '../layout/Main/Main';
import Home from '../pages/home/Home';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard/>
    }
])

export default Router;