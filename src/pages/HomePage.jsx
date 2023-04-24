import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import SearchFilter from '../components/SearchFilter';
import VaultList from '../components/VaultList';
import '../styles/home.css';

function HomePage() {
  return (
    <main>
      <div className="hero-section">
        <Hero />
      </div>
      <div className="stats-section">
        <StatsSection />
      </div>
      <div className="search-filter-section">
        <SearchFilter />
      </div>
      <div className="vaults-container">
        <VaultList />
      </div>
    </main>
  );
}
export default HomePage;
