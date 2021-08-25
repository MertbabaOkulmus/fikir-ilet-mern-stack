import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AdminPaneli() {

  const [dataset, setDataset] = useState([]);

  const fikirleriAl = () => {
    axios.get('http://localhost:5555/fikirler').then((res) => {
      setDataset(res.data);
    })
  }

  useEffect(() => {
     fikirleriAl()
  })

  return (
    <div className="text-center mt-3">
      <h1>Fikir Listesi</h1>
      <div className="mx-auto w-25 mt-5">
        {dataset.map((data) => // errow function larda eğer scop aralığına alırsak onu bizim return etmemiz gerek, fakar schop aralığına almadığımız takdirde otomatik olarak kendisi return işlemi gerçekleştirmekte   
        <div>
              <label>{data.idea}</label>
                    
              <label>{data.email}</label> 

              <label>{data.typeofidea}</label>

             <label>{data.idea}</label>
           
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminPaneli
