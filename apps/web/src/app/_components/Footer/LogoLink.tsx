import NextLink from "next/link";
import { Logo } from "@/app/_shared/Logo";

export const LogoLink: React.FC = () => {
  // const logoType = useColorModeValue("black", "white");

  return (
    <NextLink href='/'>
      <Logo />
    </NextLink>
  );
};
