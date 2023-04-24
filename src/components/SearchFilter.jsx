import '../styles/search-filter.css';

const assets = ['All', ' CFX', 'PPI', 'USDC', 'USDT', 'MAX', 'ETH', 'WBTC'];
const vaultTypes = [
  'All',
  'Single Asset',
  'Stables',
  'Stable LPs',
  'Double Asset',
];

const sortOptions = ['Default', 'APY', 'TVL'];

function SearchFilter() {
  return (
    <div className="search-filter-container">
      <div className="button-container">
        <button>CLEAR FILTERS</button>
      </div>
      <div className="filter-options-container">
        <div className="check-list">
          <div className="check-list-item">
            <input name="zero-balance" type="checkbox" />
            <label htmlFor="zero-balance">Hide Zero Balances</label>
          </div>
          <div className="check-list-item">
            <input name="retired-vaults" type="checkbox" />
            <label htmlFor="retired-vaults">Retired Vaults</label>
          </div>
          <div className="check-list-item">
            <input name="deposited-vaults" type="checkbox" />
            <label htmlFor="deposited-vaults">Deposited Vaults</label>
          </div>
        </div>

        <div className="sort-options">
          <div className="sort-options-item">
            <label htmlFor="asset">Asset</label>
            <select name="asset">
              {assets.map((asset) => (
                <option key={asset}>{asset}</option>
              ))}
            </select>
          </div>
          <div className="sort-options-item">
            <label htmlFor="type">Vault Type</label>
            <select name="type">
              {vaultTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="sort-options-item">
            <label htmlFor="sortby"> Sort By</label>
            <select name="sortby">
              {sortOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
