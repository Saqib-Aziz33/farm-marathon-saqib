import {
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Button from "../util/Button";

function PoolCard({ item }) {
  return (
    <Box
      border="1px solid blue"
      rounded="lg"
      p={4}
      borderWidth="1px 5px 10px 1px"
    >
      <Image mx="auto" mb={4} w={100} src={item.img} />
      <Heading size="md" fontWeight={800} color="blue" textAlign="center">
        APY: {item.apy}%
      </Heading>

      <VStack mt={4}>
        <SpaceText text="Deposit" value={item.deposit} />
        <SpaceText text="Earn" value={item.earn} />
      </VStack>

      <Divider borderColor="#e3e3e3" my={2} />
      <Center>
        <Link to={`/${item.id}`}>
          <Button mt={4} py={2} px={12}>
            Select
          </Button>
        </Link>
      </Center>
    </Box>
  );
}
export default PoolCard;

function SpaceText({ text, value }) {
  return (
    <HStack justify="space-between" w="full">
      <Text fontWeight={800} color="gray.00">
        {text}
      </Text>
      <Text fontWeight={800}>{value}</Text>
    </HStack>
  );
}
