import './ProductList.css'

function Product(name, description = "none",price , promo = false) {
    return(
        <div className={"list"}>
            <h1>{name}</h1>
            <p>Description : {description}</p>
            Price:
            {promo ? <p className={"red"}>{price} €</p> : <p>{price} €</p>}
                {/*if({promo}){*/}
                {/*    <p className={"red"}> {price.toFixed(2)} €</p>*/}
                {/*}*/}
                {/*else{*/}
                {/*    <p> {price.toFixed(2)} €</p>*/}
                {/*}*/}
        </div>
    )
}

export default Product;