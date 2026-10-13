import './assets/style.css';
import { Routes, Route } from 'react-router-dom';

// TODO 1  Import Komponen Layout (Header, SideBar, Footer)
import Header from './components/layout/Header.jsx';
import SideBar from './components/layout/SideBar.jsx';
import Footer from './components/layout/Footer.jsx';
// lakukan commit "selesai TODO 1" dan push 

// TODO 2  komponen Pages (Beranda, Profil, dll)

import Beranda from './pages/Beranda.jsx';
import Profil from './pages/Profil.jsx';
import Berita from './pages/Berita.jsx';
import LainLain from './pages/LainLain.jsx';
import Mahasiswa from './pages/Mahasiswa.jsx';
import NotFound from './pages/NotFound.jsx';
import Pendidikan from './pages/Pendidikan.jsx';
import Riset from './pages/Riset.jsx';

// lakukan commit "selesai TODO 2" dan push 

function App() {
  return (
    <div className="container">
      <Header />
      {/* TODO 3 Header */}
      <div className="main-wrapper">
        <main className="content-area">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/Berita" element={<Berita />} />
            <Route path="/lain-lain" element={<LainLain />} />
            <Route path="/mahasiswa" element={<Mahasiswa />} />
            <Route path="/pendidikan" element={<Pendidikan />} />
            <Route path="/riset" element={<Riset />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          {/* TODO 6 Routes 
          <Routes>
            <Route path="/" element={<Beranda />} />
          </Routes>
          */}
        </main>
         {/* TODO 4 SideBar */}
         <SideBar />
      </div>
      {/* TODO 5 Footer */}
      <Footer />
    </div>
  );
}

export default App;

// TODO 7 lakukan commit dengan nama "selesai TODO 7" dan push 