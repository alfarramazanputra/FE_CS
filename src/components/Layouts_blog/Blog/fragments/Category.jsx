import React from 'react'

const Category = () => {
  return (
    <aside className="w-full rounded-lg border-2 border-slate-400 p-4 mt-16 max-w-lg ">
    <h2 className="font-os text-lg font-bold">Categories</h2>
    <ul className="flex items-start flex-wrap mt-4">
        <li className="flex mx-1">
            <a className="p-2 px-3 border-slate-400 mb-4 rounded font-medium hover:bg-transparent hover:border-black border bg-slate-100 dark:bg-purple text-slate-800"
                href="#">
                all
            </a>
        </li>
        
    </ul>
</aside>
  )
}

export default Category
