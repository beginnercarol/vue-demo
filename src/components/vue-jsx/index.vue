<script lang="tsx">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
    }
})
export default class VueJSX extends Vue {
    msg: string = 'ts';

    render(h){
        return (
            <div class={this.msg}> msg</div>
        )
    }

}

</script>
