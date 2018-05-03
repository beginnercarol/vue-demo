<script lang="tsx">
import Vue from 'vue';
import Component from 'vue-class-component';
import ChildJSX from './child';
@Component({
    props: {

    },
    components: {
        ChildJSX
    }
})
export default class VueJSX extends Vue {
    msg: string = 'ts';
    name: string = this.msg;
    show: boolean = false;
    toggleBtn(){
        this.show = !this.show;
    };
    mounted(){
        console.log("======================");
        console.log("Mounted");
        console.log("======================");
    }
    render(h){
        const table = (
            <div>
               inn 
            </div>
        )
        return (
            <div>
                <ChildJSX msg={this.name}/>
                {table}
                <button onClick={this.toggleBtn}>click</button>
                <transition name="fade">
                    {this.show ? <p>hello</p> : null}
                </transition>
            </div>
        )
    }
    

}

</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>