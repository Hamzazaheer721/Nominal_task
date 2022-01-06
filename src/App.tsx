import './App.css'
import Item from './components/item'
import useApp from './hooks/useApp'
import { measurementType } from './types/measurements'

const get_Data = async (): Promise<measurementType[]>=> {
  const MEASUREMENTS: measurementType[] = [
    {
      greenhouse: 'Tomato Hut',
      measurement: '36 C',
      isNominal: false,
      sensor: 'Temp'
    },
    {
      greenhouse: 'Tomato Hut',
      measurement: '75 %',
      isNominal: true,
      sensor: 'Humidity'
    },
    {
      greenhouse: 'Tomato Hut',
      measurement: '400 ppm',
      isNominal: true,
      sensor: 'CO2'
    },
    {
      greenhouse: 'Beetville',
      measurement: '25 C',
      isNominal: true,
      sensor: 'Temp'
    },
    {
      greenhouse: 'Beetville',
      measurement: '88 %',
      isNominal: true,
      sensor: 'Humidity'
    },
    {
      greenhouse: 'Beetville',
      measurement: '900 ppm',
      isNominal: false,
      sensor: 'CO2'
    }
  ]
  return Promise.resolve(MEASUREMENTS)
}

const App = () => {
  const { data: apiData } = useApp(get_Data)

  return (
    <div className='App'>
      <input type='text' placeholder='Search...' />
      <div>
        <input type='checkbox' />
        <span>only show nominal requirements</span>
      </div>
      <div className='measurements'>
        <h3 className='heading'>Sensor Measurement</h3>
        <div className='items'>
          {apiData.map((item: measurementType, index: number, _arr: measurementType[]) => {
            return (
              <Item
                data={item}
                greenhouse={
                  index === 0 ? item.greenhouse :
                  item.greenhouse !== _arr[index - 1].greenhouse ? item.greenhouse : ""
                }
                key={Math.random()}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
