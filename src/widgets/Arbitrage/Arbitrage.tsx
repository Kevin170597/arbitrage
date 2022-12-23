
import { useState, useEffect } from 'react';
import belo from '../../assets/exchanges/belo.png';
import fiwind from '../../assets/exchanges/fiwind.png';
import tron from '../../assets/exchanges/bitex.png';
import './Arbitrage.css';

export const Arbitrage = (props: any) => {

    return (
        <div className="Arbitrage">
            <div className='oportunity'>
                <div className='info'>
                    <div className='exchange'>
                        <img src={fiwind} alt="" />
                        <p>{props.buy[0].name}</p>
                    </div>
                    <div className='buyAndSell'>
                        <p>Compras:</p>
                        <small>Comisión incluida.</small>
                        <b>$totalask</b>
                    </div>
                    <div className='red'>
                        <p>TRON</p>
                        <img src={tron} alt="" />
                        <p>USD $1</p>
                    </div>
                    <div className='buyAndSell'>
                        <p>Vendes:</p>
                        <small>Comisión incluida.</small>
                        <b>$totalbid</b>
                    </div>
                    <div className='exchange'>
                        <img src={fiwind} alt="" />
                        <p>name</p>
                    </div>
                </div>
                <div className='calculator'>
                    <div className='initial'>
                        <label htmlFor="">ARS$</label>
                        <input type="text" placeholder='0' />
                    </div>
                    <div className='reward'>
                        <p>+1,25%</p>
                        <b>$2.534</b>
                    </div>
                    <div className='result'>
                        <p>ARS $202.534</p>
                    </div>
                </div>
            </div>
        </div>
    )
};