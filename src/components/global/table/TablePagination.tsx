import Pagination from '@mui/material/TablePagination';
import React from 'react';

interface Props {
    page: number;
    count: number;
    rowsPerPage: number;
    onPageChange: (e: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number) => void;
    onRowsPerPageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
            rowsPerPageOptions={[10, 15, 20, 25]}
            labelRowsPerPage='Maks na stronie'
            sx={{
                '& .MuiTablePagination-select': {
                    border: '1px solid #aaaaaf',
                    borderRadius: '3px',
                    color: '#aaaaaf'
                },
                '& .MuiTablePagination-selectLabel': {
                    color: '#aaaaaf',
                    marginBottom: '0'
                },
                '& 	.MuiTablePagination-displayedRows': {
                    marginBottom: '0',
                    color: '#aaaaaf'
                }
            }}
        />
    );
};
