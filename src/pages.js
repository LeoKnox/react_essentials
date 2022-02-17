import React from "react";
import {Link} from "react-router-dom";

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

export function Study() {
    return (
        <div>
            <h1>[Study Page]</h1>
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
    return (
        <div>
            <h1>This is a 404 error -- Not found!</h1>
        </div>
    )
}