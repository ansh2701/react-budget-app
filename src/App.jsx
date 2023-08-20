import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Dashboard, { dashboardAction, dashboardLoader } from './pages/Dashboard'
import Error from './pages/Error';
import Main, { mainLoader } from './Layout/Main';
import { logoutAction } from './actions/logout';
import Expenses, { expensesAction, expensesLoader } from './pages/Expenses';
import Budget, { budgetAction, budgetLoader } from './pages/Budget';
import { deleteAction } from './actions/delete';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main/>} loader={mainLoader} errorElement={<Error />} >
      <Route index element={<Dashboard />} loader={dashboardLoader} action={dashboardAction} errorElement={<Error />}/>
      <Route path='logout' action={logoutAction}/>
      
      <Route path='expenses' element={<Expenses />} loader={expensesLoader} action={expensesAction} errorElement={<Error />}/>
      <Route path='budget/:id' element={<Budget />} loader={budgetLoader} action={budgetAction} errorElement={<Error />}>
        <Route path='delete' action={deleteAction}/>
      </Route>
    </Route>
  )
);

function App() {

  return (
    <div className='App'>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App
