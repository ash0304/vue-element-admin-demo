module.exports = [
  {
    url: '/vue-element-admin/GetHomeReportAsync',
    type: 'post',
    response: {
      Success: true,
      code: 20000,
      Message: '@sentence(5,10)',
      data: {
        RegeditMemberByDay: [
          { DataDate: '2020-11-01', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-02', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-03', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-04', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-05', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-06', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-07', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-08', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-09', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-10', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-11', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-12', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-13', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-14', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-15', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-16', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-17', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-18', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-19', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-20', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-21', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-22', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-23', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-24', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-25', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-26', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-27', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-28', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-29', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-30', MemberCount: '@integer(0, 100)' }
        ],
        LoginMemberByDay: [
          { DataDate: '2020-11-01', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-02', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-03', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-04', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-05', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-06', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-07', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-08', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-09', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-10', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-11', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-12', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-13', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-14', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-15', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-16', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-17', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-18', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-19', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-20', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-21', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-22', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-23', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-24', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-25', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-26', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-27', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-28', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-29', MemberCount: '@integer(0, 100)' },
          { DataDate: '2020-11-30', MemberCount: '@integer(0, 100)' }
        ],
        'SystemInformationMarqueeList|12-15': [
          {
            Title: '@string("lower", 3,10)',
            Content:
              '@string("lower", 50,80)'
          }
        ],
        WebBannerList: [
          {
            ADsPictureID: 6,
            PicURL:
              'https://s3.envato.com/files/248419285/Preview%20Image.jpg'
          },
          {
            ADsPictureID: 7,
            PicURL:
              'https://wallpaperaccess.com/full/2195679.jpg'
          },
          {
            ADsPictureID: 8,
            PicURL:
              'https://wallpaperaccess.com/full/2195669.jpg'
          }
        ]
      }
    }
  },
  {
    url: '/vue-element-admin/GetOperatingDataAsync',
    type: 'post',
    response: {
      Success: true,
      code: 20000,
      Message: '@sentence(5,10)',
      data: {
        ActiveMemberCnt: '@integer(0, 1000)',
        TotalWinlose: '@float(60, 10000, 1, 2)',
        AgentCommRate: '@float(0, 100, 1, 2)',
        RegeditMemberCnt: '@integer(0, 100)',
        MemberCount: '@integer(0, 100)'
      },
      ExtensionData: {},
      Pagination: {
        PageIndex: '@integer(0, 10)',
        PageSize: '@integer(0, 10)',
        TotalCount: '@integer(0, 10)',
        PageCount: '@integer(0, 10)'
      }
    }
  },
]