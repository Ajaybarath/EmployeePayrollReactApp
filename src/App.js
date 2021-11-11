import PayrollForm from './component/PayrollForm';
import './component/payrollForm.css';

function App() {
  return (
    <body>

    <header class="header-content header">
        <div class="logo-content">
            <img src="../assets/images/logo.png" alt="" />
            <div>
                <span class="emp-text">EMPLOYEE</span><br />
                <span class="emp-text emp-payroll">PAYROLL</span>
            </div>
        </div>
    </header>

    <PayrollForm />

</body>
  );
}

export default App;
