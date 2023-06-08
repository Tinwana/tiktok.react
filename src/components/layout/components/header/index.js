import styles from './header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function Header(){
    

    return(
        <>
            <header className={cx('wrapper')} >
                <div className={cx("content")}>
                    <h2>header</h2>
                </div>
            </header>
        </>
    )
}