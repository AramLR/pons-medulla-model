import { z } from "astro/zod";

const Macrostructure = z.enum(["Pons", "Medulla"]);

export default Macrostructure;
