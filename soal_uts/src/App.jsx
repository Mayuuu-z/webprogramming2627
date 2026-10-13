import './assets/style.css';
import { Routes, Route } from 'react-router-dom';

// TODO 1  Import Komponen Layout (Header, SideBar, Footer)
import Header from './components/Header';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
// lakukan commit "selesai TODO 1" dan push 

// TODO 2  komponen Pages (Beranda, Profil, dll)

import Beranda from './pages/Beranda';
import Profil from './pages/Profil';
import Berita from './pages/Berita';
import Lainlain from './pages/LainLain';
import Mahasiswa from './pages/Mahasiswa';
import NotFound from './pages/NotFound';
import Pendidikan from './pages/Pendidikan';
import Riset from './pages/Riset';

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
            <Route path="/lain-lain" element={<Lainlain />} />
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