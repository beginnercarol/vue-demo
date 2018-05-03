<script lang="tsx">
import Vue from 'vue';
import Component from 'vue-class-component';
import ExpPanel from './panel';
@Component({
    props: {
        content: String
    },
    components: {
        ExpPanel
    }
})
export default class ExpandPanel extends Vue {
    //props
    content:string;

    //data
    show:boolean = false;

    beforeCreate(){
        console.log("======================");
        console.log("++++++++++++++++++++++");
    }
    created(){
        console.log("======================");
        console.log("data=>",this.$data);
        console.log("++++++++++++++++++++++");
    }
    beforeMount(){
        console.log("======================");
        console.log("++++++++++++++++++++++");
    }
    mounted(){
        console.log("======================");
        console.log("Mounted");
        console.log("++++++++++++++++++++++");
    }
    beforeDestroy(){
        console.log("======================");
        console.log("++++++++++++++++++++++");
    }
    destroyed(){
        console.log("======================");
        console.log("++++++++++++++++++++++");
    }
    togglePanel(){
        this.show = !this.show;
    }
    
    render(h){
        const table = (
            <div>
               inn 
            </div>
        )
        const expPanel = (
            <div>
                {this.content}
            </div>
        )
        return (
            <div>
                <div onClick={this.togglePanel}>Expanded Panel <i class="iconfont icon-discover"/></div>
                <transition name="exp-panel">
                {this.show?<ExpPanel content={this.content}/>:null}
                </transition>
            </div>
        )
    }
}

</script>

<style>
.exp-panel-enter-active, .exp-panel-leave-active {
  transition: opacity .5s;
}
.exp-panel-enter, .exp-panel-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>