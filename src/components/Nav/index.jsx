import cl from './Nav.module.css'

function Nav(props) {
    return (
        
        <div className="container">
        <nav className={cl.nav}>
            <ul>
                <li>Каталог домов <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
<path d="M4.5 6L0.602886 -2.19575e-07L8.39711 -9.00968e-07L4.5 6Z" fill="white"/>
</svg></li>
                <li>Услуги <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
<path d="M4.5 6L0.602886 -2.19575e-07L8.39711 -9.00968e-07L4.5 6Z" fill="white"/>
</svg></li>
                <li>О нас <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
<path d="M4.5 6L0.602886 -2.19575e-07L8.39711 -9.00968e-07L4.5 6Z" fill="white"/>
</svg></li>
                <li>Контакты <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
<path d="M4.5 6L0.602886 -2.19575e-07L8.39711 -9.00968e-07L4.5 6Z" fill="white"/>
</svg></li>
                <li>Блог <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
<path d="M4.5 6L0.602886 -2.19575e-07L8.39711 -9.00968e-07L4.5 6Z" fill="white"/>
</svg></li>
            </ul>
        </nav>
        </div>
        
    );
}

export default Nav;