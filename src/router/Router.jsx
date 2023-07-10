import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cv from '../pages/Cv';
import Skills from '../pages/Skills';
import Navigation from '../layout/Navigation';
import NoMatch from './NoMatch';

const Router = () => {
    return (
        <BrowserRouter>
            <Navigation>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Cv" element={<Cv />} />
                    <Route path="/Skills" element={<Skills />} />
                    <Route path="/*" element={<NoMatch />} />
                </Routes>
            </Navigation>
        </BrowserRouter>
    );
};

export default Router;
