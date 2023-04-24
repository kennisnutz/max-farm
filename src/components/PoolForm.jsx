import '../styles/pool-form.css';

function PoolForm({ pool }) {
  return (
    <div className="pool-form-container">
      <div className="left-side">
        <div className="">
          <h4>APR :</h4>
          <span>{pool.apr}</span>
        </div>
        <div className="">
          <h4>Staked Balance :</h4>
          <span>{pool.total_staked}</span>
        </div>
        <div className="">
          <h4>Ends In :</h4>
          <span className="time">{pool.ends_in}</span>
        </div>
        <div className="links">
          <a href="/#">See token details</a>
          <a href="/#">See token details</a>
          <a href="/#">See token details</a>
        </div>
      </div>
      <div className="right-side">
        <div className="harvest-container">
          <h4>MAX FARM Earned</h4>
          <div className="btn-conainer">
            <button>Harvest</button> <span>{pool.earned}</span>
          </div>
        </div>
        <div className="harvest-container">
          <h4>Stake MAX FARM</h4>
          <div className="btn-conainer">
            <button>Approve</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoolForm;
