import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.error(err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .patch(`http://localhost:3000/api/products/${id}`, { title, price, description })
            .then(() => navigate("/"))
            .catch(err => console.error(err));
    };

    const styles = {
        container: {
            width: "25%",
            margin: "0 auto",
            textAlign: "center",
            marginTop: "100px",  
        },
        formGroup: {
            marginBottom: "20px",
            textAlign: "left",
        },
        label: {
            display: "block",
            fontSize: "18px",
            marginBottom: "10px",
        },
        input: {
            width: "100%",
            padding: "10px",
            fontSize: "14px",
            border: "2px solid #ccc",
            borderRadius: "5px",
        },
        button: {
            padding: "10px 20px",
            fontSize: "14px",
            backgroundColor: "#1b1c1b",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",  
        }
    };

    return (
        <div style={styles.container}>
            <h1>Update Product</h1>
            <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Description:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.button}>Update</button>
            </form>
        </div>
    );
};

export default UpdateProduct;
