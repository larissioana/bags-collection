import './bags.css'
import bag1 from '../../assets/bag1.jpg'
import bag2 from '../../assets/bag2.jpg'
import bag3 from '../../assets/bag3.jpg'
import bag4 from '../../assets/bag4.jpg'
import bag5 from '../../assets/bag5.jpg'
import bag6 from '../../assets/bag6.jpg'
import bag7 from '../../assets/bag7.jpg'
import bag8 from '../../assets/bag8.jpg'
import bag9 from '../../assets/bag9.jpg'
import bag10 from '../../assets/bag10.jpg'
import bag11 from '../../assets/bag11.jpg'
import { motion } from 'framer-motion'
import { useState } from 'react'

export const bags = [
    {
        id: 1,
        number: "001",
        name: "Leather print bag",
        img: bag1,
        price: "50"
    },
    {
        id: 2,
        number: "002",
        name: "Red handbag",
        img: bag2,
        price: "80"
    },
    {
        id: 3,
        number: "003",
        name: "Faux leather bag",
        img: bag3,
        price: "90"
    },
    {
        id: 4,
        number: "004",
        name: "Small bag",
        img: bag4,
        price: "50"
    },
    {
        id: 5,
        number: "005",
        name: "Small handbag white",
        img: bag5,
        price: "60"
    },
    {
        id: 6,
        number: "006",
        name: "Mini half bag",
        img: bag6,
        price: "70"
    },
    {
        id: 7,
        number: "007",
        name: "Midi handbag",
        img: bag7,
        price: "80"
    },
    {
        id: 8,
        number: "008",
        name: "Shoulder bag",
        img: bag8,
        price: "100"
    },
    {
        id: 9,
        number: "009",
        name: "Geometry of style",
        img: bag9,
        price: "60"
    },
    {
        id: 10,
        number: "010",
        name: "Small handbag",
        img: bag10,
        price: "90"
    },
    {
        id: 11,
        number: "011",
        name: "Leather bag",
        img: bag11,
        price: "60"
    },
];

const Bags = () => {
    const [isHovered, setIsHovered] = useState(null);

    return (
        <div className="bags-wrapper">
            {
                bags.map((bag, index) => {
                    const { id, name, img, number, price } = bag;
                    return <div
                        className="bag-container" key={id}
                        onMouseEnter={() => setIsHovered(index)}
                        onMouseLeave={() => setIsHovered(null)}
                        style={{
                            background: isHovered === index ? "rgba(8, 8, 8, 0.8)" : "",
                            color: isHovered === index ? "#ddd" : "#17181a",
                            padding: isHovered === index ? ".5rem .2rem" : ""
                        }}
                    >
                        <h4 className="number-of-bags">{number}</h4>
                        <h1>{name}</h1>
                        <motion.img
                            src={img}
                            alt={name}
                            className="bag-image"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: isHovered === index ? 300 : 0, opacity: 1 }} // Animate height based on hover state
                            transition={{ duration: 0.5, ease: "easeInOut" }}

                        />
                        <p className="price">${price}</p>
                    </div>
                })
            }
        </div>
    )
}

export default Bags
