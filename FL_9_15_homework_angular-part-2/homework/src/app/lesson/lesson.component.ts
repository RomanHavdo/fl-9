import {Component,Input} from '@angular/core';

@Component({
    selector: 'app-lesson',
    templateUrl: './lesson.component.html',
    styleUrls: ['./lesson.component.css'],
})

export class LessonComponent {
    showText=true;
    @Input() items;
    
    delete(item){
        this.items.splice(item.id-1, 1);
    }

    update(item,newTopic,newDate,newLector){
        item.topic=newTopic;
        item.date=newDate;
        item.lecture=newLector;
    }
}