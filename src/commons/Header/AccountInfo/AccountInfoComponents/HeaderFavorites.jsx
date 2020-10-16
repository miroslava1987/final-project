import React from "react";

import {Link} from "react-router-dom";
import {ROUTES} from "../../../../pages/navigation/routes";
import {Item} from "../StyledAccountInfo";
import {icon} from "../icons";

export const HeaderFavorites = () => {
    return (
        <Link to={ROUTES.FAVORITES}>
            <Item>
                {icon.heart}
            </Item>
        </Link>

    )
};


