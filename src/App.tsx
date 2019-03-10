import React, { Component } from 'react';
import './App.scss';

import {
    Row,
    Col,
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import { HashRouter as Router, NavLink as Link, Route } from 'react-router-dom';
import { About } from './components/About';
import { Projects } from './components/Projects';

class App extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Router>
                <>
                    <Navbar color="light" light expand="md" fixed="top">
                        <Container>
                            <NavbarBrand href="#/">Andrej Cimperšek</NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <Link className="nav-link" to="/"><i className="fa fa-user"></i> About</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link className="nav-link" to="/projects"><i className="fa fa-list"></i> Projects</Link>
                                    </NavItem>
                                </Nav>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink href="mailto:cimpersek.andrej@gmail.com"><i className="fa fa-envelope"></i> Email</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="http://si.linkedin.com/in/candrej"><i className="fab fa-linkedin"></i> Linkedin</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="http://twitter.com/cime"><i className="fab fa-twitter"></i> Twitter</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="https://github.com/cime"><i className="fab fa-github"></i> GitHub</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Container>
                    </Navbar>
                    <Container>
                        <Route exact path="/" component={About} />
                        <Route exact path="/projects" component={Projects} />
                    </Container>
                    <Container className="text-muted text-center mt-5 mb-3">
                        Copyright © 2012-2019 All Rights Reserved
                    </Container>
                </>
            </Router>
        );
    }
}

export default App;
