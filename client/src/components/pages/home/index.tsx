import React from "react";
import { Column, Row, Container } from "../../Grid";


const Home = () => {

    return (

        <div>
            <h3>Welcome to Traci's Parrots 4U</h3>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-item">
                    <img className="d-block w-100" src="..." alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="..." alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="..." alt="First slide" />
                </div>
            </div>

            <Container fluid>
                <Row fluid>
                    <Column size="md-6">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Traci's Parrots 4 U is a Salt Lake based parrot store specializing in all things parrots. We want you to make Traci's Parrots 4 U your one-stop parrot destination, whether it's toys, cages, food or one of our many specialized parrot accessories or services, we'll pamper your feathered babies.</p><br/>
                                <p className="card-text">OUR ADDRESS
683 West 5300 South
Murray, UT 84123</p>
                                <p className="card-text">HOURS*
Mon-Fri 12:00pm - 7:00pm
Sat 12:00pm - 6:00pm
Sun 12:00pm - 5:00pm
*hours subject to change on holidays and vacations</p>
                            </div>
                        </div>
                    </Column>
                    <Column size="md-6">
                        <img alt="" src="" />
                    </Column>
                </Row>
            </Container>
        </div>
    );
}

export default Home;