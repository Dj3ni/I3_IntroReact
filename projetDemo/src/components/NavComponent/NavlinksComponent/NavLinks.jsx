

function NavLinks(links = ["link1", "link2", "link3"]) {

        const listItem = links.map((link, index)=>{
            return(<li key={index}>{link}</li>)
        })

        return (
            <ul className="navLinks">{listItem}</ul>
        )

}

export default NavLinks;