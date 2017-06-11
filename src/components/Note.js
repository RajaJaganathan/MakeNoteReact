import React, {Component, PropTypes} from 'react';
import moment from 'moment';

export default class Note extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
      <div className="note__item">
        <div className="notes__delete-icon">
          <span onClick={() => this.props.onDelete(this.props.item) } className="glyphicon glyphicon-remove"></span>
        </div>
        <div className="note__title">{this.props.item.title}
          <div className="note__last-saved col-xs-6 pull-right text-right">{moment(this.props.item.savedDate).format('LL') }</div>
        </div>
        <div className="note__body">
          <div className="note__desc">{this.props.item.desc}</div>
        </div>
      </div>
        );
    }
}

Note.propTypes = {
    onDelete: PropTypes.func,
    item: PropTypes.object,
};
