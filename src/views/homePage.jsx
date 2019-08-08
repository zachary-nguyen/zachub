import RepositoryCard from "../components/repositoryCard";
import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';

function HomePage() {
    const [repositories, setRepositories] = React.useState(null);

    React.useEffect(() => {
        axios.get('https://api.github.com/users/zachary-nguyen/repos')
            .then(data=> {
                console.log(data.data);
                let repos = [];
                // for(let i = 0; i< data.data.length; i++){
                //     console.log(data.data[i])
                // }
                setRepositories(repos)
            })
            .catch(error => {
                console.log(error)
            })
    }, [repositories])
    return(
        <div className={'homepage'}>
            <div className={'homepage-container'}>
                <Table className={'table-mrg'}>
                    <TableBody>
                        <TableRow>
                            <TableCell size={'small'} align={'center'} padding={'none'}><RepositoryCard repository={'InstantMail'}/></TableCell>
                            <TableCell size={'small'} align={'center'} padding={'none'}><RepositoryCard repository={'InstantMail'} /></TableCell>
                        </TableRow>
                        <TableRow className={'table-mrg'} >
                            <TableCell size={'small'} align={'center'} padding={'none'}><RepositoryCard repository={'InstantMail'}/></TableCell>
                            <TableCell size={'small'} align={'center'} padding={'none'}><RepositoryCard repository={'InstantMail'}/></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell size={'small'} align={'center'} padding={'none'}><RepositoryCard repository={'InstantMail'}/></TableCell>
                            <TableCell size={'small'} align={'center'} padding={'none'}><RepositoryCard repository={'InstantMail'}/></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        </div>

    )
}

export default HomePage