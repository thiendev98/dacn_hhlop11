import Layout from './layout/Layout';
import Home from 'components/UI/home/Home';
import { AppStyle } from './app.style';
import { Routes, Route } from 'react-router-dom';
function App() {
    return (
        <AppStyle>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/started" element={<Layout />} />
            </Routes>
        </AppStyle>
    );
}

export default App;
