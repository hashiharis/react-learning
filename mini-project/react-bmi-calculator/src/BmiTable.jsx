import './bmitable.css'
export const BmiTable = () => {
  return (
    <div className="bmi-chart">
      <h4>BMI Chart</h4>
      <table className="chart-table">
       <thead>
        <tr>
          <th>BMI Value</th>
          <th>Category</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{"<"}18.5</td>
          <td>Underweight</td>
        </tr>
        <tr>
          <td>18.5-24.9</td>
          <td>Normal Weight</td>
        </tr>
        <tr>
          <td>25-29.9</td>
          <td>Overweight</td>
        </tr>
        <tr>
          <td>{">="}30</td>
          <td>Obesity</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};
