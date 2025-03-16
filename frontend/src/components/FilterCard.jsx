import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

const filterData =[
  {
    filterType:"Location",
    array :["Delhi NCR", "Bengaluru","Hyderabad","Pune", "Mumbai"]
  },
  {
    filterType:"Industry",
    array :["Frontend-Developer", "Backend-Developer","Full-Stack Developer"]
  },
  {
    filterType:"Salary",
    array :["10-20k", "30-50k","70-90k","1-2L", "3-4L"]
  },

]

const FilterCard = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3'/>
      <RadioGroup>
        {
          filterData.map((data, index) =>(
            <div>
                <h1 className='font-bold text-lg'>{data.filterType}</h1>
                {
                  data.array.map((item, index)=>{
                    return(
                      <div className='flex items-center space-x-2 my-2'>
                        <RadioGroupItem value={item}/>
                        <Label>{item}</Label>
                      </div>
                    )
                  })
                }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard
