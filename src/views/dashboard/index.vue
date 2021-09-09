<template>
  <!-- eslint-disable -->
  <div class="Dashboard">
    <div class="basic-block block1">
      <div class="block-title">
        <span>营运数据</span>
      </div>
      <div class="refresh-block">
        <!-- <span class="refresh" @click="d_getData"
          ><i
            >刷新时间 :
            {{ updateTime | parseTime('{y}/{m}/{d} {h}:{i}:{s}') }}</i
          >
          <b>刷新</b></span
        > -->
      </div>
      <ul>
        <!--  -->
        <li v-for="(i, key) in sortInfo" :key="key">
          <span>
            <svg-icon :icon-class="i.icon" />{{ i.label }}
            <el-popover placement="top-start" trigger="hover">
              <span>试算当前可得的佣金比例, 每月佣金结算后重新计算</span>
              <span slot="reference"
                ><svg-icon
                  id="q-hint"
                  v-if="i.label === '佣金比例'"
                  icon-class="Warning"
              /></span>
            </el-popover>
          </span>
          <b>{{ dashboardthousandFilter(i) }}</b>
        </li>
      </ul>
    </div>
    <div class="basic-block block2">
      <div class="block-title">趋势分析</div>
      <Charts
        ref="chart"
        :new-member="RegeditMemberByDay"
        :logined="LoginMemberByDay"
      />
    </div>
    <div class="blocks-row">
      <div class="basic-block block3">
        <div class="block-title system">系統公告</div>
        <!-- <SystemBoard :list="systemList" :length="listLength" /> -->
      </div>
      <div class="basic-block block4">
        <!-- <Jumbotron :list="banner" /> -->
      </div>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
import Charts from './components/Charts.vue'
import { getHomeReportAsync } from '@/api/webInfo'
import { parseTime } from '@/utils/parseTime'

