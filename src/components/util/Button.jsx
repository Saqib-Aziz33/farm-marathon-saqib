import { Box, Heading } from "@chakra-ui/react";

function Button({ children, ...rest }) {
  return (
    <Box
      as="button"
      cursor="pointer"
      color="#1ddafdFF"
      border="2px solid #1ddafdFF"
      p={4}
      rounded="lg"
      transition="all 0.3s ease"
      _hover={{ color: "#fff", bg: "#1ddafdFF" }}
      {...rest}
    >
      <Heading size="md">{children}</Heading>
    </Box>
  );
}
export default Button;
