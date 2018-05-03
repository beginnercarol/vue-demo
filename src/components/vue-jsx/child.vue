<script lang="tsx">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
        msg: String
    }
})
export default class ChildJSX extends Vue {
    msg: string;
    render(h){
        
        return (
            <div>
            2333
                {this.msg}
            </div>
        )
    }
    

}

</script>
