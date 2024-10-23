import { Aside } from "../components/Aside";
import './styles/Home.css';
import {HOME_IMAGES} from "../mocks/HomeImages.js";
import { Timeline } from "flowbite-react";
export default function Home() {

  const timeLine = ["10:00", "11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","00:00","1:00"]
  const parentRouteImage = process.env.PUBLIC_URL + "/assets/images/"
  const images = HOME_IMAGES;
  
  const list = images.map((movie,lndex) => {
    const img = movie.image;
    const cinemasElement = movie.cinemas?.map((cinema,index) => {

      const times = cinema.times.map((time,jndex)=>{
        return <li className="p-1 w-12 rounded-lg text-center bg-gray-100 dark:bg-slate-700" key={jndex}>{time}</li>
      });

      return (
        <li className="backdrop-blur-md gap-4 rounded-lg flex flex-col flex-grow" key={index}>
          <span>{cinema.name}</span>
          <ul className="w-full flex flex-col xl:flex-row gap-1 justify-start items-center" >
            {times}
          </ul>
        </li>
      );
    });
    const timelineConent = timeLine.map((t)=>{
      return <Timeline.Item  className="text-xs">
        <Timeline.Point/>
        <Timeline.Content >
          {t}
        </Timeline.Content>
      </Timeline.Item>
    })
    const contentUL = cinemasElement ? (
      <ul className="overflow-auto flex flex-nowrap xl:flex-wrap xl:flex-col gap-4 bg-gray-100 dark:bg-slate-800 p-4 rounded-xl shadow-lg">
        <li className="hidden xl:flex pt-8">
          <Timeline horizontal>
            {timelineConent}
          </Timeline>
        </li>
        <li className="flex xl:hidden pt-8">
          <Timeline>
            {timelineConent}
          </Timeline>
        </li>
        {cinemasElement}
      </ul>
    ) : <></>;


    return (
      <li key={lndex} title={movie.title} className="relative flex flex-wrap w-fit xl:w-full justify-start card items-start gap-2">
        <div className="static md:sticky xl:static top-32 lg:top-20 wrapper w-52 h-72">
          <img className="cover-image" src={parentRouteImage+img} alt={img}></img>
        </div>
        {contentUL}
      </li>
    );
  });

  return <>
    <div className="flex flex-wrap items-start w-full justify-around">
      <Aside></Aside>
      <ul className=" sm:w-2/6 md:w-3/5 lg:w-3/4 xl:w-[79%] 2xl:w-4/5 flex flex-wrap justify-center gap-4">
        {list}
      </ul>
    </div>
  </>
  
}