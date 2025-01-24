import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const deleteProduct = () => {
        axios
            .delete(`http://localhost:3000/api/products/${id}`)
            .then(() => navigate("/"))
            .catch(err => console.error(err));
    };

    const styles = {
        container: {
            textAlign: "center",
            marginTop: "130px",
            padding: "20px",
            backgroundColor: "#f9f9f9",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
        },
        title: {
            fontSize: "32px",
            fontWeight: "bold",
            color: "#333",
        },
        price: {
            fontSize: "24px",
            color: "#bf0606",
            marginBottom: "10px",
        },
        description: {
            fontSize: "18px",
            color: "#555",
            marginBottom: "20px",
        },
        button: {
            padding: "5px 13px",
            fontSize: "16px",
            backgroundColor: "#1b1c1b",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            textDecoration: "none", 
        },
        buttonHover: {
            backgroundColor: "#6c6e66",
        }
    };

    return (
        <div style={styles.container}>
            {product ? (
                <>
                    <h1 style={styles.title}>{product.title}</h1>
                    <p style={styles.price}><strong>Price:</strong> ${product.price}</p>
                    <p style={styles.description}><strong>Description:</strong> {product.description}</p>
                    <button
                        style={styles.button}
                        onClick={deleteProduct}
                        onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                        onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
                    >
                        Delete
                    </button>
                </>
            ) : (
                <p>Loading product details...</p>
            )}
        </div>
    );
};

export default ProductDetails;
