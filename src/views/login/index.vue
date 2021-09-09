<template>
  <div>
    <div class="login-container">
      <div class="ope-logo" />
      <Parallax :section-class="'form-container'" :style="{ left: `${formLeft}px` }">
        <Form />
      </Parallax>
      <div class="bg-top">
        <div class="top-banner">
          <img id="banner1" src="../../assets/login/img_banner_layer01.png" alt="">
          <Parallax :section-class="'layer02'">
            <img id="banner2" src="../../assets/login/img_banner_layer02.png" alt="">
          </Parallax>
          <Parallax :section-class="'layer03'" :speed-factor="0.05">
            <img id="banner3" src="../../assets/login/img_banner_layer03.png" alt="">
          </Parallax>
          <Parallax :section-class="'layer04'" :speed-factor="0.2">
            <img id="banner4" src="../../assets/login/img_banner_layer04.png" alt="">
          </Parallax>
          <Parallax :section-class="'layer05'" :speed-factor="0.25">
            <img id="banner5" src="../../assets/login/img_banner_layer05.png" alt="">
          </Parallax>
          <Parallax :section-class="'layer06'" :speed-factor="0.3">
            <img id="banner6" src="../../assets/login/img_banner_layer06.png" alt="">
          </Parallax>
          <Parallax :section-class="'layer07'" :speed-factor="0.5">
            <img id="banner7" src="../../assets/login/img_banner_layer07.png" alt="">
          </Parallax>
        </div>
        <div class="service-row">
          <div class="text-content animate__animated animate__fadeInUp">
            <div class="title1" />
            <div class="text">全天候咨询不中断</div>
          </div>
          <div v-for="(item, index) of serviceList" :key="index" class="service-box animate__animated animate__fadeInUp" :style="{'animation-delay': index / 2 + 's'}">
            <div class="icon">
              <img :src="require('../../assets/login/icon_' + item.icon + '.png')" alt>
            </div>
            <div class="text">
              <div class="main">{{ item.main }}</div>
              <div class="sub">{{ index === 0 ? '线上客服' : item.sub }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="middle">
        <div id="sec0" class="animate__animated animate__fadeInUp">
          <div class="title-box">
            <div class="left" />
            <div class="title2" />
            <div class="right" />
          </div>
          <div class="sub-title">最完整数据分析</div>
        </div>
        <div class="products-list">
          <div v-for="(item, index) of productsList" :id="`sec${index + 1}`" :key="index" class="product-card animate__animated animate__fadeInUp" :style="{'animation-delay': index / 2 + 's'}">
            <div class="icon-bg">
              <img :src="require('../../assets/login/icon_0' + (index + 1) + '.png')" alt>
            </div>
            <div class="main">{{ item.main }}</div>
            <div class="sub">{{ item.sub1 }}</div>
            <div class="sub">{{ item.sub2 }}</div>
          </div>
        </div>
        <div id="sec5" class="title-box animate__animated animate__fadeInUp">
          <div class="left" />
          <div class="title3" />
          <div class="right" />
        </div>
      </div>
      <div class="commiRatio">
        <div class="slogan-container">
          <Parallax :section-class="'slogan'">
            <img src="../../assets/login/img_03_slogan.png" alt="">
          </Parallax>
        </div>
        <div class="img-container">
          <img id="layer01" src="../../assets/login/img_03_layer01.png" alt="">
          <Parallax :section-class="'layer02'" :speed-factor="0.1">
            <img id="layer02" src="../../assets/login/img_03_layer02.png" alt="">
          </Parallax>
          <Parallax :section-class="'layer03'" :speed-factor="0.15">
            <img id="layer03" src="../../assets/login/img_03_layer03.png" alt="">
          </Parallax>
          <Parallax :section-class="'layer04'" :speed-factor="0.2">
            <img id="layer04" src="../../assets/login/img_03_layer04.png" alt="">
          </Parallax>
          <Parallax :section-class="'layer05'" :speed-factor="0.25">
            <img id="layer05" src="../../assets/login/img_03_layer05.png" alt="">
          </Parallax>
          <Parallax :section-class="'layer06'" :speed-factor="0.25">
            <img id="layer06" src="../../assets/login/img_03_layer06.png" alt="">
          </Parallax>
        </div>
      </div>
      <div class="bg-bottom">
        <div id="sec6" class="title-box animate__animated animate__fadeInUp">
          <div class="left" />
          <div class="title4" />
          <div class="right" />
        </div>
        <div class="support">
          <div class="left">
            <Parallax :section-class="'phone02'" :speed-factor="0.1">
              <img id="phone02" src="../../assets/login/img_iphone_02.png" alt="">
            </Parallax>
            <Parallax :section-class="'phone01'" :speed-factor="0.2">
              <img id="phone01" src="../../assets/login/img_iphone_01.png" alt="">
            </Parallax>
          </div>
          <div class="right">
            <div class="features">
              <div id="sec7" class="feature-card animate__animated animate__fadeInUp">
                <div class="icon1" />
                <div class="main">PC <span class="slash">/</span> APP</div>
                <div class="sub">全面支持各种装置系统</div>
              </div>
              <div id="sec8" class="feature-card animate__animated animate__fadeInUp" style="animation-delay: 500ms">
                <div class="icon2" />
                <div class="main">安全性</div>
                <div class="sub">独家防黑客入侵保护</div>
              </div>
              <div id="sec9" class="feature-card animate__animated animate__fadeInUp" style="animation-delay: 1000ms">
                <div class="icon3" />
                <div class="main">便捷性</div>
                <div class="sub">更便捷提领每月佣金</div>
              </div>
            </div>
            <div class="right-title">赞助伙伴</div>
            <div class="stuff">
              <div id="sec10" class="stuff-box animate__animated animate__fadeInUp" style="animation-delay: 500ms">
                <div class="icon1" />
                <div class="text">
                  <div class="main">哈德斯菲尔德俱乐部</div>
                  <div class="sub">2018 / 2019 赛季英超联赛赞助商</div>
                </div>
              </div>
              <div id="sec11" class="stuff-box animate__animated animate__fadeInUp" style="animation-delay: 1000ms">
                <div class="icon2" />
                <div class="text">
                  <div class="main">西甲官方冠名</div>
                  <div class="sub">2018 / 2019 赛季西甲联赛赞助商</div>
                </div>
              </div>
            </div>
            <div class="right-title">博彩机构认证</div>
            <div class="stuff">
              <div id="sec12" class="stuff-box animate__animated animate__fadeInUp" style="animation-delay: 500ms">
                <div class="icon3" />
                <div class="text">
                  <div class="main">菲律宾(PAGCOR)</div>
                  <div class="sub">监督牌照</div>
                </div>
              </div>
              <div id="sec13" class="stuff-box animate__animated animate__fadeInUp" style="animation-delay: 1000ms">
                <div class="icon4" />
                <div class="text">
                  <div class="main">英国GC监督委员会</div>
                  <div class="sub">监督牌照</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Form from './components/Form'
import Parallax from 'vue-parallaxy'
import Footer from './components/Footer'

export default {
  name: 'Login',
  components: { Form, Parallax, Footer },
  data() {
    return {
      formLeft: 1085,
      serviceList: [
        {
          icon: 'service',
          main: '7*24 专人顾问',
          sub: 'demo@demo.com'
        },
        {
          icon: 'qq',
          main: 'QQ',
          sub: '1234567890'
        },
        {
          icon: 'telegram',
          main: 'Telegram',
          sub: 'DEMO01'
        }
      ],
      productsList: [
        { main: '会员游戏数据', sub1: '完整查看盈亏状况', sub2: '喜好大厅' },
        { main: '费用分析', sub1: '各项杂费', sub2: '费用率完整呈现' },
        { main: '每日预览', sub1: '登录立即查看', sub2: '当日会员状况' },
        { main: '佣金预估', sub1: '实时预估可领取佣金', sub2: '查看本期活跃会员' }
      ],
    }
  },
  methods: {
    doAction(i) {
      switch (i.icon) {
        case 'service':
          window.open(
            i.sub,
            '_blank',
            'toolbar=no,scrollbars=no,menubar=no,status=no,resizable=yes,location=no'
          )
          break
        case 'qq':
          console.log(2)
          window.open(
            `tencent://message/?uin=${i.sub}&Site=qq&Menu=yes`,
            '_blank'
          )
          break
        case 'telegram':
          window.open(
            `https://telegram.me/${i.sub}`,
            '_blank'
          )
          break
      }
    },
  }
}
</script>
<style lang="scss" scoped>
.login-container {
  position: relative;
  width: 100%;
  min-width: 1200px;
  background: url('../../assets/login/bg.png');
  overflow: hidden;
  ::v-deep.is-parallax {
    transition: .3s transform ease-out;
    overflow: visible;
  }
  #sec0, #sec5, #sec6 {
    opacity: 0;
  }
  .ope-logo {
    width: 148px;
    height: 52px;
    background: url('../../assets/login/logo.png');
    position: absolute;
    left: 50%;
    transform: translateX(-600px);
    top: 50px;
    z-index: 20;
  }
  .form-container {
    position: absolute;
    top: 100px;
    width: 468px;
    height: 477px !important;
    z-index: 20;
    ::v-deep.is-parallax {
      will-change: unset !important;
    }
  }
  .bg-top {
    width: 100%;
    height: 916px;
    background: url('../../assets/login/bg_top.png') center 100% no-repeat;
    position: relative;
    .top-banner {
      position: absolute;
      width: 872px;
      height: 659px;
      left: 50%;
      top: 130px;
      transform: translateX(-600px) scale(1);
      .layer02 {
        position: absolute;
        width: 237px;
        height: 280px !important;
        left: 50%;
        transform: translateX(-100%);
        top: 25px;
      }
      .layer03 {
        position: absolute;
        width: 643px;
        height: 340px !important;
        left: 50%;
        transform: translateX(-65%);
        bottom: 200px;
      }
      .layer04 {
        position: absolute;
        width: 180px;
        height: 250px !important;
        left: 50%;
        transform: translateX(-15%);
        top: 75px;
      }
      .layer05 {
        position: absolute;
        width: 260px;
        height: 280px !important;
        left: 50%;
        transform: translateX(-132%);
        top: 85px;
      }
      .layer06 {
        position: absolute;
        width: 642px;
        height: 531px !important;
        left: 50%;
        transform: translateX(-63%);
        bottom: 100px;
      }
      .layer07 {
        position: absolute;
        width: 564px;
        height: 274px !important;
        left: 50%;
        transform: translateX(-57%);
        top: 300px;
      }
      img {
        position: absolute;
        height: 83%;
      }
    }
    .service-row {
      width: 1200px;
      display: flex;
      justify-content: space-between;
      position: absolute;
      padding-right: 40px;
      margin: 0 auto;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      .text-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title1 {
          width: 299px;
          height: 48px;
          background: url('../../assets/login/title_01.png');
          margin-bottom: 10px;
        }
        .text {
          color: #3b7ce3;
          font-size: 20px;
          font-weight: bold;
        }
      }
      .service-box {
        height: 133px;
        background: url('../../assets/login/box_1_bg.png');
        position: relative;
        display: flex;
        align-items: center;
        cursor: pointer;
        &::before {
          position: absolute;
          left: -40px;
          content: ' ';
          width: 40px;
          height: 133px;
          background: url('../../assets/login/box_1_left.png');
        }
        &::after {
          position: absolute;
          right: -40px;
          content: ' ';
          width: 40px;
          height: 133px;
          background: url('../../assets/login/box_1_right.png');
        }
        .icon {
          width: 53px;
          height: 54px;
          margin-right: 10px;
          img {
            width: 100%;
          }
        }
        .text {
          .main {
            color: #0c338e;
            font-size: 24px;
          }
          .sub {
            color: #7f95c5;
            font-size: 14.5px;
            overflow : hidden;
            text-overflow : ellipsis;
            white-space : nowrap;
            max-width: 158px;
            height: 21px;
          }
        }
      }
    }
  }
  .middle {
    padding-top: 170px;
    .sub-title {
      text-align: center;
      color: #3b7ce3;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 50px;
    }
    .products-list {
      display: flex;
      margin: 0 auto 139px;
      width: 1200px;
      justify-content: space-between;
      .product-card {
        opacity: 0;
        width: 288px;
        height: 408px;
        background: url('../../assets/login/box_2.png');
        text-align: center;
        .icon-bg {
          width: 184px;
          height: 184px;
          background: url('../../assets/login/icon_bg.png');
          margin: 50px auto 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 100px;
          }
        }
        .main {
          font-size: 24px;
          color: #0c338e;
          font-weight: bold;
          margin-bottom: 15px;
        }
        .sub {
          color: #7f95c5;
          font-size: 14.5px;
        }
      }
    }
  }
  .commiRatio {
    position: relative;
    width: 100%;
    height: 719px;
    margin: 0 auto 30px;
    display: flex;
    background: url('../../assets/login/img_03_bg.png') center no-repeat;
    .slogan-container {
      position: absolute;
      width: 600px;
      height: 719px;
      left: 50%;
      transform: translateX(-100%);
      .slogan {
        width: 444px;
        height: 177px !important;
        img {
          width: 444px;
          height: 177px !important;
          position: absolute;
          top: 60%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    .img-container {
      position: absolute;
      width: 600px;
      height: 719px;
      left: 50%;
      #layer01 {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .layer02 {
        width: 206px;
        height: 302px !important;
        img {
          width: 206px;
          height: 302px !important;
          position: absolute;
          top: 45%;
          left: 20%;
        }
      }
      .layer03 {
        width: 330px;
        height: 349px !important;
        img {
          width: 330px;
          height: 349px !important;
          position: absolute;
          top: 45%;
          left: 25%;
        }
      }
      .layer04 {
        width: 364px;
        height: 188px !important;
        img {
          width: 364px;
          height: 188px !important;
          position: absolute;
          top: 85%;
          left: 34%;
        }
      }
      .layer05 {
        width: 104px;
        height: 240px !important;
        img {
          width: 104px;
          height: 240px !important;
          position: absolute;
          top: 71%;
          left: 74%;
        }
      }
      .layer06 {
        width: 150px;
        height: 127px !important;
        img {
          width: 150px;
          height: 127px !important;
          position: absolute;
          top: 80%;
          left: 0%;
        }
      }
    }
  }
  .bg-bottom {
    position: relative;
    width: 100%;
    height: 817px;
    background: url('../../assets/login/bg_bottom.png') center 100% no-repeat;
    .support {
      display: flex;
      width: 1200px;
      margin: 130px auto 0;
      .left {
        width: 611px;
        height: 533px;
        .phone02 {
          width: 611px;
          height: 426px !important;
          img {
            width: 611px;
            height: 426px !important;
            position: absolute;
            left: 50%;
            transform: translateX(-102%);
            top: 52%;
          }
        }
        .phone01 {
          width: 287px;
          height: 533px !important;
          pointer-events : none;
          img {
            width: 287px;
            height: 533px !important;
            position: absolute;
            left: 50%;
            transform: translateX(-160.5%);
            top: 67%;
          }
        }
      }
      .right {
        width: 589px;
        .features {
          display: flex;
          .feature-card {
            opacity: 0;
            width: 198px;
            height: 199px;
            background: url('../../assets/login/box_3.png');
            margin-bottom: 59px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            & div:first-child {
              margin-bottom: 20px;
            }
            .icon1 {
              width: 60px;
              height: 60px;
              background-image: url('../../assets/login/icon_3-1.png');
              background-size: 60px 60px;
            }
            .icon2 {
              width: calc(112px * 0.58);
              height: calc(103px * 0.58);
              background-image: url('../../assets/login/icon_3-2.png');
              background-size: calc(112px * 0.58) calc(103px * 0.58);
            }
            .icon3 {
              width: calc(109px * 0.58);
              height: calc(104px * 0.58);
              background-image: url('../../assets/login/icon_3-3.png');
              background-size: calc(109px * 0.58) calc(104px * 0.58);
            }
            .main {
              font-size: 20px;
              color: #0c338e;
              font-weight: bold;
              margin-bottom: 10px;
              height: 30px;
              line-height: 30px;
              display: flex;
              .slash {
                color: #76c1ff;
                font-size: 40px;
                font-weight: 200;
              }
            }
            .sub {
              font-size: 14.5px;
              color: #7f95c5;
            }
          }
        }
        .right-title {
          height: 32px;
          line-height: 32px;
          font-size: 25px;
          font-weight: bold;
          background: -webkit-linear-gradient(#001f66, #2a62d5),
            -webkit-linear-gradient(#001f66, #001f66);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 0.4px #bfd2ff;
          text-indent: 20px;
          position: relative;
          &::before {
            top: 0px;
            left: 0px;
            content: ' ';
            position: absolute;
            width: 2px;
            height: 32px;
            background: #008DFF;
          }
        }
        .stuff {
          display: flex;
          .stuff-box {
            opacity: 0;
            display: flex;
            padding: 26px 18px 35px;
            width: calc(589px / 2);
            .icon1 {
              width: 44px;
              height: 66px;
              background: url('../../assets/login/logo_sponsor_01.png');
            }
            .icon2 {
              width: 47px;
              height: 66px;
              background: url('../../assets/login/logo_sponsor_02.png');
            }
            .icon3 {
              width: 50px;
              height: 50px;
              background: url('../../assets/login/logo_certification_01.png');
            }
            .icon4 {
              width: 85px;
              height: 56px;
              background: url('../../assets/login/logo_certification_02.png');
            }
            .text {
              margin-left: 19px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              .main {
                font-weight: bold;
                font-size: 14px;
                color: #001f66;
              }
              .sub {
                font-size: 12px;
                color: #7ea3dd;
              }
            }
          }
        }
      }
    }
  }
  .title-box {
    margin: 0 auto 10px;
    width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .left {
      width: 70px;
      height: 40px;
      background: url('../../assets/login/title_line_left.png');
      position: relative;
      &::before {
        content: ' ';
        left: -380px;
        width: 380px;
        height: 40px;
        position: absolute;
        background: url('../../assets/login/title_line_bg.png');
      }
    }
    .title2 {
      width: 247px;
      height: 48px;
      background: url('../../assets/login/title_02.png');
      margin: 0 20px;
    }
    .title3 {
      width: 297px;
      height: 48px;
      background: url('../../assets/login/title_03.png');
      margin: 0 20px;
    }
    .title4 {
      width: 398px;
      height: 48px;
      background: url('../../assets/login/title_04.png');
      margin: 0 20px;
    }
    .right {
      width: 70px;
      height: 40px;
      background: url('../../assets/login/title_line_right.png');
      position: relative;
      &::after {
        content: ' ';
        right: -380px;
        width: 380px;
        height: 40px;
        position: absolute;
        background: url('../../assets/login/title_line_bg.png');
      }
    }
  }
}
</style>
