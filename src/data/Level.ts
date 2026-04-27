import { z } from "astro/zod";
import Macrostructure from "./Macrostructure";
import Structure from "./Structure";
import type { SchemaContext } from "astro:content";

const Level = (image: SchemaContext["image"]) =>
  z.object({
    macrostructure: Macrostructure,
    name: z.string(),
    structures: z.array(Structure),
    imgUrl: image(),
    svgPath: z.string().optional(),
  });

export default Level;
