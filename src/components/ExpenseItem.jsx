import { Link, useFetcher } from "react-router-dom";
import { formatCurrency, getAllMatchingItems } from "../Helper";
import { TrashIcon } from "@heroicons/react/24/solid";

const ExpenseItem = ({ expense, showBudget }) => {
  const fetcher = useFetcher();

  const budget = getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: expense.budgetId,
  })[0];

  return (
    <tr>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{new Date(expense.createdAt).toLocaleDateString()}</td>
      {showBudget && (
        <td>
          <Link
            to={`/budget/${expense.budgetId}`}
            style={{
              "--accent": budget.color,
            }}
          >
            {budget.name}
          </Link>
        </td>
      )}
      <td>
        <fetcher.Form method="post">
          <input type="hidden" name="_action" value="deleteExpense" />
          <input type="hidden" name="expenseId" value={expense.id} />
          <button className="btn btn--warning" type="submit">
            <TrashIcon width={20} />
          </button>
        </fetcher.Form>
      </td>
    </tr>
  );
};

export default ExpenseItem;
