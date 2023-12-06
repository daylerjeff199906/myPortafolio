import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("theme", "dark");
      document.querySelector("html")?.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Navbar maxWidth="2xl" className="fixed" shouldHideOnScroll>
      <NavbarBrand>
        <h1 className="font-bold dark:text-white">
          Jeff
          <span className="text-primary-500"> Santos</span>
        </h1>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="bordered"
            className="text-primary-800"
          >
            Contact Me
          </Button>
        </NavbarItem>
        <Switch
          thumbIcon={darkMode ? <IconMoonFilled /> : <IconBrightnessHalf />}
          onChange={handleDarkMode}
        />
      </NavbarContent>
    </Navbar>
  );
}
