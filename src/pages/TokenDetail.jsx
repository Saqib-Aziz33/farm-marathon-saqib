import {
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import _ from "lodash";
import data from "../components/util/data.json";
import Button from "../components/util/Button";

function TokenDetail() {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setItem(data.find((obj) => obj.id == id));
  }, []);

  //renders
  if (_.isEmpty(item)) {
    return <Heading textAlign="center">Item Not Found</Heading>;
  }
  return (
    <Container maxW={1200} my={16}>
      <VStack gap={3}>
        <Image src={item.img} w={100} />
        <Heading className="text-stroke" fontWeight="900" size="2xl">
          {item.deposit}
        </Heading>
        <Heading color="gray.500" size="md">
          Deposit {item.deposit} and Earn {item.earn}
        </Heading>
      </VStack>

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
            <Heading textAlign="end" color="blue">
              MRACE
            </Heading>
          </HStack>

          <Divider borderColor="gray.500" my={3} />

          <HStack my={8} justify="space-between">
            <Heading color="gray.500" size="md">
              Earned <br /> 0.00
            </Heading>
            <Button px={16}>Harvest</Button>
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
            <Image src={item.img} w={120} />
            <Heading textAlign="end" color="blue">
              {item.deposit}
            </Heading>
          </HStack>

          <Divider borderColor="gray.500" my={3} />

          <HStack my={8} justify="space-between">
            <Heading color="gray.500" size="md">
              Staked <br /> 0.00
            </Heading>
            <Button px={16}>Approve</Button>
          </HStack>
        </GridItem>
      </Grid>
    </Container>
  );
}
export default TokenDetail;
