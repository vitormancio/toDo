import { Navbar, Text } from "@nextui-org/react"
import { BrandLogo } from "./BrandLogo"

export const Header = () => {
    return (
        <Navbar>
            <Navbar.Brand>
                <BrandLogo />
            </Navbar.Brand>
        </Navbar> 
    )
}