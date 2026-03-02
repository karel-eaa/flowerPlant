import Card from "./Card";

export default function CardContainer({ local, plants, filteredPlants, setPlants, setEdit, setCurrentItem }) {

    const itemsToRender = filteredPlants || plants

    return (
        <div className="flex flex-wrap md:justify-start justify-center gap-[16px]">
            {itemsToRender.length > 0 ? itemsToRender.map((item) => {
                return <Card key={item.id} id={item.id} dataItem={item} local={local} plants={plants} setPlants={setPlants} setEdit={setEdit} setCurrentItem={setCurrentItem} />
            }) : <p>Nothing to show</p>}
        </div>
    )
}