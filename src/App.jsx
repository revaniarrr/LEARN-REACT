import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="flex justify-center p-6 w-screen h-screen bg-gray-200 overflow-y-auto">
      <div className="max-w-md">
        <div className="flex items-center justify-center mb-4 text-xs text-blue-600 font-semibold uppercase tracking-wide">
          <Link
          className="mx-2 px-4 py-2 rounded-xl hover-bg-gray-100 transition-all ease-in-out"
          to="/home">
            Home
          </Link>

          <Link
          className="mx-2 px-4 py-2 rounded-xl hover-bg-gray-100 transition-all ease-in-out"
          to="/home">
            About
          </Link>

          <Link
          className="mx-2 px-4 py-2 rounded-xl hover-bg-gray-100 transition-all ease-in-out"
          to="/home">
            Me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
