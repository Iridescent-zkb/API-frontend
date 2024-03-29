import { listTopInvokeInterfaceInfoUsingGET } from '@/services/API-backend/analysisController';
import { PageContainer } from '@ant-design/pro-components';
import '@umijs/max';
import ReactECharts from 'echarts-for-react';
import React, { useEffect, useState } from 'react';

/**
 * 接口分析
 * @constructor
 */
const InterfaceAnalysis: React.FC = () => {
  // 存储数据的状态
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      listTopInvokeInterfaceInfoUsingGET().then((res) => {
        if (res.data) {
          setData(res.data);
        }
      });
    } catch (e: any) {}
    // todo 从远程获取数据
  }, []);

  // 映射：{ value: 1048, name: 'Search Engine' },
  const chartData = data.map((item) => {
    return {
      value: item.totalNum,
      name: item.name,
    };
  });
  // ECharts图表的配置选项
  const option = {
    title: {
      text: '调用次数最多的接口TOP3',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: chartData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  return (
    <PageContainer>
      <ReactECharts option={option} />
    </PageContainer>
  );
};
export default InterfaceAnalysis;
