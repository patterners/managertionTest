import * as React from 'react';
class Buttonmodule extends React.Component {
    render() {
        return (
            <div>
                <input type="button" value="确定" className="confirm" />
                <input type="reset" value="重置" className="reset" />
            </div>
        )
    }
}
export default Buttonmodule