
import Home from './routes/home/home.component'

import Navigation from './routes/navigation/navigation.component'

import Authentication from './routes/authentication/authentication.component'

import { Routes, Route } from 'react-router-dom'

const Shop = ()=>{
  return <h1>I am the Shop Page</h1>
}
 
const App = () => {
  
  return (

    <Routes>

      <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>}/>  {/* index se hum ye kh rahe k jab b / per hit hogi to home component be render hoga nav k sath kioke home navigation Route k ander likha humne*/ }
      <Route path='shop' element={<Shop/>}/>
      <Route path='auth' element={<Authentication/>}/>

    </Route>
    </Routes>
  );
};

export default App;
