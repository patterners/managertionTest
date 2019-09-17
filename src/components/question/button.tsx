import * as React from 'react';
class Buttonmodule extends React.Component {
    render() {
        return (
            <div>
                <input type="button" value="确定" className="confirm" onClick={this.confim.bind(this)} />
                <input type="reset" value="重置" className="reset" />
            </div>
        )
    }
    confim(){
        
    }
}
export default Buttonmodule