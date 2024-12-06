import RechartsBarChart from '../../components/Chart/RechartsBarChart';

function Reports() {
    return (
      <div className='reportCharts'>
        <div>
          <h1>Number of Patients (Flu)</h1>
          <RechartsBarChart apiEndpoint="http://3.137.221.0/api/patientData" dataPoint="flu" />
          <p>This graph depicts the number of Flu patients that participated in the study by country. The data behind this chart can be found in the source article (Table 1 - column 4)</p>
        </div>

        <div>
          <h1>Number of Patients (Covid)</h1>
          <RechartsBarChart apiEndpoint="http://3.137.221.0/api/patientData" dataPoint="covid" />
          <p>This graph depicts the number of Covid patients that participated in the study by country. The data behind this chart can be found in the source article (Table 1 - column 3)</p>
        </div>

        <br></br>
        <p>Both of these graphs were built with a reuseable component named RechartsBarChart, which uses NodeJS Rechart. This component is added to the Reports Page twice. Each instance of the RechartsBarChart Component uses an api Endpoint and dataPoint parameter to customize the different graphs. </p>
      </div>
    );
  }
  
  export default Reports;