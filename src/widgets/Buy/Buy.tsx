
import './Buy.css';

export const Buy = (props: any) => {

    return (
        <div className='sell'>
            {props.coinData &&
                props.coinData.map((e: any, i: number) =>
                    <div className='exchange' key={i}>
                        <img src={require(`../../assets/exchanges/${e.name}.png`)} alt="" />
                        <p className='name'>{e.name}</p>
                        <p className='price'>${e.ask}</p>
                        <p className='fee'>+{((e.bid - e.totalBid) / e.bid * 100).toFixed(1)}%</p>
                        <p className='finalPrice'>${e.totalAsk.toLocaleString('es')}</p>
                    </div>
                )
            }
        </div>
    )
};