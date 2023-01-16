import { IVehicle } from "../../contexts/announcements"
import { AuctionCardButton, AuctionCardDiv, AuctionTimer, BackgroundDivImage } from "./styles"
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'

interface AuctionCardProps {
    vehicle: IVehicle,
    onHome: boolean,
    onOwnProfile: boolean,
}

const AuctionCard = ({ vehicle, onHome, onOwnProfile }: AuctionCardProps) => {
    const activeImage = vehicle.images?.filter((image) => image.type === "COVER");

    return (
        <>
        <AuctionCardDiv>
                <BackgroundDivImage backgroundImage={activeImage[0].imageUrl}>
                    <div className="overImage__div">
                        <div className="vehicleInfo__div">
                            <div className="timer__holder">
                                <AuctionTimer>
                                    <AiOutlineClockCircle className="timer__clock" size={25}></AiOutlineClockCircle>
                                    <span className="timer__tempo">72:00:00</span>
                                </AuctionTimer>
                            </div>
                            <div className="info__holder">
                            <h2>{vehicle.title}</h2>
                            <p className="vehicle__description">{vehicle.description}</p>
                            <span className="user__data">
                            <div className="rowDiv">
                                <figure className="profile">
                                    {vehicle.user.name.split(" ")[0][0].toUpperCase()}
                                    {vehicle.user.name?.split(" ")[1] &&
                                    vehicle.user.name?.split(" ")[1][0].toUpperCase()}
                                </figure>
                                <p>{vehicle.user.name}</p>
                            </div>
                            </span>
                            <div>
                            <div className="vehicle__important_info">
                                <div className="km__year__car">
                                    <span>{vehicle.km} KM</span>
                                    <span>{vehicle.year}</span>
                                </div>
                                <p className="vehicle__value">
                                    {Number(vehicle.price).toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                    })}
                                </p>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </BackgroundDivImage>
            <AuctionCardButton>
                <span>Acessar página do leilão</span>
                <BsArrowRight size={25}></BsArrowRight>
            </AuctionCardButton>
        </AuctionCardDiv>
        </>
    )
}

export default AuctionCard
