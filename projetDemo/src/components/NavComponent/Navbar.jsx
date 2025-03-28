
import {Link} from "react-router-dom";

function Navbar() {

    const list = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Demos",
            link: "/demos",
        },
        {
            title: "Exercises",
            link: "/exercises",
        },
        {
            title: "Explanations",
            link: "/explanations",
        }
    ]

    const ListItems = list.map((item, index) => {
        return (
            <li>
                <Link to={item.link}>{item.title}</Link>
            </li>
        )
    })

    return(
        <div className={"component"}>
            <nav>
                <ul>
                    {ListItems}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar