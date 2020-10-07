import React from 'react';

    const TableHeader = () => {     // boilerplate table header functional component
        return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>URL</th>
                    <th>Remove</th>
                </tr>
            </thead>
        );
    }

    // boilerplate table body functional component
    // we use Array.map to create table rows from LinkData passed via props

    const TableBody = (props) => {
        console.log(props.linkData);
        const rows = props.linkData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
            <td>
                <a href={row.URL}>{row.URL}</a>
            </td>
            <td>
                <button onClick={() => props.removeLink(index)}>Delete</button>
            </td>
            </tr>
        );
        });
        return <tbody>{rows}</tbody>;
    };

    const Table = (props) => {
        const { linkData, removeLink } = props;
            return (
                <table>
                    <TableHeader />
                    <TableBody removeLink = {removeLink} linkData ={linkData} />
                </table>
        );
    }

export default Table;