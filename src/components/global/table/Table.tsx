import React from 'react';

interface Props {
    tableHeadings: string[];
    tableItemsKeys: ((i: any) => any)[];
    items: any[]
}

export const Table: React.FC<Props> = ({ tableHeadings, tableItemsKeys, items }) => {
    
    const renderTableHeadings = (): JSX.Element | JSX.Element[] => {
        return tableHeadings && tableHeadings.map(heading => {return (
            <th scope="col" key={heading}>{heading}</th>
        );});
    };

    const renderTableRowDate = (item: any): JSX.Element | JSX.Element[] => {
        return items && tableItemsKeys.map((fn,index) => {return (
            <td key={index}>{fn(item)}</td>
        );});
    };

    const renderTableItems = (): JSX.Element | JSX.Element[] => {
        return items && items.map((item,index) => {return (
            <tr key={index}>
                {renderTableRowDate(item)}
            </tr>
        );});
    };

    return (
        <table className="table border overflow-hidden">
            <thead>
                <tr> 
                    {renderTableHeadings()}
                </tr>
            </thead>
            <tbody>
                {renderTableItems()}
            </tbody>
        </table>
    );
};
