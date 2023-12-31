import { PlusCircleIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

const AddExpenseForm = ({ budgets }) => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const formRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
    }
  }, [isSubmitting]);

  return (
    <div className="form-wrapper">
       <h2 className="h3">Add New{" "}<span className="accent">
        {budgets.length === 1 && `${budgets[0].name}`}
      </span>{" "}
        Expense
      </h2>
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <div className="expense-inputs">
          <div className="grid-xs">
            <label htmlFor="">Expense Name</label>
            <input
              type="text"
              name="newExpense"
              id="newExpense"
              placeholder="e.g., Coffee"
              required
            />
          </div>
          <div className="grid-xs">
            <label htmlFor="">Amount</label>
            <input
              type="number"
              step="0.01"
              name="newExpenseAmount"
              id="newExpenseAmount"
              placeholder="e.g., $3.50"
              inputMode="decimal"
              required
            />
          </div>
        </div>

        <div className="grid-xs" hidden={budgets.length === 1}>
          <label htmlFor="">Budget Category</label>
          <select name="newExpenseBudget" id="newExpenseBudget" required>
            {budgets
              .sort((a, b) => a.createdAt - b.createdAt)
              .map((budget) => {
                return (
                  <option key={budget.id} value={budget.id}>
                    {budget.name}
                  </option>
                );
              })}
          </select>
        </div>

        <input type="hidden" name="_action" value="createExpense" />
        <button className="btn btn--dark" disabled={isSubmitting}>
          <span>Add Expense</span>
          <PlusCircleIcon width={20} />
        </button>
      </fetcher.Form>
    </div>
  );
};

export default AddExpenseForm;
