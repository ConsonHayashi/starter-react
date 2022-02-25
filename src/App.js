import {
  Route,
  Routes,
} from 'react-router-dom';

import {
  TestAnijs,
  TestChartjs,
  TestDepend,
  TestIcon,
  TestTailWind,
} from './TestDepend';

function App () {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<TestDepend />} />
        <Route path="/test/" element={<TestDepend />} />
        <Route path="/test/animejs" element={<TestAnijs />} />
        <Route path="/test/chartjs" element={<TestChartjs />} />
        <Route path="/test/tailwindcss" element={<TestTailWind />} />
        <Route path="/test/icon" element={<TestIcon />} />
      </Routes>
    </div>
  );
}

export default App;
