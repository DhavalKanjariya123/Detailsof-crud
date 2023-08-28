import axios from "axios";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Cart from "./Cart";

function Home() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then((res) => {
                setProducts(res.data)
            })
    })

    // const price = useRef("")

    const Clk = (proitem) => {
        
        axios.post(" http://localhost:5000/cart", proitem)
            .then(() => {
                alert("success")
                // window.location = "/"
            })
    }
    return (
        <>

            <Container fluid="true" className="home" >
                <Row className="">

                    {products && products.map((item) => {
                        return (
                            <>
                                <Col md={4}>
                                    <Card>
                                        <Card.Header>
                                            <img className="img-fluid" src={item.imgurl} alt="not defined" />
                                        </Card.Header>
                                        <Card.Body>
                                            <h3>Shurt</h3>
                                            <h4   >{item.price}</h4>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button type="button" onClick={()=>Clk(item)} >Add to Cart</Button>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            </>
                        )
                    })}

                </Row>
            </Container>
            <Cart/>
        </>
    )
}

export default Home;