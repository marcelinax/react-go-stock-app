import Pagination from '@mui/material/TablePagination';
import React from 'react';

interface Props {
    page: number;
    count: number;
    rowsPerPage: number;
    onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number) => void;
    onRowsPerPageChange: () => void;
}

export const TablePagination: React.FC<Props> = ({
    count, onRowsPerPageChange, onPageChange, page, rowsPerPage
}) => {
    return (
        <Pagination
            component="div"
            count={count}
            page={page}
            onPageChange={onPageChange}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={onRowsPerPageChange}
        />
    );
};
