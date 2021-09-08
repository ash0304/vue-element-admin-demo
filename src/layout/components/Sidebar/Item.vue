<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []

    const specialAttrs = {}
    if (title.match(/消息中心|个人管理/)) {
      specialAttrs['data-unread'] = context.parent.$store.getters.unreadFlag
    }

    if (icon) {
      vnodes.push(
        <div class='item-title' {...{ attrs: specialAttrs }}>
          <svg-icon icon-class={icon} />
        </div>
      )
    }

    if (title) {
      vnodes.push(
        <span slot='title' {...{ attrs: specialAttrs }}>
          {title}
        </span>
      )
    }
    return vnodes
  }
}
</script>

<style lang="scss" scoped>
.item-title {
  display: inline-block;
}
[data-unread='1'] {
  &::after {
    content: '';
    width: 10px;
    height: 10px;
    background-image: linear-gradient(to top, #2d82ff, #5fd0ff);
    border-radius: 50%;
    display: inline-block;
    margin-left: 10px;
    transition: opacity 0.4s;
  }
}
// .item-title {
//   &::after {
//     width: 20px;
//     height: 20px;
//     margin-left: 5px;
//   }
// }
</style>
<style lang="scss">
.openSidebar {
  //有ICON 有文字時，ICON 旁不要圈圈
  .item-title {
    &::after {
      display: none;
    }
  }
}
.el-submenu.is-opened {
  //打開子元素時
  .el-submenu__title {
    > span,
    .item-title {
      &::after {
        opacity: 0;
      }
    }
  }
}
</style>
