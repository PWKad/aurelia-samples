import {Models} from './models';

export class Widget {
  constructor () {
    this.widget = new Models.Widget();
  }

  activate(widget) {
    this.widget.id = widget.id;
    this.widget.name = widget.name;
    this.widget.width = widget.width;
    this.widget.offset = 12 - parseInt(widget.width);
  }

  get fullStyle(widget) {
  	console.log('getting style - ', widget);
  	return `(widget.offset !== 0 ? ' col-xs-offset-' + widget.offset : '')`;
  }
}