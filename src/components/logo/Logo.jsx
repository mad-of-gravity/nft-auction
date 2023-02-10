import { useEffect, useState } from 'react';

export default function Logo({type="default"}) {
    const [path, setPath] = useState();
    const paths = {
        default: "images/logo.svg",
        muted: "images/logo-muted.svg",
    }

    useEffect(() => {
        //If type prop is different from default and muted return default
        let currentPath = type === "muted" ? paths.muted : paths.default;
        setPath(currentPath);
    }, [path]);

    return (
        <img src={path} alt="logo"/>
    );
}