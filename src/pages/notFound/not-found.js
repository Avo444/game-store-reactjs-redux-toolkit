import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './not-found.css';

export default function NotFound() {
    useEffect(() => {
        document.title = 'Not Found | Game Shop';
    });
    return (
        <section className='not-found w-100 d-flex justify-content-center align-items-center flex-column'>
            <h1>This Page Is Not Found</h1>
            <Link to="/" className='btn btn-primary'>Go to Home Page</Link>
        </section>
    );
}