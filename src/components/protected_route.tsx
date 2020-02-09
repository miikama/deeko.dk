import React, { FunctionComponent} from 'react';
import { Route } from 'react-router-dom';
import { RouteProps, Redirect  } from 'react-router-dom'
import Authentication from '../Authentication'

// FIXME with correct types and not <any>...

const ProtectedRoute: FunctionComponent<RouteProps> = ({component, ...rest}) => {
    const auth = Authentication;

    const renderFn = (Component?: any) => (props: RouteProps) => {

        if( !auth.isAuthenticated() || !Component)
        {
            const redirectProps = {
                to: {
                    pathname: "/login",
                    state: {from: props.location}
                }
            }

            return (            
                <Redirect {...redirectProps} />
            )
        }
        
        
        return (
            <Component  {...props} />
        )
    }

    return <Route {...rest} render={renderFn(component)}/>    
}


export default ProtectedRoute