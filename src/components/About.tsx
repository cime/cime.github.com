import React, { PureComponent } from 'react';
import { Row, Col, Button } from 'reactstrap';
import avatar from '../img/avatar.png';

export const About = () => {
    return <Row>
        <Col xs={9}>
            <div className="row">
                <div className="col-4 noPrint">
                    <img
                        className="thumbnail"
                        src={avatar}
                    />
                </div>
                <div className="jumbotron col-8">
                    <h1>Andrej Cimperšek</h1>
                    <h3>SOFTWARE ENGINEER</h3>
                    <p>
                        <i className="fa fa-map-marker" /> Koper, Slovenia
                </p>
                </div>
            </div>
            <p>
                My name is Andrej Cimperšek. I'm a student at University of
                Primorska, Faculty of Mathematics, Natural Sciences and
                Information Technologies, currently working at Actual IT d.d.
        </p>
            <div className="page-header">
                <h3>Education</h3>
            </div>
            <ul className="list-group">
                <li className="list-group-item">
                    <h4 className="list-group-item-heading">
                        UP FAMNIT, Computer science
            </h4>
                    <p className="list-group-item-text">
                        University of Primorska, Faculty of Mathematics, Natural
                        Sciences and Information Technologies, Computer Science
            </p>
                </li>
            </ul>
            <div className="page-header">
                <h3>Work History</h3>
            </div>
            <ul className="list-group">
                <li className="list-group-item">
                    <h4 className="list-group-item-heading">
                        Actual IT <small>(December 2010 - Present)</small>
                    </h4>
                    <p className="list-group-item-text">Software Engineer</p>
                </li>
                <li className="list-group-item">
                    <h4 className="list-group-item-heading">
                        UP PINT <small>(June 2010 - September 2011)</small>
                    </h4>
                    <p className="list-group-item-text">Academic project LIDAR</p>
                </li>
                <li className="list-group-item">
                    <h4 className="list-group-item-heading">
                        Infodesign <small>(April 2008 - July 2010)</small>
                    </h4>
                    <p className="list-group-item-text">Web developer</p>
                </li>
                <li className="list-group-item">
                    <h4 className="list-group-item-heading">
                        Grafikarna d.o.o. <small>(January 2008 - June 2009)</small>
                    </h4>
                    <p className="list-group-item-text">Web developer</p>
                </li>
                <li className="list-group-item">
                    <h4 className="list-group-item-heading">
                        UP, Faculty of educational sciences{" "}
                        <small>(May 2007 - November 2007)</small>
                    </h4>
                    <p className="list-group-item-text">
                        MVO, e-learning for Slovenian Ministry of defence
            </p>
                    <p className="list-group-item-text">
                        Google Maps integration for ISMO - Information System about
                        the Marine Environment for Port of Koper
            </p>
                </li>
            </ul>
            <div className="page-header">
                <h3>Skills &amp; Expertise</h3>
            </div>
            <ul className="list-group">
                <li className="list-group-item">.NET/C#</li>
                <li className="list-group-item">React, Redux</li>
                <li className="list-group-item">Angular</li>
                <li className="list-group-item">
                    AngularJS, Backbone, HTML5, CSS3
            </li>
                <li className="list-group-item">ASP.NET MVC, Web API</li>
                <li className="list-group-item">
                    SQL (SQL Server, PostgreSQL, MySQL)
            </li>
                <li className="list-group-item">NoSQL (Redis, MongoDB)</li>
                <li className="list-group-item">SharePoint Development</li>
                <li className="list-group-item">Android development</li>
                <li className="list-group-item">Integration, Data Migration</li>
                <li className="list-group-item">WPF, Silverlight, MVVM</li>
                <li className="list-group-item">Python, Java, PHP</li>
            </ul>
            </Col>
        <Col xs={3}>
            <p><i className="fa fa-envelope"></i> Email: <a href="mailto:cimpersek.andrej@gmail.com">Andrej Cimperšek</a></p>
            <p><i className="fab fa-linkedin"></i> Linkedin: <a href="http://si.linkedin.com/in/candrej" target="_blank">Andrej Cimperšek</a></p>
            <p><i className="fab fa-twitter"></i> Twitter: <a href="http://twitter.com/cime" target="_blank">@cime</a></p>
            <p><i className="fab fa-github"></i> Github: <a href="http://github.com/cime" target="_blank">@cime</a></p>

            <Button color="secondary" block size="lg" onClick={() => print()}><i className="fa fa-print"></i> Print</Button>
            <Button color="primary" block size="lg"><i className="fa fa-download"></i> Download</Button>
        </Col>
    </Row>
}
