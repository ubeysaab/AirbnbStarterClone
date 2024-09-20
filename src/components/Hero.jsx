import img from "../images/photo-grid.png"
export default function Hero() {
    return (
        <section className="hero">
            <img src={img} className="hero__photo" />
            <h1 className="hero__header">Online Experiences</h1>
            <p className="hero__text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}