import { Aside } from "../components/Aside";
import './styles/Home.css';

export default function Home() {

  const parentRouteImage = process.env.PUBLIC_URL + "/assets/images/"
  const images = [
    {
      image : "robotsalvaje.jpg",
      title: "Robot salvaje",
      description : [
        "8:00", "9:00", "10:00", "12:00","13:00"
      ]
    },
    {
      image : "jokerfolieadeux-posterart.jpg",
      title: "Joker 2",
      description : [
        "8:00", "9:00", "10:00", "12:00","13:00"
      ]
    },
    {
      image : "alas-blancas-225x400.webp",
      title: "Puto el que lo lea",
      description : [
        "8:00", "9:00", "10:00", "12:00","13:00"
      ]
    },
    {
      image : "1.webp",
      title: "Transformers ONE",
      description : [
        "8:00", "9:00", "10:00", "12:00","13:00"
      ]
    },
    {
      image : "2.webp",
      title: "Smile 2",
      description : [
        "8:00", "9:00", "10:00", "12:00","13:00"
      ]
    },
    {
      image : "3.webp",
      title: "GRU 4",
      description : [
        "8:00", "9:00", "10:00", "12:00","13:00"
      ]
    },
  ]

  const time = 20;  

  
  const list = [];
  for(let i = 0 ; i < time ; ++i){
    for(let movie of images){
      const img = movie.image;
      let style = {
        'background-image': "url('"+parentRouteImage+img+"')",
      };
      list.push(
        <li key={img+i} title={movie.title} className="w-52 h-72 rounded-lg shadow-2xl bg-cover card
        after:content-[attr(title)]
        transition-transform ease-in-out relative overflow-hidden" style={style}>
          <span description={movie.description} className="card-description after:content-[attr(description)]"></span>
        </li>
      );
    }
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