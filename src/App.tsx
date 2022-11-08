import React, { useEffect, useRef, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import DM3 from 'dm3-react';

function App() {

    return (
        <>
            <h1>dm3 Web Demo</h1>
            <DM3 
                hideStorageSelection={true}
                defaultContact="0x3169bE33e0d5d44eE4DcCD39D7Be47d6153BFD3a"
                defaultServiceUrl='https://test-em1.herokuapp.com' 
                showHelp={false}
            />
            {/* <DM3 
                hideStorageSelection={true} 
                defaultContact="0x3169bE33e0d5d44eE4DcCD39D7Be47d6153BFD3a" 
                defaultServiceUrl='https://test-em1.herokuapp.com' 
                inline={true}
                style={{margin: "2rem", minHeight: "500px"}}
                showHelp={false}
            /> */}
     
        </>
    );
}

export default App;
