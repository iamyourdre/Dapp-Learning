// filepath: /c:/Users/iamyo/Code Box/JS_ENV/DApp-Learning/frontend/src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WalletProvider } from './contexts/WalletContext';
import _01 from './pages/_01';
import BasicLayout from './layouts/BasicLayout';
import Index from './pages/Index';

function App() {
  return (
    <WalletProvider>
      <Router>
        <Routes>
          <Route path="/" element={<BasicLayout />} >
            <Route path='/' element={<Index />} />
            <Route path="/_01" element={<_01 />} />
          </Route>
        </Routes>
      </Router>
    </WalletProvider>
  );
}

export default App;