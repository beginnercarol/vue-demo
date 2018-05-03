<script lang="tsx">
import Vue from 'vue';
import Component from 'vue-class-component';
@Component({
    props: {
        content: String
    }
})
export default class ExpPanel extends Vue{
    content: string;
    render(h){
        return (<div>{this.content}</div>)
    }
}
</script>
