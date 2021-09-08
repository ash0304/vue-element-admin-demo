<template>
  <div class="navbar">
    <!-- <div class="d-flex justify-content-sm-between flex-column-reverse flex-sm-row"> -->
    <div class="d-flex">
      <div>
        <hamburger
          id="hamburger-container"
          :is-active="sidebar.opened"
          class="hamburger-container"
          @toggleClick="toggleSideBar"
        />
        <breadcrumb
          v-if="device !== 'mobile'"
          id="breadcrumb-container"
          class="breadcrumb-container"
        />
      </div>
      <div class="right-menu text-right">
        <template v-if="device !== 'mobile'">
          <div
            v-for="i in list"
            :key="i.text"
            class="icon-btn pointer"
            @click="doAction(i)"
          >
            <svg-icon :icon-class="i.icon" />
            <div class="icon-text">{{ i.text }}</div>
          </div>

          <div class="user-info pointer">
            <div class="user-avatar" />
            <div class="user-detail">
              <div class="user-detail-box">
                <div class="user-label">欢迎回来</div>
                <div class="user-text">Ash</div>
              </div>
              <div class="user-detail-box f-s">
                <div class="user-label">钱包余额</div>
                <div class="user-text wallet">12345</div>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <el-dropdown trigger="click">
            <span class="right-menu-item hover-effect">
              <div class="user-info pointer">
                <div class="user-avatar" />
                <div class="user-detail">
                  <div class="user-detail-box">
                    <div class="user-label">欢迎回来</div>
                    <div class="user-text">Ash</div>
                  </div>
                  <div class="user-detail-box f-s">
                    <div class="user-label">钱包余额</div>
                    <div class="user-text wallet">12345</div>
                  </div>
                </div>
              </div>
              <i class="el-icon-caret-bottom" style="margin-left: 10px" />
            </span>
            <el-dropdown-menu slot="dropdown" class="dropdown-sm">
              <el-dropdown-item v-for="(i, index) in list" :key="index">
                <div class="nav-drop-box" @click="doAction(i)">
                  <svg-icon :icon-class="i.icon" />
                  <span class="nav-drop-text">{{ i.text }}</span>
                </div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger,
  },
  filters: {
    priceFormat: function(value) {
      // 加上 $ 字號
      return '$' + value
    },
    commaFormat: function(value) {
      // 加上千分位符號
      return value
        .toString()
        .replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/, function(
          all,
          pre,
          groupOf3Digital
        ) {
          return pre + groupOf3Digital.replace(/\d{3}/g, ',$&')
        })
    }
  },
  data() {
    return {
      timer: null,
      wallet: 0,
      list: [
        {
          text: '取款',
          icon: 'Withdrawal'
        },
        { text: '联系客服',
          icon: 'service'
        },
        {
          text: '留言反馈',
          icon: 'message-1'
        },
        {
          text: '修改密码',
          icon: 'password'
        },
        { text: '退出',
          icon: 'logout'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'device',
    ])
  },
  methods: {
    doAction(i) {
      switch (i.text) {
        case '取款':
          this.$refs.wdl.show = true
          break
        case '联系客服':
          window.open(
            this.serviceList[0].sub,
            '_blank',
            'toolbar=no,scrollbars=no,menubar=no,status=no,resizable=yes,location=no'
          )
          break
        case '留言反馈':
          this.$refs.feed.show = true
          break
        case '修改密码':
          this.$refs.pwd.show = true
          break
        case '退出':
          this.logout()
          break
      }
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login`)
    },
  },
}
</script>

<style lang="scss" scoped>
@media (max-width: 576px) {
  .hamburger-container {
    position: relative;
  }
  .dropdown-sm {
    font-size: 1.3rem;
    text-align: center;
    width: 95vw;
    span {
      padding: 2px;
    }
  }
}
.navbar {
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  display: flex;
  padding: 0 15px 0 0;
  height: 70px;
  border-bottom: 1px solid #bbd6ff;
  .d-flex {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .hamburger-container {
    line-height: 46px;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    width: 870px;
    height: 53px;
    line-height: 53px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &:focus {
      outline: none;
    }
    .icon-btn {
      position: relative;
      height: 34px;
      border: solid 1px #cddcff;
      border-radius: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 13px;
      margin: 0 7.5px;
      transition: background 0.2s;
      &:hover {
        background: #2d82ff;
        .icon-text,
        .svg-icon {
          color: white;
        }
      }
      > svg {
        margin-right: 10px;
      }
      .svg-icon {
        width: 22px;
        height: 22px;
        color: #2d82ff;
        transition: color 0.2s;
      }
      .icon-text {
        transition: color 0.2s;
        font-size: 14px;
        color: #2d82ff;
        white-space: nowrap;
      }
    }
    .right-menu-item {
      display: flex;
      align-items: center;
    }
    .user-info {
      width: 240px;
      height: 53px;
      margin-left: 20px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .user-avatar {
        width: 40px;
        height: 40px;
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
        border-radius: 50%;
        background: url('../../assets/images/logo_1.png') no-repeat;
        background-size: 100% 100%;
      }
      .user-detail {
        position: relative;
        width: 175px;
        height: 50px;
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .user-detail-box {
          width: 100%;
          display: flex;
          font-size: 14px;
          height: 20px;
          line-height: 20px;
          .user-label {
            margin-right: 5px;
            color: #658dd4;
          }
          .user-text {
            color: #658dd4;
            &.wallet {
              font-size: 14px;
              color: #008cff;
            }
          }
          &.f-s {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
