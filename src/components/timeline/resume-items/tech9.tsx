import React from "react";

export function Tech9() : React.JSX.Element{
    return (
        <div className="prose">
          <div>
            <p>
              In this position I have worked with different stacks and teams according to necessity. For about a year and a half, I worked on a Google Maps solution to allow users to find potential learning groups in their area, this application was called QuickReg. I also worked in an Azure Functions solution for a data migration that was hard to orchestrate and required deep understanding of Anthology API. I also worked in an application migration from ASP.NET Core 2.2 to .NET 8. Finally, I worked once more in the QuickReg app in rewriting the app in NextJS and decoupling it from a legacy API, instead moving to use Microsoft 365’s CRM.
            </p>
          </div>
          <br />
          <div>
            <h3>
              QuickReg V1
            </h3>
            <p>
              QuickReg is an application for searching learning groups based on your location, it uses a Google Maps to allow this. I primarily worked on the optimization the functionality of the map, improving the load time of groups in the map close to 70% in the slowest edge cases. Also worked on a report related of the effort required to rewrite the application away from the internal API we depended on for all of our data.
            </p>
            <p>
              This report was later used by the business to make the decision to proceed with a rewrite of the application.
            </p>
          </div>
          <br />
          <div>
            <h3>
              QuickReg V2
            </h3>
            <p>
              We began the rewrite of the application in NextJS and Typescript. I worked primarily in making the map’s interactive functionality in the new site. We worked with an MS Dynamics engineer in constant communication in order to configure the API endpoints so that we could retrieve the information that we needed for the migration to go smoothly.
            </p>
            <p>
              I implemented the library Zustand as a replacement of our previous use of React Redux. I also learned how to craft OData queries to be able to utilize MS Dynamics CRM in an efficient manner.
            </p>
          </div>
          <br />
          <div>
            <h3>
              BYU Pathway
            </h3>
            <p>
              I worked as a part of a large team in tickets related to BYU Pathway’s SIS customizations on top of Anthology API. The work mostly involved working with Anthology workflows for certain processes. It also required defining new endpoints in an Azure Functions API project for different sides of the system to consume. The project required a strong understanding of Anthology’s data model as well as the user pipeline from university application to course registration and awarding of degrees or certificates.
            </p>
            <p>
              I was later given charge of a project related to a data migration of an old database from before the organization had decided to use Anthology API. My job there was to first understand how to translate the data from the old schema into Anthology API’s data model, once I had done this, I wrote an Azure Function routine tied to an Azure Queue which allowed every individual student to be processed and go through an ETL-like custom software solution.
            </p>
          </div>
        </div>
    );
}