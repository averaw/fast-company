import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, onToggleBookMark, id }) => {
    return (
        <i
            onClick={() => onToggleBookMark(id)}
            className={`bi bi-bookmark${status ? "-fill" : ""}`}
        ></i>
    );
};

BookMark.propTypes = {
    status: PropTypes.string.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    id: PropTypes.PropTypes.number.isRequired
};
export default BookMark;
