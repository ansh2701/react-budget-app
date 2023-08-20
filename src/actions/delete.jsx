import { redirect } from "react-router-dom";
import { deleteItem, getAllMatchingItems } from "../Helper";
import { toast } from "react-toastify";

export async function deleteAction({ params }) {
  try {
    deleteItem({
      key: "budgets",
      id: params.id,
    });

    const associatedExpenses = getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: params.id,
    });

    associatedExpenses.forEach((expense) => {
      deleteItem({
        key: "expenses",
        id: expense.id,
      });
    });
  } catch (e) {
    throw new Error("There was a problem deleting the budget.");
  }
  toast.success("Budget Deleted!");

  return redirect("/");
}
