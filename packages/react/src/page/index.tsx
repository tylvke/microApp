import React from 'react';
import './index.less';

const Index = () => {
    return(
        <div>
            <h3>react index</h3>
            <button onClick={() => {
                window.singleEvent.emit('setTitle','hello')
            }}>hello</button>
        </div>
    )
}

export default Index;