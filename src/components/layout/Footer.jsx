import { Box, Container, Heading, HStack, Image } from "@chakra-ui/react";
import {
  AiOutlineMedium,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaTelegram, FaDiscord, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <Box as="footer">
      <Container maxW={1200}>
        <HStack justify="space-between" flexDir={["column", "row"]} gap={4}>
          <Box>
            <Heading fontWeight="800" size="2xl" className="text-grad">
              YOUR STEPS COUNT <br /> WITH Marathon
            </Heading>
            <HStack mt={4}>
              <Image src="/assets/ios.svg" />
              <Image src="/assets/android.svg" />
            </HStack>
          </Box>
          <Box>
            <Heading fontWeight="800" size="2xl">
              Join Our Community
            </Heading>
            <HStack
              mt={8}
              gap={4}
              fontSize="xl"
              justifyContent={["center", "flex-end"]}
            >
              <AiOutlineMedium />
              <AiOutlineTwitter />
              <FaTelegram />
              <FaDiscord />
              <AiOutlineInstagram />
              <FaGithub />
            </HStack>
          </Box>
        </HStack>
      </Container>

      <Box bg="#2c3a4bFF" mt={12} py={4}>
        <Container maxW={1200} color="#a5abb3FF">
          <HStack
            justify={["unset", null, "space-between"]}
            flexDir={["column", "row"]}
          >
            <Image w={40} src="/assets/logo.png" filter="grayscale()" />
            <Heading size="md">
              Copyright &copy; MarathonCash.Com Company All rights reserved
            </Heading>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
}
export default Footer;
