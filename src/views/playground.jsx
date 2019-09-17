import React from 'react'
import AceEditor from "react-ace";
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

function Playground () {
    const [state, setState] = React.useState({
        value: '',
    });
    const onChange = (e) => {
        setState({value: e})

    }

    const onLoad = () => {
        console.log('loaded')
    }

    return (
        <React.Fragment>
            <div>
                Output
                {state.value}
            </div>
            <AceEditor
                placeholder="Placeholder Text"
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
                className={'editor'}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2,
                }}/>
        </React.Fragment>

    )
}

export default Playground