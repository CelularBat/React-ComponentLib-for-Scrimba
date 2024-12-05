import React from 'react';
import {CodeBlock,dracula} from 'react-code-blocks';

function DisplayCode({code}) {
    return (
        <div style={{fontFamily:"Consolas", borderRadius:"8px"}}>
        <CodeBlock
        text={code}
        language={'jsx'}
        theme={dracula}
      />
      </div>
    );
}

export default DisplayCode;