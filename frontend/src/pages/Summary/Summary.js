import ChartJSPieChart from '../../components/Chart/ChartJSPieChart';
import './Summary.css';

function Summary() {
    return (
      <div>
        <div className='summaryCharts'>
          <div>
            <h1>Participating Testing Sites (Flu)</h1>
            <ChartJSPieChart apiEndpoint="http://3.137.221.0/api/siteData" dataPoint="flu" />
            <p>This chart depicts the number of Flu testing sites by country that participated in the study. The data behind this chart can be found in the source article (Table 1 - column 2)</p>
            
          </div>
          <div>
            <h1>Participating Testing Sites (Covid)</h1>
            <ChartJSPieChart apiEndpoint="http://3.137.221.0/api/siteData" dataPoint="covid" />
            <p>This chart depicts the number of Covid testing sites by country that participated in the study. The data behind this chart can be found in the source article (Table 1 - column 1)</p>
            <p>Note: China did not participate in Covid testing as part of this study, therefore there is no data to report.</p>
          </div>
          
        </div>
        <br></br>
        <p>Both of these charts were built with a reuseable component named ChartJSPieChart, which uses chartjs. This component is added to the Summary Page twice. Each instance of the ChartJSPieChart Component uses an api Endpoint and dataPoint parameter to customize the different charts. </p>
      </div>
    );
  }
  
  export default Summary;