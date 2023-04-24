import '../styles/vault-form.css';

function VaultForm({ vault }) {
  return (
    <div className="form-container">
      <p className="balance">Balance 0.000 MAX</p>
      <div className="zap-input">
        <div className="input-box">
          <input type="number" />
        </div>
        <p className="warning">Amount should be greater than 0.01 Core</p>
        <button>ZAP</button>
      </div>
      <div className="forms-section">
        <div className="left">
          <p>Balance: 0.000 {vault.title}</p>
          <div className="deposit-input">
            <input type="number" />
            <div className="slider-container">
              <input
                type="range"
                min={1}
                max={100}
                // value={50}
                className="slider"
                id="myRange"
              />
              <div className="percentages">
                <span>0%</span>
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
              </div>
            </div>
          </div>
          <button>Approve</button>
          <p>
            Deposit fee: 0%, Withdrawal fee: 0.1% You will receive MAX FARM{' '}
            {vault.title.split('-')[0]} {vault.title.split('-')[1]} token as a
            receipt for your deposited {vault.title} LP assets. This token is
            needed to withdraw your {vault.title} LP, do not trade or transfer
            MAX FARM {vault.title.split('-')[0]} {vault.title.split('-')[1]} to
            strangers!
          </p>
        </div>
        <div className="right">
          <p>Deposited: 0.000 {vault.title}</p>
          <div className="deposit-input">
            <input type="number" />
            <div className="slider-container">
              <input
                type="range"
                min={1}
                max={100}
                // value={50}
                className="slider"
                id="myRange"
              />
              <div className="percentages">
                <span>0%</span>
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
              </div>
            </div>
          </div>
          <div className="btn-container">
            <button>Withdraw</button>
            <button>Withdraw All</button>
          </div>
          <p>
            Withdrawal will result in: Redeem MAX FARM{' '}
            {vault.title.split('-')[0]} {vault.title.split('-')[1]} token for{' '}
            {vault.title} LP
          </p>
        </div>
      </div>
    </div>
  );
}

export default VaultForm;
