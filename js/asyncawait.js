const url="https://jsonplaceholder.typicode.com/posts"

async function getData(){
    try{

        const res=await fetch(url);
        // console.log(res);
        const data=await res.json();
        // console.log(data)
        let tableData=""

       data.map((tableItem)=>{
            tableData+= ` <tr>
            <td>${tableItem.id}</td>
            <td>${tableItem.userId}</td>
            <td>${tableItem.title}</td>
            <td>${tableItem.body}</td>
          </tr>`
        })
      document.getElementById("t-body").innerHTML=tableData
    }
    catch(error){
        console.log("Error fetching the data",error)
        
    }
}

getData()