import logo from "../../assets/img/logo.svg"
import  icon3D from "../../assets/img/3d.svg"
import classes from './Header.module.css'
import CallButton from "../CallButton";

function Header(props) {
    return (
      <header>
        <div className="container">
        <div className={classes.header}>
          <img src={logo} alt="" />
          <p className={classes.work}>Пн-Сб: c 10:00 до 20:00<br/>
            Выходной: воскресенье</p>
          <div className={classes.action}>
                <img src={icon3D} alt="" />
                <p>Заказать <span>3D</span>-макет дома</p>
          </div>
          <div className={classes.contacts}>
            <svg className={classes.phone} xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
<path d="M19.4755 14.7089L16.6786 11.9119C15.6797 10.913 13.9816 11.3126 13.582 12.6112C13.2823 13.5102 12.2834 14.0097 11.3844 13.8099C9.38661 13.3104 6.68957 10.7133 6.19012 8.61555C5.89045 7.7165 6.48979 6.71759 7.3888 6.41796C8.68738 6.0184 9.08694 4.32026 8.08804 3.32136L5.2911 0.524425C4.49198 -0.174808 3.29329 -0.174808 2.59406 0.524425L0.696143 2.42234C-1.20177 4.42015 0.895924 9.71435 5.59077 14.4092C10.2856 19.104 15.5798 21.3017 17.5776 19.3038L19.4755 17.4059C20.1748 16.6068 20.1748 15.4081 19.4755 14.7089Z" fill="#319F1C"/>
</svg>
            <div>
                <a className={classes.number} href="">+7 (915) 168-55-50</a>
                <div className={classes.messengers}>
                    <a href="">
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4838 22.7924C10.6614 22.7924 8.86591 22.3033 7.29818 21.3855C7.13069 21.2917 6.93639 21.2381 6.7488 21.2381C6.64831 21.2381 6.55451 21.2515 6.46072 21.2783L3.04386 22.2162L4.23641 19.5966C4.39721 19.2349 4.35701 18.8262 4.12252 18.5046C2.85627 16.7426 2.1796 14.659 2.1796 12.4883C2.1796 6.8069 6.8024 2.1841 12.4838 2.1841C18.1651 2.1841 22.7879 6.8069 22.7879 12.4883C22.7879 18.1696 18.1651 22.7924 12.4838 22.7924ZM12.4838 0C5.60315 0 0.00219823 5.60095 0.00219823 12.4883C0.00219823 14.9068 0.685568 17.2316 1.99201 19.255L0.0959941 23.4289C-0.0781982 23.8175 -0.0112012 24.2663 0.263487 24.5879C0.471178 24.8358 0.779364 24.9698 1.08755 24.9698C1.18805 24.9698 1.28184 24.9564 1.38234 24.9296L6.60141 23.4959C8.41033 24.4606 10.4336 24.9698 12.4838 24.9698C19.371 24.9698 24.972 19.3689 24.972 12.4883C24.972 5.60095 19.371 0 12.4838 0Z" fill="#319F1C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.2879 14.3575C16.7653 14.0426 16.0819 13.6942 15.4656 13.9488C14.9966 14.1364 14.6951 14.88 14.3869 15.2552C14.2261 15.4495 14.0385 15.483 13.7973 15.3825C12.0286 14.679 10.6686 13.4932 9.69041 11.8585C9.52292 11.6106 9.54971 11.4096 9.75071 11.1751C10.0455 10.8267 10.4207 10.4314 10.5011 9.96246C10.5815 9.49348 10.3604 8.9441 10.1661 8.52202C9.9182 7.99274 9.63681 7.22898 9.10753 6.92749C8.61176 6.6528 7.96858 6.8069 7.5264 7.16198C6.76934 7.77835 6.40755 8.74311 6.42095 9.70117C6.42095 9.96916 6.45445 10.2371 6.51475 10.5051C6.66884 11.1349 6.96363 11.7245 7.29191 12.2806C7.5398 12.7026 7.80779 13.1113 8.09588 13.5066C9.04724 14.7996 10.2264 15.9185 11.5931 16.756C12.2765 17.1713 13.0135 17.5398 13.7705 17.7877C14.6281 18.0758 15.3852 18.3639 16.3097 18.1897C17.2745 18.0088 18.2258 17.4125 18.6144 16.4813C18.7283 16.2066 18.7819 15.8984 18.7149 15.6036C18.5876 15.0073 17.7703 14.6456 17.2879 14.3575Z" fill="#319F1C"/>
</svg></a>
                    <a href="">
<svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.38495 8.64079L4.16757 9.10532L3.76711 9.25749C3.35063 9.39365 2.94217 9.58587 2.52569 9.73804C1.99709 9.92225 0.971924 10.2907 0.971924 10.9714C0.971924 11.492 1.50854 11.5881 1.88496 11.7003L7.179 13.3261C8.10806 13.6064 7.85977 13.6785 8.34833 13.3902C9.22933 12.8536 10.0863 12.2689 10.9673 11.7403L13.2659 10.2987C13.4982 10.1545 13.6904 10.0184 13.9307 9.87419L22.124 4.71631C22.3403 4.58817 22.5806 4.40396 22.8449 4.41998C23.4856 4.45201 22.997 4.94858 22.7568 5.1408C22.4284 5.4051 22.116 5.72547 21.8037 5.99778L19.3929 8.2083L19.3769 8.22431L17.5188 9.93026C17.1584 10.2987 16.4616 10.8433 16.0851 11.2277L15.8529 11.452L14.4032 12.7655C14.0508 13.1179 13.5302 13.5264 13.2179 13.8467L12.9776 14.071L12.2728 14.7197C11.7602 15.2403 11.4879 15.1842 11.4959 15.801C11.4959 16.1614 11.3197 17.8993 11.2877 18.3158C11.2156 19.1808 11.1916 19.9977 11.1035 20.8627C11.0714 21.135 11.0394 21.3913 11.0394 21.7117C11.7602 21.6877 12.3529 21.071 12.8334 20.5984C12.9856 20.4382 13.1378 20.27 13.306 20.1259L13.4341 20.0138L14.4273 19.0446L14.4433 19.0286C14.6916 18.8044 15.036 18.4039 15.2682 18.2437L16.1572 18.9005C16.6778 19.325 17.7591 20.0778 18.3437 20.5183L21.3712 22.7689C21.6034 22.9291 22.14 23.1453 22.5085 23.1453C22.7648 23.1453 22.957 23.0252 23.1092 22.905C23.2613 22.7769 23.3654 22.5927 23.4535 22.4085C23.6858 21.944 24.2545 18.9806 24.3746 18.3639C24.3986 18.2437 24.4387 18.1236 24.4547 18.0275L26.7053 7.43942C26.8734 6.76665 26.9615 6.06185 27.1458 5.36505L27.2899 4.70831C27.4101 4.03554 27.8265 2.47376 27.8265 1.95317C27.8265 1.25637 27.4741 0.519531 26.7053 0.519531C26.1446 0.519531 24.767 1.17628 24.1583 1.40054L23.7499 1.5447L22.5085 2.02525L22.108 2.17742L14.7636 5.01265L14.3632 5.17284L12.7293 5.80556C12.457 5.92569 12.1767 5.99778 11.9124 6.1099L7.82774 7.6877L7.42728 7.84788C6.76252 8.13621 6.07374 8.37649 5.38495 8.64079Z" fill="#319F1C"/>
</svg>
</a>
                    <a href="">
<svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.54586 20.2042C5.02154 20.4588 6.40168 20.9948 6.46868 21.2427L6.48878 26.2139C6.99125 26.1603 7.69472 25.1017 7.99621 24.7667C11.748 20.5392 10.1133 22.2008 15.1314 21.6715C16.4445 21.5308 17.6505 21.3767 18.9368 20.9948C20.384 20.566 21.8378 19.8291 22.615 18.7504C24.8996 15.5613 24.7857 10.1078 24.0353 6.28225C23.5797 3.94405 22.2867 2.32272 20.0892 1.32447C17.5835 0.178818 12.753 -0.243264 9.67784 0.185518C6.75006 0.5942 3.44041 1.60585 2.01337 4.38623C0.747128 6.87182 0.579635 11.6554 1.10891 14.7775C1.4975 17.0621 2.54265 19.1122 4.54586 20.2042ZM8.98107 14.1879C7.40664 12.4996 5.859 10.1547 5.01484 7.87678C4.39177 6.19515 5.24263 4.64752 7.07165 4.20534C7.73492 4.04455 8.12351 4.37953 8.49199 4.75472C8.82027 5.0897 9.15526 5.47829 9.43665 5.87357C9.71804 6.26215 10.0262 6.71103 10.2406 7.12641C11.1518 8.88174 9.78503 8.82144 9.26915 9.6589C8.55899 10.818 10.455 12.9485 11.1853 13.5648C11.7011 13.9936 13.1818 15.0455 13.9924 14.7842C14.448 14.6301 14.6758 14.0606 15.0376 13.7591C16.0359 12.9217 17.1413 13.9333 17.8716 14.4291C18.2937 14.7239 18.6152 14.9785 19.0239 15.3001C19.4326 15.6283 19.8212 16.0035 19.7743 16.5864C19.6872 17.6383 17.9453 19.5812 16.3239 19.0988C15.4999 18.8509 14.2872 18.2077 13.5637 17.7722C11.7748 16.7137 10.3009 15.5881 8.98107 14.1879ZM12.9808 6.53684C12.5922 6.40284 12.6257 5.87357 12.9808 5.77307C13.4565 5.63238 14.7026 6.04776 15.0577 6.21525C16.1967 6.77133 17.1413 7.68249 17.5567 8.90183C17.684 9.28372 18.0592 10.8782 17.5299 11.0256C17.0073 11.1663 17.0207 10.6974 16.9805 10.3222C16.88 9.39091 16.5115 8.26536 15.7947 7.63559C14.7696 6.71773 13.4364 6.69763 12.9808 6.53684ZM13.3828 8.29886C13.2086 8.17827 13.2421 7.87678 13.3627 7.73609C13.6642 7.3944 14.8768 7.60209 15.6272 8.68074C15.9957 9.20332 16.4914 10.5902 15.4396 10.4428C15.0175 9.90009 15.3726 9.18992 14.4346 8.64725C14.113 8.45965 13.5302 8.40606 13.3828 8.29886ZM12.1835 4.57382C12.0629 4.39293 12.1701 4.09145 12.3845 3.99095C12.6324 3.85696 13.8183 4.03785 14.1063 4.10485C16.4445 4.62072 18.354 6.35595 19.2182 8.60035C19.3924 9.04923 20.0088 11.508 19.4125 11.7224C18.7224 11.9703 18.8363 10.9519 18.7693 10.5098C18.6688 9.91349 18.5683 9.50481 18.4009 8.94873C17.5835 6.18175 15.5267 5.2438 12.9473 4.78152C12.7128 4.73462 12.3242 4.78152 12.1835 4.57382Z" fill="#319F1C"/>
</svg></a>
                </div>
            </div>
          </div>
        <CallButton colorBtn={'green__btn'}/>
        </div>
      </div>
      </header>
       
    );
}

export default Header;