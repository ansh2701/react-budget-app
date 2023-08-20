
import ExpenseItem from './ExpenseItem'

const Table = ({expenses,showBudget = true}) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {["Name","Amount","Date",showBudget ? "Budget" : "",""].map((label,index) => <th key={index}>{label}</th>)}
          </tr>
        </thead>
        <tbody>
          {expenses.map(expense => <ExpenseItem key={expense.id} expense={expense} showBudget={showBudget}/> )}
        </tbody>
      </table>
    </div>
  )
}

export default Table