import { Redis } from "@upstash/redis";

export const createRedisClient = () =>
  new Redis({
    url: "https://us1-singular-dolphin-38635.upstash.io",
    token:
      "AZbrASQgZjg2OTVhMWItZWE2OS00MjhjLWI5MjUtMjE0NzVmZmM2YTIwZjllYmM0MmNkOTEyNGFkMGFhMjBlYzc4NzZlYzE5N2U=",
  });
