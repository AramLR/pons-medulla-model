import { z } from "astro/zod";
import Macrostructure from "./Macrostructure";
import Structure from "./Structure";

const Level = z.object({
  macrostructure: Macrostructure,
  name: z.string(),
  structures: z.array(Structure),
});

export default Level;
