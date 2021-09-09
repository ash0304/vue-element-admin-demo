<template>
  <div class="Footer flex flex-center">
    <div class="width-1200">
      <section>
        <div class="sponsor s1 pointer">
          <div class="shield1" />
          <div class="text flex-column flex-center">
            <span>2018/2019 赛季英超联赛赞助商</span>
            <span>哈德斯菲尔德俱乐部球衣赞助商</span>
          </div>
        </div>
        <div class="sponsor s2 pointer">
          <div class="laliga" />
          <div class="text flex-column flex-center">
            <span>2018/2019 赛季西甲联赛赞助商</span>
            <span>西甲官方冠名赞助商</span>
          </div>
        </div>
        <div class="sponsor s3">
          <div class="xjIcon" />
        </div>
      </section>
      <section>
        <a v-for="(item,index) in linkList" :key="index">
          <div>{{ item.name }}</div>
        </a>
        <a href="" target="_blank">在线客服</a>
      </section>
      <section>
        <div>OPE数据安全由赛门铁克 ( Symantec Corporation ) 提供技术支持, 为您的数据安全保驾护航</div>
        <div>OPE为BC体育安全协会 ( ESSA ) 的成员之一</div>
        <div>© 2016-2022 OPE版权所有</div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {
      linkList: [
        { name: '关于OPE' },
        { name: '博彩责任' },
        { name: '用户协议' },
        { name: '隐私政策' },
        { name: '帮助中心' },
        { name: '代理中心' }
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
.Footer {
  background: #171b3d;
  border-top: #6b71a4 1px solid;
  .width-1200 {
    width: 1200px;
    section {
      display: flex;
      justify-content: space-between;
      color: #616588;
      &:nth-child(1) {
        padding-top: 20px;
        .sponsor {
          display: flex;
          text-align: left;
          font-size: 14px;
          &.s1 {
            transition: 0.5s all ease-in-out;
            .shield1 {
              width: 50px;
              height: 75px;
              background: url('../../../assets/login/footer/img_footer_logo2.png') no-repeat;
              transition: 0.5s all ease-in-out;
            }
          }
          &.s2 {
            transition: 0.5s all ease-in-out;
            padding: 0 50px;
            .laliga {
              width: 196px;
              height: 75px;
              background: url('../../../assets/login/footer/img_footer_logo3.png') no-repeat;
              transition: 0.5s all ease-in-out;
            }
            border-left: 1px solid #333;
            border-right: 1px solid #333;
          }
          &.s3 {
            transition: 0.5s all ease-in-out;
            .xjIcon {
              width: 208px;
              height: 82px;
              background: url('../../../assets/login/footer/img_footer_logo1.png') no-repeat;
              transition: 0.5s all ease-in-out;
            }
          }
          .text {
            margin-left: 10px;
            span:nth-child(1) {
              margin-bottom: 2.5px;
            }
            span:nth-child(2) {
              margin-top: 2.5px;
            }
          }
          &:hover {
            color: #1E71B1;
            &.s1 {
              .shield1 {
                background: url('../../../assets/login/footer/img_footer_logo2_h.png') no-repeat;
              }
            }
            &.s2 {
              .laliga {
                background: url('../../../assets/login/footer/img_footer_logo3_h.png') no-repeat;
              }
            }
            &.s3 {
              .xjIcon {
                background: url('../../../assets/login/footer/img_footer_logo1_h.png') no-repeat;
              }
            }
          }
        }
      }
      &:nth-child(2) {
        padding-top: 20px;
        > a {
          color: #999999;
          font-size: 16px;
          text-align: left;
          padding-left: 25px;
          cursor: pointer;
          position: relative;
          &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 15px;
            height: 100%;
            background: url('../../../assets/login/footer/item.png')
              center center no-repeat;
          }
          &:hover {
            &:before {
              animation: 2s link-ani;
            }
          }
        }
      }
      &:nth-child(3) {
        padding-top: 20px;
        padding-bottom: 20px;
        flex-direction: column;
        text-align: center;
        > div {
          font-size: 16px;
          color: #616588;
          line-height: 30px;
        }
      }
    }
  }
}
@keyframes link-ani {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media only screen and (max-width: 550px) {
  .Footer{
    overflow: hidden;
    .width-1200 {
      width: 100vw;
      section {
        align-items: center;
        &:nth-child(1) {
          flex-direction: column;
          padding-top: 15vw;
          margin-bottom: 10vw;
          .sponsor {
            font-size: 4vw;
            flex-direction: column;
            align-items: center;
            text-align: center;
            &.s1 {
              .shield1 {
                width: 20vw;
                height: calc(20vw * 80 / 50);
                background-size: 100%;
              }
            }
            &.s2 {
              margin: 5vw 0;
              padding: 0 5vw;
              border: none;
              .laliga {
                width: 50vw;
              }
            }
            &.s3 {
              pointer-events: none;
              .xjIcon {
                width: 50vw;
                height: calc(50vw * 80 / 120);
                background-size: 100%;
              }
            }
            .text {
              font-size: 4.5vw;
              margin-left: 0;
              span:nth-child(1) {
                margin-bottom: 0;
              }
              span:nth-child(2) {
                margin-top: 0;
              }
            }
            &:hover {
              color: #616588;
              &.s1 {
                .shield1 {
                  background: url('../../../assets/login/footer/img_footer_logo2.png') no-repeat;
                }
              }
              &.s2 {
                .laliga {
                  background: url('../../../assets/login/footer/img_footer_logo3.png') no-repeat;
                }
              }
              &.s3 {
                .xjIcon {
                  background: url('../../../assets/login/footer/img_footer_logo1.png') no-repeat;
                }
              }
            }
          }
        }
        &:nth-child(2) {
          padding: 0 5vw;
          flex-wrap: wrap;
          justify-content: space-between;
          width: 100%;
          text-align: center;
          margin-bottom: 10vw;
          > div {
            flex-shrink: 0;
            color: #999999;
            width: 25vw;
            font-size: 4.5vw;
            text-align: left;
            padding-left: 6vw;
            position: relative;
            margin-bottom: 5vw;
            &:before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 4vw;
              height: 100%;
              background: url('../../../assets/login/footer/item.png')
                center center no-repeat;
            }
          }
        }
        &:nth-child(3) {
          padding: 0 5vw;
          flex-direction: column;
          text-align: center;
          > div {
            font-size: 4.5vw;
            color: #616588;
            margin-bottom: 5vw;
          }
        }
      }
    }
  }
}
</style>
