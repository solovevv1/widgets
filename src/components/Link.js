import React from 'react'

const Link = ({ className, href, children }) => {
    const onClick = (e) => {
        if (e.metaKey || e.ctrlKey) { // allows to open a link on a new tab
            return; // in this case return happens right away! before the code down bellow
        }
        e.preventDefault(); // to prevent default browser loading (which causes the full page reloading)
        window.history.pushState({}, '', href); // a way how to update an url part 

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent); // connects to the Route component

    };

    return (
        <a onClick={onClick} className={className} href={href}>{children}</a>
    )
}

export default Link;