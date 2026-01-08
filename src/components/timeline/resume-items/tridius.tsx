import React from "react";

export function Tridius() {
    return (
        <div className="prose">
            <p>
              Started work with a customer from an idea of a migration of an existing app. I helped define requirements, created a strategy for cloud migration and established a baseline for what the new architecture would look like. I was then given 2 junior developers to lead in order to write this application as quickly as possible. I led and mentored these developers, and we were able to complete the migration in record time. The app in question went from an on-prem old Webforms site to an ASP.NET Core 6 application hosted on AWS App Runner and Docker, which allowed for flexible scaling. We used the library HangFire to orchestrate long running jobs of data retrieval to the Melissa Data API. We also worked in migrating the application’s existing database from SQL Server to PostgreSQL.
            </p>
        </div>
    );
}