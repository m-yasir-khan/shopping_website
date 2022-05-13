import React, { Component } from 'react';
import ProductA from "../../assert/Images/Product D.png"
import ProductB from "../../assert/Images/Product B.png"
import ProductC from "../../assert/Images/Product C.png"
import back from "../../assert/Icons/back.png"
class MenCategory extends Component {
    constructor() {
        super()
        this.state = {
            display: "none",
            card: [],
            productdisplay: "none",
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
                brand: "Apollo Running Short",
                price: "$50.00"
            }, {
                img: ProductC,
                brand: "Apollo Running Short",
                price: "$50.00"
            },
            {
                img: ProductA,
                brand: "Apollo Running Short",
                price: "$50.00"
            },
        ]
        return (
            <>
                <div className='wemonCollectionDiv' >
                    {
                        this.state.productdisplay === "inline-flex" ? null :
                            <>
                                <div>
                                    <h2 className='WomenHeading'>Men Collection</h2>
                                </div>

                                <div className='cardsDiv'>
                                    {
                                        cardsData.map((v, i) => {
                                            console.log(v)
                                            return (
                                                <div className='card' onClick={() => {
                                                    let obj = {
                                                        Image: v?.img,
                                                        Price: v?.price,
                                                        Brand: v?.brand
                                                    }
                                                    console.log(obj)
                                                    this.setState({ display: "inline-flex", card: obj, productdisplay: "inline-flex" })
                                                }}>
                                                    <img className='produCt' src={v?.img} />
                                                    <p>{v?.brand}</p>
                                                    <p>{v?.price}</p>
                                                </div>
                                            )

                                        })
                                    }
                                </div>
                            </>
                    }

                    {
                        this.state.display === "inline-flex" ?
                            <>
                                <div style={{ display: "block" }}>
                                    <img className="backImg" onClick={() => { this.setState({ productdisplay: "none", display: "none" }) }} src={back} />
                                </div>
                                <div style={{ display: this.state.display }}  >

                                    <div className='cardOverlay' >

                                        <div className='onlyImages'>

                                            <div className='smallImage' >

                                                <img className='smallImg' src={this.state.card.Image} />
                                                <img className='smallImg' src={this.state.card.Image} />
                                                <img className='smallImg' src={this.state.card.Image} />
                                            </div>

                                            <div className="cArdImagediv">
                                                <img className='cArdImage' src={this.state.card.Image} />
                                            </div>
                                        </div>
                                        <div className="CArdAbout">
                                            <h1> {this.state.card.Brand} </h1>
                                            <h3 className='overLayHeading'>SIZE</h3>
                                            <ul className='overlysiZeUl'>
                                                <li className='sizeBox'>XS</li>
                                                <li className='sizeBox selectZixeinoverlay'>S</li>
                                                <li className='sizeBox'>M</li>
                                                <li className='sizeBox'>L</li>
                                            </ul>
                                            <h3 className='overLayHeading'>COLOR</h3>
                                            <ul className='overlysiZeUl'>
                                                <li className='sizeBox1'></li>
                                                <li className='sizeBox2'></li>
                                                <li className='sizeBox3'></li>
                                            </ul>
                                            <h3 className='overLayHeading'>PRICE</h3>
                                            <h5 className='overlayPrice'>{this.state.card.Price}</h5>
                                            <div className='buttonDiv'>

                                                <button className='addtocartButton' onClick={() => { this.setState({ productdisplay: "none", display: "none" }) }}>ADD TO CART</button>
                                            </div>
                                            <p className='overlayText'>
                                                Find stunning Men's cocktail dresses and part dresses.
                                                Stand out in lace and metallic cocktail dresses and
                                                party dresses from all your favorite brands.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </> :null}
                </div>

            </>
        )
    }
}

export default MenCategory;
