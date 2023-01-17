import React from 'react'
import { 
  ChartComponent, 
  SeriesCollectionDirective, 
  SeriesDirective, 
  Inject,
  Legend,
  ColumnSeries,
  Tooltip,
  DataLabel,
  Category
} from '@syncfusion/ej2-react-charts'

import { Header } from '../../components'
import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const Bar = () => {

  const { currentMode } = useStateContext(); 

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header title="Olympic Medal Counts - RIO" category="Bar"/>
      <ChartComponent
      id="bar-chart"
      height="420px"
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{ border: { width: 0 }}} 
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? '#33373e' : '#fff'}
      legendSettings={{ background: 'white' }}
      >
          <Inject services={[Legend, ColumnSeries, Tooltip, DataLabel, Category]} />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Bar