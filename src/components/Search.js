import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from './../actions/filters';

const Search = (props) => {
    return (
        <div className="form-group">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Search Todo..."
                onChange={(e) => {
                props.dispatch(setTextFilter({ text: e.target.value }));
                }}
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(Search);