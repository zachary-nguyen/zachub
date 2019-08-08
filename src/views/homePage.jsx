import RepositoryCard from "../components/repositoryCard";
import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function HomePage() {

    return(
        <div className={'homepage'}>
            <div className={'homepage-container'}>
                <Table padding={'none'}>
                    <TableBody>
                        <TableRow>
                            <TableCell size={'small'} align={'center'} padding={'none'}><RepositoryCard/></TableCell>
                            <TableCell size={'small'} align={'center'} padding={'none'}><RepositoryCard/></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell size={'small'} align={'center'} padding={'none'}><RepositoryCard/></TableCell>
                            <TableCell size={'small'} align={'center'} padding={'none'}><RepositoryCard/></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell size={'small'} align={'center'} padding={'none'}><RepositoryCard/></TableCell>
                            <TableCell size={'small'} align={'center'} padding={'none'}><RepositoryCard/></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        </div>

    )
}

export default HomePage