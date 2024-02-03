# TaskPhin Frontend Application

Basic Recruiter Tool with Computed Score, Additional Attribute, and Optional Hosting. The application should allow recruiters to manage candidate information. Each candidate should have the following details:
1. Candidate Name
2. Contact information (email, phone)
3. Skills/Qualifications
4. Current status (Contacted, Interview Scheduled, Offer Extended, Hired, Rejected)
5. Additional Attribute: Expected Salary

#### URL
The application can be found at https://taskphin.rogerjacob.com, which is hosted on AWS Amplify with custom domain management.

#### Technologies
React, Tailwind

#### How to run the application locally
1. Clone the repository https://github.com/rogerjacobrj/taskphin-fe
2. Navigate to the project root and run **npm install**.
3. Create a .env file and assign the value for the variable **VITE_API_URL**, which is the URL for the API endpoint.
4. Run **npm run dev** to start the application in development mode.
5. Run **npm run build** to create a production version of the application.
