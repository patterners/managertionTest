import * as React from 'react';
class Selectmodule extends React.Component<any> {
    render() {
        console.log(this.props.uid)
        return (
            <div>
                <select>
                    {this.props.uid && this.props.uid.map((item: any) => {
                        return <option key={item.identity_id} value={item.identity_text} >{item.identity_text}</option>
                    })}
                    {this.props.hasview && this.props.hasview.map((item: any) => {
                        return <option key={item.view_id} value={item.view_authority_text} >{item.view_authority_text}</option>
                    })}
                    {this.props.viewauthority && this.props.viewauthority.map((item: any) => {
                        return <option key={item.view_id} value={item.view_authority_text} >{item.view_authority_text}</option>
                    })}
                    {this.props.apiauthority && this.props.apiauthority.map((item: any) => {
                        return <option key={item.api_authority_id} value={item.api_authority_text} >{item.api_authority_text}</option>
                    })}
                </select>
            </div >
        )
    }
}
export default Selectmodule