import  { Suspense, lazy } from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ProtectRoute from './components/auth/ProtectRoute';
import {LayoutLoaders} from "./components/layout/Loaders"; 


const Login=lazy(()=>import("./pages/Login"))
const Home=lazy(()=>import("./pages/Home"))
const Chat=lazy(()=>import("./pages/Chat"))
const Groups=lazy(() => import("./pages/Groups"));
const Notfound=lazy(() => import("./pages/Notfound"));
const AdminLogin=lazy(()=>import("./pages/admin/AdminLogin"));
const Dashboard=lazy(()=>import("./pages/admin/Dashboard"));

let user=true;
const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<LayoutLoaders/>}>
      <Routes>
        <Route element={<ProtectRoute user={user}/>}>
          <Route path="/" element={<Home/>}/>
          <Route path='/chat/:chatId' element={<Chat/>}/>
          <Route path='/groups' element={<Groups/>}/>
        </Route>

        <Route path='/login' element={<ProtectRoute user={!user} redirect="/"><Login/></ProtectRoute>} />
        <Route path='*' element={<Notfound/>}/>
        <Route path="/admin" element={<AdminLogin/>}/>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Suspense>
  </BrowserRouter>  
  );
};

export default App;