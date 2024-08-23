
import './App.css'
import { Banner } from './components/banner/Banner'
// import { Dummy } from './components/Dummy'
// import { Featured } from './components/featured/Featured'
import { FeaturedContainer } from './components/featured/FeaturedContainer'
import { Navbar } from './components/navbar/Navbar'
// import dummydata from './dummydata'
// import valuesData from './valuesData'
// import data from './featureData'
function App() {
  // const valueData= valuesData.map((item)=>{
  //   return(
  //     <Featured key={item.id}
  //     title={item.title}
  //     titleDescription={item.description}
  //    />
  //   )
  // })

  // const dummyComponent=dummydata.map((item)=>{
  //   return(
  //          <Dummy  key={item.id}
  //             title={item.title}
  //             subtitle={item.subtitle}
  //             description={item.description}
  //             image={item.image}/>
     
  //   )
  // })
  return (
    <>
    <Navbar/>
    <Banner/>
    {/* {valueData} */}
    <FeaturedContainer/>
  {/* {dummyComponent} */}
    </>
  )
}

export default App
