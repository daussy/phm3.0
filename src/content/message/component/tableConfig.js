const deviceColumns = [
  {
    title: '设备名称',
    data: '船舶轴系',
    key: 'deviceName',
  //   render: text => <a>{text}</a>,
  },
  {
    title: '设备型号',
    data: 'X-型轴系',
    key: 'setName',
  },
  {
    title: '设备编号',
    data: '999-1',
    key: 'deviceNum',
  },
  {
      title: '设备位置',
      data: '船池',
      key: 'deviceLocal',
    }
];

const mtColumns = [
  {
    title: '传感器名称',
    data: '振动传感器',
    key: 'mtName',
  //   render: text => <a>{text}</a>,
  },
  {
    title: '传感器型号',
    data: 'BC-91398',
    key: 'mtVerson',
  },
  {
    title: '传感器编号',
    data: '108-001',
    key: 'mtNumber',
  },
  {
      title: '采集频率',
      data: '80/min',
      key: 'mtFrequency',
    },
  {
      title: '安装位置',
      data: '轴系⾸端',
      key: 'installationSite',
    },
  {
      title: '采集数据类型',
      data: '振动数据',
      key: 'datatype',
    }
];

const ssColumns = [
  {
    title: '累计监测时长',
    data: '100天10⼩时',
    key: 'totalTime',
  //   render: text => <a>{text}</a>,
  },
  {
    title: '采集数据次数',
    data: '123456次',
    key: 'collectionNum',
  },
  {
    title: '采集数据量',
    data: '9874万条',
    key: 'dataAmount',
  },
  {
      title: '累计预警次数',
      data: '68次',
      key: 'warningTimes',
    }
];
export {deviceColumns , mtColumns,ssColumns};