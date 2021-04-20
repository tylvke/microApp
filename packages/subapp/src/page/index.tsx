import React, { useContext } from 'react';
import './index.less';

const Index = () => {
    const {
        title,
        setTitle,
    } = useContext(window.GlobalContext);
    
    return(
        <div>
            <h3>subapp index1</h3>
            <button onClick={() => {
                setTitle('特定中心路由微前端')
            }}>修改标题</button>
        </div>
    )
}

export default Index;