import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader';
import { router } from './routes/roote';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const App: FC = () => {

  return (
    <div className="App">
      <Loader />
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
