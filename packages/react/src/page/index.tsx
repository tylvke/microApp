import React from 'react';
import './index.less';

const Index = () => {
    window.singleEvent.emit('msg',11)
    return(
        <h3>react index</h3>
    )
}

export default Index;