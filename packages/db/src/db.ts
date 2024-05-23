import { createClient } from "@libsql/client";
import { drizzle, type LibSQLDatabase } from "drizzle-orm/libsql";

// import * as schema from "./schemas/index";

export const createDbClient = () => {
  const client = createClient({
    url: "libsql://gemhunter-shandysulen.turso.io",
    authToken:
      "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDIzLTExLTEzVDIwOjExOjExLjM5Njc0OTA2MVoiLCJpZCI6IjAwZTYzYjFkLTgyNjAtMTFlZS04OTEwLWI2Y2EwN2QwOWZlNCJ9.OM8_eCESvy-NjUp74scACw9skViIVUuKd9r0Q8Rdoacf6pmSfv-xQ3qoVD6jZdJEA0ye8-lkOaYw8-ZkbhboAg",
  });

  return drizzle(client);
};
