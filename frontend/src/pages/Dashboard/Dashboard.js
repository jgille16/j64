import './Dashboard.css';

function Dashboard() {
    return (
      <div className='dashboard'>

        <div className='article'>
          <h1>Article Summary</h1>
          <p>Flu and Covid viruses present serious health concerns for the public each year. This article summarizes a study conducted on the accuracy of the Panbio COVID-19/Flu A&B panel - a revolutionary, comprehensive test that can look for the Covid, Flu A, and Flu B viruses with a single swab from the patient. The study spanned 1,660 patients at 40 testing sites in 7 different countries. Subjects that were chosen for the study were presenting with respiratory symptoms and had not taken any anti-viral drugs intended for Covid or Flu within the past 30 days. The participants were all of diverse ages, races, and gender. </p>
          <p>The test is performed similar to any other nasal swab-based testing that would be performed at a doctor’s office. The study looked at many data points, including the diagnostic sensitivity for positive patients and specificity of the test outcome. The findings of the study concluded that the Panbio combined test is accurate and can be a helpful tool in diagnosing Covid and Flu A&B.</p>
          <p>Tests like these are important to the health of the public because, while Covid and Flu A&B may present with very similar symptoms, they do not have the same treatment regimen or isolation periods. The Panbio combined test and other similar tests will aid healthcare professions in diagnosing upper respiratory viruses.</p>
          <a href="https://journals.asm.org/doi/10.1128/jcm.00207-24">Journal of Clinical Microbiology</a>
        </div>

        <div className='techStack'>
          <h1>Tech Stack and Infrastructure</h1>
          <p>This project was built with a react framework. It is a Single Page Application (SPA) that uses HTTP calls via axios to communicate with the backend server. In my src folder, you will see two other main folders: pages and components. Each page/component has its own css file (if needed). Components were made to be as reusable as possible. For example, the chart components each take props for api endpoint and datapoint, so they can be infinitely reused with different data collections. You can see this in action on my Summary.js and Reports.js files. </p>
          <p>The authentication is done through JWT and each successful login attempt results in a  token being added to local storge. Unsuccessful login attempts result in a message on screen that says: “Invalid username or password”. If you look at my App.js file, you will see a component called ‘ProtectRoute’. This component checks to see if a token exists in local storage before allowing access to the page you are trying to route to. Also, on the App.js file, you will see a function called ‘checkTokenExpiration’ that looks every 5 seconds to see if a token has expired. Tokens expire every 3 minutes and once the app detects that it has expired, you are automatically logged off. There is a “Logout” button at the top of each protected page that allows users to manually delete their token from local storage and route back to the login page. </p>
          <p>The Summary page’s charts are built with Chart.js (pie chart) and the Reports page’s graphs are built with D3 (bar charts). As mentioned above, all 4 of these chart implementations use a prop for API endpoint and datapoint. Each of my data API’s are pulled from my MongoDB database. I have 2 collections, one for site data and one for patient data. </p>
          <p>My app is hosted on…</p>
        </div>

      </div>
    );
  }
  
  export default Dashboard;