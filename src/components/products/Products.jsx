import Bags from '../bags/Bags';
import './products.css'

export const products = [
    {
        id: 10,
        name: "See all"
    },
    {
        id: 1,
        name: "New",
    },
    {
        id: 2,
        name: "Bags",
    },
    {
        id: 3,
        name: "Backpacks",
    },
    {
        id: 4,
        name: "Bags for phones",
    },
    {
        id: 5,
        name: "Crossbody bags",
    },
    {
        id: 6,
        name: "Tote bags"
    },
    {
        id: 7,
        name: "Handbags"
    },
    {
        id: 8,
        name: "Leather bags"
    },
    {
        id: 9,
        name: "Wallets"
    },
];

const Products = () => {
    return (
        <div className="products-wrapper">
            <div className="products-container">
                <div className="products">
                    {
                        products.map((product) => {
                            return <h4 key={product.id}>{product.name}</h4>
                        })
                    }
                </div>
                <p className="total">Total products</p>
                <p className="number">11</p>
            </div>
            <Bags />
        </div>
    )
}

export default Products
