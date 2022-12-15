import { useState, useEffect, useRef } from 'react';
import './Coin.css';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

import { ArrowBottom, ArrowLeft } from '../../components';
import { Sell, Buy, Arbitrage } from '../../widgets';

export const Coin = () => {
    const [action, setAction] = useState<string>('sell');

    const [coinName, setCoinName] = useState<string>('usdt');
    const [coinData, setCoinData] = useState<any>('');

    const [coinSelector, setCoinSelector] = useState<boolean>(false);

    const coinSelectorRef = useRef<HTMLDivElement | null>(null);
    useOnClickOutside(coinSelectorRef, () => setCoinSelector(false));

    const getCoin = async (coin?: string) => {
        if (coin) setCoinName(coin);
        let req = await fetch(`https://criptoya.com/api/${coin ? coin : 'usdt'}/ars`);
        let res = await req.json();
        let result: any = [];
        Object.keys(res).forEach((key) => {
            res[key].name = key;
            result.push(res[key])
        });
        //console.log(result);
        setCoinSelector(false);
        setCoinData(result);
    }

    useEffect(() => {
        getCoin();
    }, []);

    return (
        <div className='Coin' data-theme={coinName}>
            <div className='coinSelector'>
                <button className='coinsDropdown' onClick={() => setCoinSelector(!coinSelector)}>
                    {coinName.toUpperCase()}
                    <ArrowBottom fill='#fff' width='20' height='20' margin='0 0 0 20px' />
                </button>
                {coinSelector &&
                    <div ref={coinSelectorRef} className='coins'>
                        {coinName != 'usdt' && <button onClick={() => getCoin('usdt')}>USDT</button>}
                        {coinName != 'btc' && <button onClick={() => getCoin('btc')}>BTC</button>}
                        {coinName != 'eth' && <button onClick={() => getCoin('eth')}>ETH</button>}
                        {coinName != 'busd' && <button onClick={() => getCoin('busd')}>BUSD</button>}
                        {coinName != 'dai' && <button onClick={() => getCoin('dai')}>DAI</button>}
                        {coinName != 'bnb' && <button onClick={() => getCoin('bnb')}>BNB</button>}
                    </div>
                }
            </div>
            <div className='coinContainer'>
                <img src={require(`../../assets/coins/${coinName}.png`)} alt="" />
            </div>
            <div className='optionButtons'>
                <button style={action === 'sell' ? { backgroundColor: 'var(--active)', boxShadow: '0px 0px 52px -1px var(--activeShadow)' } : {}}
                    onClick={() => setAction('sell')}>
                    Vender
                </button>
                <button style={action === 'buy' ? { backgroundColor: 'var(--active)', boxShadow: '0px 0px 52px -1px var(--activeShadow)' } : {}}
                    onClick={() => setAction('buy')}>
                    Comprar
                </button>
                <button style={action === 'arbitrage' ? { backgroundColor: 'var(--active)', boxShadow: '0px 0px 52px -1px var(--activeShadow)' } : {}}
                    onClick={() => setAction('arbitrage')}>
                    Arbitrar
                </button>
            </div>
            {action === 'sell' &&
                <Sell coinData={coinData} />
            }
            {action === 'buy' &&
                <Buy coinData={coinData} />
            }
            {action === 'arbitrage' &&
                <Arbitrage />
            }
        </div>
    )
};