import { describe, it, expect } from "vitest";
import { isActivePath } from "../js/utils/userInterface";

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    expect(isActivePath("/about", "/about")).toBe(true);
  });

  it('returns true for root path "/"', () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("returns true when current path starts with href", () => {
    expect(isActivePath("/about", "/about/team")).toBe(true);
    expect(isActivePath("/products", "/products/123")).toBe(true);
  });

  it("returns false when paths do not match", () => {
    expect(isActivePath("/contact", "/about")).toBe(false);
    expect(isActivePath("/home", "/about")).toBe(false);
  });
});
