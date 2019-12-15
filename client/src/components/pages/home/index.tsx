import React from "react";
import { Column, Row, Container } from "../../Grid";


const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Container fluid>
                <Row fluid>
                <Column size="md-6"></Column>
                </Row>
            </Container>
            <h2> this is another place to put information</h2>
            <p>Traci's Parrots 4 U is a Salt Lake based parrot store specializing in all things parrots. We want you to make Traci's Parrots 4 U your one-stop parrot destination, whether it's toys, cages, food or one of our many specialized parrot accessories or services, we'll pamper your feathered babies.</p>
        </div>
    );

}
export default Home;