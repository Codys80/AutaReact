import { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import czerwony from './assets/czerwony.png'
import granatowy from './assets/granatowy.png'
import zielony from './assets/zielony.png'
import zolty from './assets/zolty.png'
import szary from './assets/szary.png'
import './App.css'

function App() {
  const myRef = useRef(0)
  const [samochod, setSamochod] = useState({
    kolor: 'szary',
    src: szary,
    felgi: 'stalowe',
    dodatkowe: [false, false, false],
    cenaBazowa: 75000,
    cenaLakier: 0,
    cenaFelgi: 0,
    cenaClimatronic: 0,
    cenaCzujnikParkowania: 0,
    cenaNawigacja: 0,
  })

  function handleChange(myRef){
    switch (myRef.target.name) {
      case 'kolor':
        setSamochod({...samochod,
        kolor: myRef.target.value === 'szary' ? 'szary' : myRef.target.value,
        src: myRef.target.value === 'szary' ? szary : `/src/assets/${myRef.target.value}.png`,
        cenaLakier: myRef.target.value === 'szary' ? 0 : 9000,})
      break;
    case 'felgi':
       setSamochod({...samochod,
            cenaFelgi: myRef.target.value === 'aluminiowe' ? 3000 : 0,})
          break;
    case 'CzujnikParkowania':
      setSamochod({...samochod,
        cenaCzujnikParkowania: myRef.target.checked ? 2000 : 0,
      dodatkowe: [myRef.target.checked, samochod.dodatkowe[1], samochod.dodatkowe[2]]})
      break;
    case 'Climatronic':
      setSamochod({...samochod,
        cenaClimatronic: myRef.target.checked ? 4000 : 0,
      dodatkowe: [samochod.dodatkowe[0], myRef.target.checked, samochod.dodatkowe[2]]})
      break;
    case 'Nawigacja':
      setSamochod({...samochod,
        cenaNawigacja: myRef.target.checked ? 3500 : 0,
      dodatkowe: [samochod.dodatkowe[0], samochod.dodatkowe[1], myRef.target.checked]})
      break;

    }
        
  }

  return (
      <div className="main container-fluid text-center ">
        <div className='col-lg'>
          <img src = {samochod.src} alt="car" className='img-fluid' height={150}/> 
        </div>
        <div className='config config col-lg'> 
          <h1><b>Konfigurator wyposażenia</b></h1>
        </div>
        <div className='col-lg'>
          <h2 className='text-display-1'>Wybierz kolor lakieru</h2>
        </div>
        <div className='col-lg'>
          <select className=' select-color form-select-sm' id='kolor' name='kolor' ref={myRef} onChange={handleChange} defaultValue={'szary'}>
            <option value = "czerwony">czerwony</option>
            <option value = "granatowy">granatowy</option>
            <option value = "zielony">zielony</option>
            <option value = "zolty">żółty</option>
            <option value = "szary">szary</option>
          </select>
        </div>
        <hr/>
        <div className='col-lg'>
          <h2 className='text-display-1'>Felgi</h2>
        </div>
        <div className='felgs-display col-lg '>
            <div className='felgs-display-left'>
              <input className='form-check-input' type="radio" id="stalowe"name="felgi" value="stalowe"/>
              <label className="form-check-label" htmlFor="stalowe">Stalowe</label>
            </div>
            <div className='felgs-display-right'>
              <input className='form-check-input' type="radio" id="aluminiowe" name="felgi" value="aluminiowe"/>
              <label className="form-check-label" htmlFor="aluminiowe">Aluminiowe</label>
            </div>
        
        </div>
        <div className='col-lg'>
          <h2 className='text-display-1'>Wybierz dodatkowe wyposażenie</h2>
        </div>
        <div className = 'row'>
          <div className='checkbox-display col'>
            <input type="checkbox" id="CzujnikParkowania" name="CzujnikParkowania" value="CzujnikParkowania"/> <label htmlFor="CzujnikParkowania">Czujnik Parkowania</label><br/>
            <input type="checkbox" id="Climatronic" name="Climatronic" value="Climatronic"/> <label htmlFor="Climatronic">Climatronic</label><br/>
            <input type="checkbox" id="Nawigacja" name="Nawigacja" value="Nawigacja"/> <label htmlFor="Nawigacja">Nawigacja</label><br/>
          </div>
          <div className='col'></div>
        </div>
        <hr/>
        <div className='col-lg'>
          <h2 className='text-display-1'>Wycena</h2>
        </div>
        <div className='overall-display col-lg'>
          <p>Cena: 100000 PLN</p>
          <p>{samochod.cenaBazowa}</p>
          <p>{samochod.kolor}</p>
          <p>{samochod.felgi}</p>
          <p>{samochod.dodatkowe[0] ? 'Czujnik Parkowania' : ''}</p>
          <p>{samochod.dodatkowe[1] ? 'Climatronic' : ''}</p>
          <p>{samochod.dodatkowe[2] ? 'Nawigacja' : ''}</p>
          <p>{samochod.cenaCzujnikParkowania + samochod.cenaClimatronic + samochod.cenaNawigacja}</p>
          <p>{samochod.cenaBazowa + samochod.cenaCzujnikParkowania + samochod.cenaClimatronic + samochod.cenaNawigacja}</p>
          
        </div>
      </div>
  )
}

export default App
