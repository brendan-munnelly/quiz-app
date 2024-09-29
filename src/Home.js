import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function App() {
    return (
        <>
        <Header />
        <main>
        <section className="home-section">
            <h2><b>So you think you know ReactJS?</b> Take the 10 quizzes below to test your knowledge.</h2>
            <div className="two-cols">
            <div>
<<<<<<< HEAD
            <p><b>1</b> - &nbsp;Web Browsers: <Link to="/quiz-questions/1">Start</Link> </p>
            <p><b>2</b> - &nbsp;GitHub Pages: <Link to="/quiz-questions/2">Start</Link> </p>
            <p><b>3</b> - &nbsp;VS Code: <Link to="/quiz-questions/3">Start</Link> </p>
            <p><b>4</b> - &nbsp;Folders and Files: <Link to="/quiz-questions/4">Start</Link> </p>
            <p><b>5</b> - &nbsp;Working with HTML: <Link to="/quiz-questions/5">Start</Link> </p>
            </div>
            <div>
            <p><b>6</b> - &nbsp;Debugging HTML: <Link to="/quiz-questions/6">Start</Link> </p>
            <p><b>7</b> - &nbsp;SEO and Web Pages: <Link to="/quiz-questions/7">Start</Link> </p>
            <p><b>8</b> - &nbsp;Container Elements: <Link to="/quiz-questions/8">Start</Link> </p>
            <p><b>9</b> - &nbsp;Working with CSS: <Link to="/quiz-questions/9">Start</Link> </p>
            <p><b>10</b> - &nbsp;Negative Spacing: <Link to="/quiz-questions/10">Start</Link> </p>
=======
            <p><b>1</b> - &nbsp;Functional Components and Props: <Link to="/quiz-questions/1">Start</Link> </p>
            <p><b>2</b> - &nbsp;Quiz topic name: <Link to="/quiz-questions/2">Start</Link> </p>
            <p><b>3</b> - &nbsp;Quiz topic name: <Link to="/quiz-questions/1">Start</Link> </p>
            <p><b>4</b> - &nbsp;Quiz topic name: <Link to="/quiz-questions/2">Start</Link> </p>
            <p><b>5</b> - &nbsp;Quiz topic name: <Link to="/quiz-questions/1">Start</Link> </p>
            </div>
            <div>
            <p><b>6</b> - &nbsp;Quiz topic name: <Link to="/quiz-questions/2">Start</Link> </p>
            <p><b>7</b> - &nbsp;Quiz topic name: <Link to="/quiz-questions/1">Start</Link> </p>
            <p><b>8</b> - &nbsp;Quiz topic name: <Link to="/quiz-questions/2">Start</Link> </p>
            <p><b>9</b> - &nbsp;Quiz topic name: <Link to="/quiz-questions/2">Start</Link> </p>
            <p><b>10</b> - &nbsp;Quiz topic name: <Link to="/quiz-questions/2">Start</Link> </p>
>>>>>>> d2b777d2af4b6cdad4cf3099bb9bbdbd9b6a0113
            </div>
            </div>

        </section>
        </main>
        <Footer />
        </>
    );
}   

<<<<<<< HEAD
export default App;

/* 
I would like to generate a 10 multiple choice question quiz based on the content below:

**** 
*/
=======
export default App;
>>>>>>> d2b777d2af4b6cdad4cf3099bb9bbdbd9b6a0113
