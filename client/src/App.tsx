import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import AllRoutes from './helper/AllRoutes';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<AllRoutes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
