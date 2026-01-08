import React from "react";

export function EduTech() : React.JSX.Element {
    return (
        <div className="prose">
          <div>
            <p>
              As the founding developer for EduTech de Centroamerica's software division, I began work on Train Me, a SaaS B2B LMS system. I later took on more roles, both technical and managerial, as the company grew.
            </p>
            <p>
              It was very hands-on work and there wasn’t a portion of the work vertically that I didn’t touch, from meetings with the CEO and other stakeholders, to defining requirements, to architecting a solution, development work, coordination with the design team, team leadership and more.
            </p>
            <p>
              In the following paragraphs I will summarize the different applications I worked on and lead, as well as detailing my involvement in them.
            </p>
          </div>
          <br />
          <div>
            <h3>
              Train Me Education (LMS)
            </h3>
            <p>
              Train Me Education is a white label, B2B SaaS LMS for schools, companies and any organization with the desire to create their own educational content. Train Me Education was built to be a multitenant highly customizable system.
            </p>
            <p>
              As the first developer of the company, I wrote an MVP for the application which we proceeded to slowly build up from and refine. The application was written in PHP and Laravel with a React front end and hosted in AWS, beginning with manual builds and deployments.
            </p>
            <p>
              At around the 4-month mark, we commenced hiring for more developers, at which point my job also required to lead said developers, train them, and define and coordinate work for them. This was part of my responsibilities from the beginning, and it remained so until the end, though at times I delegated part of the team leadership to the CEO as he had me focus on other initiatives.
            </p>
            <p>
              My work often involved getting deep into product design and strategizing on the best way to implement new features demanded by the market with access to little resources and helping shape and prioritize the CEO's vision for the budding product.
            </p>
          </div>
          <br />
          <div>
            <h3>
              Costa Rican Government's Ministry of Education Census Platform - SABER
            </h3>
            <p>
              I helped define a strategy for the government of Costa Rica’s ministry of education. They wanted to create a platform that would allow them to keep track of all students in the country, store their personal information and keep it encrypted for privacy purposes and allow reporting at a massive scale.
            </p>
            <p>
              This project was the beginning of what became a series of contracts, but I was only a participant of the first phase.
            </p>
            <p>
              This all began with an application for a national census of all of the country’s students. In this specific project I lead a team of 6 developers, I also defined the architecture and was in charge of all code reviews making sure that the architecture would be followed.
            </p>
            <p>
              I constantly met with team members helping answer their questions, be them technical or business related. We published this application in March of 2020, and it allowed institutions from across the entire country to submit their yearly census report, which then allowed the creation of an automated report of all of the country’s educational institutions, which was something that had never been possible prior to this tool existing.
            </p>
            <p>
              This allowed the simplification of a manual 8-month process to merely 1 and half months.
            </p>
            <p>
              The application was an ASP.NET Core API with a React front end written in Typescript. It was hosted in AWS, and it utilized AWS Cognito to allow authentication and authorization.
            </p>
          </div>
          <br />
          <div>
            <h3>
              Ada Intelligence
            </h3>
            <p>
              Ada Intelligence is a tool for measuring social and emotional skills through psychological tests that allows you to retrieve said report within your organization.
            </p>
            <p>
              Ada Intelligence was built with an ASP.NET Core API and Angular in the front end. Using Tailwind CSS for styling. The app was hosted using AWS Amplify and an AWS EC2 server for the backend, with a PostgreSQL database using AWS RDS.
            </p>
            <p>
              My role in Ada Intelligence was less technical than in other projects due to lack of time and lower priority. However, I did have a hand in the definition of the application’s architecture. I mentored the leading developer in this project to the correct usage of cloud resources; I also provided aid whenever blockers were encountered.
            </p>
            <p>
              Because of my lower technical involvement, I focused on product design as I delegated parts of the architecture to a senior developer that was previously part of the census app’s team. However, we held several meetings in which we coordinated around the architecture of the app, and I explained the business logic as thoroughly as possible and helped in the validation process by performing manual QA for tickets that were completed.
            </p>
          </div>
        </div>
    );
}