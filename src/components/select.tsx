import * as React from 'react';
class Selectmodule extends React.Component {
    render() {
        return (
            <div>
                <select>
                    <option value="请选择身份id">请选择身份id</option>
                    <option value="管理员">管理员</option>
                    <option value="出题者">出题者</option>
                </select>
            </div>
        )
    }
}
export default Selectmodule