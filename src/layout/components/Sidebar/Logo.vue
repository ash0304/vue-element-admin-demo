<template>
  <div
    class="sidebar-logo-container"
    :class="{ collapse: collapse, small: isCollapse }"
  >
    <transition name="sidebarLogoFade">
      <router-link key="expand" class="sidebar-logo-link" to="/">
        <div class="sidebar-logo">
          <!-- eslint-disable-next-line -->
          <!-- <img :src="!isCollapse ? url : urlco" /> -->
          <div class="demo-logo">DEMO</div>
        </div>
      </router-link>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      url: require('../../../assets/sidebar/logo.png'),
      urlco: require('../../../assets/images/logo_1.png')
    }
  },
  computed: {
    ...mapGetters(['sidebar']),
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-logo {
  font-size: 24px;
  color: rgb(126, 163, 221);
}
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 133px;
  line-height: 50px;
  padding-top: 30px;
  background: #1a253f;
  text-align: center;
  overflow: hidden;
  &.small {
    height: 133px;
    .sidebar-logo-link {
      .sidebar-logo {
        width: 40px;
        height: 40px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;

    & .sidebar-logo {
      width: 110px;
      height: 40px;
      vertical-align: middle;
      margin-left: 30px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
