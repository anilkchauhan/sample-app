import React, { Component } from 'react';

class Table extends Component {
    render() {
        let { columns, data, id } = this.props;
        return (
            <div>
                <table border="1" width="100%">
                    <tbody>
                    {
                        data.map(item => (
                            <tr key={item[id]}>
                                {
                                    columns.map(column => (
                                        <td key={column}>
                                        { item[column] }
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}


export default Table;