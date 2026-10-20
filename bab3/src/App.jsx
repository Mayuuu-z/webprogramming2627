import './App.css'
import { Route, Routes } from 'react-router-dom'
import TransaksiItem from './component/TransaksiItem'
import KartuRingkasan from './component/KartuRingkasan'
import Badge from './component/Badge'
import WalletSummary from './component/WalletSummary'
import AppNavigation from './component/AppNavigation'
import HeaderBanner from './component/HeaderBanner'
import LayoutGrid from './component/LayoutGrid'
import CardStatusDemo from './component/CardStatusDemo'
import TransactionManager from './component/TransactionManager'

function Beranda() {
  return (
    <main className="container py-4 app-content">
      <HeaderBanner />
      <div className="row g-4 align-items-start">
        <section className="col-lg-8">
          <div className="row g-3">
            <div className="col-md-6"><KartuRingkasan /></div>
            <div className="col-md-6"><WalletSummary /></div>
          </div>
          <div className="dashboard-panel mt-4">
            <h2>Ringkasan aktivitas</h2>
            <p className="text-secondary">Susunan halaman ini memakai komponen yang dibuat sendiri.</p>
            <LayoutGrid />
            <Badge tipe="Pemasukan">+ Rp 500.000</Badge>
          </div>
        </section>
        <aside className="col-lg-4">
          <CardStatusDemo />
          <div className="dashboard-note mt-3">
            <strong>Catatan</strong>
            <p className="mb-0">Periksa transaksi terbaru sebelum menutup bulan.</p>
          </div>
        </aside>
      </div>
    </main>
  )
}

function App() {
  return (
    <>
      <AppNavigation />
      <Routes>
        <Route path='/' element={<Beranda />} />
        <Route path='/transaksi' element={ <TransaksiItem />} />
        <Route path='/kartu' element={ <KartuRingkasan />} />
        <Route path='/badge' element={ <Badge />} />
        <Route path='/wallet' element={ <WalletSummary />} />
        <Route path='/laporan' element={<CardStatusDemo />} />
        <Route path='/kelola' element={<TransactionManager />} />
      </Routes>
    </>
  )
}

export default App