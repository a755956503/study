<template>
  <div id="home">
    <div class="main-content" :style="`backgroundImage: url(${bannerUrl})`">
      <div class="button-list">
        <div class="punch-card" v-if="isSign2" @click="goSign()">
          <p>打卡</p>
        </div>
        <div class="go-activity" v-if="status === 'GOIN'" @click="goActivity('in')">
          <p>了解活动详情</p>
        </div>
        <div class="go-activity" v-else-if="status === 'GOOUT'" @click="goActivity('out')">
          <p>了解活动详情</p>
        </div>
        <div v-else></div>
        <div class="go-activity" v-if="isComplete || $config.dev"  @click="goReview">
          <p>今日回顾</p>
        </div>
      </div>
    </div>
    <div class="study" @click="handleStartStudy"></div>
    <div class="other-content">
      <div class="handout" @click="goHandout">
        <p>每日讲义</p>
      </div>
      <div class="accent" @click="goFy">
        <p>音标指南</p>
      </div>
    </div>
    <Xalert title="课程提示" :status="1" :show="showFlag" @alert="alertChange">
      <p slot="content">还未到开课时间哦～</p>
    </Xalert>
    <Xfooter :thisDay="thisDay2"></Xfooter>
    <Loading :show="myLoadingFlag"></Loading>
    <PopUpWindow v-if='!myLoadingFlag'></PopUpWindow>
  </div>
</template>

<script>
  import Xfooter from './Common/Xfooter'
  import Loading from './Common/Loading'
  import Xalert from './Common/Xalert'
  import PopUpWindow from './Common/PopUpWindow'
  import Fbtn from './Tool/Fbtn'
  import { mapActions, mapState } from 'vuex'
  import WeChat from '../lib/wechat'

  export default {
    name: 'Home',
    data () {
      return {
        bannerUrl: '',
        day: '',
        myLoadingFlag: true,
        ban: false,
        thisDay: '',
        showFlag: false,
        url: '',
        status: '',
        showEvaluation: false,  // 暂时只有五期C班能够使用测评功能
        CONST: {
          CNEN: 'correcting_package_six_en_ch',
          CNCN: 'correcting_package_six_ch_ch'
        }
      }
    },
    computed: {
      ...mapState({
        A: state => state.gobal.A,
        B: state => state.gobal.B,
        C: state => state.gobal.C,
        isSign: state => state.user.isSign,  // 已打卡
        isSign2: state => state.user.isSign2,  // 去打卡
        isComplete: state => state.user.isComplete,
        source: state => state.user.source,
        openId: state => state.user.openId,
        questionInfo: state => state.questions.questionInfo,
        title: state => state.questions.title,
        loadingFlag: state => state.questions.loadingFlag,
        date: state => state.gobal.date,
        thisDay2: state => state.gobal.day,
        classId: state => state.questions.classId,
        userType: state => state.user.type,
        orderList: state => state.order.orderList,
        startTime: state => state.gobal.startTime,
        currentTime: state => state.gobal.currentTime,
        correctingCode: state => state.gobal.correctingCode,
        periodNumber: state => state.gobal.periodNumber,
        classType: state => state.questions.classType,
        studentNumber: state => state.user.studentNumber
      }),
      timeString () {
        let timeStamp = this.date
        let selectedDay = this.questionInfo.day
        if (this.periodNumber === 5) {
          if (selectedDay < 25) {
            timeStamp = new Date('2018/01/21').getTime() / 1000 + selectedDay * 24 * 3600
          } else {
            timeStamp = new Date('2018/01/21').getTime() / 1000 + (selectedDay + 7) * 24 * 3600
          }
        }
        let dateObj = new Date((timeStamp + 8 * 3600) * 1000)
        let month = dateObj.getUTCMonth() + 1
        let date = dateObj.getUTCDate()
        let res = `${this.$tool.addPrefixZero(month, 2)}.${this.$tool.addPrefixZero(date, 2)}`
        return res
      }
    },
    methods: {
      ...mapActions([
        'rollbackNum',
        'setSelectDay',
        'initQuestions'
      ]),
      // 前往评测
      goEvaluation () {
        this.$track.openEvaluation()
        this.$router.push('/evaluationhistory')
      },
      // 前往活动列表
      goActivity (status) {
        this.$track.openActivity()
        if (status === 'in') {
          this.$router.push(this.url)
        } else {
          window.location.href = this.url
        }
      },
      goSign () {
        this.$track.homeSign()
        this.$router.push('/share')
      },
      // 前往发音手册
      goFy () {
        this.$tool.updateDocTitle('音标指南')
        this.$router.push('/pronunciationlist')
      },
      goReview () {
        this.$tool.updateDocTitle('今日回顾')
        this.$router.push('/review')
      },
      // 前往讲义
      goHandout () {
        this.$tool.updateDocTitle('每日讲义')
        this.$router.push('/jy')
      },
      handleStartStudy () {
        if (this.ban && this.userType !== 'inside') {
          this.showFlag = true
        } else {
          this.$router.push('/study')
          this.$track.openPage(this.thisDay2)
        }
      },
      alertChange (data) {
        this.showFlag = data
      },
      handleAction (action) {
        switch (action) {
          case 'teaching':
            this.$router.push('/jy')
            break
          case 'manual':
            this.$router.push('/activitymore')
            break
          case 'Appointment':
            if (this.correctingCode) {
              this.$api.getAppointedItems(this.correctingCode).then(res => {
                if (res.data.code === 200) {
                  if (res.data.data.appointments.length > 0) {
                    let foundItem = res.data.data.appointments.find(item => {
                      return item.schedules.length > 0
                    })
                    if (foundItem) {
                      this.$router.push('/orderlist2')
                    } else {
                      this.$api.getPackageDetail(this.correctingCode).then(res => {
                        let currentPackage = res.data.data.userPackages.find(pkg => {
                          return (pkg.exitSequence === -1)
                        })
                        if (currentPackage.pack.typeCode === this.CONST.CNEN) {
                          this.$router.push('/firstOrder')
                        } else if (currentPackage.pack.typeCode === this.CONST.CNCN) {
                          this.$router.push('/orderlist2')
                        }
                      })
                    }
                  } else {
                    this.alertContent = '未加入纠音包，请咨询小闲学姐～'
                    this.showFlag = true
                  }
                }
              })
            }
            break
          default:
            break
        }
      }
    },
    created () {
      let searchObj = this.$tool.parseSearch(location.search)
      this.$api.getWxConfig(location.href).then(res => {
        let data = res.data
        const config = {
          appId: data.appId,
          timestamp: data.timestamp,
          nonceStr: data.nonceStr,
          signature: data.signature
        }
        window.wechat = new WeChat(config)
        window.wechat.init()
        window.wechat.hideMenu()

        let jsonData = null;
        if (this.$tool.isV2()) {
          jsonData = {
            classId: searchObj.classId,
            source: searchObj.source,
          };
        } else {
          jsonData = {
            code: searchObj.code,
            source: searchObj.source,
          };
        }
        return this.initQuestions(jsonData);
      }).then(() => {
        this.$track.initTracker(this.openId, this.classId, this.classType, this.source)
        // 判断进入学习系统的渠道
        if (searchObj.source === undefined) {
          searchObj.source = 'menu'
        }
        this.$track.openXD(searchObj.source)
        // 根据时间判断是否开课
        if (this.currentTime <= this.startTime) {
          window.BAN = true
        }
        this.ban = window.BAN
        this.setSelectDay(this.thisDay2)
        // 获取首页banner
        return this.$api.getIndexImg(this.classId)
      }).then(res => {
        if (res.data.code === 200) {
          this.bannerUrl = res.data.data.imgUrl
          this.url = res.data.data.url
          this.status = res.data.data.status
          let action = searchObj.action
          if (action) {
            this.handleAction(action)
          }
          this.myLoadingFlag = false
        }
      }).catch(err => {
        console.error(err)
      })
    },
    activated () {
      this.$tool.updateDocTitle('闲蛋英语')
    },
    components: {
      Xfooter,
      Loading,
      Xalert,
      Fbtn,
      PopUpWindow
    }
  }
