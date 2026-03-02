import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import UserForm from "../components/UserForm";
import SearchForm from "../components/SearchForm";

export default function MyPlantsView() {

    const [plants, setPlants] = useState(() => {
        const savedPlants = localStorage.getItem("plants")
        return savedPlants ? JSON.parse(savedPlants) : []
    })

    const [filterText, setFilterText] = useState(() => {
        const savedFilter = localStorage.getItem("filterText")
        return savedFilter ? savedFilter : "";
    })

    const filteredPlants = plants.filter(item => {
        return item.commonName.toLowerCase().includes(filterText.toLowerCase())
    })

    useEffect(() => {
        localStorage.setItem("filterText", filterText)
    }, [filterText])

    const handleTyping = (e) => {
        setFilterText(e.target.value)
    }


    const [currentItem, setCurrentItem] = useState({
        commonName: "[unknown]",
        scientificName: "[unknown]",
        light: "[unknown]",
        watering: "[unknown]",
        soil: "[unknown]",
        level: "[unknown]"
    })

    const [edit, setEdit] = useState(false)

    return (
        <div>
            <div className="text mt-[32px] mb-[32px]">
                <h1 className="mb-[16px] text-2xl md:text-4xl text-center md:text-left">My Plants</h1>
                <div className="mt-[16px] flex justify-center md:justify-start gap-[8px]">
                    <SearchForm handleTyping={handleTyping} filterText={filterText} />
                </div>
            </div>
            <div className="mb-[32px]">
                <CardContainer local={true} plants={plants} filteredPlants={filteredPlants} setPlants={setPlants} setEdit={setEdit} setCurrentItem={setCurrentItem} />
            </div>
            <div className="flex justify-center md:justify-start">
                <UserForm currentItem={currentItem} setCurrentItem={setCurrentItem} edit={edit} setEdit={setEdit} plants={plants} setPlants={setPlants} />
            </div>
        </div>
    )
}