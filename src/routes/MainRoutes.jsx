import {Routes, Route, Navigate} from 'react-router-dom';
import App from '../App';
import Answers from '../pages/Answers';
const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/form' element={<App/>}/>
        <Route path='/answers' element={<Answers/>}/>

        <Route path='/' element={<Navigate to="/form"/>}></Route>
        <Route path='*' element={<Navigate to="/form"/>}></Route>
    </Routes>
  )
}

export default MainRoutes