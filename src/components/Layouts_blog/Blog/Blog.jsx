
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./fragments/Card";
import SceletonC from "./fragments/SceletonC";
// import Category from "./fragments/Category";
// import News from "./fragments/News";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(`${import.meta.env.VITE_API_KEY}`);
 
   useEffect(()=>{
     const fetchBlog = async () => {
       try {
         const response = await axios.get(`${import.meta.env.VITE_API_URL}/blog`, {
           headers: {
             Authorization: `Bearer ${token}`
           }
         });
         setBlog(response.data.data);
         setLoading(false);
       } catch (error) {
         setError(error);
         setLoading(false);
       }
       };
       fetchBlog();
 
     }, [token]);

     const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'long' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    };
  return (
    <div className=" lg:px-10 py-10 my-10">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-1 w-1/2 lg:w-full md:w-full sm:w-full  lg:gap-10 md:gap-y-5  sm:gap-y-10">

      {loading ? (
        // batas
       <div>
         <SceletonC/>
       </div>
            // batas
           ) : error ? (
            <p>error : {error.message}</p>
           ) : blog.length > 0 ? (
             blog.map((blog, index) => (
              <Card
              key={index}
              CardTitle={blog.tittle}
              CardImage={blog.image}
              CardDate={formatDate(blog.created_at)}
              CardCreator={blog.created_by}
              CardDescription={blog.description}
        />
             ))
           ) : (
            <p>no data available</p>
           )
          }
        
      </div>
      <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-2">
      
      {/* <div className="border border-slate-700 rounded-md shadow-md max-w-lg px-10 mt-10 pb-8">
        <h1 className="text-3xl">Lates News</h1>
      <News></News>
      </div> */}
      </div>
    </div>
  );
};

export default Blog;
