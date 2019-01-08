import Mock from 'mockjs'

const List = []
const count = 20

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    order_no: '@guid()',
    timestamp: +Mock.Random.date('T'),
    username: '@name()',
    price: '@float(10000, 1500000, 0, 0)',
    'status|1': ['success', 'pending']
  }))
}

export default {
  getList: () => {
    return {
      total: List.length,
      items: List
    }
  }
}
