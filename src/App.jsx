import { useState } from 'react'
import './styles.css'
export default function App() {
  const [filter, setFilter] = useState({
    brightness: 1,
    contrast: 1,
    saturation: 1,
  })
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({
      ...prev,
      [name]: parseFloat(value)
    }));

    
    document.documentElement.style.setProperty(`--${name}`, value);
  };

return (
  <div className='main-container'>
    <h1>
      <span>📷</span> Photo Editörü <span>📷</span>
    </h1>

    <div className='image-container'>
      <img src='./images/kunal-goswami-CuUn__aMGD4-unsplash.jpg' alt="Düzenlenecek Fotoğraf" />
    </div>

    <form>
      <label>
        <input
          type='range'
          name='brightness'
          min={0}
          max={2}
          step={0.1}
          value={filter.brightness} 
          onChange={handleFilterChange} 
        />
        <span>Brightness</span>
      </label>

      <label>
        <input
          type='range'
          name='contrast'
          min={0}
          max={2}
          step={0.1}
          value={filter.contrast} 
          onChange={handleFilterChange} 
        />
        <span>Contrast</span>
      </label>

      <label>
        <input
          type='range'
          name='saturation'
          min={0}
          max={2}
          step={0.1}
          value={filter.saturation} 
          onChange={handleFilterChange} 
        />
        <span>Saturation</span>
      </label>
    </form>
  </div>
);
}
