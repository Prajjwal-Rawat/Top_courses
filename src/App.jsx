import { useEffect } from "react"
import Cards from "./components/Cards"
import Filter from "./components/Filter"
import NavBar from "./components/Nav"
import {filterData,apiUrl} from './Data'
import { useState } from "react"
import { toast } from "react-toastify"
import Spinner from "./components/Spinner"


function App() {
  
const [courses, setCourses] = useState(null);
const [spinner, setSpinner] = useState(true);

const [category, setCategory] = useState('All');


async function coursesData() {
  setSpinner(true);
     try{
       const response = await fetch(apiUrl);
       const output = await response.json();
       setCourses(output.data);
       toast.success('Api call successful');
      }catch(error){
        toast.error('Api response failed');
      }
  setSpinner(false);
}

useEffect(() => {
  coursesData();
},[])

  return (
    <div className="flex flex-col min-h-screen bg-slate-600">
       
      <NavBar/>

      <Filter filterData={filterData} setCategory = {setCategory} category = {category} />

      {spinner ? <Spinner/> : <Cards courses = {courses} category = {category} />}
    </div>
   
  )
}

export default App
