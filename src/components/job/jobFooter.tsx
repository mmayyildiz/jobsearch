import * as React from "react";
import ApplyButton from "./applyButton";

interface JobFooterProps {
  jobUrl: string;
}

const jobFooter: React.FunctionComponent<JobFooterProps> = ({ jobUrl }) => {
  return (
    <div>
      <div style={{ marginTop: 60, textAlign: "center" }}>
        <ApplyButton
          isApplied={false}
          as="button"
          onClick={() => window.open(jobUrl)}
        >
          Apply
        </ApplyButton>
      </div>
    </div>
  );
};

export default jobFooter;
