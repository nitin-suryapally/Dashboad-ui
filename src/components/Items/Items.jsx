import React from 'react'
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';
import { SubMenu , MenuItem } from 'react-pro-sidebar';

const Items = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette);
    return (

        <SubMenu style={{ color: "white", fontSize: "20px" }} onClick={() => setSelected(title)} icon={icon} title={title}  >
            <MenuItem>Order 1</MenuItem>
            <MenuItem>Order 2</MenuItem>
            {/* <Link to = {to} /> */}
        </SubMenu>

    )
}


export default Items
