
export default function Home() {

  const images = [
    "robotsalvaje.jpg",
    "jokerfolieadeux-posterart.jpg"
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

    <ul className="flex flex-wrap justify-center items-center gap-4">
      {list}
    </ul>

    
  </>
  
}