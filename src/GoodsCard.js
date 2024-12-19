import React from 'react';

const GoodsCard = ({ image, title, price }) => {
    return (
        <div style={styles.card}>
            <img src={image} alt={title} style={styles.image} />
            <h3>{title}</h3>
            <p style={styles.price}>${price}</p>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
        width: '200px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    image: {
        width: '100%',
        height: '150px',
        objectFit: 'cover',
        borderRadius: '8px',
    },
    price: {
        fontWeight: 'bold',
        color: '#27ae60',
    },
};

export default GoodsCard;
