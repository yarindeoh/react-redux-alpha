import React, { useCallback } from 'react';

import { useFilter } from '../TodoListHooks';
import { visibilityFilters } from '../todoListConstants';

const Link = props => {
    const { onClick, visibilityFilter } = useFilter(props.filter);
    const filterOnClick = useCallback(() => {
        onClick(props.filter);
    }, [props.filter]);

    return (
        <button
            onClick={filterOnClick}
            disabled={visibilityFilter}
            style={{
                marginLeft: '4px'
            }}
        >
            {props.children}
        </button>
    );
};

const FilterRow = () => (
    <React.Fragment>
        <span>Show: </span>
        <Link filter={visibilityFilters.SHOW_ALL}>All</Link>
        <Link filter={visibilityFilters.SHOW_ACTIVE}>Active</Link>
        <Link filter={visibilityFilters.SHOW_COMPLETED}>Completed</Link>
    </React.Fragment>
);

export default FilterRow;
