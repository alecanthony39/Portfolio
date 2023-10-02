import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "../Styles/Experience.css";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="black">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2014"
          iconStyle={{ background: "Red" }}
          icon={<SchoolIcon />}
        >
          {" "}
          <h3 className="vertical-timeline-element-title">
            Prosser Career Academy, Chicago Illinois
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2019"
          iconStyle={{ background: "Red" }}
          icon={<WorkIcon />}
        >
          {" "}
          <h3 className="vertical-timeline-element-title">
            Chicago Children's Museum
          </h3>
          <p>Play and Learning Facilitator</p>
          <p>Sound Board Technician</p>
          <p>Lead School Groups Facilitator</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2024"
          iconStyle={{ background: "Red" }}
          icon={<WorkIcon />}
        >
          {" "}
          <h3 className="vertical-timeline-element-title">
            For Your Child Pre-School, Chicago Illinois
          </h3>
          <p>Assistant Teacher</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="January 2024 - June 2024"
          iconStyle={{ background: "Red" }}
          icon={<SchoolIcon />}
        >
          {" "}
          <h3 className="vertical-timeline-element-title">
            FullStack Academy Academy, Chicago Illinois
          </h3>
          <p>Web Development Certification</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
