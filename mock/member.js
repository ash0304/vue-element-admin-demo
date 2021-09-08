const time_str = '@date("yyyy-MM-dd")T@date("HH:mm:ss.SS")'
module.exports = [
  {
    url: '/vue-element-admin/ListMemberAsync',
    type: 'post',
    response: config => {
      const Pagination = config.body.Pagination
      return {
        Success: true,
        code: 20000,
        Message: '@sentence(5,10)',
        data: {
          MemberNum: '@integer(0, 10)',
          'DataList|11-20': [
            {
              MemberID: '@integer(0, 10)',
              Account: '@string("lower", 3,10)',
              ActiveStatus: '@integer(0, 10)',
              TotalWinlose: '@float(60, 100000, 1, 2)',
              TotalDeposit: '@float(60, 100000, 1, 2)',
              TotalWithdraw: '@float(60, 100000, 1, 2)',
              LastLoginDate: time_str,
              CreateDate: time_str
            }
          ]
        },
        ExtensionData: {},
        Pagination: Pagination
      }
    }
  },
]