import { createRoot } from 'react-dom/client'
import { Layout } from './components/Layout';
import {
    BrowserRouter
} from "react-router-dom";


createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <Layout />
 </BrowserRouter> 
)
