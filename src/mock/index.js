import Mock from 'mockjs';

const { Random } = Mock;
export default {
  mockData() {
    Mock.mock('/warehouseList', {
      success: true,
      result: {
        'list|1-100': [{
          id: () => Random.guid(),
          'name|1': () => `${Random.ctitle(4, 8)}仓库`,
          'location|1': () => `${Random.county(true)}`,
          'totalCover|60-100': 1,
          'hasUsed|0-69': 1,
        }],
      },
    });
  },
};
