import { Navbar, Text, Button } from "@nextui-org/react";
import { BrandLogo } from "./BrandLogo";
import { CiSettings } from "react-icons/ci";

export const Header = () => {
    return (
        <Navbar variant={"static"}>
            <Navbar.Brand>
                <BrandLogo />
            </Navbar.Brand>
            <Navbar.Content>
                <Navbar.Item>
                    <Button color={'success'} bordered >
                        <Text weight={'extrabold'}>Login</Text>
                    </Button>
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