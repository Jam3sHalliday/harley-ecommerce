import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { Menu, Dropdown, Button,  } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerShow: false,
            userLogIn: false,
            userLogOut: false,
            username: ''
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({
                headerShow: true
            })
        } else {
            this.setState({
                headerShow: false
            })
        }
    }

    
    
    render() {

        const menu = (
            <Menu>
                <Menu.Item>
                    <Button rel="noopener noreferrer" onClick = { () => { this.onUserLogOut() }}>
                        Log Out
                    </Button>
                </Menu.Item>
            </Menu>
        );
        
        let user = JSON.parse(localStorage.getItem('user'));
        let greetingUser = () => {
            return (
                user === null
                ?
                    <li className="nav-item d-flex">
                        <Link className="nav-link text-white ant-dropdown-link" to="/login">
                            Login
                        </Link>
                    </li>
                :
                    <li className="nav-item d-flex">         
                        <p className="nav-link text-white ant-dropdown-link">
                            Hi, { user.hoTen }
                        </p>
                        <Dropdown overlay={ menu } className="pt-3">
                            <ArrowDownOutlined />
                        </Dropdown>
                    </li>
            )
        }


        return (
            <nav className="navbar navbar-expand-lg"
                style = {{
                    height: this.state.headerShow ?  "130px": "120px",
                    transition: "all 0.5s",
            }}>

                <div className="icon">
                    <Link className="navbar-brand" to="/">
                        <img src="https://freepikpsd.com/wp-content/uploads/2019/10/all-harley-davidson-logos-png-6-Transparent-Images.png" alt="" />
                    </Link>
                </div>

                <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-dark bg-light" 
                            style = {{
                                backgroundColor: "#fff",
                                color: '#000'
                            }}
                        />
                </button>


                <div className="nav-left collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text-white" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/products" >Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/cart" >Cart</Link>
                        </li>
                        { greetingUser() }
                    </ul>
                </div>
            </nav>
        );
    }
    
    onUserLogOut = () => {
        localStorage.removeItem('user');

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Log Out Completed!',
            showConfirmButton: false,
            timer: 1000
        });

        // re-render
        this.setState({
            userLogOut: true
        })
    }
}

export default Header;
