import { createDbClient } from "@tokenstream/db";
import { TRPCClientError } from "@trpc/client";
import { initTRPC } from "@trpc/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import superjson from "superjson";
import { ironSessionOptions } from "@/constants/iron-session";
import { Session } from "@/types/session";

export const createContext = async () => {
  const db = createDbClient();
  const session = await getIronSession<Session>(cookies(), ironSessionOptions);

  return {
    db,
    session,
  };
};

const t = initTRPC.context<typeof createContext>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = publicProcedure.use((opts) => {
  if (!opts.ctx.session.address) {
    throw new TRPCClientError("Unauthorized");
  }

  return opts.next();
});
