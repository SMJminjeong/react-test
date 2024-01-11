import logoTest from './logoTest.svg';
import './LogoTest.css';
function Profile(){
    return (
        <img src={logoTest} className="logoTest" alt="logoTest"/>
    );
}

export default function Gallery(){
    return (
        <section>
            <h1>Test about img</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}