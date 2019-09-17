import RepositoryCard from "../components/repositoryCard";
import React from "react";
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

function HomePage() {
    const [repositories, setRepositories] = React.useState(null);

    React.useEffect(() => {
        if(repositories === null){
            axios.get('https://api.github.com/users/zachary-nguyen/repos')
                .then(result => {
                    setRepositories(result.data)
                })
                .catch(error =>{
                    console.log(error)
                })
        }
    },[])

    const generateTable  = () => {
        let tableContent = []
        if(repositories){
            for(let i=0; i< repositories.length; i++){
               tableContent.push(
                   <Grid key={repositories[i].id} item xs>
                      <RepositoryCard key={repositories[i].id}
                                      repository={repositories[i].name}
                                      description={repositories[i].description}/>
                   </Grid>
               )
            }
           return tableContent;
        }
        return null
    }
    return(
        <div className={'homepage'}>
                <Grid container
                      alignItems="stretch"
                      spacing={0}
                      className="grid-background">
                    {generateTable()}
                </Grid>

        </div>

    )
}

export default HomePage