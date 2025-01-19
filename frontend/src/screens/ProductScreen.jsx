import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { Row, Col, Image, ListGroup, Card, Button, Spinner } from 'react-bootstrap';

const ProductScreen = () => {
    const [product, setProduct] = useState(null); // Start with null instead of empty array
    const { id: productId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:3030/api/products/${productId}`);
                if (!response.ok) throw new Error("Failed to fetch product");
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
        fetchProduct();
    }, [productId]);

    if (!product) {
        return (
            <div className="d-flex justify-content-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <>
            <Link className="btn btn-light my-3" to="/">
                Go Back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                        <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col><strong>${product.price}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ProductScreen;
