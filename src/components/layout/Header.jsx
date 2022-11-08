import { Box, Container, Heading, HStack, Image, Link } from "@chakra-ui/react";
import Button from "../util/Button";
import { MdRadio } from "react-icons/md";

function Header() {
  return (
    <Box as="header">
      <Container maxW={1200} py={4}>
        <HStack justify="space-between" flexDirection={["column", null, "row"]}>
          <Link
            display="flex"
            href="https://marathoncash.com/"
            target="_blank"
            alignItems="center"
            _hover={{ textDecoration: "none" }}
            gap={4}
          >
            <Image w={[70, 100]} src="/assets/logo-cr.png" alt="" />
            <Heading fontWeight={800} size={["md", "lg"]} color="cyan.300">
              MarathonCash.Com
            </Heading>
          </Link>
          <Button>
            <MdRadio style={{ display: "inline" }} /> Connect Wallet
          </Button>
        </HStack>
      </Container>
    </Box>
  );
}
export default Header;
