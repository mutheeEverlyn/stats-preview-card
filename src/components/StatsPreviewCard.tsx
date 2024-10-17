import imageHeader from '../assets/image-header-desktop.jpg'
import './StatsPreviewCard.css'
const StatsPreviewCard = () => {
  return (
    <div className="container">
      <div className='content'>
        <h1>Get <span className='text'>insights</span> that help your business grow.</h1>
        <p>Discover the benefits of data analytics and make better decisions regarding revenue,customer,experience and overall efficiency.</p>
        <div className='stats'>
            <div>
                <h2>10k+</h2>
                <p>CONTACTS</p>
            </div>
            <div>
            <h2>314</h2>
            <p>TEMPLATES</p>
            </div>
            <div>
            <h2>12M+</h2>
            <p>QUERIES</p>
            </div>
        </div>
      </div>
      <div className='img'>
        <img src={imageHeader} alt="image header desktop" />
        <div className="overlay"></div>
      </div>
    </div>
  )
}

export default StatsPreviewCard
