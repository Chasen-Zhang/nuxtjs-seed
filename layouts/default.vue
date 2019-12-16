<template>
  <div>
    <nuxt />
  </div>
</template>
<style>
/* html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0; 
}*/
html, body, div, span, applet, object, iframe,h1, h2, h3, h4, h5, h6, p, blockquote, pre,a, abbr, acronym, address, big, cite, code,del, dfn, em, img, ins, kbd, q, s, samp,small, strike, strong, sub, sup, tt, var,b, u, i, center,dl, dt, dd, ol, ul, li,fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, td,article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,time, mark, audio, video {
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
}
body,input,select,textarea{
    font-size: 14px;
    line-height: 1;
    font-family: "Source Han Sans CN", "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB",Arial,sans-serif;
}
ol, ul {
    list-style: none;
}
img{
    vertical-align: top;
}
input::-webkit-outer-spin-button, input::-webkit-inner-spin-button{
    -webkit-appearance: none !important;
    margin: 0;
}
html,body{
    height: 100%;
    min-width:1024px;
    background-color: #fff;
}
a img{
    border: none;
}
a{
    text-decoration: none;
}
.flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.flex-top{
    align-items: flex-start;
}
.flex-bottom{
    align-items: flex-end;
}
.flex-stretch{
    align-items: stretch;
}
.flex-left{
    justify-content: flex-start;
}
.flex-right{
    justify-content: flex-end;
}
.flex-around{
    justify-content: space-around;
}
.flex-between{
    justify-content: space-between;
}
.flex-center{
    align-items: center;
    justify-content: center;
}
.flex-wrap{
    flex-wrap: wrap;
}
.flex-nowrap{
    flex-wrap: nowrap;
}
.flex-row{
    flex-direction: row;
}
.flex-column{
    flex-direction: column;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

a,
a:focus,
a:hover {
  cursor: pointer;
  color: inherit;
  outline: none;
  text-decoration: none;
}

div:focus{
  outline: none;
 }

a:focus,
a:active {
  outline: none;
}

a,
a:focus,
a:hover {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}
.fl{
    float: left;
}
.fr{
    float: right;
}
.clearfix {
  &:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }
}
.c-999{
    color: #999;
}
.slh-two {
overflow: hidden;
word-wrap: break-word;
word-break: normal;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
}
.error {
    color: red;
}
.wh100 {
    width: 100%;
    height: 100%;
}
.w100 {
    width: 100%;
}
.h100 {
    height: 100%;
}
.wh50 {
    width: 50%;
    height: 50%;
}
.w50 {
    width: 50%;
}
.h50 {
    height: 50%;
}
.w10 {
	width: 10%;
}
.w20 {
	width: 20%;
}
.w30 {
	width: 30%;
}
.w40{
    width: 40%;
}
.w48{
    width: 48%;
}
.w80{
    width: 80%;
}
.w70{
    width: 70%;
}
.w60{
    width: 60%;
}
.dl {
    display: inline;
}
.db {
    display: block;
}
.dlb {
    display: inline-block;
}
.pa {
    position: absolute;
}
.pr {
    position: relative;
}
.pf {
    position: fixed;
}
.t-center{
    text-align: center;
}
.t-right{
    text-align: right;
}
.f12{
    font-size: 12px;
}
.f14{
    font-size: 14px;
}
.f16{
    font-size: 16px;
}
.f18{
    font-size: 18px;
}
.f20{
    font-size: 20px;
}
.f22{
    font-size: 22px;
}
.f24{
    font-size: 24px;
}
.f26{
    font-size: 26px;
}
.f28{
    font-size: 28px;
}
.f30{
    font-size: 30px;
}
.f32{
    font-size: 32px;
}
.f34{
    font-size: 34px;
}
.f36{
    font-size: 36px;
}
.f38{
    font-size: 38px;
}
.f40{
    font-size: 40px;
}
.bold{
    font-weight: bold
}
.slh-two {
    overflow: hidden;
    word-wrap: break-word;
    word-break: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.slh-three {
	overflow: hidden;
	word-wrap: break-word;
	word-break: normal;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}
.slh {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.no-nowrap {
	display: inline-block;
	white-space: nowrap;
}
.warning{
    color: orangered;
}


/* margin */
.mt-10{
	margin-top: 10px;
}
.ml-10 {
	margin-left: 10px;
}
.mr-10{
	margin-right: 10px;
}
.mb-10{
	margin-bottom: 10px;
}
.mt-20 {
	margin-top: 20px;
}
.ml-20 {
	margin-left: 20px;
}

.mr-20 {
	margin-right: 20px;
}

.mb-20 {
	margin-bottom: 20px;
}
.mt-30 {
	margin-top: 30px;
}
.ml-30 {
	margin-left: 30px;
}

.mr-30 {
	margin-right: 30px;
}

.mb-30 {
	margin-bottom: 30px;
}
.mt-40 {
	margin-top: 40px;
}
.ml-40 {
	margin-left: 40px;
}

.mr-40 {
	margin-right: 40px;
}

.mb-40 {
	margin-bottom: 40px;
}
.ma-10{
	margin: 10px;
}
.ma-20 {
	margin: 20px;
}
.ma-30 {
	margin: 30px;
}
.ma-40 {
	margin: 40px;
}

/* padding */
.pt-10 {
	padding-top: 10px;
}

.pl-10 {
	padding-left: 10px;
}

.pr-10 {
	padding-right: 10px;
}

.pb-10 {
	padding-bottom: 10px;
}

.pt-20 {
	padding-top: 20px;
}

.pl-20 {
	padding-left: 20px;
}

.pr-20 {
	padding-right: 20px;
}

.pb-20 {
	padding-bottom: 20px;
}

.pt-30 {
	padding-top: 30px;
}

.pl-30 {
	padding-left: 30px;
}

.pr-30 {
	padding-right: 30px;
}

.pb-30 {
	padding-bottom: 30px;
}

.pt-40 {
	padding-top: 40px;
}

.pl-40 {
	padding-left: 40px;
}

.pr-40 {
	padding-right: 40px;
}

.pb-40 {
	padding-bottom: 40px;
}

.pa-10 {
	margin: 10px;
}

.pa-20 {
	padding: 20px;
}

.pa-30 {
	padding: 30px;
}

.pa-40 {
	padding: 40px;
}
.no-wrap{
	white-space:nowrap;
}
</style>
