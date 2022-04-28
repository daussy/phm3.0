import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './index.scss';
const LeftChart=()=>{
  let  data1  = [5,68,59,3,12,54,3,6,21,11],  
       data2  = [12,5,3,4,67,81,25,34,16,20],
       data3 = [9,20,14,5,3,8,71,25,90,13],
       xArr = ['0','1','2','3','4','5','6','7','8','9'];
  const Option={
              backgroundColor:'rgba(2, 65, 145, 0)',
              /* title: {
                  text: '振动信号',
                  textStyle:{
                      color:"#ffffff",
                      fontWeight:"bolder",
                  }
              }, */
              tooltip: { //跟随鼠标显示数值
                  trigger: 'axis'
              },
              legend: {
                  data: ['传感器1', '传感器2','传感器3'],
                  textStyle:{
                      color:"#fff"
                  }, 
              },
                      xAxis: {
                          type: 'category',
                          nameTextStyle:{
                              color:"#ffffff"
                          },
                          axisLine:{
                              lineStyle:{
                                  color:"#ffffff"
                              }
                          },
                          data:xArr
                      },
                      yAxis: {
                          type: 'value',
                          splitLine:{show: false},//去除网格线
                          nameTextStyle:{
                              color:"#ffffff"
                          },
                          axisLine:{
                              lineStyle:{
                                  color:"#ffffff"
                              }
                          },
                      },
                      series: [{
                          name: '传感器1',
                          type: 'line',
                          showSymbol: false,
                          hoverAnimation: false,
                          data: data1,
                          lineStyle:{
                              width:1,
                              color:"#71a6e2"
                          }
                      },
                          {
                          name: '传感器2',
                          type: 'line',
                          showSymbol: false,
                          hoverAnimation: false,
                          data: data2,
                          lineStyle:{
                              width:1,
                              color:"#b5ceea",
  
                          },
                      },                    
                      {
                          name: '传感器3',
                          type: 'line',
                          showSymbol: false,
                          hoverAnimation: false,
                          data: data3,
                          lineStyle:{
                              width:1,
                              color:"#b36868",
                          }
                      },
                  ],
                }
   return(
              <div className='left_Chart'>
                  <ReactEcharts option={Option}/>
              </div>
            )
}
export default  LeftChart;
  