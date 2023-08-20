export const waait = () => new Promise(res => setTimeout(res, Math.random() * 2000))


// colors
const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetLength * 34} 65% 50%`
}


export const fetchData = (key) => {
        const data = JSON.parse(localStorage.getItem(key))
        return data
}

export const setItem = (key, val) => {
       return localStorage.setItem(key,JSON.stringify(val))
}

export const createBudget= ({name,amount}) => {
        const newItem = {
                id : crypto.randomUUID(),
                name : name,
                createdAt : Date.now(),
                amount : +amount,
                color : generateRandomColor()
        }
        const existingBudget = fetchData("budgets") ?? []
        return localStorage.setItem("budgets" , JSON.stringify([...existingBudget, newItem]))
}

export const createExpense= ({name,amount,budgetId}) => {
        const newItem = {
                id : crypto.randomUUID(),
                name : name,
                createdAt : Date.now(),
                amount : +amount,
                budgetId: budgetId
        }
        const existingExpense = fetchData("expenses") ?? []
        return localStorage.setItem("expenses" , JSON.stringify([newItem , ...existingExpense]))
}

export const deleteItem = ({key,id}) => {
        const existingItem = fetchData(key) ?? []

        if(id){
                const filteredItem = existingItem.filter(item => item.id !== id)
                return localStorage.setItem(key , JSON.stringify(filteredItem))
        }
        

        return localStorage.removeItem(key)
}

export const getAllMatchingItems = ({category,key,value}) => {
        const data = fetchData(category) ?? []
        return data.filter(item => item[key] === value)
}

export const calculateSpentByBudget = (budgetId) =>{
        const expenses = fetchData("expenses") ?? []
        const budgetExpense = expenses.reduce((acc,expense)=>{
                if(expense.budgetId !== budgetId) return acc
                return acc += expense.amount
        },0)
        return budgetExpense
}



export const formatCurrency = (amount) => {
        return amount.toLocaleString(undefined,{
                style : "currency",
                currency : "USD"
        })
}

export const formatPercentage = (amount) => {
        return amount.toLocaleString(undefined,{
                style : "percent",
                minFraction : 0
        })
}