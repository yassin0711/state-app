import { Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';
class KitchenSinkExample extends React.Component {
    state = { person: { fullName: "yassin louhichi", bio: "math", imgSrc: <img src='loffy.png' alt='loffy' />, profession: "art" }, shows: true, x: 0 };
    render() {
        return (
            <div>
                {
                    this.state.shows ?
                        <div className='container'>
                            <Card>
                                <Card.Img variant="top" src="loffy.png" style={{ width: "100px" }} />
                                <Card.Body>
                                    <Card.Title><h1>{this.state.person.fullName}</h1></Card.Title>
                                    <Card.Text>
                                        {this.state.person.bio}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>{this.state.person.profession}</ListGroup.Item>

                                </ListGroup>
                                <h1>{this.state.x}</h1>
                            </Card>
                        </div> : null
                }
                <button onClick={() => {
                    this.setState({ x: 0 })
                    this.setState({ shows: !this.state.shows })
                    setInterval(() => {
                        console.log(this.componentDidMount(this.setState({ x: this.state.x + 1 })))
                    }, 1000)
                }} > Shows/hide </button>
            </div >
        )
    };

}

export default KitchenSinkExample;