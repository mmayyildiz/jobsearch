import ShowInteface from "../ShowInterface";

// employerId	id of employer posting job
// employerProfileId	profile id of employer posting job
// keywords	any search keywords
// locationName	the location of the job
// distanceFromLocation	distance from location name in miles (default is 10)
// permanent	true/false
// contract	true/false
// temp	true/false
// partTime	true/false
// fullTime	true/false
// minimumSalary	lowest possible salary e.g. 20000
// maximumSalary	highest possible salary e.g. 30000
// postedByRecruitmentAgency	true/false
// postedByDirectEmployer	true/false
// graduate	true/false
// resultsToTake	maximum number of results to return (defaults and is limited to 100 results)
// resultsToSkip	number of results to skip (this can be used with resultsToTake for paging)

export interface SearchCriteriaInterface {
  employerId?: number;
  employerProfileId?: number;
  keywords?: string;
  locationName?: string;
  distanceFromLocation?: number;
  permanent?: boolean;
  contract?: boolean;
  temp?: boolean;
  partTime?: boolean;
  fullTime?: boolean;
  minimumSalary?: number;
  maximumSalary?: number;
  postedByRecruitmentAgency?: boolean;
  postedByDirectEmployer?: boolean;
  graduate?: boolean;
  resultsToTake?: number;
  resultsToSkip?: number;
  [attribute: string]: any;
}

export interface SearchTopicInterface extends ShowInteface {
  distanceFromLocation: number;
  graduate: boolean;
  jobType: string;
  keywords: string;
  locationName: string;
  postedBy: string;
  resultsToSkip: number;
  resultsToTake: number;
  minimumSalary: number;
  maximumSalary: number;
}
