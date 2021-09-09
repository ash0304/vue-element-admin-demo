<template>
  <div class="TradeHistory">
    <div class="basic-block selects-row">
      <el-form :label-position="'left'" label-width="72px">
        <el-row :gutter="20">
          <el-col :lg="7" :md="12" :sm="12" :xs="24">
            <el-form-item label="交易时间">
              <el-date-picker
                v-model="dataRangeInitPC"
                class="filter-item"
                style="width: 100%"
                type="datetimerange"
                range-separator="~"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :format="'yyyy-MM-dd HH:mm:ss'"
                :value-format="'yyyy-MM-dd HH:mm:ss'"
                :editable="false"
                :clearable="false"
                :picker-options="pickerOptions"
                @change="fixdateTo"
              />
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="12" :sm="12" :xs="24">
            <el-form-item label="类型">
              <el-select v-model="listQuery.actionType" class="filter-item" style="width: 100%">
                <el-option :value="-1" :label="'全部'" />
                <el-option :value="1" :label="'佣金存入'" />
                <el-option :value="2" :label="'取款'" />
                <!-- <el-option :value="4" :label="'资金修正'" /> -->
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="12" :sm="12" :xs="24">
            <el-form-item label="备注">
              <el-input v-model="listQuery.note" class="filter-item" style="width: 100%" />
            </el-form-item>
          </el-col>
          <el-col :lg="5" :md="12" :sm="12" :xs="24">
            <div class="search-btn" @click="handleSearch">
              搜寻
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="basic-block data-table">
      <TableFrame :list="list" :list-loading="listLoading" :is-zebra="true">
        <el-table-column label="交易时间" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.CreateDate | parseTime('{y}-{m}-{d} {h}:{i}:{s}') }}</span>
          </template>
        </el-table-column>
        <el-table-column label="类型" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.ActionType === 1">佣金存入</span>
            <span v-if="scope.row.ActionType === 2">取款</span>
            <span v-if="scope.row.ActionType === 3">优惠</span>
            <!-- <span v-if="scope.row.ActionType === 4">资金修正</span> -->
          </template>
        </el-table-column>
        <el-table-column label="金额" align="center">
          <template slot-scope="scope">
            <span :class="{nagativeNum: scope.row.Amount < 0}">{{ scope.row.Amount | toThousandFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column label="钱包余额" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.AfterPoint | toThousandFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column label="备注" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.Note }}</span>
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
import { parseTime } from '@/utils/parseTime'
import { getNDays } from '@/utils/getDays'
import moment from 'moment'
import { tradeHistoryListAsync } from '@/api/agent'

export default {
  name: 'TradeHistory',
  filters: {
    parseTime,
  },
  data() {
    return {
      list: [],
      listLoading: false,
      listQuery: {
        dateFrom: getNDays(30, false, false),
        dateTo: getNDays(0, true, false),
        note: '',
        actionType: -1,
        Pagination: {
          PageIndex: 1,
          PageSize: 10,
          TotalCount: 30,
        },
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now() || time.getTime() < Date.now() - (86400000 * 180)
        }
      }
    }
  },
  computed: {
    dateRangeInitMobile() {
      return {
        start: this.listQuery.dateFrom,
        end: this.listQuery.dateTo,
      }
    },
    dataRangeInitPC: {
      get: function() {
        return [this.listQuery.dateFrom, this.listQuery.dateTo]
      },
      set: function(data) {
        this.listQuery.dateFrom = data[0]
        this.listQuery.dateTo = data[1]
      },
    },
  },
  created() {
    this.listAsync()
  },
  mounted() {
    // 监听 resize 方法
    window.addEventListener('resize', this.setDevice, false)
  },
  beforeDestroy() {
    // 移除监听
    window.removeEventListener('resize', this.setDevice, false)
  },
  methods: {
    handleSearch() {
      this.listQuery.Pagination.PageIndex = 1
      this.listAsync()
    },
    listAsync() {
      this.listLoading = true
      tradeHistoryListAsync(this.listQuery).then(response => {
        const { data, code, Message, Pagination } = response
        if (code === 20000) {
          this.list = data
          this.listQuery.Pagination = Pagination
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
    openRangeModal() {
      this.$refs.rangePicker.show = true
      this.$refs.rangePicker.range.startDate = moment(this.listQuery.dateFrom)
      this.$refs.rangePicker.range.endDate = moment(this.listQuery.dateTo)
    },
    closeRangeModal() {
      this.$refs.rangePicker.show = false
    },
    // 修正結束秒數
    fixdateTo() {
      this.listQuery.dateTo = this.listQuery.dateTo.replace(
        '00:00:00',
        '23:59:59'
      )
    },
  },
}
</script>
<style lang="scss" scoped>
.TradeHistory {
  position: relative;
  .data-table {
    height: auto;
  }
}
</style>
