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
        <!-- <li v-for="(i, key) in sortInfo" :key="key">
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
        </li> -->
      </ul>
    </div>
    <div class="basic-block block2">
      <div class="block-title">趋势分析</div>
      <!-- <Charts
        ref="chart"
        :new-member="RegeditMemberByDay"
        :logined="LoginMemberByDay"
      /> -->
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

export default {
  name: 'Dashboard'
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
