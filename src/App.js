
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen'
import TodoDashboard from './screens/TodoDashboard'
import ForgotScreen from './screens/ForgotScreen'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
      <Router>
          <div>
            <Routes>
                <Route path='/' element={<LoginScreen />} exact />
                <Route path='/register' element={<RegisterScreen />}  />
                <Route path='/dashboard' element={<TodoDashboard />}  />
                <Route path='/forgotscreen' element={<ForgotScreen />}  />
               
            </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
