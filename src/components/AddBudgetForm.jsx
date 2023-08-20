import { CurrencyDollarIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useRef } from 'react'
import { Form, useFetcher } from 'react-router-dom'

const AddBudgetForm = () => {
    const fetcher = useFetcher()
    const isSubmitting = fetcher.state === "submitting"
    const formRef = useRef()

    useEffect(()=>{
        formRef.current.reset()
    }, [isSubmitting])

  return (
    <div  className='form-wrapper'>
        <h2 className="h3">Create Budget</h2>
        <fetcher.Form method='post' className='grid-sm' ref={formRef}>
            <div className="grid-xs">
                <label htmlFor="">Budget Name</label>
                <input 
                    type='text'
                    name="newBudget"
                    id='newBudget'
                    placeholder='e.g., Groceries'
                    required
                />
                </div>
                <div className="grid-xs">
                <label htmlFor="">Amount</label>
                <input 
                    type='number'
                    step="0.01"
                    name="newBudgetAmount"
                    id='newBudgetAmount'
                    placeholder='e.g., $350'
                    inputMode='decimal'
                    required
                />
                </div>
                <input type="hidden" name='_action' value="createBudget"/>
                <button className="btn btn--dark" disabled={isSubmitting}>
                    <span>Create Budget</span>
                    <CurrencyDollarIcon width={20}/>
                </button>
        </fetcher.Form>
    </div>
  )
}

export default AddBudgetForm