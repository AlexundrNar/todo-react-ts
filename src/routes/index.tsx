import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate
} from 'react-router-dom'
import { Todos } from '../pages'


export const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Navigate to="todos" />} />
      <Route path="/todos" element={<Todos />}/>
      
      <Route path='*' element={<Todos/>} />
    </>
  )
)
