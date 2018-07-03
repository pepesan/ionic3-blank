import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'form',
  segment: 'form'
})
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {
  todo;
  todos = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.resetTodo();
  }

  resetTodo() {
    this.todo = {
      title : '',
        description: ''
    }
  }
  logForm() {
    console.log(this.todo);
    this.todos.push(this.todo);
    this.resetTodo();
  }
  itemSelected(item) {
    console.log(item);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

}
