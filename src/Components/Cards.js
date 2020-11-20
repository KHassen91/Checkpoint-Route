import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cards = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem', margin: 60 }}>
                <Card.Img height="421.25px" variant="top" src={props.Movie.posterURL} />
                <Card.Body>
                    <Card.Title style={{ fontWeight: "bolder", fontSize: 25, color: "#212F3C" }}>{props.Movie.title}</Card.Title>
                    <Card.Text style={{ height: "185px" }}>{props.Movie.description}</Card.Text>
                    <Card.Text style={{ fontWeight: "bolder" }}>Rate: {props.Movie.rate}</Card.Text>
                    
                        <Link to={`/trailer/${props.Movie.title}` }>
                            <Button variant="primary">Watch Trailer</Button>
                        </Link>
                    


                </Card.Body>
            </Card>
        </div>);
}

export default Cards;
