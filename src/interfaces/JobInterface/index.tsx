// applications: 1
// currency: "GBP"
// date: "18/11/2019"
// employerId: 589026
// employerName: "Jefferson Frank "
// employerProfileId: null
// employerProfileName: null
// expirationDate: "30/12/2019"
// jobDescription: " Company This is a brilliant opportunity to join an AWS partnered company who operate primarily in Cambridgeshire. They are looking for a developer with a strong background in JavaScript and specialises in Node.JS. You will be joining the company just in the midst  of them securing a huge contract for a global cloud computing provider and will be working on the product long term. Benefits: <... "
// jobId: 39393066
// jobTitle: "Senior Developer, Cambridge, Node.JS, £70,000 - 2 Days Remote"
// jobUrl: "https://www.reed.co.uk/jobs/senior-developer-cambridge-nodejs-70000-2-days-remote/39393066"
// locationName: "Cambridge"
// maximumSalary: 70000
// minimumSalary: 60000

export default interface JobInterface {
  applications: number;
  currency: string;
  date: string;
  employerId: number;
  employerName: string;
  employerProfileId: number;
  employerProfileName: string;
  expirationDate: string;
  jobDescription: string;
  jobId: number;
  jobTitle: string;
  jobUrl: string;
  locationName: string;
  maximumSalary: number;
  minimumSalary: number;
}
