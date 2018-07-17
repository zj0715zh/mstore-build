<template>
  <section class="pro_info">
    <div class="title">
      {{proInfo.proName+" "+proInfo.skuName}}
    </div>
    <div class="content">
      <div class="price row">商城价：<span class="unit">￥</span><span class="number">{{proInfo.price}}</span></div>
      <!-- <div class="sales row">
        <a href="http://www.itzoujie.com"><span>促销：</span>立即领取全品类优惠券→全场满500减20，满1000减50，满2000减100，满4000减200>></a>
      </div> -->
      <div class="des row"><span v-if="proInfo.hotWords!=''">{{proInfo.hotWords}}</span><span v-else>&nbsp;</span><span class="right">{{proInfo.sellerName}}</span></div>
      <div class="character row">
        <div class="left"><img src="./imgs/tips.png">假一罚十</div>
        <div class="left"><img src="./imgs/tips.png">15天退货保障</div>
        <div class="left"><img src="./imgs/tips.png">全国联保</div>
      </div>
    </div>
  </section>
</template>
<style lang="css" scoped>
	@import './pro_info.css'
</style>
<script>
export default {
  name: 'pro_info',
  props:{
    proInfo:{
      type:Object,
      default(){
        return {};
      }
    }
  },
}
</script>