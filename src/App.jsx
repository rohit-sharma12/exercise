import './App.css'
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';

function App() {
  
  
  return (
    <Box with='480px' sx={{width: {xl: '1488px'}}} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/exercise/:id' element={<ExerciseDetail />}/> 
      </Routes>
      <Footer /> 
    </Box>
  )
}

export default App
