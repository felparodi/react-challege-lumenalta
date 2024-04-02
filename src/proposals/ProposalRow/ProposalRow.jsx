import React from "react";
import classNames from "classnames";

import "./ProposalRow.css";

const withoutEventDefault = (callback) =>
    event => {
        event.preventDefault();
        callback();
    };

const ProposalRow = ({ proposal, onStatusUpdate }) => {
    const { id, title, status, speaker, category } = proposal;
    return (
        <div data-testid={`proposal-id-${id}`} className={classNames("ProposalRow", `ProposalRow--${status}`)}>
            <div className="ProposalsRow__status_indicator"/>
            <div className="ProposalsRow__title">
                {title}
            </div>
            <div className="ProposalsRow__speaker">
                speaker: <span>{speaker}</span>
            </div>
            <div className="ProposalsRow__category">
                category: <span>{category}</span>
            </div>
            <div className="ProposalsRow__status">
                status: <span>{status}</span>
            </div>
            <button    
                disabled={status === 'accepted'}
                className="ProposalsRow__accept_button"
                onClick={withoutEventDefault(() => onStatusUpdate(id, "accepted"))}>
                Accept
            </button>
            <button
                disabled={status === 'rejected'}
                className="ProposalsRow__reject_button"
                onClick={withoutEventDefault(() => onStatusUpdate(id, "rejected"))}
            >
                Reject
            </button>
        </div>
    );
};

export default ProposalRow;
