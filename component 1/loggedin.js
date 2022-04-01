import React from "react";

const useIsLoggedIn = () => true;

const LoggedIn = () => {
    const isLoggedIn = useIsLoggedIn();
    return (
        <div>
            {isLoggedIn && (
                <div className="user-profile">
                    <div className="user-profile"></div>
                </div>
            )}
            <button>{isLoggedIn ? "Login" : "Logout"}</button>
        </div>
    );
};

export defult LoggedIn;