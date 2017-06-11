import React, { PropTypes } from 'react';
import _ from 'lodash';
import Note from './Note';

export default function Notes(props) {
    var notes = _.map(props.notes, (item, idx) => {
        return <Note key={idx} item={item} onDelete={props.onDelete} />;
    });

    return (
    <div className="note row">
      {notes}
    </div>
    );
}

Notes.propTypes = {
    notes: PropTypes.array,
    onDelete: PropTypes.func
};
