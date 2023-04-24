import { BsInfo } from 'react-icons/bs';
import '../styles/vault-header.css';

function PoolHeader({ pool }) {
  return (
    <div className="container" onClick={() => console.log('clicked')}>
      <div className="logo-container"></div>
      <div className="title-section">
        <h3>Earn MAX FARM </h3>
        <p>Stake MAX FARM </p>
      </div>
      <div className="vault-info">
        <div className="balance">
          <h3>{pool.earned}</h3>
          <p>Earned</p>
        </div>
        <div className="deposited">
          <h3>{pool.total_staked}</h3>
          <p>Total Staked</p>
        </div>
        <div className="apy">
          <h3>{pool.ends_in}</h3>
          <div className="label">
            <span>Ends In</span>
          </div>
        </div>
        <div className="daily">
          <h3>{pool.apr}%</h3>
          <div className="label">
            <span>APR</span>
            <span>{<BsInfo className="icon" />}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoolHeader;
