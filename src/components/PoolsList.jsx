import PoolItem from './PoolItem';
import '../styles/vault-list.css';

const pools = [
  {
    apr: 301,
    ends_in: 543242,
    total_staked: 2122,
    earned: 0.0,
  },
  {
    apr: 238.81,
    ends_in: 92242,
    total_staked: 16622,
    earned: 0.0,
  },
];
function PoolsList() {
  return (
    <div className="vault-list-container">
      {pools.map((pool) => {
        return <PoolItem pool={pool} key={pool.ends_in} />;
      })}
    </div>
  );
}

export default PoolsList;
