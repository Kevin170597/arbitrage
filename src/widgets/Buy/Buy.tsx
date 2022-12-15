
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
                        <p className='fee'>-1%</p>
                        <p className='finalPrice'>${e.totalAsk}</p>
                    </div>
                )
            }
        </div>
    )
};