<template>
  <!--  eslint-disable -->
  <div class="CommissionDetail">
    <div class="basic-block selects-row">
      <el-form :label-position="'left'" label-width="72px">
        <el-row :gutter="20">
          <el-col :lg="6" :md="12" :sm="12" :xs="24">
            <el-form-item label="时间">
              <el-select
                v-model="listQuery.datePick"
                class="filter-item"
                style="width: 100%"
              >
                <el-option :value="'-1'" :label="'全部'" />
                <el-option
                  v-for="(item, index) in timeTypeList"
                  :key="index"
                  :value="item.value"
                  :label="item.label"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="12" :sm="12" :xs="24">
            <el-form-item label="佣金状态">
              <el-select
                v-model="listQuery.status"
                class="filter-item"
                style="width: 100%"
              >
                <el-option :value="-1" :label="'全部'" />
                <el-option :value="2" :label="'未领取'" />
                <el-option :value="3" :label="'已领取'" />
                <el-option :value="4" :label="'结转下月'" />
                <el-option :value="5" :label="'不需领取'" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="12" :sm="12" :xs="24">
            <div class="search-btn" @click="handleSearch">
              搜寻
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="basic-block data-table">
      <TableFrame :list="list" :list-loading="listLoading" :is-zebra="true">
        <el-table-column label="时间" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.Date | parseTime('{y}-{m}') }}</span>
          </template>
        </el-table-column>
        <el-table-column label="活跃会员" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.ActiveMemberCnt }}</span>
          </template>
        </el-table-column>
        <el-table-column label="盈亏" align="center">
          <template slot-scope="scope">
            <span :class="{ nagativeNum: scope.row.TotalWinlose < 0, positiveNum: scope.row.TotalWinlose > 0 }">
              {{ scope.row.TotalWinlose | toThousandFilter }}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="平台费用" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.PlatformFee | toThousandFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column label="返水费用" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.MemberCommissionFee | toThousandFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column label="活动费用" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.ActivityFee | toThousandFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column label="存提款费用" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.DepositWithdrawFee | toThousandFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column label="净盈亏" align="center">
          <template slot-scope="scope">
            <span :class="{ nagativeNum: scope.row.NetProfitLoss < 0, positiveNum: scope.row.NetProfitLoss > 0 }">{{
              scope.row.NetProfitLoss | toThousandFilter
            }}</span>
          </template>
        </el-table-column>
        <el-table-column label="佣金比例" align="center">
          <template slot-scope="scope">
            <span
              >{{
                scope.row.AgentCommissionRate >= 0
                  ? scope.row.AgentCommissionRate
                  : 0
              }}%</span
            >
          </template>
        </el-table-column>
        <el-table-column label="本月佣金" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.OwnCommissions | toThousandFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column label="下级提成奖金" align="center" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.SubordinateCommissionBonus | toThousandFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column label="上月结转" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.LastMonthDebitBalance | toThousandFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column label="可领佣金" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.PayCommission | toThousandFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column label="状态" align="center" :width="120">
          <template slot-scope="scope">
            <div v-if="scope.row.ShowReceiveButton === 1" class="receive-btn" @click="receiveAgentCommissionAsync(scope.row)">
              领取
            </div>
            <span
              v-if="scope.row.Status === 2 && scope.row.ShowReceiveButton === 0"
              >未领取</span
            >
            <span
              v-if="scope.row.Status === 3 && scope.row.ShowReceiveButton === 0"
              >已领取</span
            >
            <span
              v-if="scope.row.Status === 4 && scope.row.ShowReceiveButton === 0"
              >结转下月</span
            >
            <span
              v-if="scope.row.Status === 5 && scope.row.ShowReceiveButton === 0"
              >不需领取</span
            >
          </template>
        </el-table-column>
      </TableFrame>
      <Pagination
        hide-on-single-page
        :page-size="10"
        :pager-count="5"
        :current-page.sync="listQuery.Pagination.PageIndex"
        layout="prev, pager, next"
        :total="listQuery.Pagination.TotalCount"
        @current-change="listAsync"
      />
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import { listAgentCommisiionAsync, receiveAgentCommissionAsync } from '@/api/agent'
import { parseTime } from '@/utils/parseTime'

export default {
  name: 'CommissionDetail',
  filters: {
    parseTime
  },
  data() {
    return {
      list: [],
      listLoading: false,
      listQuery: {
        datePick: '-1',
        status: -1,
        Pagination: {
          PageIndex: 1,
          PageSize: 10,
          TotalCount: 30,
        },
      },
      timeTypeList: [],
    }
  },
  created() {
    this.fillTimeTypeList()
    this.listAsync()
  },
  methods: {
    handleSearch() {
      this.listQuery.Pagination.PageIndex = 1
      this.listAsync()
    },
    fillTimeTypeList() {
      for (let i = 1; i < 7; i++) {
        this.timeTypeList.push({
          value: moment().subtract(i, 'months').format('YYYY-MM-01'),
          label: moment().subtract(i, 'months').format('YYYY-MM'),
        })
      }
    },
    listAsync() {
      this.listLoading = true
      listAgentCommisiionAsync(this.listQuery).then((response) => {
        const { code, data, Message } = response
        if (code === 20000) {
          this.list = data
        } else {
          this.$notify({
            title: '提示',
            message: Message,
          })
        }
        setTimeout(() => {
          this.listLoading = false
        }, 500)
      })
    },
    receiveAgentCommissionAsync(item) {
      const obj = {
        commissionID: item.CommissionID
      }
      receiveAgentCommissionAsync(obj).then(response => {
        const { code, Message } = response
        if (code === 20000) {
          this.$notify({
            title: '提示',
            message: Message,
          })
          this.$bus.$emit('refresh:wallet')
          setTimeout(() => {
            this.listAsync()
          }, 500)
        } else {
          this.$notify({
            title: '提示',
            message: Message,
          })
        }
      })
    }
  },
}
</script>
<style lang="scss" scoped>
.CommissionDetail {
  .data-table {
    height: auto;
    .clickable {
      text-decoration: underline;
      cursor: pointer;
    }
    .receive-btn {
      background: linear-gradient(to bottom, #699eff, #0043b3);
      color: #fff;
      cursor: pointer;
      width: 84px;
      height: 30px;
      line-height: 30px;
      border: solid 1px #cddcff;
      border-radius: 30px;
      margin: 0 auto;
      font-size: 14px;
    }
  }
}
</style>
