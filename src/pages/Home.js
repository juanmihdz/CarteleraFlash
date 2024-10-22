import { Aside } from "../components/Aside";
import './styles/Home.css';
import {HOME_IMAGES} from "../mocks/HomeImages.js";

export default function Home() {


  const parentRouteImage = process.env.PUBLIC_URL + "/assets/images/"
  const images = HOME_IMAGES;
  
  const list = [];
  for(let movie of images){
    const img = movie.image;
    const listDescription = movie.description.map((desc,index)=> {return <li key={index}>{desc}</li>})

    const card = <li key={list.length} 
    title={movie.title} 
    className="card w-52 h-72 rounded-lg shadow-2xl
    after:content-[attr(title)]
    transition-transform ease-in-out relative" 
    >
      <div className="wrapper  w-52 h-72">
        <img className="cover-image" src={parentRouteImage+img} alt={img}></img>
      </div>
      <ul className="card-description">
        {listDescription}
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