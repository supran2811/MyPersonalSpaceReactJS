import * as React from 'react';
import * as Router from 'react-router';
import {Route , IndexRoute} from 'react-router';

import Welcome from '../components/Welcome';
import Main from '../components/Main';


export default  (
    
    <Route path = "/" component = {Main}>
            <IndexRoute component = {Welcome}/>
    </Route>
    
);

// export default routeMap;