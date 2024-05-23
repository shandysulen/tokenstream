// import { Container } from "@tokenstream/components/src/components/Container";
// import { Heading } from "@tokenstream/components/src/components/Heading";
import { Container, Heading } from "@tokenstream/components";
import { Description } from "./_components/Description";
import { TokensTableSuspense } from "./_components/TokenTable/TokensTableSuspense";

export default function Index() {
  return (
    <Container
      size='xl'
      className='flex flex-col items-center min-h-[calc(100vh-var(--height-header)-var(--height-footer))] h-full gap-4 mt-10'
    >
      <Heading>Be first to the next 100x.</Heading>
      <Description />
      <TokensTableSuspense />
    </Container>
  );
}