</script>



<style lang="stylus" type="text/stylus">
  #home
    width 100%
    height 100%
    color #414B4B
    .main-content
      width 100%
      height 17.65rem
      background-size 100%
      background-repeat no-repeat
      position relative
      .button-list
        position: absolute
        top: 6.3rem
        left: 2.15rem
      .punch-card
        box-shadow: 0 0 15px 0 #ccc;
        width 5.75rem
        height 1.575rem
        margin-bottom: 0.5rem
        background-image: linear-gradient(-141deg, #FDEA48 0%, #FCDC31 100%);
        border-radius: 0.25rem;
        &>p
          text-align center
          font-size 0.75rem
          color: #414B4B;
          letter-spacing: 0.021rem;
          line-height 1.575rem
      .go-activity
        width 5.75rem
        height 1.575rem
        box-shadow: 0 0 15px 0 #ccc;
        background #FFFFFF
        border-radius 0.25rem
        margin-bottom: 0.5rem
        &>p
          text-align center
          font-size 0.75rem
          color: #414B4B;
          letter-spacing: 0.021rem;
          line-height 1.575rem
    .study
      position relative
      width 14.475rem
      height 4rem
      background-image url("../assets/img/start-stuady.png")
      background-repeat no-repeat
      background-size 100%
      margin -2rem auto
    .review
      margin-top 1rem
      width 100%
      height 3rem
      display flex
      display -webkit-flex
      justify-content space-around
      align-items center
      .handout
        width 7.5rem
        height 2.875rem
        background: #F7F8F8;
        border-radius: 0.5rem;
        &>p
          font-weight 300;
          font-size: 0.75rem;
          color: #414B4B;
          letter-spacing: 0.021rem;
          text-align: center;
          line-height 2.875rem
    .other-content
      margin-top 2rem
      width 100%
      height 3rem
      display flex
      display -webkit-flex
      justify-content space-around
      align-items center
      .handout
        width 7.5rem
        height 2.875rem
        background: #F7F8F8;
        border-radius: 0.5rem;
        &>p
          font-weight 300;
          font-size: 0.75rem;
          color: #414B4B;
          letter-spacing: 0.021rem;
          text-align: center;
          line-height 2.875rem
      .accent
        width 7.5rem
        height 2.875rem
        background-color #F7F8F8
        border-radius: 0.5rem
        &>p
          font-weight 300;
          font-size: 0.75rem;
          color: #414B4B;
          letter-spacing: 0.021rem;
          text-align: center;
          line-height 2.875rem
</style>
