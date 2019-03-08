<template>
  <div class="info">
    <header class="pub-header spline-bottom theme-spline">
      <span class="tap-action header-icon header-left header-icon-back" data-tap="back" data-log=""></span>
      <div class="header-content ui-ellipsis tap-action">银鹭桂圆八宝粥360g</div>
      <span class="tap-action header-icon header-right header-icon-"></span>
      <div class="header-percent theme-bg finish-percent" style="width: 0px;"></div>
    </header>
    <div class="mod-productDetail">
      <div class="wrapper">
        <div class="block">
          <div class="mod-banner-wrap-outer">
            <div class="mod-banner-wrap" data-src="http://img01.bqstatic.com/upload/goods/000/000/2435/0000002435_02190.jpg@500w_500h_90Q" style="background-image: url(http://img01.bqstatic.com/upload/goods/000/000/2435/0000002435_02190.jpg@500w_500h_90Q);"></div>
          </div>
        <div class="mod-pub-product operate">
          <div class="product-title-no-short">
            <p class="product-name"> 银鹭桂圆八宝粥360g </p>
          </div>
          <div class="product-shopping">
            <span class="product-price">￥<a>6</a></span>
          </div>
        </div>
      </div>
      <div class="product-properties block">
        <div class="title">商品详情</div>
        <div class="property-item">
          <span class="leading-word">品<span class="ui-hidden">中中</span>牌</span><span class="content-word">银鹭</span>
        </div>
        <div class="property-item">
          <span class="leading-word">产品规格</span><span class="content-word">360g&nbsp;</span>
        </div>
      </div>
        <div class="block">
          <img src="../assets/images/productDetailDefault.jpg" alt="各种新鲜闪电送达" width="100%">
        </div>
      </div>
    </div>

    <div class="footer-cart-circle theme-spline"></div>
    <div class="pub-footer footer mod-product-ope padding-left theme-spline spline-top">
      <div class="favor tap-action">收藏</div>
      <div class="operates">
        添加商品：
      </div>
    </div>
    <div class="cart-btn theme-bg tap-action">
      <div class="cart-btn-num" style="display: block;">8</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.info {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
}

.pub-header {
  position: relative;
  height: 4.5rem;
  line-height: 4.5rem;
  background-color: #f9fafd;
  border-color: #e0e0e0;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  z-index: 2;
}

.pub-header .header-left {
  left: 0.6rem;
  background-position: left center;
  text-align: left;
}
.pub-header .header-icon {
  position: absolute;
  top: 0;
  width: 6rem;
  height: 4.4rem;
  background-repeat: no-repeat;
  background-size: auto 2.5rem;
}
.header-icon-back {
  background-image: url(../assets/images/icon-back.png);
}

.pub-header .header-content {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 6rem;
  right: 6rem;
  font-size: 16px;
  text-align: center;
  font-weight: 700;
}

.ui-ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.theme-bg {
  background-color: #ffd600;
}
.pub-header .header-percent.finish-percent {
  -webkit-transition: width 0.1s, opacity 0.1s 0.3s;
  opacity: 0;
}

.pub-header .header-percent {
  position: absolute;
  left: 0;
  top: 100%;
  height: 0.2rem;
  width: 0;
  opacity: 1;
  -webkit-transition: width 5s cubic-bezier(0.4, 1, 0.5, 1);
}

.mod-productDetail {
  position: absolute;
  top: 4.5rem;
  left: 0;
  right: 0;
  bottom: 5rem;
  background-color: #efefef;
  font-size: 1.4rem;
  background-size: 5rem;
  color: #333;
  overflow-y: auto;
  overflow-x: hidden;
}

.main .block:first-child {
  margin-top: 0;
}
.mod-productDetail .block {
  margin: 0;
  margin-bottom: 0.5rem;
}
.main .block {
  margin: 1rem 0;
}
.mod-productDetail .block {
  padding: 0;
  margin: 0;
  margin-bottom: 0.5rem;
}

.block {
  background-color: #fff;
  display: block;
}

.mod-banner-wrap {
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -webkit-highlight-color: transparent;
  padding-bottom: 100%;
  background-size: cover;
}

.mod-pub-product {
  border-top: 0 none;
  margin: 0;
}

.mod-productDetail .product-name {
  padding: 0 1rem;
  color: #292d33;
  font-size: 2.3rem;
  line-height: normal;
  height: auto;
  text-align: center;
  white-space: normal;
  text-indent: 0;
}
.mod-productDetail .product-shopping {
  padding: 1rem 0 3rem 0;
  text-align: center;
}

.mod-productDetail .product-price {
  display: inline-block;
  color: #f40;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.9rem;
}

.mod-productDetail .product-price a {
  font-size: 2.2rem;
  font-weight: 700;
  color: #f40;
}

.mod-productDetail .block {
  margin: 0;
  margin-bottom: 0.5rem;
}
.mod-productDetail .product-properties {
  padding: 1.5rem;
}

.block {
  background-color: #fff;
  display: block;
}

.mod-productDetail .product-properties .title {
  margin-bottom: 1.5rem;
  background: url(../assets/images/title_bg.png) no-repeat center center;
  background-size: auto 0.2rem;
  text-align: center;
  color: #e0bd6a;
}

.mod-productDetail .property-item {
  line-height: 3rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.mod-productDetail .property-item .leading-word {
  color: #848c99;
  display: inline-block;
  width: 4em;
}
.mod-productDetail .property-item .content-word {
  padding-left: 1.5rem;
  color: #333;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

img {
  vertical-align: middle;
  border: 0;
  -ms-interpolation-mode: bicubic;
}

.theme-spline {
  border-color: #e0e0e0;
}
.footer-cart-circle {
  position: absolute;
  width: 6rem;
  height: 6rem;
  right: 0.5rem;
  bottom: 0.6rem;
  border-style: solid;
  border-width: 0.1rem;
  border-radius: 50%;
}
.spline-top {
  border-top-width: 1px;
  border-top-style: solid;
}
.theme-spline {
  border-color: #e0e0e0;
}
.padding-left {
  padding-left: 1.5rem;
}
.pub-footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 5rem;
  height: 5rem;
  background-color: #fff;
}
.footer .favor {
  background-image: url(../assets/images/favor.png);
}
.footer .favor {
  position: absolute;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  background-repeat: no-repeat;
  background-position: top center;
  display: inline-block;
  width: 4rem;
  line-height: 1.8rem;
  padding-top: 1.8rem;
  background-size: 1.8rem auto;
  font-size: 1rem;
  text-align: center;
}
.footer .operates {
  margin-left: 3rem;
  position: relative;
}

.tap-action {
  -webkit-user-select: none;
}
.cart-btn {
  position: absolute;
  z-index: 3;
  height: 5.4rem;
  width: 5.4rem;
  border: solid 0.3rem #fff;
  right: 0.6rem;
  bottom: 0.7rem;
  border-radius: 50%;
  background: center center no-repeat;
  background-size: 80%;
}
.cart-btn {
  background-image: url(../assets/images/cart-btn.png);
}

.theme-bg {
  background-color: #ffd600;
}

.cart-btn {
  border-color: #f7f7f7;
}
.cart-btn-num {
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 50%;
}
.mod-navs .navs-bubble-num,
.cart-btn-num {
  background-color: #f40;
  color: #fff;
  line-height: 1.8rem;
  width: 1.8rem;
  text-align: center;
  font-size: 1rem;
  -webkit-transition: -webkit-transform 0.1s;
}
</style>
