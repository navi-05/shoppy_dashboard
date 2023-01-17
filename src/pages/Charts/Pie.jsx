import React from 'react'
import { 
  AccumulationChartComponent, 
  AccumulationSeriesCollectionDirective, 
  AccumulationSeriesDirective, 
  Inject,
  PieSeries,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip
} from '@syncfusion/ej2-react-charts'

import { Header } from '../../components'
import { pieChartData } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const Pie = () => {

  const { currentMode } = useStateContext(); 

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header title="Project Cost Breakdown" category="Bar"/>
      <AccumulationChartComponent
      id="pie-chart"
      height="full"
      chartArea={{ border: { width: 0 }}} 
      background={currentMode === "Dark" ? '#33373e' : '#fff'}
      tooltip={{ enable: true }}
      legendSettings={{ visible: true, background: 'white'}}
      >
          <Inject services={[PieSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip]} />
          <AccumulationSeriesCollectionDirective>
              <AccumulationSeriesDirective
              name="Sale"
              dataSource={pieChartData}
              xName="x"
              yName="y"
              innerRadius="40%"
              startAngle={0}
              endAngle={360}
              radius="70%"
              explode
              explodeOffset="10%"
              explodeIndex={2}
              dataLabel={{
                visible: true,
                name: 'text',
                position: 'Inside',
                font: {
                  fontWeight: '600',
                  color: '#fff',
                },
              }}
            />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  )
}

export default Pie