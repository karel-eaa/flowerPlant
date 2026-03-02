import { Link } from "react-router-dom";

export default function Card({ dataItem, id, local = false, plants, setPlants, setCurrentItem, setEdit }) {
    return (
        <div className="card bg-base-200 w-96 shadow-sm">
            <figure>
                {dataItem.imageName ? <img
                    src={dataItem.imageName}
                    alt={dataItem.commonName} /> : null}
            </figure>
            <div className="card-body">
                <h2 className="card-title">{dataItem.commonName}</h2>
                <p>{dataItem.scientificName}</p>
                <div className="card-actions justify-end">
                    <Link className="btn btn-primary" to={`/plant/${id}/${local}`}>Open</Link>
                    {local == true ? <>
                        <button className="btn btn-warning" onClick={() => {
                            setCurrentItem(dataItem)
                            setEdit(id)
                        }}>Edit</button>
                        <button className="btn btn-error" onClick={() => {
                            const updatedPlants = plants.filter((plant) => plant.id !== id)
                            setPlants(updatedPlants)
                            localStorage.setItem("plants", JSON.stringify(updatedPlants))
                        }}>Delete</button>
                    </> : null}
                </div>
            </div>
        </div>
    )
}