import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadAnim from '../../../LoadAnim';

const Letter = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://casatech.id/compro-api/company', {
          headers: {
            Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIDEiLCJpYXQiOjE3MTEzNDEzMTV9.3w_4Ap87iNPpg9OKnCugwCfA7BMAuvTpHfa9HDQasQA'
          }
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  
  return (
    <div className=''>
     {data ? (
        <div>
          {Array.isArray(data.data) ? (
            data.data.map(item => (
              <div key={item.id}>
                 <div dangerouslySetInnerHTML={{ __html: item.description_about }} className='mb-10'></div>
              
               
              </div>
            ))
          ) : (
            <p>Data is not an array</p>
          )}
        </div>
      ) : (
        <div class="space-y-4">
                <div class="h-4 bg-gray-300 rounded"></div>
                <div class="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
      )}

      
   
    </div>
  );
}

export default Letter;
