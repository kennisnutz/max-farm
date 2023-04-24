import '../styles/stats-section.css';

function StatsSection() {
  return (
    <div className="container">
      <div className="left-side">
        <h1>Network</h1>
        <div className="vaults-info">
          <div className="logo">Logo</div>
          <div className="vaults-info-item">5 Vaults</div>
        </div>
      </div>
      <div className="right-side">
        <div className="container">
          <div className="title">
            TVL<div className="value">$263.50k</div>
          </div>
          <span className="deposited">Deposited $0.00</span>
          <h4 className="info">All vaults autocompound at an optimal rate</h4>
        </div>
      </div>
    </div>
  );
}
export default StatsSection;