export default {
  name: 'Dashboard',
  components: {
    Charts
  },
  data() {
    return {
      info: {
        RegeditMemberCnt: 0,
        MemberCount: 0,
        ActiveMemberCnt: 0,
        TotalWinlose: 0,
        AgentCommRate: 0,
      },
      LoginMemberByDay: {
        data: [],
        date: [],
      },
      RegeditMemberByDay: {
        data: [],
        date: [],
      },
    }
  },
  computed: {
    sortInfo() {
      return _.chain(this.info)
        .map((i, key) => {
          const obj = {}
          switch (key) {
            case 'RegeditMemberCnt':
              obj.label = '新注册'
              obj.icon = 'register'
              obj.val = i
              break
            case 'MemberCount':
              obj.label = '会员数'
              obj.icon = 'Members'
              obj.val = i
              break
            case 'ActiveMemberCnt':
              obj.label = '活跃会员'
              obj.icon = 'monitor-3'
              obj.val = i
              break
            case 'TotalWinlose':
              obj.label = '输赢'
              obj.icon = 'dividend'
              obj.val = i
              break
            case 'AgentCommRate':
              obj.label = '佣金比例'
              obj.icon = 'commission'
              obj.val = i + '%'
              break
          }

          return obj
        })
        .filter((i) => i.label)
        .value()
    }
  },
  created() {
    this.getHomeReportAsync()
  },
  methods: {
    parseTime,
    dashboardthousandFilter(item) {
      if (
        item.label === '新注册' ||
        item.label === '会员数' ||
        item.label === '活跃会员' ||
        item.label === '佣金比例'
      ) {
        return item.val
      } else {
        item.val += ''
        if (!isNaN(item.val) && item.val !== '') {
          item.val = Number(item.val).toFixed(2)
          item.val += ''
        }
        const arr = item.val.split('.')
        const re = /(\d{1,3})(?=(\d{3})+$)/g
        return (
          arr[0].replace(re, '$1,') + (arr.length === 2 ? '.' + arr[1] : '')
        )
      }
    },
    getHomeReportAsync() {
      getHomeReportAsync().then((response) => {
        const { code, data, Message } = response
        if (code === 20000) {
          if (data.WebBannerList === null) {
            this.banner = []
          } else {
            const type = this.device === 'mobile' ? 2 : 1
            this.banner = _.map(
              data.WebBannerList.filter(i => i.DeviceCategoryID === type),
              (i) => i.PicURL
            )
          }
          if (data.SystemInformationMarqueeList === null) {
            this.systemList = []
          } else {
            this.systemList = data.SystemInformationMarqueeList
          }
          this.LoginMemberByDay.data = []
          this.LoginMemberByDay.date = []
          this.RegeditMemberByDay.data = []
          this.RegeditMemberByDay.date = []
          for (let i = 0; i < data.LoginMemberByDay.length; i++) {
            this.LoginMemberByDay.data.push(
              data.LoginMemberByDay[i].MemberCount
            )
            this.LoginMemberByDay.date.push(
              this.parseTime(data.LoginMemberByDay[i].DataDate, '{d}日')
            )
            this.RegeditMemberByDay.data.push(
              data.RegeditMemberByDay[i].MemberCount
            )
            this.RegeditMemberByDay.date.push(
              this.parseTime(data.RegeditMemberByDay[i].DataDate, '{d}日')
            )
          }
          // 接收資料後在init一次圖表
          this.$refs.chart.initChart()
          this.listLength = this.systemList.length
        } else {
          this.$notify({
            title: '提示',
            message: Message,
          })
        }
      })
    },
  }
}
</script>
<style lang="scss" scoped>
.Dashboard {
  .block1 {
    min-height: 225px;
    margin-bottom: 22px;
    padding-right: 15px;
    padding-bottom: 0;
    #q-hint {
      position: relative;
      width: 16px;
      height: 16px;
      margin-left: 6px;
      top: 1px;
    }
    .block-title {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 20px;
    }
    .refresh-block {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      padding-right: 15px;
      .refresh {
        color: #b3c0dd;
        font-size: 12px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        i {
          font-style: normal;
          padding-bottom: 10px;
        }
        b {
          padding-bottom: 10px;
          color: #2d82ff;
          padding-left: 50px;
          position: relative;
          font-weight: normal;
          cursor: pointer;
          &:hover {
            filter: brightness(140%);
          }
          &::before {
            position: absolute;
            content: '';
            top: calc(50% - 5px);
            left: 15px;
            width: 25px;
            height: 25px;
            transform: translateY(-50%);
            background: url('../../assets/images/btn_transfer_rewallet.png')
              no-repeat left center;
            background-size: 25px;
          }
        }
      }
    }

    ul {
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      li {
        list-style: none;
        background: #f1f6ff;
        flex: 1;
        margin-right: 15px;
        border-radius: 4px;
        padding: 20px 27px 0 23px;
        height: 100px;
        min-width: 180px;
        margin-bottom: 25px;
        &:nth-of-type(4) {
          flex: 1.35;
        }
        > span {
          display: flex;
          align-items: center;
          color: #333;
          font-size: 14px;
          font-weight: bold;
          svg {
            color: #2d82ff;
            width: 32px;
            height: 32px;
            margin-right: 15px;
          }
        }
        > b {
          display: block;
          color: #2d82ff;
          height: fit-content;
          font-size: 32px;
          text-align: right;
          line-height: 27px;
          padding-top: 5px;
        }
      }
    }
  }
  .block2 {
    // height: 313px;
    margin-bottom: 22px;
    padding-bottom: 0;
    .block-title {
      margin-bottom: 20px;
    }
  }
  .blocks-row {
    display: flex;
    .block3 {
      // height: 450px;
      flex-grow: 0.5;
      margin-right: 11px;
      margin-bottom: 22px;
      width: 100%;
      .system {
        margin-bottom: 0;
      }
    }
    .block4 {
      width: 100%;
      position: relative;
      // height: 450px;
      flex-grow: 0.5;
      margin-left: 11px;
      margin-bottom: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
@media (max-width: 1300px) {
  .Dashboard {
    .blocks-row {
      flex-direction: column;
      .block3 {
        // height: 450px;
        margin-right: 0;
        margin-bottom: 22px;
      }
      .block4 {
        // height: 450px;
        margin-left: 0;
        margin-bottom: 22px;
      }
    }
  }
}
</style>
