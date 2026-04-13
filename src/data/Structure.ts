import { z } from "astro/zod";

const Structure = z.object({
  id: z.number(),
  name: z.string(),
});

export default Structure;
