import {useState} from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {IconButton} from "@mui/material";
import {Link} from "react-router-dom";
import css from '../styles/drawer.module.css'

export default function TemporaryDrawer() {
   const [open, setOpen] = useState(false);
    return (
        <div>
                    <IconButton onClick={()=>setOpen(true)}>
                        <MenuRoundedIcon className={css.link}/>
                    </IconButton>
                    <Drawer
                        anchor={"right"}
                        open={open}
                        onClose={()=>setOpen(false)}
                    >
                        <div className={css.drawer_div}>
                            <Link to="../">
                                <p className={css.link}>Home</p>
                            </Link>
                            <Link to="/menu">
                                <p className={css.link}>Menu</p>
                            </Link>
                            <Link to="/contact">
                                <p className={css.link}>Contact</p>
                            </Link>
                        </div>
                    </Drawer>
        </div>
    );
}