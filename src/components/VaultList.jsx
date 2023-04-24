import VaultItem from './VaultItem';
import '../styles/vault-list.css';
import bsc from '../assets/binance.png';
import max from '../assets/max.png';
import wbtc from '../assets/wbtc.png';
import weth from '../assets/weth.png';
import ppi from '../assets/ppi.png';
import usdt from '../assets/usdt.png';
import usdc from '../assets/usdc.png';
import cfx from '../assets/cfx.png';

const vaults = [
  {
    title: 'CFX-PPI',
    platform: 'Pancake Swap',
    balance: 0,
    deposited: 0,
    apy: 212,
    tvl: 120294,
    daily: 0.9,
    logo1: cfx,
    logo2: ppi,
  },
  {
    title: 'USDC-USDT',
    platform: 'Sushi Swap',
    balance: 0,
    deposited: 0,
    apy: 122,
    tvl: 10294,
    daily: 0.5,
    logo1: usdc,
    logo2: usdt,
  },
  {
    title: 'MAX-CFX',
    platform: 'Pancake Swap',
    balance: 0,
    deposited: 0,
    apy: 302,
    tvl: 30294,
    daily: 1.9,
    logo1: max,
    logo2: cfx,
  },
  {
    title: 'CFX-USDT',
    platform: 'Sushi Swap',
    balance: 0,
    deposited: 0,
    apy: 415,
    tvl: 192294,
    daily: 3.9,
    logo1: cfx,
    logo2: usdt,
  },
  {
    title: 'CFX-ETH',
    platform: 'Pancake Swap',
    balance: 0,
    deposited: 0,
    apy: 282,
    tvl: 453294,
    daily: 2.9,
    logo1: cfx,
    logo2: weth,
  },

  {
    title: 'CFX-WBTC',
    platform: 'Pancake Swap',
    balance: 0,
    deposited: 0,
    apy: 712,
    tvl: 330294,
    daily: 4.9,
    logo1: cfx,
    logo2: wbtc,
  },
];
function VaultList() {
  return (
    <div className="vault-list-container">
      {vaults.map((vault) => {
        return <VaultItem vault={vault} key={vault.title} />;
      })}
    </div>
  );
}

export default VaultList;
