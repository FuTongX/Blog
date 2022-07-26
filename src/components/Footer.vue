<template>
    <div class="footer">
        <div class="footer-wrap">
            <div class="copyright">
                <span> 网站作者: {{userinfo.nickName}}</span>
            </div>
            <div class="footer-text">
                <span>{{userinfo.motto}}</span>
                <div>
                    <span>power by Vue</span>
                </div>
                <!-- <a target="_blank" rel="noopener" href="https://beian.miit.gov.cn/#/Integrated/index"><img class="icp-icon entered loading"   data-ll-status="loading"><span>湘 ICP 备 20001832 号 - 4</span></a>
                <a target="_blank" rel="noopener" href="https://www.upyun.com/?utm_source=lianmeng&amp;utm_medium=referral">本网站由<span> 提供 CDN 加速服务</span></a> -->
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'BlogFooter',
    computed:{
        ...mapState("App",["userinfo"])
    }
}
</script>

<style lang="scss" scoped>
.footer{
    box-sizing: border-box;
    background-color: #49b1f5;
    width: 100%;
    height: 250px;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff;
    font-size: 0.8rem;
    .footer-wrap{
        text-align: center;
        line-height: 1.8em;
    }
    .footer-text{
        a {
            display: block;
        }
    }
}
</style> 

 