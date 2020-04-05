import React from 'react';
import './style.css';

import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const About = () => {

    return (
        <>
        <Header />
            <section>
                <section>
                    <div className="content">
                    <Fade bottom delay = {400}>
                        <h2>Welcome</h2>
                        </Fade>
                        <Fade bottom delay ={ 1000}>
                        <p>Harley-Davidson, Inc., H-D, or Harley, is an American motorcycle manufacturer founded in 1903 in Milwaukee, Wisconsin. It was one of two major American motorcycle manufacturers to survive the Great Depression, along with Indian. The company has survived numerous ownership arrangements, subsidiary arrangements, periods of poor economic health and product quality, and intense global competition to become one of the world's largest motorcycle manufacturers and an iconic brand widely known for its loyal following. There are owner clubs and events worldwide, as well as a company-sponsored, brand-focused museum.</p>
                        </Fade>
                    </div>
                </section>

                <section>
                    <div className="content">
                    <Fade bottom delay = {1200}>
                        <h2>To</h2>
                        </Fade>
                        <Fade bottom delay ={ 1000}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem voluptate repudiandae recusandae ut error in voluptas, iure quaerat harum facilis placeat. Sapiente porro a quasi quae reprehenderit cupiditate perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deleniti molestias iusto ad quis rem provident perferendis ab pariatur, ipsum quidem numquam, ex fugiat a explicabo laudantium incidunt. Laboriosam, delectus.</p>
                        </Fade>
                    </div>
                </section>

                <section>
                    <div className="content">
                    <Fade bottom delay = {400}>
                        <h2>harley</h2>
                        </Fade>
                        <Fade bottom delay ={ 1000}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem voluptate repudiandae recusandae ut error in voluptas, iure quaerat harum facilis placeat. Sapiente porro a quasi quae reprehenderit cupiditate perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deleniti molestias iusto ad quis rem provident perferendis ab pariatur, ipsum quidem numquam, ex fugiat a explicabo laudantium incidunt. Laboriosam, delectus.</p>
                        </Fade>
                    </div>
                </section>

                <section>
                    <div className="content">
                    <Fade bottom delay = {400}>
                        <h2>Davidson</h2>
                        </Fade>
                        <Fade bottom delay ={ 1000}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem voluptate repudiandae recusandae ut error in voluptas, iure quaerat harum facilis placeat. Sapiente porro a quasi quae reprehenderit cupiditate perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deleniti molestias iusto ad quis rem provident perferendis ab pariatur, ipsum quidem numquam, ex fugiat a explicabo laudantium incidunt. Laboriosam, delectus.</p>
                        </Fade>
                    </div>
                </section>

            </section>


            <div className="access__part">
                <Fade top delay = { 1000 }>
                <div className="access__title">
                    <h3>Now, Check Out My Shop :D</h3>
                </div>
                </Fade>
                <Fade top delay = { 1300}>
                <div className="btn__access">
                    <Link to="/products" className="btn__style">
                        Continue To Products!
                    </Link>
                </div>
                </Fade>
            </div>        
            <Footer />
        </>
    );

}


export default About;
