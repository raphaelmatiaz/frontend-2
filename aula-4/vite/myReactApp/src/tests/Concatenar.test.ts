import Concatenar from "../components/Concatenar"; // Adjust the path if needed

test("Concatenates two strings correctly", () => {
  expect(Concatenar("Hello", "World")).toBe("HelloWorld");
});

test("Handles empty strings", () => {
  expect(Concatenar("", "Test")).toBe("Test");
  expect(Concatenar("Test", "")).toBe("Test");
  expect(Concatenar("", "")).toBe("");
});