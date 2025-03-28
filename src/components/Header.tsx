import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
    return (
        <header className="mb-6 shadow dark:bg-gray-800 bg-white md:mb-12">
            <div className="px-6 md:px-16 mx-auto container">
                <div className="flex items-center justify-between h-20">
                    <Logo />
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    )
}

export default Header
