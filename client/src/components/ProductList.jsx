import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/products")
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, []);

    const deleteProduct = (id) => {
        axios
            .delete(`http://localhost:3000/api/products/${id}`)
            .then(() => setProducts(products.filter(product => product._id !== id)))
            .catch(err => console.error(err));
    };

    const styles = {
        linkButton: {
            padding: "5px 13px",
            fontSize: "14px",
            backgroundColor: "#1b1c1b",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            textDecoration: "none", 
        },
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>All Products:</h2>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {products.map((product) => (
                    <li key={product._id} style={{ margin: "10px 0" }}>
                        <Link to={`/products/${product._id}`} style={styles.linkButton}>
                            {product.title}
                        </Link>

                        <button
                            onClick={() => deleteProduct(product._id)}
                            style={{ marginLeft: "10px" }}>
                            Delete
                        </button>

                        <Link to={`/edit/${product._id}`} style={{ marginLeft: "10px" }}>
                            <button type="submit">Update</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
