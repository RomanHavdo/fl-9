import { Component, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
})

export class ModalComponent {
    
    @Output() closeModal = new EventEmitter();
    @Output() data = new EventEmitter();

    public newTopic: string = "";
    public newDate: string = "";
    public newLecture: string = "";
    items = [];
    lesson;
    counter = 1;
    
    addItem() {
        this.lesson={
            "topic": this.newTopic,
            "date": this.newDate,
            "lecture": this.newLecture
        };
        this.data.emit(this.lesson);
        this.closeModaler();
    }

    closeModaler() {
        this.closeModal.emit(false);
    }
}