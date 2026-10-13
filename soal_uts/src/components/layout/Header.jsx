import { NavLink } from "react-router-dom"

// TODO 9
import bgGambar from '../assets/img/bg-header.jpg'

    export default function Header() {
        return (
            <header
            className="header-area"
            style={{
                backgroundImage: `url(${bgGambar})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            >
                <div className="header-text">
                    <h1>Prodi Informatika</h1>
                    <p>Universitas Matana</p>
                </div>  
                <nav className="nav-menu">
                    <NavLink to="/">Beranda</NavLink>
                    <NavLink to="/profil">Profil</NavLink>
                    <NavLink to="/berita">Berita</NavLink>
                    <NavLink to="/lain-lain">Lain-lain</NavLink>
                    <NavLink to="/mahasiswa">Mahasiswa</NavLink>
                    <NavLink to="/pendidikan">Pendidikan</NavLink>
                    <NavLink to="/riset">Riset</NavLink>
                </nav>
            </header>
        );
    }