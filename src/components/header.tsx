import * as React from 'react';
import "../index.css"

export class header extends React.Component {
    render() {
        return (
            <div>
                <div className="log">
                    <img src="/1.png" />
                    <div className="log-right">
                        <span></span>
                        <p>chenmanjie</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default header;
