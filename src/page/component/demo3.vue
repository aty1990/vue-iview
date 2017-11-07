<!--主页面组件-->
<template>
    <div class="demo3">
        <div class="in exhibition_hall">
            <div id="" class="roundabout_box">
                <ul>
                    <li><a href="#"><img src="http://www.jq22.com/demo/jQuery3Dlbt201703302245/img/zt1.png" alt=""><span class="text">Picture information 1</span></a></li>
                    <li><a href="#"><img src="http://www.jq22.com/demo/jQuery3Dlbt201703302245/img/zt2.png" alt=""><span class="text">Picture information 2</span></a></li>
                    <li><a href="#"><img src="http://www.jq22.com/demo/jQuery3Dlbt201703302245/img/zt3.png" alt=""><span class="text">Picture information 3</span></a></li>
                    <li><a href="#"><img src="http://www.jq22.com/demo/jQuery3Dlbt201703302245/img/zt4.png" alt=""><span class="text">Picture information 4</span></a></li>
                </ul>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</template>
<script>
    import '@/assets/js/roundabout'
    export default {
        mounted(){
            $(document).ready(function(){
                $('.roundabout_box ul').roundabout({
                    duration: 1000,
                    minScale: 0.6,
                    autoplay: true,
                    autoplayDuration: 5000,
                    minOpacity: 0,
                    maxOpacity: 1,
                    reflect: true,
                    startingChild: 3,
                    autoplayInitialDelay: 5000,
                    autoplayPauseOnHover: true,
                    enableDrag: true
                });
            });

        }
    }
</script>
<style scoped>
    .tline {color:#dedede;}
    .roundabout_box {width:980px;height:480px;}
    .roundabout_box ul {}
    .roundabout_box img {width:100%;}
    /**********roundabout**********/
    .roundabout_box {height:425px;width:980px;margin:40px auto 20px auto;}
    .roundabout-holder{list-style:none;width:500px;height:425px;margin:0px auto;}
    .roundabout-moveable-item{font-size:12px!important;height:425px;width:650px;cursor:pointer;background:#f9f9f9;}
    .roundabout-moveable-item img{height:100%;width:100%;background-color:#FFFFFF;margin:0;}
    .roundabout-in-focus{cursor:auto;border-left:1px #fff solid;border-right:1px #fff solid;}
    .roundabout-in-focus000:hover{-webkit-box-shadow:0px 0px 20px #787878;-moz-box-shadow:0px 0px 20px #787878;background:#f9f9f9;}
    .roundabout-holder .text{color:#999;}
    .roundabout-in-focus000:hover span{display:inline;position:absolute;bottom:5px;right:5px;padding:8px 20px;background:#f9f9f9;color:#3366cc;z-index:999;-webkit-border-top-left-radius:5px;-moz-border-radius-topLeft:5px;border-left:1px solid #aaaaaa;border-top:1px solid #aaaaaa;}
    .roundabout a:active, .roundabout a:focus, .roundabout a:visited{outline:none;text-decoration:none;}
    .roundabout li{margin:0}

</style>
