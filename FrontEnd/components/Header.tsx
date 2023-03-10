import { Navbar, Text, Button } from "@nextui-org/react";
import { BrandLogo } from "./BrandLogo";
import { CiSettings } from "react-icons/ci";
import { LoginButton } from "./Buttons/Login";

export const Header = () => {
    return (
        <Navbar variant={"static"}>
            <Navbar.Brand>
                <BrandLogo />
            </Navbar.Brand>
            <Navbar.Content>
                <Navbar.Item>
                    <LoginButton text={'Login'}/>
                </Navbar.Item>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Item>
                    <Button color={"primary"} rounded bordered auto size={'md'}>
                        <CiSettings size={28}/>
                    </Button>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar> 
    )
}