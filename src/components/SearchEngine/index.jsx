import React, {useState} from "react";
import Input from '../Input'

function SearchEngine(props) {
    const [engine, setEngine] = useState('g');
    const engineName = engine == "ddg" ? "Duck Duck Go" : "Google";
    const link = engine === "ddg" ? "https://duckduckgo.com/" : "https://google.com/search";

    return (
        <React.Fragment>
            <div class="btn-group" role="group">
                <Input engine={engine} link={link} engineName={engineName}/>

                <button type="button" onClick={()=>{setEngine('ddg')}} class="btn btn-warning">DuckDuckGo</button>
                <button type="button" onClick={()=>{setEngine('g')}} class="btn btn-dark">Google</button>
            </div>
        </React.Fragment>
    );
}

export default SearchEngine;