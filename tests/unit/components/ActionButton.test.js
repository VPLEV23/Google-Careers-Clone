import { render, screen } from "@testing-library/vue";

import ActionButton from "@/components/ActionButton.vue";

describe("ActionButton", () => {
  it("render test", () => {
    render(ActionButton, {
      props: {
        text: "Click Me",
        type: "primary",
      },
    });
    const button = screen.getByRole("button", {
      name: /click me/i,
    });
    expect(button).toBeInTheDocument();
  });

  it("apliies one of the several styles to button", () => {
    render(ActionButton, {
      props: {
        text: "Click Me",
        type: "primary",
      },
    });
    const button = screen.getByRole("button", {
      name: /click me/i,
    });
    expect(button).toHaveClass("primary");
  });
});
