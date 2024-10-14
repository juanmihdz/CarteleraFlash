import { Aside } from "../components/Aside";

export default function Home() {

  const images = [
    "robotsalvaje.jpg",
    "jokerfolieadeux-posterart.jpg",
    "alas-blancas-225x400.webp"
  ]

  const time = 20;

  const list = [];
  for(let i = 0 ; i < time ; ++i){
    for(let img of images){
      list.push(
        <li key={img+i} className="w-52 h-72 rounded-lg">
          <img className="w-full h-full rounded-lg" src={process.env.PUBLIC_URL + "/images/"+ img} alt={img} />
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