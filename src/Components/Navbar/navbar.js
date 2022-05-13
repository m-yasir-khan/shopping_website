import React, { Component } from 'react';
import vsfImg from "../../assert/Icons/VSF.png"
import cartImg from "../../assert/Icons/Empty Cart.png"
import Group from "../../assert/Icons/Group 1.png"
import togle from "../../assert/Icons/togle.png"
import WomenCategory from '../Women/women';
import MenCategory from '../Men/men';
import KidsCategory from '../Kids/kids';
import MyBag from '../Bag/bag';

import product from "../../assert/Images/Product B.png"
import ProductB from "../../assert/Images/Product C.png"
class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            component: <WomenCategory />,
            womencolor: "#5ECE7B",
            mencolor: "black",
            kidscolor: "black",
            cartoverlay: "none"
        }
    }
    render() {
        let cardsData = [
            {
                img: product,
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
            <>
                <div id="myModal" className="modal" style={{ display: this.state.cartoverlay }}>

                    <div className="modal-content">
                       
                            <h4>My Bag</h4>
                            {
                            cardsData.map((v,i)=>{
                                console.log(v)
                                return(
                                    <>

                                    <div key={i+1} className="smallOverlay" >
                                        <div className='textDivSmOly' >
                                            <p>{v?.brand}</p>
                                            <p>{v?.price}</p>
                                            <p>Size</p>
                                            <div>
                                                <ul className='uuul'>
                                                    <li className='llli'>xs</li>
                                                    <li className='llli selectZixeinoverlay' >s</li>
                                                    <li className='llli'>m</li>
        
        
                                                </ul>
                                            </div>
                                            <p>Color</p>
                                            <ul className='uuul'>
                                                <li className='llli color1SmOly' ></li>
                                                <li className='llli color2SmOly' ></li>
                                                <li className='llli color3SmOly' ></li>
        
        
                                            </ul>
        
                                        </div>
                                        <div style={{ width: "50%" }}>
                                            <div style={{ width: "100%" }}>
                                                <img src={v?.img} style={{ width: "100%" }} />
        
                                                <div style={{ width: "100%" }}>
                                                    <h1 style={{ textAlign: "center" }}>01</h1>
                                                </div>
        
                                                <button className='adddelbtnSmOly'> +</button>
                                                <button className='adddelbtnSmOly'> -</button>
        
        
                                            </div>
        
                                        </div>
        
                                    </div>
        
                                </>
                                )
                            })
                        }
                      
                            <button style={{ backgroundColor: "white", border: "none", cursor: "pointer", width: "50%", height: "30px" }} onClick={() => { this.setState({ cartoverlay: "none", component: <MyBag /> }) }}>VEIW BAG</button>
                            <button style={{ backgroundColor: "grey", color: "white", border: "none", cursor: "pointer", width: "50%", height: "30px" }} onClick={() => { this.setState({ cartoverlay: "none" }) }}> CHECK OUT</button>

                    </div>



                </div>


                <div>
                    <div className='navBar'>
                        <div className='firstTaBs' >
                            <p className='woMen' style={{ color: this.state.womencolor }} onClick={() => { this.setState({ component: <WomenCategory />, womencolor: "#5ECE7B", kidscolor: "black", mencolor: "black" }) }} >WOMEN</p>
                            <p className='mEn' style={{ color: this.state.mencolor }} onClick={() => { this.setState({ component: <MenCategory />, mencolor: "#5ECE7B", womencolor: "black", kidscolor: "black" }) }}  >MEN</p>
                            <p className='kiDs' style={{ color: this.state.kidscolor }} onClick={() => { this.setState({ component: <KidsCategory />, kidscolor: "#5ECE7B", mencolor: "black", womencolor: "black" }) }}  >KIDS</p>
                        </div>
                        <div className='centerTabs'>
                            <img className='vsfImg' src={vsfImg} />
                        </div>
                        <div className='endTabs'>
                            <img className='dollerImg' src={Group} />
                            <img className='cartImg' src={cartImg} onClick={() => { this.setState({ cartoverlay: "inline" }) }} />
                            <img className='toogle' src={togle} onClick={() => { this.setState({ cartoverlay: "inline" }) }} />
                        </div>
                    </div>
                    {
                        this.state.component
                    }
                </div>
            </>

        )
    }
}

export default Navbar;
