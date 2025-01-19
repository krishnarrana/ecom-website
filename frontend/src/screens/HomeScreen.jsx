import { Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Product from '../components/Product.jsx';
import axios from "axios";

const HomeScreen = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const dataresponse = await fetch("http://localhost:3030/api/products");
            const data = await dataresponse.json()
            console.log("data", data);
            setProducts(data);
        };
        fetchProducts();
    }, [])

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (
                    <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomeScreen;
