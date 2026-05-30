import { useState } from 'react'
import PWABadge from './PWABadge.tsx'
import tridentImg from './assets/trident.webp'
import './App.css'

type Tab = 'reserve' | 'services' | 'vacancies' | 'menu'

function getTickerTime() {
  const d = new Date(Date.now() - 5 * 60 * 60 * 1000)
  const hh = String(d.getHours()).padStart(2, '0')
  const mm = String(d.getMinutes()).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  const mo = String(d.getMonth() + 1).padStart(2, '0')
  const yyyy = d.getFullYear()
  return `Документ оновлено о ${hh}:${mm} | ${dd}.${mo}.${yyyy} • `
}

const TICKER_SEGMENT = getTickerTime()
const TICKER = TICKER_SEGMENT.repeat(6)

function ReserveIcon({ active }: { active: boolean }) {
  return active ? (
    <svg viewBox="0 0 31 34" fill="none" className="nav-icon reserve-icon">
      <path d="M0.500042 1.49998L0.5 36.2989C0.5 36.8512 0.947718 37.2989 1.5 37.2989H29.5C30.0522 37.2989 30.5 36.8512 30.5 36.2989L30.5 1.49998C30.5 0.947697 30.0522 0.499981 29.5 0.499981H1.50004C0.947757 0.499981 0.500042 0.947697 0.500042 1.49998Z" fill="currentColor" stroke="currentColor"/>
      <path d="M1.5 17.5V3.5C1.5 2.39543 2.39543 1.5 3.5 1.5H27.5C28.6046 1.5 29.5 2.39543 29.5 3.5V17.5C29.5 18.6046 28.6046 19.5 27.5 19.5H3.5C2.39543 19.5 1.5 18.6046 1.5 17.5Z" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
      <path d="M1.5 25.5V22.5C1.5 21.3954 2.39543 20.5 3.5 20.5H27.5C28.6046 20.5 29.5 21.3954 29.5 22.5V25.5C29.5 26.6046 28.6046 27.5 27.5 27.5H3.5C2.39543 27.5 1.5 26.6046 1.5 25.5Z" fill="white" stroke="currentColor" strokeWidth="2"/>
      <path d="M1.5 33.5V30.5C1.5 29.3954 2.39543 28.5 3.5 28.5H27.5C28.6046 28.5 29.5 29.3954 29.5 30.5V33.5C29.5 34.6046 28.6046 35.5 27.5 35.5H3.5C2.39543 35.5 1.5 34.6046 1.5 33.5Z" fill="white" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ) : (
    <svg viewBox="0 0 31 34" fill="none" className="nav-icon reserve-icon">
      <path d="M0.500042 1.49998L0.5 36.2989C0.5 36.8512 0.947718 37.2989 1.5 37.2989H29.5C30.0522 37.2989 30.5 36.8512 30.5 36.2989L30.5 1.49998C30.5 0.947697 30.0522 0.499981 29.5 0.499981H1.50004C0.947757 0.499981 0.500042 0.947697 0.500042 1.49998Z" fill="currentColor" stroke="currentColor"/>
      <path d="M1.5 17.5V3.5C1.5 2.39543 2.39543 1.5 3.5 1.5H27.5C28.6046 1.5 29.5 2.39543 29.5 3.5V17.5C29.5 18.6046 28.6046 19.5 27.5 19.5H3.5C2.39543 19.5 1.5 18.6046 1.5 17.5Z" fill="white" stroke="currentColor" strokeWidth="2"/>
      <path d="M1.5 25.5V22.5C1.5 21.3954 2.39543 20.5 3.5 20.5H27.5C28.6046 20.5 29.5 21.3954 29.5 22.5V25.5C29.5 26.6046 28.6046 27.5 27.5 27.5H3.5C2.39543 27.5 1.5 26.6046 1.5 25.5Z" fill="white" stroke="currentColor" strokeWidth="2"/>
      <path d="M1.5 33.5V30.5C1.5 29.3954 2.39543 28.5 3.5 28.5H27.5C28.6046 28.5 29.5 29.3954 29.5 30.5V33.5C29.5 34.6046 28.6046 35.5 27.5 35.5H3.5C2.39543 35.5 1.5 34.6046 1.5 33.5Z" fill="white" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )
}

