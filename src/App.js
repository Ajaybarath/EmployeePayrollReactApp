import PayrollForm from './component/PayrollForm';
import './component/payrollForm.css';

function App() {
  return (
    <div>

      <header className="header-content header">
        <div className="logo-content">
          <img src="../assets/images/logo.png" alt="" />
          <div>
            <span className="emp-text">EMPLOYEE</span><br />
            <span className="emp-text emp-payroll">PAYROLL</span>
          </div>
        </div>
      </header>

      <PayrollForm />

    </div>
  );
}

export default App;
