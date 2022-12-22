import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";

import JonListing from "@/components/JobResult/JonListing.vue";

describe("JobListing", () => {
  const renderJobListing = () => {
    render(JonListing, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
      props: {
        job: {
          title: "Vue Developer",
          organization: "AirBnB",
        },
      },
    });
  };
  it("renders jobs title", () => {
    renderJobListing();
    expect(screen.getByText("Vue Developer")).toBeInTheDocument();
  });
  it("renders jobs org", () => {
    renderJobListing();
    expect(screen.getByText("AirBnB")).toBeInTheDocument();
  });
});
