import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ACDC from './pages/acdc/ACDC';
import Albunes from './pages/acdc/albunes';
import Ozzy from './pages/ozzy/OZZY';
import OzzyHistoria from './pages/ozzy/OzzyHistoria';
import OzzyAlbunes from './pages/ozzy/OzzyAlbunes';
import OzzyGrupo from './pages/ozzy/OzzyGrupo';
import Kiss from './pages/Kiss/Kiss';
import KissHistoria from './pages/Kiss/KissHistoria';
import KissAlbunes from './pages/Kiss/KissAlbunes';
import KissGrupo from './pages/Kiss/KissGrupo';
import IronMaiden from './pages/Iron Maiden/IronMaiden';
import IronMaidenHistoria from './pages/Iron Maiden/IronMaidenHistoria';
import IronMaidenAlbunes from './pages/Iron Maiden/IronMaidenAlbunes';
import IronMaidenGrupo from './pages/Iron Maiden/IronMaidenGrupo';
import BlackSabbath from './pages/Black Sabbath/BlackSabbath';
import BlackSabbathHistoria from './pages/Black Sabbath/BlackSabbathHistoria';
import BlackSabbathAlbunes from './pages/Black Sabbath/BlackSabbathAlbunes';
import BlackSabbathGrupo from './pages/Black Sabbath/BlackSabbathGrupo';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/acdc" element={<ACDC />} />
                    <Route path="/albunes" element={<Albunes />} />
                    <Route path="/ozzy" element={<Ozzy />} />
                    <Route path="/ozzy/historia" element={<OzzyHistoria />} />
                    <Route path="/ozzy/albunes" element={<OzzyAlbunes />} />
                    <Route path="/ozzy/grupo" element={<OzzyGrupo />} />
                    <Route path="/kiss" element={<Kiss />} />
                    <Route path="/kiss/historia" element={<KissHistoria />} />
                    <Route path="/kiss/albunes" element={<KissAlbunes />} />
                    <Route path="/kiss/grupo" element={<KissGrupo />} />
                    <Route path="/ironmaiden" element={<IronMaiden />} />
                    <Route path="/ironmaiden/historia" element={<IronMaidenHistoria />} />
                    <Route path="/ironmaiden/albunes" element={<IronMaidenAlbunes />} />
                    <Route path="/ironmaiden/grupo" element={<IronMaidenGrupo />} />
                    <Route path="/blacksabbath" element={<BlackSabbath />} />
                    <Route path="/blacksabbath/historia" element={<BlackSabbathHistoria />} />
                    <Route path="/blacksabbath/albunes" element={<BlackSabbathAlbunes />} />
                    <Route path="/blacksabbath/grupo" element={<BlackSabbathGrupo />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;