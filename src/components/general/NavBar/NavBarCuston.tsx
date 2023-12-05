import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Switch,
} from "@nextui-org/react";
import { IconMoonFilled, IconBrightnessHalf } from "@tabler/icons-react";

export function NavBarCuston() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Navbar>
      <NavbarBrand>
        <h1>MY</h1>
        <p className="font-bold text-inherit">PORTAFOLIO</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <Switch
          thumbIcon={darkMode ? <IconMoonFilled /> : <IconBrightnessHalf />}
          onChange={handleDarkMode}
        >
          Dark Mode
        </Switch>
      </NavbarContent>
    </Navbar>
  );
}
