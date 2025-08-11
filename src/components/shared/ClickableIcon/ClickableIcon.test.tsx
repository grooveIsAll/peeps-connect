import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import ClickableIcon from "./ClickableIcon";

describe("ClickableIcon", () => {
  const icon = "/test-icon.svg";
  const url = "https://example.com";

  it("renders an anchor with the correct href and target", () => {
    render(<ClickableIcon icon={icon} url={url} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", url);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  });

  it("renders the icon image with the correct src", () => {
    render(<ClickableIcon icon={icon} url={url} />);
    const img = screen.getByAltText('');
    expect(img).toHaveAttribute("src", icon);
  });

  it("adds custom link and img classes from styleConfig", () => {
    render(
      <ClickableIcon
        icon={icon}
        url={url}
        styleConfig={{ linkClass: "custom-link", imgClass: "custom-img" }}
      />
    );
    const link = screen.getByRole("link");
    const img = screen.getByAltText('');
    expect(link.className).toContain("custom-link");
    expect(img.className).toContain("custom-img");
  });

  it("uses the provided linkTarget", () => {
    render(<ClickableIcon icon={icon} url={url} linkTarget="_self" />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_self");
  });
});