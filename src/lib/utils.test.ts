import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("combina classes condicionais e resolve conflitos Tailwind", () => {
    const optionalClass: string | undefined = undefined;
    expect(cn("px-2", optionalClass, "px-4", ["font-bold"])).toBe(
      "px-4 font-bold",
    );
  });
});
