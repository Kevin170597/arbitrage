
import './Sell.css';

export const Sell = (props: any) => {

    return (
        <div className='sell'>
            {props.coinData &&
                props.coinData.map((e: any, i: number) =>
                    <div className='exchange' key={i}>
                        <img src={require(`../../assets/exchanges/${e.name}.png`)} alt="" />
                        <p className='name'>{e.name}</p>
                        <p className='price'>${e.bid}</p>
                        <p className='fee'>-{((e.bid - e.totalBid) / e.bid * 100).toFixed(1)}%</p>
                        <p className='finalPrice'>${e.totalBid.toLocaleString('es')}</p>
                    </div>
                )
            }
        </div>
    )
};