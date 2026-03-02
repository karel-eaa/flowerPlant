import { Link, useParams } from "react-router-dom";
import Data from "../assets/data.json"
import { useEffect } from "react";
import { IoWaterOutline, IoSunnyOutline, IoHandRightOutline, IoArrowBackOutline } from "react-icons/io5";
import { PiPottedPlant } from "react-icons/pi";

export default function PlantView() {
    const { id, local } = useParams()
    let dataItem

    if (local === "true") {
        const localPlants = JSON.parse(localStorage.getItem("plants")) || []
        dataItem = localPlants.find(plant => plant.id === id)
    } else {
        dataItem = Data[id];
    }

    // fix scroll issue
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <>
            <div className="text-left">
                <div className="flex flex-row justify-center items-center flex-wrap">
                    <div className="basis-full md:basis-1/2 text-base md:text-xl flex flex-col gap-[16px]">
                        <div className="mt-[32px]">
                            <Link className="btn btn-soft" to={local === "true" ? '/myplants' : '/'}><IoArrowBackOutline className="inline size-5" /></Link>
                        </div>
                        <h1 className="text-2xl md:text-4xl">{dataItem.commonName}</h1>
                        <p className="md:text-xl mb-[32px]">{dataItem.scientificName}</p>
                        <p><IoSunnyOutline className="inline size-6 md:size-8" />&nbsp;&nbsp;{dataItem.light}</p>
                        <p><IoWaterOutline className="inline size-6 md:size-8" />&nbsp;&nbsp;{dataItem.watering}</p>
                        <p><PiPottedPlant className="inline size-6 md:size-8" />&nbsp;&nbsp;{dataItem.soil}</p>
                        <p><IoHandRightOutline className="inline size-6 md:size-8" />&nbsp;&nbsp;{dataItem.level}</p>
                    </div>
                    <div className="basis-full mt-[32px] md:basis-1/2">
                        {local === "true" ? null : <img className="" src={dataItem.imageName} alt={dataItem.commonName} />}
                    </div>
                </div>
            </div>
        </>
    )
}