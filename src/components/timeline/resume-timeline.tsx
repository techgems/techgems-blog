import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { EduTech } from "./resume-items/edutech";
import { Intel } from "./resume-items/intel";
import { SandP } from "./resume-items/s-and-p";
import { Tridius } from "./resume-items/tridius";
import { Tech9 } from "./resume-items/tech9";
import { FirstFactory } from "./resume-items/first-factory";

export default function ResumeTimeline() {
  const data = [
    {
      company: "Tech9",
      title: "Senior Software Engineer",
      startDate: "June 2022",
      endDate: "Present",
      content: (
        <Tech9 />
      ),
    },
    {
      company: "Tridius Technologies",
      title: "Principal Software Engineer",
      startDate: "October 2021",
      endDate: "June 2022",
      content: (
        <Tridius />
      ),
    },
    {
      company: "S&P Global",
      title: "Senior Software Consultant",
      startDate: "February 2021",
      endDate: "October 2021",
      content: (
        <SandP />
      ),
    },
    {
      company: "EduTech de Centroamerica",
      title: "Staff Software Engineer",
      startDate: "January 2019",
      endDate: "January 2021",
      content: (
        <EduTech />
      ),
    },
    {
      company: "Intel",
      title: "Senior Software Engineer",
      startDate: "May 2017",
      endDate: "January 2019",
      content: (
        <Intel />
      ),
    },
    {
      company: "First Factory",
      title: "Full Stack Engineer",
      startDate: "September 2015",
      endDate: "April 2017",
      content: (
        <FirstFactory />
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}