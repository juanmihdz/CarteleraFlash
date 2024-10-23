import { Aside } from "../components/Aside";
import './styles/Home.css';
import {HOME_IMAGES} from "../mocks/HomeImages.js";
export default function Home() {


  const parentRouteImage = process.env.PUBLIC_URL + "/assets/images/"
  const images = HOME_IMAGES;
  
  const list = [];
  for(let movie of images){
    const img = movie.image;
    const listCinemas = movie.cinemas?.map((cinema,index)=> {

      const times = cinema.times.map((time,jndex)=>{
        return <li className="p-1 rounded-lg bg-gray-100 dark:bg-slate-700" key={jndex}>{time}</li>
      })

      return <li className="backdrop-blur-md p-1 rounded-lg flex-grow" key={index}>
        <span>{cinema.name}</span>
        <ul className="w-full flex flex-wrap gap-1" >
          {times}
        </ul>
      </li>
    })

   

    const card = <li key={list.length} 
    title={movie.title} 
    className="flex flex-wrap w-full justify-start card flex-grow items-start gap-2"
    
    >
      <div className="wrapper w-52 h-72">
        <img className="cover-image" src={parentRouteImage+img} alt={img}></img>
      </div>
      <ul className="overflow-auto">
        {listCinemas}
      </ul>
    </li>

    list.push(card);
  }

  return <>
    <div className="flex flex-wrap items-start w-full justify-around">
      <Aside></Aside>
      <ul className=" sm:w-2/6 md:w-3/5 lg:w-3/4 xl:w-[79%] 2xl:w-4/5 flex flex-wrap justify-center items-center gap-4">
        {list}
      </ul>
    </div>
  </>
  
}