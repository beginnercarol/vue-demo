import '../assets/iconfont/iconfont.css';
import './index.scss';
import Vue from 'vue';
import Component from 'vue-class-component';
import config from './common/config';

@Component({
    props: {
        appName: String,
    },
    components: {

    }
})
export default class MobApp extends Vue {
    // props

    // data
    navList: Array<object> = config['nav_link'];
    state: String = 'home';
    // methods
    changeState(cur){
        const ctx = this;
        const sta = cur.split('/')[2]
        return function(){
            console.log('setState =>',sta);
            ctx.state = sta;
        }
    }

    // computed

    render(h){
        const panelHome = (
            <div class="panel-home">
                'homepage'
            </div>
        )
        const panleDiscover = (
            <div class="panel-discover">
                discover
            </div>
        )
        const panelMsg = (
            <div class="panel-msg">
                message
            </div>
        )
        return (
            <div class="mob-app">
                <div class="navbar">
                    {this.navList.map((val) => (
                        // <router-link to={val['path']}>
                        //     <i class={`iconfont ${val['icon']}`}/>{val['title']}
                        // </router-link>
                        <span onClick={ this.changeState(val['path']) }><i class={`iconfont ${val['icon']}`}/>{val['title']}</span>
                    ))}
                </div>
                <div className="main">
                    {/* <el-button >朴素按钮</el-button> */}
                    {this.state==='home'?panelHome:(this.state==='discover'?panleDiscover:panelMsg)}
                </div>
            </div>
        )
    }
}
