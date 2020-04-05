import React, { Component } from 'react';
import './style.css';

import { Zoom, Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import Header from '../Header';

export default class Home extends Component {

    render() {

        return (
            <>
            <Header />
            <section className="home">
                    <div className="home__content">
                        <Zoom>
                            <div className="home__title">
                            <span className="blk">L</span>ife Is To<span className="blk">o</span> Sh<span className="blk">o</span>rt
                                <br />
                                To Dri<span className="blk">v</span>e A Boring Bik<span className="blk">e</span>
                                <br />
                                <span className="blk">B</span>roo<span className="blk">oo</span>!
                            </div>
                        </Zoom>
                        <div className="home__button">
                            <Fade top delay = {1000}>
                                    <Link to = "/about" className="home__button--access">
                                        What Is This Brand?
                                    </Link>
                                    <Link to="/products" className="home__button--access">
                                        Show Me Some Bike!
                                    </Link>
                            </Fade>
                        </div>
                    </div>
            </section>
</>
        )
    }   
}
