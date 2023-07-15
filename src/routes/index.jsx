import Home from '../components/home/index';
import AddNewItem from '../components/form/index.jsx';

import {
     createBrowserRouter,
     RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
     {
          path: '/',
          element: <Home />
     },
     {
          path: '/add',
          element: <AddNewItem />
     }
])

function TodoRoutes() {return <RouterProvider router={router} />};

export default TodoRoutes;