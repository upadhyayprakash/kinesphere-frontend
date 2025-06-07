import "@testing-library/jest-dom";

// Mock next/router
jest.mock("next/router", () => require("next-router-mock"));
jest.mock("next/navigation", () => require("next-router-mock/next-navigation"));
