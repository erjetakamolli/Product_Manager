import { useState } from "react";
import axios from "axios";

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = { title, price, description };

        axios
            .post("http://localhost:3000/api/product", newProduct)
            .then((res) => {
                console.log("Product added:", res.data);
                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch((err) => console.error(err));
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Product Manager</h1>
            <form style={styles.form} onSubmit={handleSubmit}>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Title:</label>
                    <input
                        type="text"
                        style={styles.input}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Price:</label>
                    <input
                        type="number"
                        style={styles.input}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Description:</label>
                    <input
                        type="text"
                        style={styles.input}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button style={styles.button} type="submit">
                    Create
                </button>
            </form>
        </div>
    );
};

const styles = {
      container: {
        width: "18%",
        margin: "0 auto",
        textAlign: "center",
        marginTop: "20px",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
    },
    title: {
        fontSize: "24px",
        marginBottom: "20px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    inputGroup: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    label: {
        marginBottom: "5px",
        fontSize: "14px",
    },
    input: {
        width: "100%",
        padding: "10px",
        fontSize: "16px",
        border: "2px solid #ccc",
        borderRadius: "5px",
    },
    button: {
        width: "110%",
        padding: "10px 20px",
        fontSize: "16px",
        color: "#fff",
        backgroundColor: "#1b1c1b",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default ProductForm;

