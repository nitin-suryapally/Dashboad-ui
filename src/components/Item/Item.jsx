import React from 'react'
import { Link } from 'react-router-dom'
import { MenuItem } from 'react-pro-sidebar'
import { Typography } from '@mui/material'


const Item = ({ title, to, icon, selected, setSelected }) => {

    return (
        <MenuItem
            active = {selected === title}
            style={{
                color:" white",
                fontSize : "20px"
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography fontSize= "20px">{title}</Typography>
            <Link to={to} />
        </MenuItem>
    )
}

export default Item
