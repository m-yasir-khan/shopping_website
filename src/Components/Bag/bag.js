import React, { Component } from 'react';
import ProductA from "../../assert/Images/Product B.png"
import ProductB from "../../assert/Images/Product C.png"
class MyBag extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        let cardsData = [
            {
                img: ProductA,
                brand: "Apollo Running Short",
                price: "$50.00"
            },
            {
                img: ProductB,
                brand: "Apollo Night Short",
                price: "$30.00"
            },
        ]
        return (
            <div  className="bagCartUpper" >
                <h4 className='bagCart'>CART</h4>
                {
                    cardsData.map((v, i) => {
                        console.log(v)
                        return (
                            <>
                                <div className='bagCartDataDiv'>
                                    <div className='aboutDiv'>
                                        <h3 className='nameBrand'>{v?.brand}</h3>
                                        <h4>{v?.price}</h4>
                                        <h4>SIZE</h4>
                                        <ul className='bagUl' >
                                            <li className='xsBagLi' >XS</li>
                                            <li className='sBagLi' >S</li>
                                            <li className='mBagLi' >M</li>
                                            <li className='lBagLi' >L</li>
                                        </ul>
                                        <h4>COLOR</h4>
                                        <ul className='colorUlBag'>
                                            <li className='bagColor2' ></li>
                                            <li className='bagColor1' ></li>
                                            <li className='bagColor3' ></li>
                                        </ul>
                                    </div>
                                    <div className='imageDiv' >
                                        <div className="counTer">
                                            <ul className='counterUl'>
                                                <li className='counterAdd' ><h1 className='textAdd'>+</h1></li>
                                                <li className="counterCount" ><h1 className='textAdd'>03</h1></li>
                                                <li className='counterSum'><h1 className='textAdd' >-</h1></li>
                                            </ul>
                                        </div >
                                        <div style={{ float: "left" }}>
                                            <img src={v?.img} className="cardImg" />
                                            <div className="counterBottom">
                                                <ul className='botmcountUl'>
                                                    <li className='botmVounterAdd' ><h1 className='textAdd'>+</h1></li>
                                                    <li className='botnCounterCount'><h1 className='textAdd'>03</h1></li>
                                                    <li className='botmCounterSub' ><h1 className='textAdd'>-</h1></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                <div>
                    <p className='taX'>Tax <span className='spAn'> 21% </span>:<span className='spAn'>$42.00</span></p>
                    <p className='quantitY'>Quantity:<span className='spAn'>3</span></p>
                    <p className='totAL'>Total:<span className='spAn'>$200.00</span></p>

                    <button className='orDrbTn'>ORDER</button>

                </div>
            </div >

        )
    }
}

export default MyBag;
