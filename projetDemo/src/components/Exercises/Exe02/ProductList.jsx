import Product from "./Product.jsx";
import './ProductList.css'

function ProductList() {
    const Products = [
        {
            name: "Wingspan",
            description: "Un jeu avec des oiseaux",
            price: 59.90,
            promo : false
        },
        {
            name: "Ark Nova",
            description: "Un jeu avec des animaux",
            price: 79.90,
            promo : false
        },
        {
            name: "Dune",
            description: "Un jeu avec des gros vers de sable",
            price: 50.90,
            promo : true,
            style : [
                {
                    "color":"red"
                }
            ]
        }
    ]

    const ListProduct = Products.map((item, index) => {
        return(
            <li className={"list"} key={index}>
                {/*<Product*/}
                {/*   name = {item.name}*/}
                {/*   description = {item.description}*/}
                {/*   price = {item.price}*/}
                {/*   promo = {item.promo}*/}
                {/*/>*/}
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                {item.promo ? <p className={"red"}>{item.price} €</p> : <p>{item.price} €</p>}
            </li>
        )
    })


    return(
        <div>
            {ListProduct}
        </div>
    )
}

export default ProductList;