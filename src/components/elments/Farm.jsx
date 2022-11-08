import {
  Box,
  Center,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Button from "../util/Button";

function Farm() {
  return (
    <Box>
      <Container maxW={1200} my={12}>
        <Heading size="2xl" className="text-stroke" fontWeight="900">
          FARM
        </Heading>
        <Heading color="gray.400" size="sm" textAlign="center" mt={4}>
          Stake your tokens to earn more $MRACE.
        </Heading>

        <Grid gap={8} mt={8} gridTemplateColumns={["1fr", null, "1fr 1fr"]}>
          <GridItem
            py={8}
            px={[4, 6, 8, 12]}
            border="1px solid blue"
            rounded="lg"
            borderWidth="1px 5px 10px 1px"
          >
            <HStack justify="space-between">
              <Image src="/assets/logo-cr.png" w={120} />
              <Box>
                <Heading size="lg">
                  Your MRACE <br /> Balance
                </Heading>
                <Heading textAlign="end" color="blue">
                  0.00
                </Heading>
              </Box>
            </HStack>
            <Divider borderColor="gray.500" my={3} />
            <HStack justify="space-between">
              <Heading color="gray.500" size="md">
                Pending Harvest
              </Heading>
              <Heading size="md">
                0.00{" "}
                <Text as="span" color="gray.500">
                  MRACE
                </Text>
              </Heading>
            </HStack>
            <HStack mt={3} mb={8} justify="space-between">
              <Heading color="gray.500" size="md">
                Daily Output of MRACE
              </Heading>
              <Heading size="md">
                0.00{" "}
                <Text as="span" color="gray.500">
                  MRACE
                </Text>
              </Heading>
            </HStack>
          </GridItem>

          <GridItem
            py={8}
            px={[4, 6, 8, 12]}
            border="1px solid blue"
            rounded="lg"
            borderWidth="1px 5px 10px 1px"
          >
            <HStack justify="space-between">
              <Image src="/assets/c1.png" w={["80px", 120]} />
              <Heading size="md" color="blue">
                APY: <br /> 500%
              </Heading>
              <Image src="/assets/logo-cr.png" w={["80px", 120]} />
            </HStack>
            <Divider borderColor="gray.500" my={3} />
            <HStack justify="space-between" gap={2} my={4}>
              <Heading size="md" color="gray.500">
                Earn
              </Heading>
              <Heading size="md">GMT</Heading>
              <Heading size="md" color="gray.500">
                DEPOSIT
              </Heading>
              <Heading size="md">MRACE</Heading>
            </HStack>
            <Center>
              <Link to="/1">
                <Button py={2} px={12}>
                  Select
                </Button>
              </Link>
            </Center>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
export default Farm;
