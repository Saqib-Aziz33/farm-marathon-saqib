import { Box, Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import PoolCard from "./PoolCard";
import data from "../util/data.json";

function StakePool() {
  return (
    <Box className="stake-pool" my={12}>
      <Container maxW={1200}>
        <Heading as="h2" className="text-stroke" size="2xl" fontWeight="900">
          Choose Your Stake Pool
        </Heading>

        <Grid
          gap={4}
          my={8}
          gridTemplateColumns={[
            "1fr",
            null,
            "1fr 1fr",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
        >
          {data.map((item) => (
            <GridItem key={item.id}>
              <PoolCard item={item} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
export default StakePool;