function ServicesIcon({ active }: { active: boolean }) {
  return active ? (
    <svg viewBox="0 0 40 37" fill="none" className="nav-icon services-icon">
      <path d="M1 16V2C1 1.44772 1.44771 1 2 1H14.5C15.0523 1 15.5 1.44772 15.5 2V9V16C15.5 16.5523 15.0523 17 14.5 17H2C1.44772 17 1 16.5523 1 16Z" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
      <path d="M21 16V2C21 1.44772 21.4477 1 22 1H34.5C35.0523 1 35.5 1.44772 35.5 2V16C35.5 16.5523 35.0523 17 34.5 17H22C21.4477 17 21 16.5523 21 16Z" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
      <path d="M21 36V22C21 21.4477 21.4477 21 22 21H34.5C35.0523 21 35.5 21.4477 35.5 22V36C35.5 36.5523 35.0523 37 34.5 37H22C21.4477 37 21 36.5523 21 36Z" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
      <path d="M1 36V22C1 21.4477 1.44771 21 2 21H14.5C15.0523 21 15.5 21.4477 15.5 22V36C15.5 36.5523 15.0523 37 14.5 37H2C1.44772 37 1 36.5523 1 36Z" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ) : (
    <svg viewBox="0 0 40 37" fill="none" className="nav-icon services-icon">
      <path d="M1 16V2C1 1.44772 1.44771 1 2 1H14.5C15.0523 1 15.5 1.44772 15.5 2V16C15.5 16.5523 15.0523 17 14.5 17H2C1.44772 17 1 16.5523 1 16Z" stroke="currentColor" strokeWidth="3"/>
      <path d="M21 16V2C21 1.44772 21.4477 1 22 1H34.5C35.0523 1 35.5 1.44772 35.5 2V16C35.5 16.5523 35.0523 17 34.5 17H22C21.4477 17 21 16.5523 21 16Z" stroke="currentColor" strokeWidth="3"/>
      <path d="M21 36V22C21 21.4477 21.4477 21 22 21H34.5C35.0523 21 35.5 21.4477 35.5 22V36C35.5 36.5523 35.0523 37 34.5 37H22C21.4477 37 21 36.5523 21 36Z" stroke="currentColor" strokeWidth="3"/>
      <path d="M1 36V22C1 21.4477 1.44771 21 2 21H14.5C15.0523 21 15.5 21.4477 15.5 22V36C15.5 36.5523 15.0523 37 14.5 37H2C1.44772 37 1 36.5523 1 36Z" stroke="currentColor" strokeWidth="3"/>
    </svg>
  )
}

function VacanciesIcon({ active }: { active: boolean }) {
  return active ? (
    <svg viewBox="0 0 29 40" fill="none" className="nav-icon vacancies-icon">
      <path d="M1 34V2C1 1.44772 1.44771 1 2 1H26.5C27.0523 1 27.5 1.44772 27.5 2V34C27.5 34.5523 27.0523 35 26.5 35H2C1.44772 35 1 34.5523 1 34Z" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
      <path d="M8.55 19.49L14.49 13.55L20.43 19.49L17.46 22.46L14.49 25.43L8.55 19.49Z" fill="white" stroke="white" strokeWidth="2"/>
    </svg>
  ) : (
    <svg viewBox="0 0 29 40" fill="none" className="nav-icon vacancies-icon">
      <path d="M1 34V2C1 1.44772 1.44771 1 2 1H26.5C27.0523 1 27.5 1.44772 27.5 2V34C27.5 34.5523 27.0523 35 26.5 35H2C1.44772 35 1 34.5523 1 34Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M8.55 19.49L14.49 13.55L20.43 19.49L17.46 22.46L14.49 25.43L8.55 19.49Z" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )
}

function NavMenuIcon({ active: _ }: { active: boolean }) {
  return (
    <div className="menu-icon">
      <span/>
      <span/>
      <span/>
    </div>
  )
}

function BellIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="#1c1c1c">
      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6V11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
    </svg>
  )
}


const NAV_ITEMS: { id: Tab; label: string; Icon: React.FC<{ active: boolean }> }[] = [
  { id: 'reserve',   label: 'Резерв ID', Icon: ReserveIcon },
  { id: 'services',  label: 'Сервіси',   Icon: ServicesIcon },
  { id: 'vacancies', label: 'Вакансії',  Icon: VacanciesIcon },
  { id: 'menu',      label: 'Меню',      Icon: NavMenuIcon },
]

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('reserve')

  return (
    <div className="app">
      <div className="top-bar">
        <button className="notif-btn">
          Сповіщення <BellIcon />
        </button>
      </div>

      <div className="card">
        <div className="card-icon">
          <img src={tridentImg} alt="Тризуб" className="trident-img" />
        </div>
        <div className="card-top">
          <div className="card-header">
            <h1 className="reserve-title">Резерв ID</h1>
          </div>

          <div className="field">
            <span className="label">Дата народження:</span>
            <span className="value">25.07.1984</span>
          </div>

          <div className="field">
            <span className="label">Відстрочка до:</span>
            <span className="value value-bold">завершення мобілізації</span>
          </div>
        </div>

        <div className="ticker-wrap">
          <div className="ticker-track">
            <span className="ticker-text">{TICKER}</span>
            <span className="ticker-text">{TICKER}</span>
          </div>
        </div>

        <div className="card-bottom">
          <div>
            <p className="person-label">Військовозобов'язаний</p>
            <div className="person-name">
              БІЛІНСЬКИЙ<br />
              Тарас<br />
              Петрович
            </div>
          </div>
          <button className="plus-btn">+</button>
        </div>
      </div>

      <nav className="bottom-nav">
        {NAV_ITEMS.map(({ id, label, Icon }) => (
          <button
            key={id}
            className={`nav-item${activeTab === id ? ' active' : ''}`}
            onClick={() => setActiveTab(id)}
          >
            <Icon active={activeTab === id} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <PWABadge />
    </div>
  )
}
