const time_str = '@date("yyyy-MM-dd")T@date("HH:mm:ss.SS")'
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
  },
  {
    url: '/vue-element-admin/ListAgentAsync',
    type: 'post',
    response: config => {
      const Pagination = config.body.Pagination
      return {
        Success: true,
        code: 20000,
        Message: '@sentence(5,10)',
        'data|30-40': [
          {
            AgentID: '@integer(0, 10)',
            Account: '@string("lower", 3,10)',
            LastLoginDate: time_str,
            CreateDate: time_str
          }
        ],
        ExtensionData: {},
        Pagination: Pagination
      }
    }
  },
  {
    url: '/vue-element-admin/ListAgentCommissionAsync',
    type: 'post',
    response: config => {
      const Pagination = config.body.Pagination
      return {
        Success: true,
        code: 20000,
        Message: '@sentence(5,10)',
        'data|11-30': [
          {
            CommissionID: '@integer(0, 10)',
            Year: '@integer(0, 10)',
            Month: '@integer(0, 10)',
            Date: time_str,
            AgentID: '@integer(0, 10)',
            ActiveMemberCnt: '@integer(0, 10)',
            TotalWinlose: '@float(60, 100000, 1, 2)',
            PlatformFee: '@float(60, 100000, 1, 2)',
            MemberCommissionFee: '@float(60, 10000, 1, 2)',
            ActivityFee: '@float(60, 10000, 1, 2)',
            DepositWithdrawFee: '@float(60, 10000, 1, 2)',
            NetProfitLoss: '@float(60, 10000, 1, 2)',
            AgentCommissionRate: '@float(60, 99, 1, 2)',
            OwnCommissions: '@float(60, 10000, 1, 2)',
            SubordinateCommissionBonus: '@float(60, 10000, 1, 2)',
            LastMonthDebitBalance: '@float(60, 10000, 1, 2)',
            PayCommission: '@float(60, 10000, 1, 2)',
            Status: '@integer(1, 5)',
            ShowReceiveButton: '@integer(0, 1)'
          }
        ],
        ExtensionData: {},
        Pagination: Pagination
      }
    }
  },
  {
    url: '/vue-element-admin/ReceiveAgentCommissionAsync',
    type: 'post',
    response: config => {
      const Pagination = config.body.Pagination
      return {
        Success: true,
        code: 20000,
        Message: "@sentence(5,10)",
        data: "@integer(0, 10)",
        ExtensionData: {},
        Pagination: Pagination
      }
    }
  },
  {
    url: "/vue-element-admin/TradeHistoryListAsync",
    type: "post",
    response: config => {
      const Pagination = config.body.Pagination
      return {
        Success: true,
        code: 20000,
        Message: "@sentence(5,10)",
        "data|11-30": [
            {
                CreateDate: time_str,
                ActionType: "@integer(1, 3)",
                Amount: "@float(60, 10000, 1, 2)",
                AfterPoint: "@float(60, 10000, 1, 2)",
                Note: "@string(\"lower\", 3,10)"
            }
        ],
        ExtensionData: {},
        Pagination: Pagination
      }
    }
},
]