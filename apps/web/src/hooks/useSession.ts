import { useQuery } from "@tanstack/react-query";
import { Session } from "@/types/session";

export const useSession = () => {
  const { data: session } = useQuery<Session>({
    queryKey: ["session"],
    queryFn: () => fetch("/api/siwe/session").then((res) => res.json()),
  });

  return session;
};
