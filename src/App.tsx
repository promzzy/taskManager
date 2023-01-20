import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/roote';

const App: FC = () => {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
