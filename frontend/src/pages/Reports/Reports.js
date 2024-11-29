import D3BarChart from '../../components/Chart/D3BarChart';

function Reports() {
    return (
      <div className='reportCharts'>
        <div>
          <h1>Number of Patients (Flu)</h1>
          <D3BarChart apiEndpoint="http://localhost:3000/api/patientData" dataPoint="flu" />
          <p>This graph depicts the number of Flu patients that participated in the study by country. The data behind this chart can be found in the source article (Table 1 - column 4)</p>
        </div>

        <div>
          <h1>Number of Patients (Covid)</h1>
          <D3BarChart apiEndpoint="http://localhost:3000/api/patientData" dataPoint="covid" />
          <p>This graph depicts the number of Covid patients that participated in the study by country. The data behind this chart can be found in the source article (Table 1 - column 3)</p>
        </div>

        <br></br>
        <p>Both of these graphs were built with a reuseable component named D3BarChart, which uses NodeJS D3. This component is added to the Reports Page twice. Each instance of the D3BarChart Component uses an api Endpoint and dataPoint parameter to customize the different graphs. </p>
      </div>
    );
  }
  
  export default Reports;