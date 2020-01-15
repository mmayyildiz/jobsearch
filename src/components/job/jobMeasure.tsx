import * as React from "react";
import JobMeasureInterface from "../../interfaces/JobMeasureInterface";

const jobMeasure: React.FunctionComponent<JobMeasureInterface> = props => {
  const {
    applications,
    currency,
    locationName,
    maximumSalary,
    minimumSalary
  } = props;

  let currencySymbol = "#";

  if (currency === "GBP") {
    currencySymbol = "£";
  } else if (currency === "USD") {
    currencySymbol = "$";
  } else if (currency === "TRY") {
    currencySymbol = "₺";
  } else if (currency === "EUR") {
    currencySymbol = "€";
  }

  let salaryText = "Salary not specified";
  if (minimumSalary || maximumSalary) {
    salaryText = `${currencySymbol}${minimumSalary} - ${currencySymbol}${maximumSalary}`;
  }

  return (
    <div style={{ marginTop: 40 }}>
      <img src="/public/img/salary.png" />
      <strong style={{ marginLeft: 10 }}>{salaryText}</strong>

      <img style={{ marginLeft: 60 }} src="/public/img/location.png" />
      <strong style={{ marginLeft: 10 }}>{locationName}</strong>

      <img style={{ marginLeft: 60 }} src="/public/img/timer.png" />
      <strong style={{ marginLeft: 10 }}>Contract, part-time</strong>

      <img style={{ marginLeft: 60 }} src="/public/img/apply.png" />
      <strong style={{ marginLeft: 10 }}>{applications} application</strong>
    </div>
  );
};

export default jobMeasure;
