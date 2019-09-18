import React from 'react'
import AceEditor from "react-ace";
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon';
import Typography from "@material-ui/core/Typography";

function Playground () {

    const [state, setState] = React.useState({
        value: '',
        script: null,
    });

    const run = () => {
        const script = document.createElement('script');
        try {
            let content = '(function(){ \n' + state.value + '\n  })();';
            script.appendChild(document.createTextNode(content));
            clear();
            document.getElementById('output').append(script)
        } catch (e) {
            script.text = state.value;
            console.log(e)
            clear();
            document.getElementById('output').append(script)
        }
    };

    const clear = () => {
        if(document.getElementById('output')){
            document.getElementById('output').innerHTML = '';
        }
    }

    const onChange = (e) => {
        setState({value: e})
    }

    const onLoad = () => {
        console.log('loaded')
    }

    return (
        <React.Fragment>
            <div >
                <Button variant="contained" onClick={run} color="primary" className={'half-width btn-no-border'}>
                    Run
                    <Icon >send</Icon>
                </Button>
                <Button onClick={() => {clear(); alert('Script cleared')}} variant="contained" color="secondary" className={'half-width btn-no-border'}>
                    Clear
                    <Icon >cancel</Icon>
                </Button>
            </div>
            <AceEditor
                placeholder="// To test output run function from document.getElementById('output').innerHTML = function();"
                mode="javascript"
                theme="monokai"
                name="editor"
                onLoad={onLoad}
                onChange={onChange}
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={state.value}
                className={'editor-block-left'}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2,
                }}/>
            <div className={'editor-block-right'}>
                <Typography variant="h6" component="h2">
                    Output
                </Typography>
                <div id={'output'}>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Playground