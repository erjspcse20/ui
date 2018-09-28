//Higher Order Component (HOC) - A component that rander another component
//Reuse code
//Rander hijacking
//prop manipulation
//Abstract State

import react from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The Info is: {props.Info}</p>
    </div>
);
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share it</p> }
            
        <WrappedComponent {...props}/>
        </div>
        
    )
}
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
                ) : (
                <p>You don't have access for the page</p>
                )}
        </div>
    )
}
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDom.render(<AdminInfo isAdmin={false} info="there are the details" />, document.getElementById('app'));
ReactDom.render(<AuthInfo isAuthenticated={false} info="there are the details" />, document.getElementById('app'));