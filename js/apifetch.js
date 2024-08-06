const url="https://jsonplaceholder.typicode.com/posts"

function getData(){
    return new Promise((resolve,reject)=>{
        try{
           
            fetch(url).then((res)=>{
                //  console.log(res)
               res.json().then((data)=>{
                 //console.log(data)
                   resolve(data)
               })
            })
        }
        catch(error){
                  reject(error)
        }
    })
}

getData()
    .then((res)=>{
        let tableData=""
       res.map((tdata)=>{
               tableData+= ` <tr>
            <td>${tdata.id}</td>
            <td>${tdata.userId}</td>
            <td>${tdata.title}</td>
            <td>${tdata.body}</td>
          </tr>`
               
        })
    document.getElementById("t-body").innerHTML=tableData;    
  
})
  .catch((error)=>{
    console.log("Error in fetching data",error)
  })

 