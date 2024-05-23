import { Center } from "@tokenstream/components";

export const EmptyPlaceholder: React.FC = () => {
  return (
    <Center className='mt-10 w-full'>
      <span className='text-black'>⚠️ No tokens found.</span>
    </Center>
  );
};
