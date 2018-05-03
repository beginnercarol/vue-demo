<script lang="tsx">
import Vue from 'vue';
import Component from 'vue-class-component';
import { CreateElement } from 'vue/types/vue';

@Component({

})
export default class SlotJsx extends Vue {
    dataList = [{
        title:'this is title',
        main: 'this is main part',
        footer: 'this is footer',
    },{
        title:'Holiday',
        main: 'Holiday',
        footer: '2018-04-29',
    }];
    get computed () {
        return <div>hh</div>
    };
    
    render(h){
        return (
            <div class="task">
                <div>tasks</div>
                <div class="slots">
                    {
                        this.dataList.map((item)=>(
                            <div>{item.title}</div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
</script>