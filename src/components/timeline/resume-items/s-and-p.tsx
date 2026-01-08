import React from "react";

export function SandP() {
    return (
        <div className="prose">
            <p>
              I worked in S&P Global primarily leading an initiative to renovate the way content for financial assets pages were displayed. The existing solution at the time of my arrival used a complex, non-developer friendly configuration file and a 3rd party solution that would take that information and would generate a page for said financial asset and price data.
            </p>
            <p>
              My job was to rewrite that approach into something that worked well with S&P's new microservice architecture. I worked primarily in setting up a POC to start defining this configuration with a JSON config to be read in a React app. I used the library AG Grid very extensively as it allowed the customization that was required for displaying financial information, as well as other libraries for charts.
            </p>
            <p>
              The initiative was a success, and it allowed S&P Global to migrate 150 pages of financial assets into a more flexible, fresh looking and faster loading set of pages. The speed increased 60% compared to the original set of pages.
            </p>
        </div>
    );
}