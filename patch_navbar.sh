sed -i '1i import { useLocation } from "react-router-dom";' src/components/Navbar.tsx
sed -i 's/const \[isScrolled, setIsScrolled\]/const location = useLocation();\n  const isHome = location.pathname === "\/";\n  const \[isScrolled, setIsScrolled\]/g' src/components/Navbar.tsx
sed -i 's/"w-full transition-all duration-300 border-b",/cn("w-full transition-all duration-300 border-b", isHome \&\& !isScrolled ? "dark" : ""),/g' src/components/Navbar.tsx
