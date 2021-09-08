module.exports = [
  {
    url: '/vue-element-admin/ListAsync',
    type: 'post',
    response: {
      Success: true,
      code: 20000,
      Message: '@sentence(5,10)',
      'data|1-10': [
        {
          Type: '@string("lower", 3,10)',
          Url: '-@string("lower", 3,10)'
        }
      ],
      ExtensionData: {},
      Pagination: {
        PageIndex: '@integer(0, 10)',
        PageSize: '@integer(0, 10)',
        TotalCount: '@integer(0, 10)',
        PageCount: '@integer(0, 10)'
      }
    }
  }
]