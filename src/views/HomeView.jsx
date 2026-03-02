import CardContainer from "../components/CardContainer";
import Data from "../assets/data.json"

export default function HomeView() {
    return (
        <>
            <div>
                <div className="text-left mt-[32px] mb-[32px]">
                    <h1 className="mb-[16px] text-2xl md:text-4xl">Welcome in Flower Plant!</h1>
                    <p className="md:text-xl mb-[8px]">FlowerPlant is a community for plant enthusiasts, gardeners, and beginners looking to learn about
                        plant care.</p>
                    <b className="md:text-xl">Feel free to check out our free plant care guides.</b>
                </div>
                <div className="mb-[32px]">
                    <CardContainer plants={Data.map((item, index) => ({ ...item, id: index }))} />
                </div>
            </div>
        </>
    )
}