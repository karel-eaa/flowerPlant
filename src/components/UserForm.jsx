import { useEffect, useRef } from "react"

export default function UserForm({ currentItem, setCurrentItem, edit, setEdit, plants, setPlants }) {

    const formRef = useRef(null)

    useEffect(() => {
        if (formRef.current) {
            formRef.current.elements.commonName.value = currentItem.commonName !== "[unknown]" ? currentItem.commonName : "";
            formRef.current.elements.scientificName.value = currentItem.scientificName !== "[unknown]" ? currentItem.scientificName : "";
            formRef.current.elements.light.value = currentItem.light !== "[unknown]" ? currentItem.light : "";
            formRef.current.elements.watering.value = currentItem.watering !== "[unknown]" ? currentItem.watering : "";
            formRef.current.elements.soil.value = currentItem.soil !== "[unknown]" ? currentItem.soil : "";
            formRef.current.elements.level.value = currentItem.level !== "[unknown]" ? currentItem.level : "Pick difficulty";
        }
    }, [edit])

    return (
        <form ref={formRef} className="card bg-base-200 w-96 shadow-sm p-4">
            <h2 className="md:text-xl mb-[8px]">{edit === false ? "Add New Plant" : "Edit Your Plant"}</h2>
            <legend className="fieldset-legend">Common name</legend>
            <input type="text" name="commonName" maxLength={32} className="input w-full" placeholder="Type here" onChange={(e) => {
                setCurrentItem({ ...currentItem, commonName: e.target.value })
            }} />
            <legend className="fieldset-legend">Scientific name</legend>
            <input type="text" name="scientificName" maxLength={32} className="input w-full" placeholder="Type here" onChange={(e) => {
                setCurrentItem({ ...currentItem, scientificName: e.target.value })
            }} />
            <legend className="fieldset-legend">Light requirements</legend>
            <input type="text" name="light" maxLength={32} className="input w-full" placeholder="Type here" onChange={(e) => {
                setCurrentItem({ ...currentItem, light: e.target.value })
            }} />
            <legend className="fieldset-legend">Watering requirements</legend>
            <input type="text" name="watering" maxLength={32} className="input w-full" placeholder="Type here" onChange={(e) => {
                setCurrentItem({ ...currentItem, watering: e.target.value })
            }} />
            <legend className="fieldset-legend">Soil requirements</legend>
            <input type="text" name="soil" maxLength={32} className="input w-full" placeholder="Type here" onChange={(e) => {
                setCurrentItem({ ...currentItem, soil: e.target.value })
            }} />
            <legend className="fieldset-legend">Level</legend>
            <select name="level" defaultValue="Pick difficulty" className="select w-full" onChange={(e) => {
                setCurrentItem({ ...currentItem, level: e.target.value })
            }}>
                <option disabled>Pick difficulty</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
            </select>
            <button className={`mt-[16px] btn ${edit === false ? 'btn-success' : 'btn-warning'}`} onClick={(e) => {
                e.preventDefault()

                if (edit === false) {
                    const newPlant = { ...currentItem, id: crypto.randomUUID() }

                    const updatedPlants = [...plants, newPlant]
                    setPlants(updatedPlants)
                    localStorage.setItem("plants", JSON.stringify(updatedPlants))
                } else {
                    const updatedPlants = plants.map((item) => {
                        if (item.id === edit) {
                            return { ...currentItem, id: edit };
                        }
                        return item;
                    });

                    setPlants(updatedPlants);
                    localStorage.setItem("plants", JSON.stringify(updatedPlants));

                    setEdit(false);

                }

                setCurrentItem({
                    commonName: "[unknown]", scientificName: "[unknown]",
                    light: "[unknown]", watering: "[unknown]", soil: "[unknown]", level: "[unknown]"
                });

                formRef.current.reset()
            }}>{edit === false ? "Add" : "Edit"}</button>

        </form>
    )
}