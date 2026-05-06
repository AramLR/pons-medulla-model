import { z } from "astro/zod";

const Macrostructure = z.enum(["Pons", "Medulla", "Midbrain", "Brainstem"]);

export default Macrostructure;
