<template>
  <div class="MemberManage">
    <div class="basic-block selects-row">
      <el-form :label-position="'left'" label-width="72px">
        <el-row :gutter="20">
          <el-col :lg="6" :md="12" :sm="12" :xs="24">
            <el-form-item label="会员账号">
              <el-input
                v-model="listQuery.memberAccount"
                class="filter-item"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="12" :sm="12" :xs="24">
            <el-form-item label="活跃状态">
              <el-select
                v-model="listQuery.activeStatus"
                class="filter-item"
                style="width: 100%"
              >
                <el-option :value="-1" :label="'全部'" />
                <el-option :value="0" :label="'非活跃'" />
                <el-option :value="1" :label="'活跃'" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :lg="7" :md="12" :sm="12" :xs="24">
            <el-form-item label="统计区间">
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
                @change="fixEndTime"
              />
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
      <div class="hint-block">
        <el-row>
          <el-col :lg="12" :md="12" :sm="24" :xs="24">
            <div class="left-block">
              <svg-icon icon-class="Warning" />
              <div class="hint-text">
                输赢：<span class="red">红色</span>负数代表代理盈利，<span class="green">绿色</span>代表会员盈利
              </div>
            </div>
          </el-col>
          <el-col :lg="12" :md="12" :sm="24" :xs="24">
            <div class="right-block">
              <div class="member-total">会员总数 : {{ memeberNum }}</div>
              <div class="add-btn pointer">新增</div>
            </div>
          </el-col>
        </el-row>
      </div>
      <TableFrame :list="list" :list-loading="listLoading" :is-zebra="true">
        <el-table-column label="账号" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.Account }}</span>
          </template>
        </el-table-column>
        <el-table-column label="活跃" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.ActiveStatus === 0 ? '非活跃' : '活跃' }}</span>
          </template>
        </el-table-column>
        <el-table-column label="输赢" align="center">
          <template slot-scope="scope">
            <span :class="{ nagativeNum: scope.row.TotalWinlose < 0, positiveNum: scope.row.TotalWinlose > 0 }">
              {{
                scope.row.TotalWinlose | toThousandFilter
              }}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="存款" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.TotalDeposit | toThousandFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column label="取款" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.TotalWithdraw | toThousandFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="最近登录时间"
          align="center"
          width="350"
          prop="loginTime"
        >
          <template slot-scope="scope">
            <span>{{
              scope.row.LastLoginDate | parseTime('{y}-{m}-{d} {h}:{i}:{s}')
            }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="注册时间"
          align="center"
          width="350"
          prop="registerTime"
        >
          <template slot-scope="scope">
            <span>{{
              scope.row.CreateDate | parseTime('{y}-{m}-{d} {h}:{i}:{s}')
            }}</span>
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
import { listMemberAsync } from '@/api/member'
// import moment from 'moment'

export default {
  name: 'MemberManage',
  filters: {
    parseTime,
  },
  data() {
    return {
      list: [],
      listLoading: false,
      listQuery: {
        statistics_StartDate: getNDays(30, false, false),
        statistics_EndDate: getNDays(0, true, false),
        memberAccount: '',
        activeStatus: -1,
        sortColumn: 2,
        sequence: 1,
        Pagination: {
          PageIndex: 1,
          PageSize: 10,
          TotalCount: 30,
        },
      },
      isMobile: false,
      memeberNum: 0,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now() || time.getTime() < Date.now() - (86400000 * 180)
        }
      }
    }
  },
  computed: {
    dataRangeInitPC: {
      get: function() {
        return [
          this.listQuery.statistics_StartDate,
          this.listQuery.statistics_EndDate,
        ]
      },
      set: function(data) {
        this.listQuery.statistics_StartDate = data[0]
        this.listQuery.statistics_EndDate = data[1]
      },
    },
  },
  created() {
    this.listAsync()
  },
  methods: {
    handleSearch() {
      this.listQuery.Pagination.PageIndex = 1
      this.listAsync()
    },
    listAsync() {
      this.listLoading = true
      listMemberAsync(this.listQuery).then((response) => {
        const { data, code, Message, Pagination } = response
        if (code === 20000) {
          this.list = data.DataList || []
          this.listQuery.Pagination = Pagination
          this.memeberNum = data.MemberNum
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
    // 修正結束秒數
    fixEndTime() {
      this.listQuery.statistics_EndDate = this.listQuery.statistics_EndDate.replace(
        '00:00:00',
        '23:59:59'
      )
    },
  }
}
</script>
<style lang="scss" scoped>
.MemberManage {
  position: relative;
  .data-table {
    height: auto;
    .hint-block {
      color: #2d82ff;
      margin-bottom: 11px;
      line-height: 30px;
      .left-block {
        display: flex;
        align-items: center;
        svg {
          margin-right: 5px;
        }
        .hint-text {
          color: #7f95c5;
          font-size: 12px;
        }
        .red {
          color: #ff0000;
        }
        .green {
          color: #35ca63;
        }
      }
      .right-block {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .member-total {
          color: #7f95c5;
          font-size: 12px;
          margin-right: 16px;
        }
        .add-btn {
          width: 110px;
          height: 30px;
          line-height: 30px;
          background-image: linear-gradient(to bottom, #699eff, #0043b3);
          color: #fff;
          text-align: center;
          border-radius: 30px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
