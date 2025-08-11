import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import "@testing-library/jest-dom";

import BandsSection from "./BandsSection";

// Mock Band component to simplify test output
vi.mock("./Band", () => ({
  __esModule: true,
  default: ({ name }: { name: string }) => <div>{name}</div>,
}));

const mockBands = [
  {
    id: "1",
    name: "Band One",
    image: "/band1.jpg",
    description: "Band 1",
    socialLinks: [],
  },
  {
    id: "2",
    name: "Band Two",
    image: "/band2.jpg",
    description: "Band 2",
    socialLinks: [],
  },
];

describe("BandsSection", () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            data: { bands: mockBands },
          }),
      })
    ) as unknown as typeof fetch;
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("renders the section title", () => {
    render(<BandsSection />);
    expect(
      screen.getByText("Featuring 4 Stages with live performances by:")
    ).toBeInTheDocument();
  });

  it("fetches and displays band names", async () => {
    render(<BandsSection />);
    await waitFor(() => {
      expect(screen.getByText("Band One")).toBeInTheDocument();
      expect(screen.getByText("Band Two")).toBeInTheDocument();
    });
  });

  it("handles api call failing", async () => {
    vi.fn(() => Promise.reject("API is down"));
    render(<BandsSection />);

    await waitFor(() => {
      expect(screen.queryByText("Band One")).not.toBeInTheDocument();
    });
  });
});
