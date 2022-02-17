import React from "react";
import {Link, useLocation, Outlet} from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>[Main Page]</h1>
            <nav>
                <Link to="Study">Study</Link>
                <Link to="Quiz">Quiz</Link>
            </nav>
        </div>
    );
}

export function ListKanji() {
    return (
        <div>
            <h2>List of Kanji</h2>
        </div>
    );
}

export function SingleKanji() {
    return (
        <div>
            <h2>Single Kanji</h2>
        </div>
    );
}

export function Study() {
    return (
        <div>
            <h1>[Study Page]</h1>
            <Outlet />
        </div>
    );
}

export function Quiz() {
    return (
        <div>
            <h1>[Quiz Page]</h1>
        </div>
    );
}

export function Error404() {
    let location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>This is a 404 error -- {location.pathname} Not found!</h1>
        </div>
    )
}